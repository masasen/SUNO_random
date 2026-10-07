// V8 のプロンプト候補データ（Early-90s Japanese Rave Techno × Juliana-era rave の 1 プロンプト）。
// 指定のプロンプトを各欄に分け、BPM 候補・Never use と、V5 の「一瞬止まってまた続く」流れ（Drops の段落と Structure の Silence 行）を足している。Lyrics は英語のみ。
// Mood / Priority はボーカル指定の欄に持つ（Structure の後ろ、Lyrics の前に入る）。
// 歌詞テーマは app.js が V1〜V7 のテーマから日本語を指定するものを除いて借りる。古文・視点・Avoid は使わない。
// ジャンル置換はメイン行の makina を、V1〜V7 の置換語（makina とメイン行に既にある語を除く）のどれかに置き換える（既定 ON）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v8 = (() => {

const PATTERNS = [
  {
    id: 1, name: "Juliana Rave Sampler",
    bpm: "BPM 160–170.",
    main: "Genre: Early-90s Japanese Rave Techno x Hardcore Rave x Hyper Techno x happy hardcore x makina EDM.",
    core: "Core sound: relentless hard 4x4 kick, bright hats, snare rushes, fast octave rave bass, huge orchestra hits, minor-key rave stabs, short hoover tones and rave-piano attacks.",
    extra: "80% classic Juliana-era rave, 20% modern Hyper Techno x happy hardcore x makina EDM sound.\n\nDJ sampling is the main engine.\n\nUse recurring female shout cuts, MC fragments, scratches, backspins, rewinds, rave sirens, orchestra hits, crowd hits, break loops and digital stutters.\n\nReuse samples through pitch, reverse, scratch, retrigger and rhythmic chopping.\n\nMain hook:\norchestra hit → female shout → silence → kick slam → rave stab.\n\nKeep melodies short, aggressive and repetitive.\n\nModern 30%:\nheavier kick transients, tighter sub, distorted electro-bass punches, short 808 drops, breakbeat cuts and occasional Jersey-style kick interruptions.\n\nAdd choreography accents:\nbeat stop, bass hit, vocal chop, scratch freeze, half-bar silence, hard restart.\n\nAlternate:\n4x4 rave → short breakbeat → DJ stop → bass punch → 4x4 return.\n\nDrops: the build rises for 8 bars, one beat of total silence, then the drop slams in at full width.",
    structure: "Silence: one beat of dead air.\n\nDROP:\nclassic rave kick and octave bass remain dominant, with orchestra hits, shout cuts, scratches and modern bass punches.\n\nBREAK:\n4–8 bars only.\nRave piano, chopped vocals and brief half-time street groove.\n\nSilence: one bar, frozen frame.\n\nFINAL DROP:\nmaximum sample density, hard 4x4 kick, rave bass, orchestra hits, hoover cuts, scratches, English MC chops, breakbeat fills and modern low-end impact.",
    vocal: "Mood: flashy, aggressive, ecstatic, decadent, street-ready.\n\nPriority:\nDJ sampling > Juliana rave groove > orchestra hits > street-dance rhythm > rave bass.",
    ratio: "Lyrics: only English 100%.",
  },
];

const BPM_EXTRA = [
  "BPM 166 (83 half-time feel), G minor.",
  "BPM 132, C# major.",
  "BPM 164 (82 half-time feel), F minor.",
  "BPM 159 (80 half-time feel), B major.",
  "BPM 136, B major.",
  "BPM 130, F minor.",
  "BPM 164 (82 half-time feel), F# minor.",
  "BPM 188 (94 half-time feel), G minor.",
  "BPM 113, B♭ minor.",
  "BPM 107, F minor.",
  "BPM 143, E♭ minor.",
  "BPM 131, F minor.",
  "BPM 120, B♭ minor.",
  "BPM 192 (96 half-time feel), B minor.",
  "BPM 161 (80 half-time feel), G minor.",
  "BPM 160 (80 half-time feel), F minor.",
  "BPM 158 (79 half-time feel), C# minor.",
  "BPM 130, C# minor.",
  "BPM 134, B major.",
  "BPM 136, D minor.",
  "BPM 120, D minor.",
];

const NEVER_USE_FIXED = "ネオン, 午前二時, 既読, コンビニ, 愛してる, 通知, 深夜, べつに, ねえ, 噛んで, キャンディ, リボン, 離れないで, 行かないで, あなたがほしい, 離さない, stay with me, 消えないで, 砂糖, pixel, sugar-face, 拍.";

const GENRE_SWAPS = [
  "punk",
  "digital hardcore",
  "hardstyle",
  "UK hardcore",
  "gabber",
  "J-core",
  "breakcore",
  "drum & bass",
  "dubstep",
  "trap",
  "phonk",
  "hyperpop",
  "synthwave",
  "nu-disco",
  "big beat",
  "industrial techno",
  "bass house",
  "jersey club",
  "drill",
  "city pop",
  "shoegaze",
  "ska punk",
  "disco funk",
  "jungle",
  "hard trance",
  "psytrance",
  "progressive house",
  "future rave",
  "eurobeat",
  "future bass",
  "melodic techno",
  "footwork juke",
  "Baltimore club",
  "half-time phonk",
  "breakbeat",
  "kawaii future bass",
  "denpa",
  "full-on psytrance",
  "nightcore",
  "UK garage",
  "turntablism",
  "boss-battle synth rock",
  "dark progressive synth",
  "power-chord breakcore",
  "DJ-style x Addictive tracks x glitch",
];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: [],
  genreSwaps: GENRE_SWAPS,
  themes: [],
  never: [NEVER_USE_FIXED],
  avoid: [],
};
})();
