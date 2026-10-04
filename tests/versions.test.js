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

test("ヘッダーに V1〜V8 の切り替えボタンがあり、初回は V8", async () => {
  const { page, errors } = await openPage();
  const labels = await page.$$eval("#versionSwitch [data-ver]", (els) => els.map((e) => e.textContent.trim()));
  assert.deepEqual(labels, ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8"]);
  assert.match(await page.textContent("#versionBadge"), /^V8/);
  assert.equal(await page.$$eval("#patternChips .chip", (els) => els.length), 201);
  assert.deepEqual(errors, []);
  await page.close();
});

const CASES = [
  { id: "v1", chips: 10, classical: true, analysis: false },
  { id: "v2", chips: 11, classical: true, analysis: false },
  { id: "v3", chips: 10, classical: true, analysis: true },
  { id: "v4", chips: 14, classical: true, analysis: true },
  { id: "v5", chips: 12, classical: false, analysis: false },
  { id: "v6", chips: 11, classical: true, analysis: false },
  { id: "v7", chips: 33, classical: true, analysis: false },
  { id: "v8", chips: 201, classical: true, analysis: false },
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
      if (c.lists === false) {
        assert.doesNotMatch(out, /Never use:|Avoid:/, c.id + " は Never use / Avoid を書かない");
      } else {
        assert.match(out, /Never use:\n/);
        assert.match(out, /Avoid:/);
      }
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

test("古文フラグメントの文面は V1〜V4 で共通、V5 は古文フラグメントを使わない", async () => {
  const { page } = await openPage();
  const texts = [];
  for (const id of ["v1", "v2", "v3", "v4"]) {
    await useVersion(page, id);
    texts.push(await page.inputValue("#classicalText"));
  }
  assert.ok(texts[0].includes(CLASSICAL));
  assert.deepEqual(new Set(texts).size, 1);
  await useVersion(page, "v5");
  assert.equal(await page.isVisible("#classicalCard"), false);
  await page.close();
});

// ── V5: Glitchcore hip-hop × sweet Lolita female vocals ──

const V5_BASE = "Genre: Glitchcore hip-hop. Sweet Lolita female vocals, fast rap over a fast, driving beat, bright compressed synth layers with rising tension and sudden drops, distorted bass and shimmering synths.";
const V5_STYLE = "Sweet Lolita female vocals, fast rap over a fast, driving beat, bright compressed synth layers with rising tension and sudden drops, distorted bass and shimmering synths.";
const V5_SWAPS = [
  "Glitchcore hip-hop", "jersey club", "hyperpop", "breakcore", "digicore", "nightcore", "drift phonk",
  "drum & bass", "trap", "rage", "jungle", "happy hardcore", "future bass", "hyper techno",
].map((g) => "makina x Anime Opening x Addictive tracks x " + g + " EDM MiX");
const V5_RATIOS = [
  "Lyrics: English 70-80%, Japanese for the rest.",
  "Lyrics: Japanese and English mixed inside every bar, random switching mid-line.",
  "Lyrics: Japanese 60-70%, short natural English 30-40%.",
  "Lyrics: Japanese 70-80%, short natural English 20-30%.",
  "Lyrics: Japanese 80-90%, short natural English 10-20%.",
  "Lyrics: Japanese 50-60%, short natural English 40-50%.",
  "Lyrics: Japanese 40-50%, natural English 50-60%.",
  "Lyrics: Japanese 90-100%, English only as short hook words.",
  "Lyrics: Japanese 65%, short natural English 35%, with one English hook in the chorus.",
  "Lyrics: Japanese 75%, short natural English 25%, English used only for short repeated calls.",
  "Lyrics: English-main 70% with Japanese 30%, natural code-switching within lines.",
];
const V5_NEVER = "ネオン, 午前二時, 既読, コンビニ, 愛してる, 通知, 深夜, べつに, ねえ, 噛んで, キャンディ, リボン, 離れないで, 行かないで, あなたがほしい, 離さない, stay with me, 消えないで, 砂糖, pixel, sugar-face.";

async function v5Chips(page) {
  return page.$$eval("#patternChips .chip", (els) => els.map((e) => e.dataset.id));
}

test("V5 は全ベースのメイン行を指定のスタイル文で始め、どの出力にも必ず入る", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const mains = (await slotSource(page, "main")).split("\n").filter(Boolean);
  assert.equal(mains.length, 12);
  for (const m of mains) assert.ok(m.startsWith(V5_BASE + " "), "メイン行の先頭: " + m.slice(0, 80));
  for (const id of await v5Chips(page)) {
    await page.click('#patternChips .chip[data-id="' + id + '"]');
    await page.click("#btnGenerate");
    assert.ok((await page.inputValue("#outputText")).includes(V5_STYLE), "パターン " + id);
  }
  for (let i = 0; i < 10; i++) {
    const out = await randomOutput(page);
    assert.ok(out.includes(V5_STYLE), "ランダム出力にスタイル文");
    assert.match(out, /^Genre: (Glitchcore hip-hop|makina x Anime Opening x Addictive tracks x .+ EDM MiX)\. /m, "ランダム出力のジャンル");
  }
  await page.close();
});

test("V5 の BPM は速いビート（140 以上）で、ベースごとに曲調が違う", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const bpms = (await slotSource(page, "bpm")).split("\n").filter(Boolean).map((l) => Number((l.match(/^BPM (\d+)/) || [])[1]));
  assert.ok(bpms.length >= 12);
  for (const b of bpms) assert.ok(b >= 140, "BPM " + b);
  const mains = (await slotSource(page, "main")).split("\n").filter(Boolean);
  assert.equal(new Set(mains).size, 12);
  await page.close();
});

test("V5 のボーカルは全ベースで sweet Lolita の女性 1 人の速いラップで、男性は出さない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const vocals = (await slotSource(page, "vocal")).split(/^---$/m).map((v) => v.trim());
  assert.equal(vocals.length, 12);
  for (const v of vocals) {
    assert.match(v, /^ONE sweet Lolita female vocalist only/);
    assert.match(v, /fast rap/i);
    assert.doesNotMatch(v, /\b(male rapper|he|his|duo|duet partner)\b/i);
  }
  assert.match(await slotSource(page, "avoid"), /\bmale vocal/i);
  await page.close();
});

test("V5 の言語比率の既定は指定の 11 行（重複は除く）", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  assert.deepEqual((await slotSource(page, "ratio")).split("\n").sort(), [...V5_RATIOS].sort());
  await page.close();
});

test("V5 は歌詞の文言を引用符で指定しない（歌詞テーマは指定どおりの既定値）", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (const key of ["main", "core", "extra", "structure", "vocal"]) {
    assert.doesNotMatch(await slotSource(page, key), /["“”]/, key + " に引用符の歌詞指定がない");
  }
  await page.close();
});

test("V5 の歌詞テーマの既定は指定の 58 件、Never use は指定の 1 行（重複と全角読点を整理）", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const themes = (await slotSource(page, "theme")).split(/^---$/m).map((t) => t.trim());
  assert.equal(themes.length, 58);
  assert.ok(themes[0].startsWith("Theme: a sugar-coated girl whose thoughts move faster than the screen can load."));
  assert.ok(themes[themes.length - 1].startsWith("Theme: a dawn highway drive after a long night of thinking."));
  assert.ok(themes.some((t) => t.includes("Chorus: \"switch on\" calls, carrying the day and taking her turn.")));
  assert.equal(await slotSource(page, "never"), V5_NEVER);
  await page.close();
});

test("V5 のジャンル置換は既定 ON で、候補は指定の 14 行。スタイル名だけが入れ替わる", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  assert.equal(await page.inputValue("#swapFrom"), "Glitchcore hip-hop");
  assert.equal(await page.isChecked("#swapEnabled"), true);
  assert.deepEqual((await slotSource(page, "genre")).split("\n").slice(1), V5_SWAPS);
  await page.fill('[data-slot="genre"] [data-src]', V5_SWAPS[1]);
  await page.click("#btnRandomGen");
  const out = await page.inputValue("#outputText");
  assert.match(out, /^Genre: makina x Anime Opening x Addictive tracks x jersey club EDM MiX\. Sweet Lolita female vocals/m);
  assert.doesNotMatch(out, /glitchcore hip-hop/i);
  await page.close();
});

test("V5 の Never use / Avoid は V4 と別の専用候補", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  const v4Never = await slotSource(page, "never");
  const v4Avoid = await slotSource(page, "avoid");
  await useVersion(page, "v5");
  assert.notEqual(await slotSource(page, "never"), v4Never);
  assert.notEqual(await slotSource(page, "avoid"), v4Avoid);
  await page.close();
});

// Structure の区画名を正規化する。「Label: ...」はラベル、文だけの行（End with ... など）は先頭の 1 語
function structureLabels(src) {
  const alias = { pre: "pre-chorus", post: "post-chorus", "build-up": "build" };
  const labels = new Set();
  for (const line of src.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || /^-{3,}$/.test(t) || /^structure:$/i.test(t)) continue;
    const m = t.match(/^([^:]{1,25}):/);
    let label = (m ? m[1] : t.split(/\s+/)[0]).toLowerCase().replace(/\(.*?\)/g, "").replace(/\s*\d+$/, "").trim();
    labels.add(alias[label] || label);
  }
  return labels;
}

// サウンド補足の段落の種類。V1〜V4 に出てくる書き方をすべて分類する
const EXTRA_KINDS = {
  samples: /^(samples:|use [a-z -]*(dj-style|glitch-edit) sampl)/i,
  keep: /^keep\b/i,
  secondary: /\b(is|remains) (secondary|contrast)\b/i,
  stage: /^stage \d:/i,
  phase: /^phase \d:/i,
  concept: /^main concept:/i,
  alternate: /^constantly alternate\b/i,
  notGenre: /^electronic, not\b/i,
  drops: /^drops?:/i,
  mix: /^mix:/i,
};

function extraKinds(src) {
  const kinds = new Set();
  for (const para of src.split(/^\s*-{3,}\s*$|\n\s*\n/m)) {
    const t = para.trim();
    for (const [k, re] of Object.entries(EXTRA_KINDS)) if (re.test(t)) kinds.add(k);
  }
  return kinds;
}

test("V5 の Structure は V1〜V4 に出てくる区画をすべて持つ", async () => {
  const { page } = await openPage();
  const others = new Set();
  for (const id of ["v1", "v2", "v3", "v4"]) {
    await useVersion(page, id);
    for (const l of structureLabels(await slotSource(page, "structure"))) others.add(l);
  }
  await useVersion(page, "v5");
  const v5 = structureLabels(await slotSource(page, "structure"));
  const missing = [...others].filter((l) => !v5.has(l));
  assert.deepEqual(missing, [], "V5 に無い区画: " + missing.join(", "));
  const blocks = (await slotSource(page, "structure")).split(/^---$/m);
  for (const b of blocks) {
    const ls = structureLabels(b);
    for (const need of ["chorus", "pre-chorus", "post-chorus", "bridge", "final chorus", "silence"]) assert.ok(ls.has(need), "全ベースに " + need);
  }
  await page.close();
});

test("V5 のサウンド補足は V1〜V4 に出てくる段落の種類をすべて持つ", async () => {
  const { page } = await openPage();
  const others = new Set();
  for (const id of ["v1", "v2", "v3", "v4"]) {
    await useVersion(page, id);
    for (const k of extraKinds(await slotSource(page, "extra"))) others.add(k);
  }
  assert.equal(others.size, Object.keys(EXTRA_KINDS).length, "V1〜V4 の段落の種類はすべて分類できている");
  await useVersion(page, "v5");
  const src = await slotSource(page, "extra");
  const v5 = extraKinds(src);
  const missing = [...others].filter((k) => !v5.has(k));
  assert.deepEqual(missing, [], "V5 に無い段落: " + missing.join(", "));
  for (const b of src.split(/^---$/m)) {
    const ks = extraKinds(b);
    for (const need of ["samples", "keep", "secondary", "drops", "mix"]) assert.ok(ks.has(need), "全ベースに " + need);
    assert.match(b, /^Glitch FX:/m, "Glitch FX は残す");
  }
  await page.close();
});

test("V5 は補足と Structure を増やしても全ベースが 3000 文字以内に収まり、スタイル文とグリッチ処理は削られない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (const id of await v5Chips(page)) {
    await page.click('#patternChips .chip[data-id="' + id + '"]');
    await page.click("#btnGenerate");
    const out = await page.inputValue("#outputText");
    assert.ok(out.length <= 3000, "パターン " + id + ": " + out.length);
    assert.ok(out.includes(V5_STYLE));
    assert.match(out, /^Glitch FX:/m);
    assert.match(out, /^Chorus\b/m);
  }
  await page.close();
});

// ── V5: 転調（区画タグの中に書く・1 曲 1 回・平易な言葉） ──

const V5_KEY_TAG = "[Final Chorus: key change up a step, energy rises, bigger voice]";
const V5_THEORY_WORDS = /relative major|minor third|half step|whole step|semitone|Key plan|Key change:|\[Key Change\]/i;

test("V5 の転調は BPM 行に短い指示、Structure は Final chorus 行の中だけ、補足の先頭で区画タグの中に書かせる", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (const line of (await slotSource(page, "bpm")).split("\n").filter(Boolean)) {
    assert.match(line, /^BPM \d+, [A-G][#b]? (major|minor), key change up a step into the final chorus\.$/, "BPM 行: " + line);
  }
  for (const b of (await slotSource(page, "structure")).split(/^---$/m)) {
    const lines = b.trim().split("\n");
    const hits = lines.filter((l) => /key change/i.test(l));
    assert.equal(hits.length, 1, "転調の指示は 1 曲 1 回");
    assert.match(hits[0], /^Final chorus: key change up a step, energy rises, bigger voice\b/, "Final chorus 行の中に書く: " + hits[0]);
  }
  for (const b of (await slotSource(page, "extra")).split(/^---$/m)) {
    const first = b.trim().split(/\n\s*\n/)[0];
    assert.match(first, /^Modulation: /, "補足の先頭は Modulation");
    assert.ok(first.includes(V5_KEY_TAG), "歌詞の区画タグの中に転調を書く例");
    assert.match(first, /no other key change/i, "1 曲 1 回");
  }
  for (const key of ["bpm", "structure", "extra"]) {
    const src = (await slotSource(page, key)).replace(V5_KEY_TAG, "");
    assert.doesNotMatch(src.replace(/\[Final Chorus: key change up a step, energy rises, bigger voice\]/g, ""), V5_THEORY_WORDS, key + " に理論用語や独立した転調タグがない");
  }
  await page.close();
});

test("V5 のランダム出力は 3000 文字以内に削られても転調の指示（BPM 行・Final chorus 行・Modulation）を必ず残す", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  for (let i = 0; i < 25; i++) {
    const out = await randomOutput(page);
    assert.ok(out.length <= 3000, "長さ " + out.length);
    assert.match(out, /^BPM .*key change up a step into the final chorus\.$/m);
    assert.match(out, /^Final chorus: key change up a step, energy rises, bigger voice/m);
    assert.ok(out.includes(V5_KEY_TAG), "区画タグの例が残る");
  }
  await page.close();
});

// ── V6: V2 をベースに、歌詞テーマ・サウンド補足・Structure・ボーカル指定・Lyrics 比率を 2 倍に増やした版 ──

async function candidates(page, key) {
  return page.$eval('[data-slot="' + key + '"]', (card) => {
    const v = card.querySelector("[data-src]").value.replace(/\r\n?/g, "\n");
    const parts = card.dataset.kind === "block" ? v.split(/^[ \t]*-{3,}[ \t]*$/m) : v.split("\n");
    return [...new Set(parts.map((s) => s.trim()).filter(Boolean))];
  });
}

test("V6 は V2 の 11 パターンをそのまま土台にする（BPM / メイン / Core sound はパターン選択で V2 と同じ）", async () => {
  const { page } = await openPage();
  await useVersion(page, "v2");
  const names = await page.$$eval("#patternChips .chip", (els) => els.map((e) => e.textContent));
  const v2 = [];
  for (let i = 1; i <= names.length; i++) {
    await page.click('#patternChips .chip[data-id="' + i + '"]');
    v2.push(await page.$$eval("[data-picked]", (els) => els.slice(0, 6).map((e) => e.textContent)));
  }
  await useVersion(page, "v6");
  assert.deepEqual(await page.$$eval("#patternChips .chip", (els) => els.map((e) => e.textContent)), names);
  for (let i = 1; i <= names.length; i++) {
    await page.click('#patternChips .chip[data-id="' + i + '"]');
    assert.deepEqual(await page.$$eval("[data-picked]", (els) => els.slice(0, 6).map((e) => e.textContent)), v2[i - 1], "パターン " + i);
  }
  await page.close();
});

test("V6 は歌詞テーマ・サウンド補足・Structure・ボーカル指定・Lyrics 比率が V2 の 2 倍で、V2 の候補を全部含む", async () => {
  const { page } = await openPage();
  const keys = ["theme", "extra", "structure", "vocal", "ratio"];
  await useVersion(page, "v2");
  const v2 = {};
  for (const k of keys) v2[k] = await candidates(page, k);
  await useVersion(page, "v6");
  for (const k of keys) {
    const v6 = await candidates(page, k);
    assert.equal(v6.length, v2[k].length * 2, k + " の候補数");
    for (const c of v2[k]) assert.ok(v6.includes(c), k + " に V2 の候補が残る: " + c.slice(0, 40));
  }
  await page.close();
});

test("V6 の追加 Structure は Structure: 見出しで始まり、追加ボーカルは女性 1 人に限る", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  for (const s of await candidates(page, "structure")) assert.match(s, /^Structure:\n/);
  for (const v of await candidates(page, "vocal")) {
    assert.match(v, /^ONE .*female vocalist only/);
    assert.match(v, /No .*male/);
  }
  for (const r of await candidates(page, "ratio")) assert.match(r, /^Lyrics: /);
  await page.close();
});

test("V6 の古文フラグメントは V4 と同じ文面で常に入り、Never use は V4、Avoid は V2 と同じ", async () => {
  const { page } = await openPage();
  await useVersion(page, "v4");
  const classical = await page.inputValue("#classicalText");
  const never = await slotSource(page, "never");
  await useVersion(page, "v2");
  const avoid = await slotSource(page, "avoid");
  await useVersion(page, "v6");
  assert.equal(await page.inputValue("#classicalText"), classical);
  assert.equal(await slotSource(page, "never"), never);
  assert.equal(await slotSource(page, "avoid"), avoid);
  await page.close();
});

test("V6 の BPM は V2 の候補に 125 付近と half-time（倍テンポ併記）の候補を足す", async () => {
  const { page } = await openPage();
  await useVersion(page, "v2");
  const v2 = await candidates(page, "bpm");
  await useVersion(page, "v6");
  const v6 = await candidates(page, "bpm");
  for (const b of v2) assert.ok(v6.includes(b), "V2 の BPM が残る: " + b);
  const near125 = v6.filter((b) => !/half-time/i.test(b) && /\b12[0-9]\b/.test(b));
  assert.ok(near125.length >= 4, "125 付近の候補: " + near125.length);
  const half = v6.filter((b) => /half-time/i.test(b));
  const v2Half = v2.filter((b) => /half-time/i.test(b));
  assert.ok(half.length >= v2Half.length + 5, "half-time の候補: " + half.length);
  for (const b of half) {
    const m = b.match(/BPM (\d+)(?:-(\d+))? half-time, double-time (\d+)(?:-(\d+))? energy\./);
    assert.ok(m, "half-time の書式: " + b);
    const lo = Number(m[1]), hi = Number(m[2] || m[1]), dlo = Number(m[3]), dhi = Number(m[4] || m[3]);
    assert.ok(dlo === lo * 2 && dhi === hi * 2, "倍テンポが 2 倍: " + b);
  }
  assert.ok(half.some((b) => /double-time 12\d/.test(b)), "倍テンポが 125 付近の half-time もある");
  await page.close();
});

test("V6 は全パターン × 全サウンド補足で 3000 文字以内に収まり、古文フラグメントは削られない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  const extras = await candidates(page, "extra");
  for (let i = 1; i <= 11; i++) {
    await page.click('#patternChips .chip[data-id="' + i + '"]');
    for (const e of extras) {
      await page.evaluate((v) => {
        const slot = document.querySelector('[data-slot="extra"] [data-src]');
        slot.value = v;
      }, e);
      await page.click('[data-slot="extra"] [data-dice]');
      await page.click("#btnGenerate");
      const out = await page.inputValue("#outputText");
      assert.ok(out.length <= 3000, "パターン " + i + " の長さ " + out.length);
      assert.ok(out.includes(CLASSICAL));
      assert.match(out, /^Structure:$/m);
    }
  }
  await page.close();
});

// ── V7: V6 に HyperTechno #06 / #07 の 28 曲の入力プロンプト（gpt_description_prompt）で不足していた要素を足した版 ──

const HT = JSON.parse(fs.readFileSync(path.join(ROOT, "tests/fixtures/hypertechno-prompts.json"), "utf8"));

function neverWords(s) {
  return [...new Set(s.replace(/\.(?=[,、]|[^\s\d])/g, ",").split(/[,、]/)
    .map((w) => w.trim().replace(/\.$/, "").replace(/^suger$/, "sugar")).filter(Boolean))].sort();
}

// 入力プロンプトを候補欄の単位に分ける
function parsePrompt(prompt) {
  const paras = prompt.replace(/\u3000/g, " ").replace(/\bAmine\b/g, "Anime").replace(/\r/g, "").trim()
    .split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const c = { extra: [], theme: [] };
  let afterStructure = false;
  for (const p of paras) {
    if (/^BPM\b/.test(p) && !c.bpm) c.bpm = p.replace(/\s+/g, " ");
    else if (!c.main) c.main = p;
    else if (/^Core sound:/.test(p)) c.core = p;
    else if (/^Structure:/.test(p)) { c.structure = p; afterStructure = true; }
    else if (/^ONE /.test(p)) c.vocal = p;
    else if (/^Lyrics:/.test(p)) c.ratio = p;
    else if (/^Occasionally generate/.test(p)) c.classical = p;
    else if (/^Never use:/.test(p)) c.never = neverWords(p.replace(/^Never use:\s*/, ""));
    else if (/^Avoid:/.test(p)) c.avoid = p;
    else if (afterStructure) c.theme.push(p);
    else c.extra.push(p);
  }
  c.extra = c.extra.join("\n\n");
  c.theme = c.theme.join("\n");
  c.base = /^(Genre|Main genre):/.test(c.main);
  return c;
}

const HT_PARSED = HT.map((h) => Object.assign({ title: h.title }, parsePrompt(h.prompt)));

test("V7 の fixture は 28 曲で、ベース 22 曲（Genre: / Main genre: 形式）と書き換え候補 6 曲（V2 形式）に分かれる", () => {
  assert.equal(HT_PARSED.length, 28);
  assert.equal(HT_PARSED.filter((c) => c.base).length, 22);
  for (const c of HT_PARSED) for (const k of ["bpm", "main", "core", "structure", "vocal", "ratio", "theme", "never", "avoid"]) assert.ok(c[k] && c[k].length, c.title + " の " + k);
});

test("V7 は V6 の候補を全部持つ（全スロット・古文・パターン）", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  const v6 = {};
  for (const k of SLOT_KEYS_ALL) v6[k] = await candidates(page, k);
  const v6Chips = await page.$$eval("#patternChips .chip", (els) => els.map((e) => e.textContent));
  const v6Classical = await page.inputValue("#classicalText");
  await useVersion(page, "v7");
  for (const k of SLOT_KEYS_ALL) {
    const v7 = await candidates(page, k);
    for (const c of v6[k]) assert.ok(v7.includes(c), k + " に V6 の候補が残る: " + c.slice(0, 50));
  }
  const v7Chips = await page.$$eval("#patternChips .chip", (els) => els.map((e) => e.textContent));
  assert.deepEqual(v7Chips.slice(0, 11), v6Chips);
  assert.ok(classicalBlocks(await page.inputValue("#classicalText")).includes(v6Classical.trim()));
  await page.close();
});

const SLOT_KEYS_ALL = ["bpm", "main", "genre", "core", "extra", "structure", "vocal", "ratio", "theme", "never", "avoid"];

function classicalBlocks(v) {
  return v.replace(/\r\n?/g, "\n").split(/^[ \t]*-{3,}[ \t]*$/m).map((s) => s.trim()).filter(Boolean);
}

async function pickedAll(page) {
  return page.$$eval("[data-slot]", (cards) => Object.fromEntries(cards.map((c) => [c.dataset.slot, c.querySelector("[data-picked]").textContent])));
}

test("V7 のベース 22 曲はパターンとして選べ、BPM〜Avoid が元の入力プロンプトどおりに入る", async () => {
  const { page } = await openPage();
  await useVersion(page, "v7");
  const chips = await page.$$eval("#patternChips .chip", (els) => els.map((e) => ({ id: e.dataset.id, name: e.textContent })));
  for (const c of HT_PARSED.filter((x) => x.base)) {
    const chip = chips.find((ch) => ch.name.replace(/^No\.\d+ /, "") === c.title);
    assert.ok(chip, "パターンがある: " + c.title);
    await page.click('#patternChips .chip[data-id="' + chip.id + '"]');
    const p = await pickedAll(page);
    for (const k of ["bpm", "main", "core", "extra", "structure", "vocal", "ratio", "theme", "avoid"]) assert.equal(p[k], c[k], c.title + " の " + k);
    assert.deepEqual(neverWords(p.never), c.never, c.title + " の never");
    await page.click("#btnGenerate");
    const out = await page.inputValue("#outputText");
    assert.ok(out.length <= 3000, c.title + " の長さ " + out.length);
    assert.ok(out.includes(CLASSICAL), c.title + " も古文フラグメントは常に入る");
    if (c.classical) assert.ok(out.includes(c.classical), c.title + " は自分の古文指示を使う");
    assert.ok(out.includes(c.main) && out.includes(c.structure.split("\n")[1]), c.title + " のメインと Structure は残る");
  }
  await page.close();
});

test("V7 の書き換え候補 6 曲は、各要素が候補欄（メインは候補またはジャンル置換、Core sound は Core 欄）に入る", async () => {
  const { page } = await openPage();
  await useVersion(page, "v7");
  const cand = {};
  for (const k of SLOT_KEYS_ALL) cand[k] = await candidates(page, k);
  const classical = classicalBlocks(await page.inputValue("#classicalText"));
  for (const c of HT_PARSED.filter((x) => !x.base)) {
    for (const k of ["bpm", "main", "core", "extra", "structure", "vocal", "ratio", "theme", "avoid"]) {
      assert.ok(cand[k].includes(c[k]), c.title + " の " + k + ": " + c[k].slice(0, 60));
    }
    assert.ok(cand.never.some((n) => neverWords(n).join("|") === c.never.join("|")), c.title + " の never");
    if (c.classical) assert.ok(classical.includes(c.classical), c.title + " の古文");
  }
  for (const w of ["big beat", "North East Makina x Anime opening", "hyperpop", "DJ-style x Addictive tracks x glitch"]) {
    assert.ok(cand.genre.includes(w), "ジャンル置換の候補: " + w);
  }
  await page.close();
});

test("V7 の古文フラグメントは複数の文面から 1 つだけ入り、ランダム生成でも常に入る", async () => {
  const { page } = await openPage();
  await useVersion(page, "v7");
  const blocks = classicalBlocks(await page.inputValue("#classicalText"));
  assert.ok(blocks.length >= 3, "古文の候補数 " + blocks.length);
  const seen = new Set();
  for (let i = 0; i < 25; i++) {
    const out = await randomOutput(page);
    const hits = blocks.filter((b) => out.includes(b));
    assert.equal(hits.length, 1, "古文は 1 つだけ");
    seen.add(hits[0]);
  }
  assert.ok(seen.size >= 2, "ランダムで文面が変わる");
  await page.close();
});

test("V7 のパターンを選んだあとの生成ボタンは、同じ古文フラグメントを保つ", async () => {
  const { page } = await openPage();
  await useVersion(page, "v7");
  await page.click('#patternChips .chip[data-id="1"]');
  await page.click("#btnGenerate");
  const a = await page.inputValue("#outputText");
  await page.click("#btnGenerate");
  assert.equal(await page.inputValue("#outputText"), a);
  await page.close();
});

// ── V8: V7 の全ベースの Core sound に V5 の音色を融合し、V5 の 12 ベース × 1 行目の置き換え 14 通りをベースに足した版 ──

const V8_GENRES = [
  "Glitchcore hip-hop", "jersey club", "hyperpop", "breakcore", "digicore", "nightcore", "drift phonk",
  "drum & bass", "trap", "rage", "jungle", "happy hardcore", "future bass", "hyper techno",
].map((g) => "makina x Anime Opening x Addictive tracks x " + g + " EDM MiX");

async function patternsOf(page, id) {
  return page.evaluate((v) => window.PROMPT_DATA[v].patterns, id);
}

function v5CoreElements(v5) {
  return [...new Set(v5.flatMap((p) => p.core.replace(/^Core sound:\s*/, "").replace(/\.$/, "").split(/,\s*/)))];
}

test("V8 の No.1〜No.33 は V7 のベースと同じで、Core sound だけが V7 の Core ＋ V5 の音色 2 つ以上になる", async () => {
  const { page } = await openPage();
  const v7 = await patternsOf(page, "v7");
  const v5 = await patternsOf(page, "v5");
  const v8 = await patternsOf(page, "v8");
  const elements = v5CoreElements(v5);
  assert.equal(v7.length, 33);
  for (let i = 0; i < 33; i++) {
    const a = v7[i], b = v8[i];
    assert.equal(b.name, a.name);
    for (const k of ["bpm", "main", "extra", "structure", "vocal", "ratio", "theme", "never", "avoid", "classical"]) assert.equal(b[k], a[k], a.name + " の " + k);
    assert.match(b.core, /^Core sound: /, a.name);
    assert.notEqual(b.core, a.core, a.name + " の Core は融合で変わる");
    if (a.core) assert.ok(b.core.startsWith(a.core.replace(/\.$/, "")), a.name + " は元の Core を残す");
    const added = elements.filter((e) => b.core.includes(e) && !(a.core || "").includes(e));
    assert.ok(added.length >= 2, a.name + " に V5 の音色が 2 つ以上: " + added.join(" / "));
  }
  await page.close();
});

test("V8 の No.34〜No.201 は V5 の 12 ベース × 1 行目の置き換え 14 通りで、ほかは V5 のまま", async () => {
  const { page } = await openPage();
  const v5 = await patternsOf(page, "v5");
  const v5Data = await page.evaluate(() => ({ never: window.PROMPT_DATA.v5.never, avoid: window.PROMPT_DATA.v5.avoid }));
  const v8 = await patternsOf(page, "v8");
  assert.equal(v8.length, 33 + 12 * 14);
  let i = 33;
  for (const base of v5) {
    for (const g of V8_GENRES) {
      const p = v8[i++];
      assert.equal(p.main, base.main.replace(/^Genre: Glitchcore hip-hop\./, "Genre: " + g + "."), p.name);
      assert.ok(p.name.includes(base.name) && p.name.includes(g.replace(/^makina x Anime Opening x Addictive tracks x | EDM MiX$/g, "")), p.name);
      for (const k of ["bpm", "core", "extra", "structure", "vocal", "ratio", "theme"]) assert.equal(p[k], base[k], p.name + " の " + k);
      assert.equal(p.never, v5Data.never[0], p.name + " の never");
      assert.equal(p.avoid, v5Data.avoid[0], p.name + " の avoid");
    }
  }
  await page.close();
});

test("V8 は Core 以外の候補欄で V7 の候補を全部持ち、Core 欄は融合した Core と V5 の Core を持つ", async () => {
  const { page } = await openPage();
  await useVersion(page, "v7");
  const v7 = {};
  for (const k of SLOT_KEYS_ALL) v7[k] = await candidates(page, k);
  await useVersion(page, "v8");
  for (const k of SLOT_KEYS_ALL.filter((x) => x !== "core")) {
    const v8 = await candidates(page, k);
    for (const c of v7[k]) assert.ok(v8.includes(c), k + " に V7 の候補が残る: " + c.slice(0, 50));
  }
  const core = await candidates(page, "core");
  const v8p = await patternsOf(page, "v8");
  for (const p of v8p) assert.ok(core.includes(p.core), "Core 欄にある: " + p.name);
  await page.close();
});

test("V8 は全ベースで 3000 文字以内に収まり、古文は常に入り、V5 由来のベースは転調の指示を残す", async () => {
  const { page } = await openPage();
  await useVersion(page, "v8");
  const ids = await page.$$eval("#patternChips .chip", (els) => els.map((e) => e.dataset.id));
  for (const id of ids) {
    await page.click('#patternChips .chip[data-id="' + id + '"]');
    await page.click("#btnGenerate");
    const out = await page.inputValue("#outputText");
    assert.ok(out.length <= 3000, "No." + id + " の長さ " + out.length);
    assert.ok(out.includes(CLASSICAL), "No." + id + " の古文");
    if (Number(id) > 33) {
      assert.match(out, /^BPM .*key change up a step/m, "No." + id + " の BPM 行");
      assert.match(out, /^Final chorus:.*key change/im, "No." + id + " の Final chorus 行");
      assert.match(out, /^Modulation:/m, "No." + id + " の Modulation");
      assert.match(out, /^Genre: makina x Anime Opening x Addictive tracks x /m, "No." + id + " のメイン");
    }
  }
  await page.close();
});
