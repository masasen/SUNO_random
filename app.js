// ── 定数 ──

const LIMIT = 3000;
const HISTORY_MAX = 20;
const PRESET_MAX = 12;
const NO_SWAP = "(置換しない)";
const NO_CORE = "(Core sound を入れない)";
const ACTIVE_VERSION_KEY = "suno_random_active_version";

// ── 版の定義 ──
// 候補データは prompt-data-v1〜v4.js が window.PROMPT_DATA へ登録する。ここは版ごとの画面文言と処理の違いだけを持つ。

// 歌詞テーマ・古文フラグメント・Never use / Avoid は V4 のデータを正本として全版で共通に使う
const SHARED_SOURCE = "v4";
const HINT_SLOT_NEVER = "ベースに関わらず必ず入る禁止語リスト（V1 / V2 / V4 共通・1 行、V3 は専用の 1 行）。行を増やすと候補としてランダム抽選されます。";
const HINT_SLOT_AVOID = "ベースに関わらず出力の最後に必ず付きます（1 行。V1 / V2 / V3 は各版のデータで専用に持つ）。行を増やすと候補としてランダム抽選されます。";
const HINT_THEME = "V4 の 14 曲の歌詞メタデータから起こしたテーマ 14 ＋ 追加テーマ（共通モチーフ・ボス戦・旧 V1〜V3 のテーマ）。全版共通です。<b><code>---</code> だけの行で区切って 1 テーマ</b>。テーマの中の改行や空行は同じテーマの続きとして扱われます。<code>Chorus:</code> の行だけは自動で古文指示の後ろへ回されます。";
const HINT_TRIM_SETS = "自動トリムは「サウンド補足のブロック → ボーカル指定の補足行 → Structure の中間行」の順に削って 3000 文字以内へ収めます。サウンド補足は念押し系（Keep …）→ 副次説明（Future Bass is secondary …）→ サンプリング指示の順に落とすので、Phase / Stage の記述は最後まで残ります。メイン・Core sound・Structure の骨格・テーマ・古文・Never use・Avoid は削られません。";
const HINT_TRIM_DJ = "自動トリムは「サウンド補足のブロック → ボーカル指定の補足行 → Structure の中間行」の順に削って 3000 文字以内へ収めます。サウンド補足は Mix → Drops の順に落とすので、DJ サンプリング指示は最後まで残ります。BPM・キー / メイン・Core sound・Structure の骨格・テーマ・古文・Never use・Avoid は削られません。";
const HINT_V12 = {
  pattern: "prompt.md の 10 パターン。選ぶと BPM / メイン / Core sound / 補足 / Structure / ボーカル の各候補欄が、そのパターンの内容で先頭に差し込まれます（既存の候補は残ります）。",
  bpm: "1 行 1 候補。生成時にランダムで 1 行選ばれます。",
  genre: "メイン 1 行目の中の語を、下の候補からランダムに選んだ 1 語で置き換えます。例: <code>Future Bass</code> → <code>punk</code>。他の段落はそのまま流用されるので、曲の空気だけが強制的に変わります。",
  core: "1 行 1 候補（長文 1 行）。<code>(Core sound を入れない)</code> の行が選ばれると、この段落ごと出力から外れます。No.5 / No.10 は Stage・Phase 記述がこの役割を兼ねるため、パターン選択時に自動でその行が入ります。",
  extra: "サンプリング指示 / 質感指示 / Future Bass の扱い / Stage・Phase 記述。<b><code>---</code> だけの行で区切って 1 候補</b>（候補の中は空行で段落を分けられます）。3000 文字を超えたときは、ここが末尾の段落から順に削られます。",
  theme: HINT_THEME,
  never: HINT_SLOT_NEVER,
  avoid: HINT_SLOT_AVOID,
  trim: HINT_TRIM_SETS,
  analysis: "",
};
const HINT_DJ = {
  bpm: "1 行 1 候補。生成時にランダムで 1 行選ばれます。解析値（BPM とキー）をそのまま入れてあるので、完全模倣ならベースと同じ行を固定してください。",
  core: "1 行 1 候補（長文 1 行）。キック・ベース・ハット・シンセの具体的な音作り。<code>(Core sound を入れない)</code> の行が選ばれると、この段落ごと出力から外れます。",
  extra: "DJ サンプリング / ドロップの作り / ミックス質感。<b><code>---</code> だけの行で区切って 1 候補</b>（候補の中は空行で段落を分けられます）。3000 文字を超えたときは Mix → Drops の順に段落が削られ、Samples は最後まで残ります。",
  theme: HINT_THEME,
  never: HINT_SLOT_NEVER,
  avoid: HINT_SLOT_AVOID,
  trim: HINT_TRIM_DJ,
};
const DROP_ORDER_SETS = [/^keep\b/i, /^future bass (is|remains)\b/i, /sampl(e|ing)/i];
// ドロップの作りが曲の芯なので、ミックス質感 → FX・トランジション → ドロップ、の順に落とす
const DROP_ORDER_DJ = [/^mix\b/i, /^fx\b/i, /^drops?\b/i, /^samples?\b/i];
// V5 はコール＆レスポンスが曲の芯なので最後まで残す
const DROP_ORDER_V5 = [/^mix\b/i, /^drops?\b/i, /^samples?\b/i, /^call\b/i];

const VERSIONS = [
  {
    id: "v1", badge: "V1 / SIMPLE MODE", bpmTitle: "BPM", swapFrom: "Future Bass", swapEnabled: true,
    extrasFirst: true, dropOrder: DROP_ORDER_SETS, hints: HINT_V12,
  },
  {
    id: "v2", badge: "V2 / SIMPLE MODE", bpmTitle: "BPM", swapFrom: "Future Bass", swapEnabled: true,
    extrasFirst: true, dropOrder: DROP_ORDER_SETS, hints: HINT_V12,
  },
  {
    id: "v3", badge: "V3 / STREET BASS × TRANCE BANGER", bpmTitle: "BPM・キー", swapFrom: "trance", swapEnabled: false,
    extrasFirst: false, dropOrder: DROP_ORDER_DJ,
    hints: Object.assign({}, HINT_DJ, {
      pattern: "全ベースの土台は StreetDanceEDM#07「Glass Cherry Maze」の MP3 メタデータ準拠（half-time phonk × street dance / makina / G minor / 語りラップのヴァース / 叫ばないベルト。BPM のみ実測 184）。その上に「TRANCE × EDM BANGER Vol.31」の 10 曲（Tr.01〜Tr.10）の個性を載せ、競合する指定は土台を優先しています。選ぶと BPM・キー / メイン / Core sound / 補足 / Structure / ボーカル / Lyrics 比率 / テーマ の各候補欄が、そのベースの内容で先頭に差し込まれます（既存の候補は残ります）。",
      genre: "メイン 1 行目の中の語を、下の候補からランダムに選んだ 1 語で置き換えます。例: <code>trance</code> → <code>hard trance</code>。完全模倣が目的なので既定は OFF です。崩したいときだけ有効にしてください。",
      analysis: "先頭は全ベースの土台「Glass Cherry Maze」（メタデータ準拠、参考に実測値）。続く 10 件は Vol.31（72:18、約 36:10 のセットが 2 周）前半 10 曲の解析値。いずれも librosa（BPM / キー / 帯域比 / ステレオ幅 / ピッチ推移）と Whisper（歌詞）で音源から直接測っています。",
    }),
  },
  {
    id: "v4", badge: "V4 / STREET DANCE EDM #07 × #08", bpmTitle: "BPM・キー", swapFrom: "street dance", swapEnabled: false,
    extrasFirst: false, dropOrder: DROP_ORDER_DJ,
    hints: Object.assign({}, HINT_DJ, {
      pattern: "StreetDanceEDM #08 / #07 の Remove フォルダにある MP3 14 曲を、1 曲 1 ベースにしています。BPM・キー・帯域バランス・音量の山谷・終わり方は音源の実測値を優先し、実測で取れない声質・楽器の具体・ムード・歌詞テーマは MP3 のメタデータ（元プロンプト・歌詞）で補っています。選ぶと BPM・キー / メイン / Core sound / 補足 / Structure / ボーカル / Lyrics 比率 / テーマ の各候補欄が、そのベースの内容で先頭に差し込まれます（既存の候補は残ります）。",
      genre: "メイン 1 行目の中の語を、下の候補からランダムに選んだ 1 語で置き換えます。例: <code>street dance</code> → <code>jersey club</code>。完全模倣が目的なので既定は OFF です。崩したいときだけ有効にしてください。",
      analysis: "先頭はデータ全体のまとめ。続く 14 件は各 MP3 の実測値（librosa: BPM / キー / 帯域比 / ステレオ幅 / H/P 比 / 2 秒窓の音量推移）と、それを補ったメタデータの要点です。",
    }),
  },
  {
    id: "v5", badge: "V5 / MAKINA CALL & RESPONSE", bpmTitle: "BPM・キー", swapFrom: "makina", swapEnabled: true,
    extrasFirst: false, dropOrder: DROP_ORDER_V5, ownLyrics: true,
    hints: Object.assign({}, HINT_DJ, {
      pattern: "makina を土台に、JRPG の戦闘曲・音ゲーのブレイクビーツ・2000 年代 J-club のラップ×歌・DJ スクラッチを掛け合わせた 10 ベース。どのベースもサビを最初のヴァースより前に置き、コール＆レスポンスを必ず入れています。SUNO が固有名詞を弾くため、作品名・アーティスト名は書かず音の特徴で指定しています。",
      genre: "ジャンル名はメイン 1 行目の <code>Main genre: makina.</code> の 1 か所だけにあり、他の段落は <code>the main genre</code> で指しています。この 1 語を下の候補からランダムに選んだ 1 語で置き換えると、曲全体がそのジャンルを土台に組み直されます。既定で ON です。",
      extra: "コール＆レスポンス / DJ サンプリング / ドロップの作り / ミックス質感。<b><code>---</code> だけの行で区切って 1 候補</b>（候補の中は空行で段落を分けられます）。3000 文字を超えたときは Mix → Drops → Samples の順に段落が削られ、Call & response は最後まで残ります。",
      theme: "V5 専用のテーマ 10 件。闇かわいい・ツンデレ・ヤンデレ・病み寄りの女の子を英語メインで描き、各 Chorus はコール＆レスポンス型です。<b><code>---</code> だけの行で区切って 1 テーマ</b>。<code>Chorus:</code> の行だけは自動で古文指示の後ろへ回されます。",
      trim: "自動トリムは「サウンド補足のブロック → ボーカル指定の補足行 → Structure の中間行」の順に削って 3000 文字以内へ収めます。サウンド補足は Mix → Drops → Samples の順に落とすので、Call & response は最後まで残ります。BPM・キー / メイン・Core sound・Structure の骨格・テーマ・古文・Never use・Avoid は削られません。",
      analysis: "",
    }),
  },
];

let version = null;
let data = null;

// 版のデータに V4 の共通データを重ねる。版が自前で持つ Never use / Avoid（V3 の両方、V1 / V2 の Avoid）はそちらを優先する。
// ownLyrics の版（V5）は歌詞テーマ・古文も自前のものだけを使う
function resolveData(id) {
  const own = window.PROMPT_DATA[id];
  if (VERSIONS.find((v) => v.id === id).ownLyrics) {
    return Object.assign({}, own, { themes: uniq(own.patterns.map((p) => p.theme).filter(Boolean).concat(own.themes)) });
  }
  const shared = window.PROMPT_DATA[SHARED_SOURCE];
  return Object.assign({}, own, {
    themes: uniq(shared.patterns.map((p) => p.theme).filter(Boolean).concat(shared.themes)),
    never: own.never || shared.never,
    avoid: own.avoid || shared.avoid,
    classical: shared.classical,
  });
}

function storeKey() {
  return "suno_simple_builder_" + version.id;
}

// データ内容から版を自動計算する。データファイルだけの更新でも保存済み候補を切り替える。
function promptDataVersion() {
  const content = JSON.stringify(data);
  let hash = 2166136261;
  for (let i = 0; i < content.length; i++) hash = Math.imul(hash ^ content.charCodeAt(i), 16777619);
  return "data-" + (hash >>> 0).toString(16).padStart(8, "0");
}

// ── ユーティリティ ──

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

function uniq(list) {
  const seen = new Set();
  return list.filter((v) => {
    const k = v.trim();
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function pickOne(list) {
  if (!list.length) return "";
  return list[Math.floor(Math.random() * list.length)];
}

function toLines(text) {
  return uniq(String(text || "").split(/\r?\n/).map((l) => l.trim()));
}

// ブロック種のスロットは "---" だけの行で候補を区切る。
// 候補そのものが空行を含む（サウンド補足の複数段落など）ため、空行では区切れない。
const BLOCK_SEP = "\n---\n";

function toBlocks(text) {
  return uniq(String(text || "").replace(/\r\n?/g, "\n").split(/^[ \t]*-{3,}[ \t]*$/m).map((b) => b.trim()));
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ── スロット定義 ──
// kind: "line" = 1 行 1 候補 / "block" = 空行区切りで 1 候補

const SLOT_KEYS = ["bpm", "main", "genre", "core", "extra", "structure", "vocal", "ratio", "theme", "never", "avoid"];

const slots = {};

function patternValues(key) {
  return data.patterns.map((p) => p[key]).filter(Boolean);
}

// パターン由来の候補と共通候補を合わせる。V1 / V2 は共通候補が先頭
function mergedValues(key, extras) {
  const own = patternValues(key);
  return uniq(version.extrasFirst ? extras.concat(own) : own.concat(extras));
}

function defaultSources() {
  return {
    bpm:       uniq(patternValues("bpm").concat(data.bpmExtra)).join("\n"),
    main:      uniq(patternValues("main")).join("\n"),
    genre:     [NO_SWAP].concat(data.genreSwaps).join("\n"),
    core:      uniq(patternValues("core")).join("\n"),
    extra:     uniq(patternValues("extra")).join(BLOCK_SEP),
    structure: uniq(patternValues("structure")).join(BLOCK_SEP),
    vocal:     uniq(patternValues("vocal")).join(BLOCK_SEP),
    ratio:     mergedValues("ratio", data.lyricsRatios).join("\n"),
    theme:     data.themes.join(BLOCK_SEP),
    never:     uniq(data.never).join("\n"),
    avoid:     uniq(data.avoid).join("\n"),
  };
}

function candidatesOf(key) {
  const slot = slots[key];
  return slot.kind === "block" ? toBlocks(slot.src.value) : toLines(slot.src.value);
}

function setPicked(key, value) {
  const slot = slots[key];
  slot.picked = value || "";
  slot.pickedEl.textContent = slot.picked || "未選択";
  slot.pickedEl.classList.toggle("empty", !slot.picked);
}

function rollSlot(key) {
  const list = candidatesOf(key);
  if (!list.length) { setPicked(key, ""); return ""; }
  // 候補が複数あるときは直前と同じものを避ける
  let value = pickOne(list);
  if (list.length > 1) {
    for (let i = 0; i < 6 && value === slots[key].picked; i++) value = pickOne(list);
  }
  setPicked(key, value);
  return value;
}

function ensurePicked(key) {
  const list = candidatesOf(key);
  if (!list.length) { setPicked(key, ""); return ""; }
  if (slots[key].picked && list.includes(slots[key].picked)) return slots[key].picked;
  return rollSlot(key);
}

function rollAll(respectPins) {
  for (const key of SLOT_KEYS) {
    if (respectPins && slots[key].pinned) { ensurePicked(key); continue; }
    rollSlot(key);
  }
}

// ── 出力の組み立て ──
// 段落単位の中間状態を作り、3000 文字を超えたらここから削って再構成する

function collectState() {
  for (const key of SLOT_KEYS) ensurePicked(key);

  // 古文フラグメントがある版では、テーマの Chorus 行を古文指示の後ろへ回す
  const classical = data.classical ? $("#classicalText").value.trim() : "";
  const themeLines = slots.theme.picked ? slots.theme.picked.split("\n") : [];
  const isChorus = (l) => /^chorus\s*:/i.test(l.trim());
  const themeBody = classical ? themeLines.filter((l) => !isChorus(l)).join("\n").trim() : slots.theme.picked;
  const chorus = classical ? themeLines.filter(isChorus).join("\n").trim() : "";

  const vocalLines = slots.vocal.picked ? slots.vocal.picked.split("\n") : [];
  const structureLines = slots.structure.picked ? slots.structure.picked.split("\n") : [];

  return {
    bpm: slots.bpm.picked,
    main: slots.main.picked,
    core: slots.core.picked === NO_CORE ? "" : slots.core.picked,
    extraParas: slots.extra.picked ? slots.extra.picked.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean) : [],
    structureLines,
    vocalLines,
    ratio: slots.ratio.picked,
    themeBody,
    classical,
    chorus,
    never: slots.never.picked,
    avoid: slots.avoid.picked,
  };
}

function applyGenreSwap(state) {
  const from = $("#swapFrom").value.trim();
  const to = slots.genre.picked;
  if (!$("#swapEnabled").checked || !from || !to || to === NO_SWAP) return { applied: false };

  const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
  let applied = false;
  const swap = (s) => {
    const out = String(s || "").replace(re, to);
    if (out !== s) applied = true;
    return out;
  };

  state.main = swap(state.main);
  if ($("#swapAll").checked) {
    state.core = swap(state.core);
    state.extraParas = state.extraParas.map(swap);
    state.structureLines = state.structureLines.map(swap);
  }
  return { applied, from, to };
}

function assemble(state) {
  const paras = [];
  const push = (v) => { const t = String(v || "").trim(); if (t) paras.push(t); };

  push(state.bpm);
  push(state.main);
  push(state.core);
  for (const p of state.extraParas) push(p);
  push(state.structureLines.join("\n"));
  push(state.vocalLines.join("\n"));
  push(state.ratio);
  push(state.themeBody);
  push(state.classical);
  push(state.chorus);
  if (state.never) push("Never use:\n" + state.never);
  push(state.avoid);

  return paras.join("\n\n");
}

function extraDropIndex(paras) {
  for (const re of version.dropOrder) {
    const i = paras.findIndex((para) => re.test(para));
    if (i >= 0) return i;
  }
  return paras.length - 1;
}

// 3000 文字へ収める。削る順は「捨てても曲の芯が残る」ものから。
function trimToLimit(state) {
  const notes = [];
  const over = () => assemble(state).length > LIMIT;
  if (!over()) return notes;

  // 1. サウンド補足を影響の小さいブロックから落とす（最低 1 ブロックは残す）
  while (over() && state.extraParas.length > 1) {
    state.extraParas.splice(extraDropIndex(state.extraParas), 1);
    notes.push("サウンド補足のブロック");
  }

  // 2. ボーカル指定の補足行を末尾から落とす（1 行目の声質指定は残す）
  while (over() && state.vocalLines.length > 1) {
    state.vocalLines.pop();
    notes.push("ボーカル指定の補足行");
  }

  // 3. Structure の中間行を末尾寄りから間引く（見出し・冒頭・最終行は残す）
  while (over() && state.structureLines.length > 4) {
    state.structureLines.splice(state.structureLines.length - 2, 1);
    notes.push("Structure の中間行");
  }

  // 4. サウンド補足が最後の 1 ブロックだけになってもまだ超えるなら、それも落とす
  if (over() && state.extraParas.length) {
    state.extraParas.length = 0;
    notes.push("サウンド補足の全ブロック");
  }

  return notes;
}

function summarizeNotes(notes) {
  if (!notes.length) return "";
  const counted = notes.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
  const parts = Object.entries(counted).map(([n, c]) => (c > 1 ? n + " ×" + c : n));
  return "3000 文字に収めるため次を削りました: " + parts.join(" / ");
}

function generate(opts) {
  const options = opts || {};
  const state = collectState();
  const swap = applyGenreSwap(state);

  let notes = [];
  if ($("#optAutoTrim").checked) notes = trimToLimit(state);

  const text = assemble(state);
  $("#outputText").value = text;
  updateMeter();

  const extraNote = [];
  if (swap.applied) extraNote.push("ジャンル置換: " + swap.from + " → " + swap.to);
  const trimNote = summarizeNotes(notes);
  if (trimNote) extraNote.push(trimNote);
  if (!$("#optAutoTrim").checked && text.length > LIMIT) {
    extraNote.push("自動トリムが OFF のため 3000 文字を超えています。SUNO 側で切られる可能性があります。");
  }
  $("#trimNote").textContent = extraNote.join("\n");

  if (text) pushHistory(text);
  if (options.copy !== false && $("#optAutoCopy").checked && text) copyText(text);
  saveState();
  return text;
}

// ── 文字数メーター ──

function updateMeter() {
  const len = $("#outputText").value.length;
  const pct = Math.min(100, (len / LIMIT) * 100);
  const fill = $("#meterFill");
  const label = $("#meterLabel");
  fill.style.width = pct + "%";
  fill.classList.toggle("warn", len > LIMIT * 0.9 && len <= LIMIT);
  fill.classList.toggle("over", len > LIMIT);
  label.classList.toggle("warn", len > LIMIT * 0.9 && len <= LIMIT);
  label.classList.toggle("over", len > LIMIT);
  label.innerHTML = "<b>" + len + "</b> / " + LIMIT + " 文字";
}

// ── メッセージ ──

let msgTimer = 0;
function setMsg(text, kind) {
  const el = $("#msg");
  el.textContent = text || "";
  el.className = "msg" + (kind ? " " + kind : "");
  if (msgTimer) clearTimeout(msgTimer);
  if (text) msgTimer = setTimeout(() => { el.textContent = ""; el.className = "msg"; }, 6000);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}

// ── パターンチップ ──
// 押したパターンの内容を各候補欄の先頭へ移動し、そのまま選択状態にする

const PATTERN_FIELDS = ["bpm", "main", "core", "extra", "structure", "vocal"];
// パターンが持っている場合だけ差し替える。持たないパターンでは現在の選択を残す
const PATTERN_OPTIONAL_FIELDS = ["ratio", "theme"];
const FIELD_LABELS = { ratio: "Lyrics 比率", theme: "テーマ" };

function hoistCandidate(key, value) {
  if (!value) { setPicked(key, ""); return; }
  const slot = slots[key];
  const sep = slot.kind === "block" ? BLOCK_SEP : "\n";
  const list = candidatesOf(key).filter((v) => v !== value);
  list.unshift(value);
  slot.src.value = list.join(sep);
  setPicked(key, value);
}

function applyPattern(pattern) {
  for (const field of PATTERN_FIELDS) {
    hoistCandidate(field, field === "core" ? (pattern.core || NO_CORE) : pattern[field]);
  }
  const optional = PATTERN_OPTIONAL_FIELDS.filter((field) => pattern[field]);
  for (const field of optional) hoistCandidate(field, pattern[field]);
  $$("#patternChips .chip").forEach((c) => c.classList.toggle("active", Number(c.dataset.id) === pattern.id));
  saveState();
  const extraLabel = optional.map((f) => " / " + FIELD_LABELS[f]).join("");
  setMsg(pattern.name + " を読み込みました。" + version.bpmTitle + " / メイン / Core sound / 補足 / Structure / ボーカル" + extraLabel + " を差し替え済みです。", "ok");
}

function renderPatternChips() {
  $("#patternChips").innerHTML = data.patterns.map((p) => '<button class="chip" data-id="' + p.id + '">' + esc(p.name) + "</button>").join("");
}

// ── 音源解析メモ ──

function renderAnalysis() {
  $("#analysisCard").hidden = !data.reference;
  if (!data.reference) { $("#analysisList").innerHTML = ""; return; }
  const rows = [{ name: data.reference.name, src: data.reference }].concat(data.patterns.filter((p) => p.src));
  $("#analysisList").innerHTML = rows.map((p) =>
    '<div class="list-item">' +
      '<div class="meta"><span>' + esc(p.name) + "</span><span>" + esc(p.src.at) + "</span></div>" +
      '<div class="excerpt">' + esc(p.src.note) + "</div>" +
    "</div>"
  ).join("");
}

// ── 履歴 ──

let history = [];

function pushHistory(text) {
  if (history.length && history[0].text === text) return;
  const head = text.split("\n").slice(0, 2).join(" / ");
  history.unshift({ text, len: text.length, at: Date.now(), head });
  if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
  renderHistory();
}

function fmtTime(ts) {
  const d = new Date(ts);
  const p = (n) => String(n).padStart(2, "0");
  return p(d.getMonth() + 1) + "/" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes());
}

function renderHistory() {
  const wrap = $("#historyList");
  if (!history.length) { wrap.innerHTML = '<div class="empty-note">まだ履歴はありません。</div>'; return; }
  wrap.innerHTML = history.map((h, i) =>
    '<div class="list-item">' +
      '<div class="meta"><span>' + fmtTime(h.at) + "</span><span>" + h.len + " 文字</span></div>" +
      '<div class="excerpt">' + esc(h.head) + "</div>" +
      '<div class="row">' +
        '<button data-act="load" data-i="' + i + '">出力へ戻す</button>' +
        '<button data-act="copy" data-i="' + i + '">コピー</button>' +
        '<button data-act="suno" data-i="' + i + '">SUNO へ</button>' +
        '<button class="btn-danger" data-act="del" data-i="' + i + '">削除</button>' +
      "</div>" +
    "</div>"
  ).join("");
}

// ── プリセット ──

let presets = [];

function currentSnapshot() {
  const src = {}, pins = {};
  for (const key of SLOT_KEYS) { src[key] = slots[key].src.value; pins[key] = slots[key].pinned; }
  return {
    src, pins,
    classical: $("#classicalText").value,
    swapFrom: $("#swapFrom").value,
    swapEnabled: $("#swapEnabled").checked,
    swapAll: $("#swapAll").checked,
  };
}

function restoreSnapshot(snap) {
  if (!snap) return;
  for (const key of SLOT_KEYS) {
    if (snap.src && typeof snap.src[key] === "string") slots[key].src.value = snap.src[key];
    if (snap.pins) setPin(key, !!snap.pins[key]);
  }
  // 切り替え導入前の V4 は Never use / Avoid を固定文として snap.never / snap.avoid に持っていた
  for (const key of ["never", "avoid"]) {
    if (typeof snap[key] === "string" && !(snap.src && typeof snap.src[key] === "string")) slots[key].src.value = snap[key];
  }
  if (data.classical && typeof snap.classical === "string") $("#classicalText").value = snap.classical;
  if (typeof snap.swapFrom === "string") $("#swapFrom").value = snap.swapFrom;
  if (typeof snap.swapEnabled === "boolean") $("#swapEnabled").checked = snap.swapEnabled;
  if (typeof snap.swapAll === "boolean") $("#swapAll").checked = snap.swapAll;
  for (const key of SLOT_KEYS) setPicked(key, "");
}

function renderPresets() {
  const wrap = $("#presetList");
  if (!presets.length) { wrap.innerHTML = '<div class="empty-note">保存されたプリセットはありません。</div>'; return; }
  wrap.innerHTML = presets.map((p, i) =>
    '<div class="list-item">' +
      '<div class="meta"><span>' + esc(p.name) + "</span><span>" + fmtTime(p.at) + "</span></div>" +
      '<div class="row">' +
        '<button data-act="load" data-i="' + i + '">呼び出す</button>' +
        '<button data-act="over" data-i="' + i + '">上書き</button>' +
        '<button class="btn-danger" data-act="del" data-i="' + i + '">削除</button>' +
      "</div>" +
    "</div>"
  ).join("");
}

// ── 保存 / 復元 ──

let saveTimer = 0;
function saveNow() {
  if (saveTimer) { clearTimeout(saveTimer); saveTimer = 0; }
  try {
    localStorage.setItem(storeKey(), JSON.stringify({
      dataVersion: promptDataVersion(),
      snapshot: currentSnapshot(),
      picked: SLOT_KEYS.reduce((acc, k) => (acc[k] = slots[k].picked, acc), {}),
      output: $("#outputText").value,
      autoTrim: $("#optAutoTrim").checked,
      autoCopy: $("#optAutoCopy").checked,
      history, presets,
    }));
  } catch { /* 容量超過などは黙って諦める */ }
}

function saveState() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 300);
}

function loadState() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(storeKey()) || "null"); } catch { saved = null; }
  history = saved && Array.isArray(saved.history) ? saved.history : [];
  presets = saved && Array.isArray(saved.presets) ? saved.presets : [];
  if (!saved) return false;
  if (typeof saved.autoTrim === "boolean") $("#optAutoTrim").checked = saved.autoTrim;
  if (typeof saved.autoCopy === "boolean") $("#optAutoCopy").checked = saved.autoCopy;
  if (saved.dataVersion !== promptDataVersion()) return false;
  restoreSnapshot(saved.snapshot);
  if (saved.picked) for (const key of SLOT_KEYS) setPicked(key, saved.picked[key] || "");
  if (typeof saved.output === "string") $("#outputText").value = saved.output;
  return true;
}

function loadDefaults() {
  const src = defaultSources();
  for (const key of SLOT_KEYS) { slots[key].src.value = src[key]; setPin(key, false); setPicked(key, ""); }
  $("#classicalText").value = data.classical || "";
  $("#swapFrom").value = version.swapFrom;
  $("#swapEnabled").checked = version.swapEnabled;
  $("#swapAll").checked = false;
}

// ── 固定トグル ──

function setPin(key, on) {
  const slot = slots[key];
  slot.pinned = !!on;
  slot.pinBtn.textContent = slot.pinned ? "🔒" : "🔓";
  slot.pinBtn.classList.toggle("on", slot.pinned);
  slot.card.classList.toggle("pinned", slot.pinned);
}

// ── SUNO を開く ──

function openSuno(text) {
  const body = String(text || "").trim();
  if (!body) { setMsg("先に生成してください。", "error"); return; }
  const url = "https://suno.com/create?sp=" + encodeURIComponent(body);
  const win = window.open(url, "sunoSimpleWindow", "popup=yes,width=1420,height=980,left=60,top=30,resizable=yes,scrollbars=yes");
  if (!win) { setMsg("ポップアップがブロックされました。ブラウザの設定を確認してください。", "error"); return; }
  try { win.focus(); } catch { /* noop */ }
  setMsg("SUNO AI を開きました。Simple モードへ切り替えてプロンプトを自動入力します（Tampermonkey スクリプトが必要）。", "ok");
}

// ── 初期化 ──

function initSlots() {
  for (const card of $$("[data-slot]")) {
    const key = card.dataset.slot;
    slots[key] = {
      key,
      kind: card.dataset.kind,
      card,
      src: $("[data-src]", card),
      pickedEl: $("[data-picked]", card),
      pinBtn: $("[data-pin]", card),
      diceBtn: $("[data-dice]", card),
      picked: "",
      pinned: false,
    };
    slots[key].pinBtn.addEventListener("click", () => { setPin(key, !slots[key].pinned); saveState(); });
    slots[key].diceBtn.addEventListener("click", () => {
      const value = rollSlot(key);
      saveState();
      setMsg(value ? "再抽選しました。" : "候補が空です。テキストを入力してください。", value ? "info" : "error");
    });
    slots[key].src.addEventListener("input", saveState);
  }
}

function bindEvents() {
  $("#btnGenerate").addEventListener("click", () => {
    const text = generate();
    setMsg(text ? "現在の選択で生成しました。" + ($("#optAutoCopy").checked ? " クリップボードへコピー済みです。" : "") : "候補が空です。", text ? "ok" : "error");
  });

  $("#btnRandomGen").addEventListener("click", () => {
    rollAll(true);
    const text = generate();
    const pinned = SLOT_KEYS.filter((k) => slots[k].pinned).length;
    setMsg(text ? "固定していない " + (SLOT_KEYS.length - pinned) + " 項目をランダム選択して生成しました。" : "候補が空です。", text ? "ok" : "error");
  });

  const doCopy = async () => {
    const text = $("#outputText").value.trim();
    if (!text) { setMsg("先に生成してください。", "error"); return; }
    setMsg((await copyText(text)) ? "コピーしました。" : "コピーに失敗しました。手動で選択してください。", "ok");
  };
  $("#btnCopy").addEventListener("click", doCopy);
  $("#btnCopy2").addEventListener("click", doCopy);

  $("#btnOpenSuno").addEventListener("click", () => {
    let text = $("#outputText").value.trim();
    if (!text) text = generate({ copy: false });
    openSuno(text);
  });

  $("#btnPatternRandom").addEventListener("click", () => applyPattern(pickOne(data.patterns)));

  $("#patternChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const pattern = data.patterns.find((p) => p.id === Number(chip.dataset.id));
    if (pattern) applyPattern(pattern);
  });

  $("#versionSwitch").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-ver]");
    if (!btn || btn.dataset.ver === version.id) return;
    switchVersion(btn.dataset.ver);
    setMsg(version.badge + " に切り替えました。", "ok");
  });

  $("#btnReload").addEventListener("click", () => {
    if (!confirm("すべての候補テキストを初期値へ戻します。履歴とプリセットは残ります。よろしいですか？")) return;
    loadDefaults();
    $$("#patternChips .chip").forEach((c) => c.classList.remove("active"));
    $("#outputText").value = "";
    $("#trimNote").textContent = "";
    updateMeter();
    saveState();
    setMsg("初期値へ戻しました。", "ok");
  });

  $("#classicalText").addEventListener("input", saveState);
  $("#swapFrom").addEventListener("input", saveState);
  $("#swapEnabled").addEventListener("change", saveState);
  $("#swapAll").addEventListener("change", saveState);
  $("#optAutoTrim").addEventListener("change", saveState);
  $("#optAutoCopy").addEventListener("change", saveState);

  $("#historyList").addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const item = history[Number(btn.dataset.i)];
    if (!item) return;
    if (btn.dataset.act === "load") {
      $("#outputText").value = item.text;
      $("#trimNote").textContent = "";
      updateMeter();
      setMsg("履歴を出力欄へ戻しました。", "ok");
    } else if (btn.dataset.act === "copy") {
      setMsg((await copyText(item.text)) ? "コピーしました。" : "コピーに失敗しました。", "ok");
    } else if (btn.dataset.act === "suno") {
      openSuno(item.text);
    } else if (btn.dataset.act === "del") {
      history.splice(Number(btn.dataset.i), 1);
      renderHistory();
    }
    saveState();
  });

  $("#btnHistoryClear").addEventListener("click", () => {
    if (!history.length) return;
    if (!confirm("履歴をすべて消去します。よろしいですか？")) return;
    history = [];
    renderHistory();
    saveState();
    setMsg("履歴を消去しました。", "ok");
  });

  $("#btnPresetSave").addEventListener("click", () => {
    const name = $("#presetName").value.trim();
    if (!name) { setMsg("プリセット名を入力してください。", "error"); return; }
    if (presets.length >= PRESET_MAX && !presets.some((p) => p.name === name)) {
      setMsg("プリセットは最大 " + PRESET_MAX + " 件です。不要なものを削除してください。", "error");
      return;
    }
    const entry = { name, at: Date.now(), snapshot: currentSnapshot() };
    const idx = presets.findIndex((p) => p.name === name);
    if (idx >= 0) presets[idx] = entry; else presets.unshift(entry);
    $("#presetName").value = "";
    renderPresets();
    saveState();
    setMsg('プリセット「' + name + "」を保存しました。", "ok");
  });

  $("#presetList").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const i = Number(btn.dataset.i);
    const preset = presets[i];
    if (!preset) return;
    if (btn.dataset.act === "load") {
      restoreSnapshot(preset.snapshot);
      setMsg('プリセット「' + preset.name + "」を呼び出しました。", "ok");
    } else if (btn.dataset.act === "over") {
      presets[i] = { name: preset.name, at: Date.now(), snapshot: currentSnapshot() };
      renderPresets();
      setMsg('プリセット「' + preset.name + "」を上書きしました。", "ok");
    } else if (btn.dataset.act === "del") {
      if (!confirm('プリセット「' + preset.name + "」を削除します。よろしいですか？")) return;
      presets.splice(i, 1);
      renderPresets();
    }
    saveState();
  });

  $("#outputText").addEventListener("input", updateMeter);

  document.addEventListener("keydown", (e) => {
    if (!(e.metaKey || e.ctrlKey)) return;
    if (e.key === "Enter") { e.preventDefault(); $("#btnRandomGen").click(); }
    if (e.key.toLowerCase() === "s") { e.preventDefault(); $("#btnGenerate").click(); }
  });
}

// ── 版の切り替え ──
// 版ごとに候補・選択・履歴・プリセットを別の保存キーで持ち、切り替え前の版は即座に保存する

function applyVersionView() {
  document.title = "SUNO Simple Prompt Builder " + version.id.toUpperCase();
  $("#versionBadge").textContent = version.badge;
  $$("#versionSwitch [data-ver]").forEach((b) => b.classList.toggle("active", b.dataset.ver === version.id));
  $$("[data-hint]").forEach((el) => {
    const html = version.hints[el.dataset.hint];
    el.innerHTML = html || "";
    el.hidden = !html;
  });
  $('[data-title="bpm"]').textContent = version.bpmTitle;
  $("#classicalCard").hidden = !data.classical;
  // 非表示のカードを飛ばして左列の番号を振り直す
  let n = 0;
  $$(".col-left .card").forEach((card) => {
    const num = $(".card-head .num", card);
    if (num && !card.hidden) num.textContent = String(n++).padStart(2, "0");
  });
}

function switchVersion(id) {
  if (version) saveNow();
  version = VERSIONS.find((v) => v.id === id) || VERSIONS[VERSIONS.length - 1];
  data = resolveData(version.id);
  try { localStorage.setItem(ACTIVE_VERSION_KEY, version.id); } catch { /* noop */ }

  applyVersionView();
  renderPatternChips();
  renderAnalysis();
  for (const key of SLOT_KEYS) { setPin(key, false); setPicked(key, ""); }
  $("#outputText").value = "";
  $("#trimNote").textContent = "";
  if (!loadState()) loadDefaults();
  renderHistory();
  renderPresets();
  updateMeter();
}

function init() {
  initSlots();
  bindEvents();
  let saved = "";
  try { saved = localStorage.getItem(ACTIVE_VERSION_KEY) || ""; } catch { saved = ""; }
  switchVersion(saved);
  setMsg("パターンを選ぶか、そのまま「ランダム生成」を押してください。⌘/Ctrl + Enter でランダム生成、⌘/Ctrl + S で生成。", "info");
}

init();
