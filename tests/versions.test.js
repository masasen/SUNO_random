import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const ROOT = path.resolve(import.meta.dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };
const CLASSICAL = "classical-Japanese-style fragments";

let server, browser, base;

before(async () => {
  server = http.createServer((req, res) => {
    const file = path.join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname).replace(/\/$/, "/index.html"));
    if (!file.startsWith(ROOT) || !fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((r) => server.listen(0, r));
  base = "http://127.0.0.1:" + server.address().port + "/";
  browser = await chromium.launch();
});

after(async () => {
  await browser?.close();
  server?.close();
});

async function openPage() {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(base);
  await page.waitForSelector("#patternChips .chip");
  return { page, errors };
}

async function useVersion(page, id) {
  await page.click('#versionSwitch [data-ver="' + id + '"]');
  await page.waitForFunction((v) => document.querySelector("#versionBadge").textContent.startsWith(v.toUpperCase()), id);
}

async function randomOutput(page) {
  await page.click("#btnRandomGen");
  return page.inputValue("#outputText");
}

test("ヘッダーに V1〜V4 の切り替えボタンがあり、初回は V4", async () => {
  const { page, errors } = await openPage();
  const labels = await page.$$eval("#versionSwitch [data-ver]", (els) => els.map((e) => e.textContent.trim()));
  assert.deepEqual(labels, ["V1", "V2", "V3", "V4"]);
  assert.match(await page.textContent("#versionBadge"), /^V4/);
  assert.equal(await page.$$eval("#patternChips .chip", (els) => els.length), 14);
  assert.deepEqual(errors, []);
  await page.close();
});

const CASES = [
  { id: "v1", chips: 10, classical: true, analysis: false },
  { id: "v2", chips: 11, classical: true, analysis: false },
  { id: "v3", chips: 10, classical: true, analysis: true },
  { id: "v4", chips: 14, classical: true, analysis: true },
];

for (const c of CASES) {
  test(c.id + " に切り替えると候補と表示が切り替わる", async () => {
    const { page, errors } = await openPage();
    await useVersion(page, c.id);
    assert.equal(await page.$$eval("#patternChips .chip", (els) => els.length), c.chips);
    assert.equal(await page.isVisible("#classicalCard"), c.classical);
    assert.equal(await page.isVisible("#analysisCard"), c.analysis);
    assert.match(await page.title(), new RegExp(c.id.toUpperCase() + "$"));
    for (let i = 0; i < 15; i++) {
      const out = await randomOutput(page);
      assert.ok(out.length > 0 && out.length <= 3000, c.id + " の出力が 3000 文字以内: " + out.length);
      assert.equal(out.includes(CLASSICAL), c.classical, c.id + " の古文フラグメント");
      assert.match(out, /Never use:\n/);
      assert.match(out, /Avoid:/);
      if (c.classical) {
        const themeToClassical = out.slice(out.indexOf("Theme:"), out.indexOf(CLASSICAL));
        assert.doesNotMatch(themeToClassical, /^Chorus:/m, "テーマの Chorus 行は古文指示の後ろ");
      }
    }
    assert.deepEqual(errors, []);
    await page.close();
  });
}

test("V4 は古文フラグメントを常に入れ、テーマの Chorus 行を古文の後ろへ回す", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  await page.click('#patternChips .chip[data-id="1"]');
  await page.click("#btnGenerate");
  const out = await page.inputValue("#outputText");
  const theme = out.indexOf("Theme: leaving the club at dawn");
  const classical = out.indexOf(CLASSICAL);
  const chorus = out.indexOf("Chorus: a short English phrase about leaving in glitter");
  assert.ok(theme >= 0 && theme < classical && classical < chorus, "テーマ本文 → 古文 → Chorus の順");
  await page.close();
});

test("版ごとに状態を保存し、戻ると復元される", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  const v4 = await randomOutput(page);
  await useVersion(page, "v1");
  const v1 = await randomOutput(page);
  assert.notEqual(v1, v4);
  await useVersion(page, "v4");
  assert.equal(await page.inputValue("#outputText"), v4);
  await page.reload();
  await page.waitForSelector("#patternChips .chip");
  assert.match(await page.textContent("#versionBadge"), /^V4/);
  assert.equal(await page.inputValue("#outputText"), v4);
  await useVersion(page, "v1");
  assert.equal(await page.inputValue("#outputText"), v1);
  await page.close();
});

async function slotSource(page, key) {
  return page.inputValue('[data-slot="' + key + '"] [data-src]');
}

test("歌詞テーマは全版で V4 と同じ候補を使う", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  const v4 = await slotSource(page, "theme");
  for (const id of ["v1", "v2", "v3"]) {
    await useVersion(page, id);
    assert.equal(await slotSource(page, "theme"), v4, id + " の歌詞テーマ候補");
  }
  await page.close();
});

test("Never use は V1 / V2 も V4 と共通、Avoid は V4 から hardstyle / dubstep を外した 1 行、V3 は専用の 1 行", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  const never = await slotSource(page, "never");
  const avoid = await slotSource(page, "avoid");
  assert.equal(never.split("\n").length, 1);
  assert.equal(avoid.split("\n").length, 1);
  const v12Avoid = avoid.replace("dubstep wobble, hardstyle kicks, ", "");
  assert.notEqual(v12Avoid, avoid);
  for (const id of ["v1", "v2"]) {
    await useVersion(page, id);
    assert.equal(await slotSource(page, "never"), never, id + " の Never use");
    assert.equal(await slotSource(page, "avoid"), v12Avoid, id + " の Avoid");
    const chips = await page.$$eval("#patternChips .chip", (els) => els.map((e) => e.dataset.id));
    for (const chip of chips) {
      await page.click('#patternChips .chip[data-id="' + chip + '"]');
      assert.equal(await slotSource(page, "never"), never, id + " のパターン " + chip + " 選択後も Never use は共通");
      assert.equal(await slotSource(page, "avoid"), v12Avoid, id + " のパターン " + chip + " 選択後も Avoid は 1 行");
    }
  }
  await useVersion(page, "v3");
  assert.equal((await slotSource(page, "never")).split("\n").length, 1);
  assert.notEqual(await slotSource(page, "never"), never);
  await page.close();
});

test("古文フラグメントの文面は全版で共通", async () => {
  const { page } = await openPage();
  const texts = [];
  for (const id of ["v1", "v2", "v3", "v4"]) {
    await useVersion(page, id);
    texts.push(await page.inputValue("#classicalText"));
  }
  assert.ok(texts[0].includes(CLASSICAL));
  assert.deepEqual(new Set(texts).size, 1);
  await page.close();
});
