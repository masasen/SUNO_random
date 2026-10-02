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

test("ヘッダーに V1〜V6 の切り替えボタンがあり、初回は V6", async () => {
  const { page, errors } = await openPage();
  const labels = await page.$$eval("#versionSwitch [data-ver]", (els) => els.map((e) => e.textContent.trim()));
  assert.deepEqual(labels, ["V1", "V2", "V3", "V4", "V5", "V6"]);
  assert.match(await page.textContent("#versionBadge"), /^V6/);
  assert.equal(await page.$$eval("#patternChips .chip", (els) => els.length), 10);
  assert.deepEqual(errors, []);
  await page.close();
});

const CASES = [
  { id: "v1", chips: 10, classical: true, analysis: false },
  { id: "v2", chips: 11, classical: true, analysis: false },
  { id: "v3", chips: 10, classical: true, analysis: true },
  { id: "v4", chips: 14, classical: true, analysis: true },
  { id: "v5", chips: 12, classical: false, analysis: false },
  { id: "v6", chips: 10, classical: false, analysis: false },
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

// ── V6: 感情の設計図（物語 × 1 つのメロディ × 静と爆発の落差 × 道具としてのジャンル） ──

async function v6Blocks(page, key, kind) {
  const src = await slotSource(page, key);
  return (kind === "block" ? src.split(/^---$/m) : src.split("\n")).map((t) => t.trim()).filter(Boolean);
}

test("V6 のメイン行はコンセプトカードで、モチーフとグルーヴを定義し、ジャンル名 makina を 1 回だけ書く", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  const mains = await v6Blocks(page, "main", "line");
  assert.equal(mains.length, 10);
  for (const m of mains) {
    assert.match(m, /^Concept: .+\. One hook, one groove\. The motif: .+?, chopped like a DJ sample\. Groove: [^.]*makina[^.]*\./, "コンセプトの構文: " + m.slice(0, 60));
    assert.equal((m.match(/makina/gi) || []).length, 1, "makina は 1 回: " + m.slice(0, 60));
    assert.doesNotMatch(m, /quiet world|loud world/i);
  }
  await page.close();
});

test("V6 は重低音のドコドコ・止め・DJ サンプリングを全ベースに入れ、楽器名は持たずモチーフとグルーヴを名前で指す", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  const motifs = (await v6Blocks(page, "main", "line")).map((m) => m.match(/The motif: (?:an? |the )?(.+?), chopped/)[1].toLowerCase());
  for (const key of ["core", "extra", "structure", "vocal"]) {
    const src = (await slotSource(page, key)).toLowerCase();
    for (const motif of motifs) assert.ok(!src.includes(motif), key + " にモチーフ楽器名「" + motif + "」がない");
    assert.doesNotMatch(src, /makina|quiet world|loud world/, key + " にジャンル名や旧構文がない");
  }
  for (const c of await v6Blocks(page, "core", "line")) {
    assert.match(c, /^Groove first: .+ The whole track rides this one groove\.$/, "グルーヴの仕掛け: " + c.slice(0, 60));
    assert.match(c, /kick/i);
    assert.match(c, /sub|bass/i);
  }
  for (const b of await v6Blocks(page, "extra", "block")) {
    assert.match(b, /^Stops: /m, "止め");
    assert.match(b, /^DJ samples: .+ Original, not copied\.$/m, "DJ サンプリング");
    assert.match(b, /^Mix: .*sub/m, "重低音のミックス");
  }
  for (const b of await v6Blocks(page, "structure", "block")) {
    assert.match(b, /kick roll/i, "ドコドコ（キックロール）");
    assert.match(b, /^Stop: /m, "止めの区画");
    assert.match(b, /^Drop\b/m);
    assert.match(b, /^Bridge: /m, "物語のどんでん返しを置く区画");
    assert.match(b, /^Final drop: key change up a step, energy rises/m);
    assert.match(b, /the motif/i);
    assert.match(b, /the groove/i);
  }
  await page.close();
});

test("V6 のボーカルは全ベースで大人の女性のハスキーボイスが主役で、男性は出さない", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  const vocals = await v6Blocks(page, "vocal", "block");
  assert.equal(vocals.length, 10);
  for (const v of vocals) {
    assert.match(v, /^One adult female vocalist with a husky/, "大人の女性・ハスキー: " + v.slice(0, 60));
    assert.match(v, /chopped|like an instrument/i, "声を楽器のように使う");
    assert.doesNotMatch(v, /\b(male rapper|he|his|duet partner)\b/i);
  }
  const avoid = await slotSource(page, "avoid");
  assert.match(avoid, /\bmale vocal/i);
  assert.match(avoid, /childish|overly cute/i, "子どもっぽい声を避ける");
  assert.match(avoid, /weak|thin kick/i, "弱いキックを避ける");
  assert.match(avoid, /long ambient breakdown/i, "長い静かな区間を避ける");
  await page.close();
});

test("V6 の歌詞テーマは物語の 1 場面とどんでん返しで、言葉は SUNO に任せる", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  const themes = await v6Blocks(page, "theme", "block");
  assert.ok(themes.length >= 10);
  for (const t of themes) {
    assert.match(t, /^Theme: /);
    assert.match(t, /^Twist: /m, "どんでん返し");
    assert.match(t, /Write every line in your own fresh words/);
  }
  for (const key of ["main", "core", "extra", "structure", "vocal", "theme"]) {
    assert.doesNotMatch(await slotSource(page, key), /["“”]/, key + " に引用符の歌詞指定がない");
  }
  await page.close();
});

test("V6 は言語比率と Never use に V5 の指定を使い、ジャンル置換は既定 OFF で Groove の makina を入れ替える", async () => {
  const { page } = await openPage();
  await useVersion(page, "v5");
  const ratio = await slotSource(page, "ratio");
  const never = await slotSource(page, "never");
  await useVersion(page, "v6");
  assert.deepEqual((await slotSource(page, "ratio")).split("\n").sort(), ratio.split("\n").sort());
  assert.equal(await slotSource(page, "never"), never);
  assert.equal(await page.inputValue("#swapFrom"), "makina");
  assert.equal(await page.isChecked("#swapEnabled"), false);
  await page.check("#swapEnabled");
  await page.fill('[data-slot="genre"] [data-src]', "hardstyle");
  await page.click("#btnRandomGen");
  const out = await page.inputValue("#outputText");
  assert.match(out, /Groove: [^.]*hardstyle/);
  assert.doesNotMatch(out, /makina/i);
  await page.close();
});

test("V6 のランダム出力は短く（2400 文字以内）削られず、コンセプト・グルーヴ・止め・DJ サンプル・構成・声・物語がそろう", async () => {
  const { page } = await openPage();
  await useVersion(page, "v6");
  for (let i = 0; i < 25; i++) {
    const out = await randomOutput(page);
    assert.ok(out.length <= 2400, "長さ " + out.length);
    assert.doesNotMatch((await page.textContent("#trimNote")) || "", /削りました/);
    for (const re of [/^BPM \d+/m, /^Concept: /m, /^Groove first: /m, /^Stops: /m, /^DJ samples: /m, /^Structure:/m, /^One adult female vocalist with a husky/m, /^Lyrics: /m, /^Theme: /m, /^Twist: /m, /^Never use:/m, /^Avoid: /m]) {
      assert.match(out, re);
    }
  }
  await page.close();
});

