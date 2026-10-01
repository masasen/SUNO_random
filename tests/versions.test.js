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

test("ヘッダーに V1〜V5 の切り替えボタンがあり、初回は V5", async () => {
  const { page, errors } = await openPage();
  const labels = await page.$$eval("#versionSwitch [data-ver]", (els) => els.map((e) => e.textContent.trim()));
  assert.deepEqual(labels, ["V1", "V2", "V3", "V4", "V5"]);
  assert.match(await page.textContent("#versionBadge"), /^V5/);
  assert.equal(await page.$$eval("#patternChips .chip", (els) => els.length), 10);
  assert.deepEqual(errors, []);
  await page.close();
});

const CASES = [
  { id: "v1", chips: 10, classical: true, analysis: false },
  { id: "v2", chips: 11, classical: true, analysis: false },
  { id: "v3", chips: 10, classical: true, analysis: true },
  { id: "v4", chips: 14, classical: true, analysis: true },
  { id: "v5", chips: 10, classical: true, analysis: false },
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

test("古文フラグメントの文面は V1〜V4 で共通、V5 は日本語で書かせる専用文面", async () => {
  const { page } = await openPage();
  const texts = [];
  for (const id of ["v1", "v2", "v3", "v4"]) {
    await useVersion(page, id);
    texts.push(await page.inputValue("#classicalText"));
  }
  assert.ok(texts[0].includes(CLASSICAL));
  assert.deepEqual(new Set(texts).size, 1);
  await useVersion(page, "v5");
  const v5 = await page.inputValue("#classicalText");
  assert.ok(v5.includes(CLASSICAL));
  assert.notEqual(v5, texts[0]);
  assert.match(v5, /in Japanese/);
  await page.close();
});

// ── V5: makina ベースのコール＆レスポンス ──

const V5_GENRE = "makina";

async function v5Chips(page) {
  return page.$$eval("#patternChips .chip", (els) => els.map((e) => e.dataset.id));
}

async function generateWithPattern(page, id) {
  await page.click('#patternChips .chip[data-id="' + id + '"]');
  for (const key of ["bpm", "main", "core", "extra", "structure", "vocal", "ratio", "theme"]) {
    await page.click('[data-slot="' + key + '"] [data-dice]');
  }
  await page.click("#btnGenerate");
  return page.inputValue("#outputText");
}

test("V5 はジャンル名をメイン 1 か所にだけ書き、置換を既定で有効にする", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  assert.equal(await page.inputValue("#swapFrom"), V5_GENRE);
  assert.equal(await page.isChecked("#swapEnabled"), true);
  await page.uncheck("#swapEnabled");
  for (const id of await v5Chips(page)) {
    const out = await generateWithPattern(page, id);
    const hits = out.match(new RegExp(V5_GENRE, "gi")) || [];
    assert.equal(hits.length, 1, "パターン " + id + " のジャンル名は 1 回だけ: " + hits.length);
    assert.match(out, new RegExp("^Main genre: " + V5_GENRE + "\\.", "m"), "パターン " + id + " のメイン行");
  }
  await page.close();
});

test("V5 のジャンル置換で曲全体のジャンルが 1 語で入れ替わる", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  await page.check("#swapEnabled");
  await page.fill('[data-slot="genre"] [data-src]', "jersey club");
  for (const id of (await v5Chips(page)).slice(0, 3)) {
    const out = await generateWithPattern(page, id);
    assert.match(out, /^Main genre: jersey club\./m);
    assert.doesNotMatch(out, new RegExp(V5_GENRE, "i"));
  }
  await page.close();
});

test("V5 は全パターンでサビを最初のヴァースより前に置く", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (const id of await v5Chips(page)) {
    await page.click('#patternChips .chip[data-id="' + id + '"]');
    const blocks = (await slotSource(page, "structure")).split(/^---$/m);
    const s = blocks[0];
    const chorus = s.search(/^(Chorus|Hook)\b/m);
    const verse = s.search(/^Verse\b/m);
    assert.ok(chorus >= 0 && verse >= 0 && chorus < verse, "パターン " + id + " はサビが先");
  }
  await page.close();
});

const V5_RATIOS = [
  "Lyrics: English 70-80%, Japanese for the rest.",
  "Lyrics: Japanese 70-80%, English for the rest.",
  "Lyrics: Japanese and English mixed inside every bar, switching mid-line in the 2000s J-club rap-pop style.",
];

test("V5 の言語比率は英語メイン / 日本語メイン / 1 小節内ミックスの 3 パターンだけ", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  assert.deepEqual((await slotSource(page, "ratio")).split("\n").sort(), [...V5_RATIOS].sort());
  await page.close();
});

test("V5 の出力は歌詞の文言を引用符で指定せず、SUNO 側に任せる", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (const key of ["structure", "theme", "extra", "vocal"]) {
    assert.doesNotMatch(await slotSource(page, key), /["“”]/, key + " に引用符の歌詞指定がない");
  }
  const themes = (await slotSource(page, "theme")).split(/^---$/m);
  for (const t of themes) assert.doesNotMatch(t, /^Scenes:/m, "テーマは具体的な場面を列挙しない");
  await page.close();
});

test("V5 の出力はコール＆レスポンス入りで、作品名やアーティスト名を含まない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (let i = 0; i < 20; i++) {
    const out = await randomOutput(page);
    assert.ok(V5_RATIOS.some((r) => out.includes(r)), "言語比率は 3 パターンのどれか");
    assert.match(out, /call[- ]and[- ]response/i, "コール＆レスポンス");
    assert.doesNotMatch(out, /final fantasy|live a live|beatmania|m-flo|megalovania|megalomania/i, "固有名詞なし");
  }
  await page.close();
});

test("V5 のボーカルは 40 代女性の whisper-to-scream だけで、男性は出さない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const vocals = (await slotSource(page, "vocal")).split(/^---$/m).map((v) => v.trim());
  assert.equal(vocals.length, 10);
  for (const v of vocals) {
    assert.match(v, /^ONE female vocalist in her 40s only/, "40 代女性 1 人");
    assert.match(v, /whisper-to-scream/i);
    assert.doesNotMatch(v, /\b(rapper|duo|he|his)\b/i, "男性パートなし");
  }
  const avoid = await slotSource(page, "avoid");
  assert.match(avoid, /\bmale vocal/i);
  assert.doesNotMatch(avoid, /whisper|scream/i, "whisper / scream を Avoid で禁じない");
  for (const key of ["extra", "structure", "main"]) {
    assert.doesNotMatch(await slotSource(page, key), /\b(rapper|hype man|duo)\b/i, key + " に男性パートなし");
  }
  await page.close();
});

test("V5 の歌詞テーマ・Never use は V4 と別の専用候補", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  const v4Themes = (await slotSource(page, "theme")).split(/^---$/m).map((t) => t.trim());
  const v4Never = await slotSource(page, "never");
  await useVersion(page, "v5");
  const v5Themes = (await slotSource(page, "theme")).split(/^---$/m).map((t) => t.trim());
  assert.ok(v5Themes.length >= 10, "V5 のテーマ数: " + v5Themes.length);
  assert.equal(v5Themes.filter((t) => v4Themes.includes(t)).length, 0);
  assert.notEqual(await slotSource(page, "never"), v4Never);
  await page.close();
});

test("V5 の歌詞テーマは闇かわいい・ツンデレ・ヤンデレ系の 10 件で、ゲーム寄りの語を含まない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const themes = (await slotSource(page, "theme")).split(/^---$/m).map((t) => t.trim());
  assert.equal(themes.length, 10);
  const all = themes.join("\n");
  assert.match(all, /tsundere/i);
  assert.match(all, /yandere/i);
  assert.match(all, /yami-kawaii/i);
  assert.doesNotMatch(all, /\b(boss|combo|game|dungeon|gauge|stage|continue|press start|quest|level|player|chapter)\b/i);
  for (const t of themes) assert.match(t, /^Chorus: .+/m, "各テーマに Chorus 行");
  await page.close();
});
