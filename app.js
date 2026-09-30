// ── 定数 ──

const LIMIT = 3000;
const STORE_KEY = "suno_simple_builder_v4";
// データ内容から版を自動計算する。データファイルだけの更新でも保存済み候補を切り替える。
function promptDataVersion() {
  const content = JSON.stringify([REFERENCE, PATTERNS, THEME_EXTRA, LYRICS_RATIOS, GENRE_SWAPS, NEVER_USE_FIXED, AVOID_FIXED, BPM_EXTRA]);
  let hash = 2166136261;
  for (let i = 0; i < content.length; i++) hash = Math.imul(hash ^ content.charCodeAt(i), 16777619);
  return "data-" + (hash >>> 0).toString(16).padStart(8, "0");
}
const DATA_VERSION = promptDataVersion();
const LEGACY_DATA_VERSION = "data-78306033";
const HISTORY_MAX = 20;
const PRESET_MAX = 12;
const NO_SWAP = "(置換しない)";
const NO_CORE = "(Core sound を入れない)";

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

const SLOT_KEYS = ["bpm", "main", "genre", "core", "extra", "structure", "vocal", "ratio", "theme"];

const slots = {};

function patternValues(key) {
  return PATTERNS.map((p) => p[key]).filter(Boolean);
}

function defaultSources() {
  return {
    bpm:       uniq(PATTERNS.map((p) => p.bpm).concat(BPM_EXTRA)).join("\n"),
    main:      uniq(PATTERNS.map((p) => p.main)).join("\n"),
    genre:     [NO_SWAP].concat(GENRE_SWAPS).join("\n"),
    core:      uniq(PATTERNS.map((p) => p.core)).join("\n"),
    extra:     uniq(PATTERNS.map((p) => p.extra)).join(BLOCK_SEP),
    structure: uniq(PATTERNS.map((p) => p.structure)).join(BLOCK_SEP),
    vocal:     uniq(PATTERNS.map((p) => p.vocal)).join(BLOCK_SEP),
    ratio:     uniq(patternValues("ratio").concat(LYRICS_RATIOS)).join("\n"),
    theme:     uniq(patternValues("theme").concat(THEME_EXTRA)).join(BLOCK_SEP),
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
    theme: slots.theme.picked,
    never: $("#neverText").value.trim(),
    avoid: $("#avoidText").value.trim(),
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
  push(state.theme);
  if (state.never) push("Never use:\n" + state.never);
  push(state.avoid);

  return paras.join("\n\n");
}

// サウンド補足の中でも落として影響が小さい順。
// ドロップの作りが曲の芯なので、ミックス質感 → FX・トランジション → ドロップ、の順に落とす。
const EXTRA_DROP_ORDER = [
  /^mix\b/i,
  /^fx\b/i,
  /^drops?\b/i,
  /^samples?\b/i,
];

function extraDropIndex(paras) {
  for (const re of EXTRA_DROP_ORDER) {
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
  const extraLabel = optional.length ? " / Lyrics 比率 / テーマ" : "";
  setMsg(pattern.name + " を読み込みました。BPM・キー / メイン / Core sound / 補足 / Structure / ボーカル" + extraLabel + " を差し替え済みです。", "ok");
}

function renderPatternChips() {
  const wrap = $("#patternChips");
  wrap.innerHTML = PATTERNS.map((p) => '<button class="chip" data-id="' + p.id + '">' + esc(p.name) + "</button>").join("");
  wrap.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const pattern = PATTERNS.find((p) => p.id === Number(chip.dataset.id));
    if (pattern) applyPattern(pattern);
  });
}

// ── 音源解析メモ ──

function renderAnalysis() {
  const rows = [{ name: REFERENCE.name, src: REFERENCE }].concat(PATTERNS);
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
    never: $("#neverText").value,
    avoid: $("#avoidText").value,
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
  if (typeof snap.never === "string") $("#neverText").value = snap.never;
  if (typeof snap.avoid === "string") $("#avoidText").value = snap.avoid;
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
function saveState() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        dataVersion: DATA_VERSION,
        snapshot: currentSnapshot(),
        picked: SLOT_KEYS.reduce((acc, k) => (acc[k] = slots[k].picked, acc), {}),
        output: $("#outputText").value,
        autoTrim: $("#optAutoTrim").checked,
        autoCopy: $("#optAutoCopy").checked,
        history, presets,
      }));
    } catch { /* 容量超過などは黙って諦める */ }
  }, 300);
}

function loadState() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch { saved = null; }
  if (!saved) return false;
  history = Array.isArray(saved.history) ? saved.history : [];
  presets = Array.isArray(saved.presets) ? saved.presets : [];
  if (typeof saved.autoTrim === "boolean") $("#optAutoTrim").checked = saved.autoTrim;
  if (typeof saved.autoCopy === "boolean") $("#optAutoCopy").checked = saved.autoCopy;
  if (saved.dataVersion !== DATA_VERSION && !(saved.dataVersion === 1 && DATA_VERSION === LEGACY_DATA_VERSION)) return false;
  restoreSnapshot(saved.snapshot);
  if (saved.picked) for (const key of SLOT_KEYS) setPicked(key, saved.picked[key] || "");
  if (typeof saved.output === "string") $("#outputText").value = saved.output;
  return true;
}

function loadDefaults() {
  const src = defaultSources();
  for (const key of SLOT_KEYS) { slots[key].src.value = src[key]; setPin(key, false); setPicked(key, ""); }
  $("#neverText").value = NEVER_USE_FIXED;
  $("#avoidText").value = AVOID_FIXED;
  $("#swapFrom").value = "street dance";
  $("#swapEnabled").checked = false;
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

  $("#btnPatternRandom").addEventListener("click", () => applyPattern(pickOne(PATTERNS)));

  $("#btnReload").addEventListener("click", () => {
    if (!confirm("すべての候補テキストを初期値へ戻します。履歴とプリセットは残ります。よろしいですか？")) return;
    loadDefaults();
    $("#outputText").value = "";
    $("#trimNote").textContent = "";
    updateMeter();
    saveState();
    setMsg("初期値へ戻しました。", "ok");
  });

  $("#neverText").addEventListener("input", saveState);
  $("#avoidText").addEventListener("input", saveState);
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

function init() {
  initSlots();
  renderPatternChips();
  renderAnalysis();
  if (!loadState()) loadDefaults();
  bindEvents();
  renderHistory();
  renderPresets();
  updateMeter();
  setMsg("パターンを選ぶか、そのまま「ランダム生成」を押してください。⌘/Ctrl + Enter でランダム生成、⌘/Ctrl + S で生成。", "info");
}

init();
