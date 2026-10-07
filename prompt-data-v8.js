// V8 のプロンプト候補データ（Early-90s Japanese Rave Techno × Juliana-era rave の 1 プロンプト）。
// 指定のプロンプトを各欄に分けただけで、ほかの候補は足さない。Lyrics は英語のみに変えている。
// Mood / Priority はボーカル指定の欄に持つ（Structure の後ろ、Lyrics の前に入る）。
// 歌詞テーマは app.js が V1〜V7 のテーマから日本語を指定するものを除いて借りる。古文・視点・Never use・Avoid は使わない。
// ジャンル置換はメイン行の makina を、V1〜V7 の置換語（makina とメイン行に既にある語を除く）のどれかに置き換える（既定 ON）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v8 = (() => {

const PATTERNS = [
  {
    id: 1, name: "Juliana Rave Sampler",
    bpm: "BPM 160–170.",
    main: "Genre: Early-90s Japanese Rave Techno x Hardcore Rave x Hyper Techno x happy hardcore x makina EDM.",
    core: "Core sound: relentless hard 4x4 kick, bright hats, snare rushes, fast octave rave bass, huge orchestra hits, minor-key rave stabs, short hoover tones and rave-piano attacks.",
    extra: "80% classic Juliana-era rave, 20% modern Hyper Techno x happy hardcore x makina EDM sound.\n\nDJ sampling is the main engine.\n\nUse recurring female shout cuts, MC fragments, scratches, backspins, rewinds, rave sirens, orchestra hits, crowd hits, break loops and digital stutters.\n\nReuse samples through pitch, reverse, scratch, retrigger and rhythmic chopping.\n\nMain hook:\norchestra hit → female shout → silence → kick slam → rave stab.\n\nKeep melodies short, aggressive and repetitive.\n\nModern 30%:\nheavier kick transients, tighter sub, distorted electro-bass punches, short 808 drops, breakbeat cuts and occasional Jersey-style kick interruptions.\n\nAdd choreography accents:\nbeat stop, bass hit, vocal chop, scratch freeze, half-bar silence, hard restart.\n\nAlternate:\n4x4 rave → short breakbeat → DJ stop → bass punch → 4x4 return.",
    structure: "DROP:\nclassic rave kick and octave bass remain dominant, with orchestra hits, shout cuts, scratches and modern bass punches.\n\nBREAK:\n4–8 bars only.\nRave piano, chopped vocals and brief half-time street groove.\n\nFINAL DROP:\nmaximum sample density, hard 4x4 kick, rave bass, orchestra hits, hoover cuts, scratches, English MC chops, breakbeat fills and modern low-end impact.",
    vocal: "Mood: flashy, aggressive, ecstatic, decadent, street-ready.\n\nPriority:\nDJ sampling > Juliana rave groove > orchestra hits > street-dance rhythm > rave bass.",
    ratio: "Lyrics: only English 100%.",
  },
];

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
  bpmExtra: [],
  lyricsRatios: [],
  genreSwaps: GENRE_SWAPS,
  themes: [],
  never: [],
  avoid: [],
};
})();
