// V6 のプロンプト候補データ（感情の設計図: 物語 × 1 つのメロディ × 静と爆発の落差 × 道具としてのジャンル）。
// 音の説明を厚くせず、刺さる仕掛け（泣きメロ・コード進行・静から爆発への落差・物語のどんでん返し）を短く指定する。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
//
// モチーフ楽器・静かな世界・爆発する世界はメイン行のコンセプトカードの中だけで定義する。
// Structure・メロディの仕掛け・補足・ボーカルは楽器名を書かず「the motif / the quiet world / the loud world」で指すので、
// ランダムにどう組み合わせても話がかみ合う。ジャンル名 makina はコンセプトカードの Loud world に 1 回だけ書く（置換対象）。
// 言語比率と Never use は V5 の指定をそのまま使う（app.js の resolveData が V5 から借りる。データファイル同士は読み込み順が決まらないので直接参照しない）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

const FREE = "Write every line in your own fresh words.";
const NOMALE = "No male vocal, no duet, no choir.";
const MOTIF = " The whole song is built around this one melody, the motif.";

const PATTERNS = [
  {
    id: 1, name: "Lullaby to Rave",
    bpm: "BPM 165, D minor.",
    main: "Concept: a lullaby that turns into a rave. One melody, two worlds. The motif: a music box. Quiet world: cassette hiss in a dark bedroom. Loud world: hard makina with a pounding kick, offbeat bass and a bright lead doubling the vocal.",
    core: "Melody first: a tearjerker chorus melody on a royal road progression (IV-V-iii-vi); the first word of the chorus leaps up high and lands softly." + MOTIF,
    extra: "Contrast: the quiet world is almost empty, so the loud world hits harder; leave real silence and never fill it.\n\nMix: the motif stays audible even inside the loudest chorus.",
    structure: "Structure:\nIntro: the motif plays the chorus melody alone in the quiet world, slow and fragile.\nVerse 1: almost nothing, her voice close to the mic, a heartbeat kick.\nPre-chorus: the motif speeds up, a riser, one breath of silence.\nChorus: the same melody explodes into the loud world.\nVerse 2: back to the quiet world, even softer.\nBridge: everything stops; she hums the melody alone, imperfect and human.\nFinal chorus: key change up a step, energy rises, bigger voice, the motif still underneath.\nOutro: the motif alone again, slowing until it stops.",
    vocal: "One adult female vocalist with a husky, smoky voice: low and close in the quiet world, a raw husky belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 70-80%, short natural English 20-30%.",
    theme: "Theme: a woman replaying the last song her childhood friend sang to her before moving away.\nTwist: in the bridge we learn she was the one who left.\n" + FREE,
  },
  {
    id: 2, name: "Last Voicemail",
    bpm: "BPM 160, F minor.",
    main: "Concept: a saved voicemail that becomes a dance floor anthem. One melody, two worlds. The motif: an answering-machine chime. Quiet world: rain on a window and the hum of an empty room. Loud world: full-speed makina with hoover stabs and huge saw chords.",
    core: "Melody first: a minor-key chorus melody that turns major only on its very last chord, like a sudden smile through tears." + MOTIF,
    extra: "Contrast: each drop arrives after one bar of complete silence; the silence is part of the song.\n\nMix: dry and close in the quiet world, wide and loud in the loud world.",
    structure: "Structure:\nIntro: the motif rings once in the quiet world, then silence.\nVerse 1: she sings low, almost speaking, over rain.\nChorus: the melody stays quiet the first time, only the motif and her voice.\nVerse 2: a pulse creeps in under the quiet world.\nPre-chorus: one bar of silence.\nChorus: the same melody finally explodes into the loud world.\nBridge: the motif alone, cut short.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the motif rings once more, then silence.",
    vocal: "One adult female vocalist with a husky, raspy alto: half-spoken and fragile in the quiet world, a cracked, husky cry in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 60-70%, short natural English 30-40%.",
    theme: "Theme: a woman listening to a voicemail she has saved for years, too afraid to delete it.\nTwist: in the bridge we learn the message is her own voice, left for someone who never heard it.\n" + FREE,
  },
  {
    id: 3, name: "After-School Chime",
    bpm: "BPM 158, A minor.",
    main: "Concept: the end-of-school chime that turns into a farewell rave. One melody, two worlds. The motif: a school chime melody, original. Quiet world: an empty classroom at dusk with soft reverb. Loud world: euphoric makina with rave stabs and a rolling bassline.",
    core: "Melody first: a canon-like descending bass line under a simple melody that falls step by step, then jumps an octave on the last line of the chorus." + MOTIF,
    extra: "Contrast: the loud world enters on the downbeat with no warning; no long build-up.\n\nMix: the quiet world sounds like a real room, the loud world sounds like a festival.",
    structure: "Structure:\nIntro: the motif in the quiet world, echoing.\nVerse 1: her voice and soft keys only.\nPre-chorus: a ticking pulse, rising.\nChorus: the motif melody bursts into the loud world.\nPost-chorus: the motif chopped into the beat.\nVerse 2: half quiet, half loud, as if remembering.\nBridge: the quiet world returns, one long held note.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the motif alone, fading into dusk.",
    vocal: "One adult female vocalist with a husky, warm voice: tender and nostalgic in the quiet world, a powerful husky belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 80-90%, short natural English 10-20%.",
    theme: "Theme: a woman visiting her old school on the day before it is torn down.\nTwist: in the bridge we learn she came to return something she borrowed long ago.\n" + FREE,
  },
  {
    id: 4, name: "Last Train Jingle",
    bpm: "BPM 162, E minor.",
    main: "Concept: a station departure jingle that becomes the last dance of the night. One melody, two worlds. The motif: a departure jingle, original. Quiet world: a midnight platform, distant announcements and night wind. Loud world: driving makina with a hard kick and soaring saw leads.",
    core: "Melody first: an anthem progression (vi-IV-I-V); the chorus melody starts on its highest note and falls like a sigh." + MOTIF,
    extra: "Contrast: the loud world rushes in like a train arriving, then leaves just as suddenly.\n\nMix: the motif is bright and clear, her voice sits close and unpolished.",
    structure: "Structure:\nIntro: the motif chimes in the quiet world.\nVerse 1: she sings softly over wind and a slow pulse.\nPre-chorus: the motif repeats faster, like a warning.\nChorus: the loud world rushes in.\nVerse 2: the loud world leaves at once, only the quiet world remains.\nBridge: the motif alone, one note missing.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the loud world departs; the motif plays once more.",
    vocal: "One adult female vocalist with a husky, breathy voice: hushed in the quiet world, a husky, aching belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: English 70-80%, Japanese for the rest.",
    theme: "Theme: a woman who lets the last train leave without her every night.\nTwist: in the bridge we learn she is waiting for someone who took that train years ago.\n" + FREE,
  },
  {
    id: 5, name: "Boot-Up Screen",
    bpm: "BPM 170, G minor.",
    main: "Concept: a childhood game console starting up one last time. One melody, two worlds. The motif: an 8-bit startup melody. Quiet world: a CRT hum and a ticking clock in an empty house. Loud world: hyper makina with supersaw chords and a racing bassline.",
    core: "Melody first: a melody that repeats the same three notes, rising one step each time, then breaks free on the hook." + MOTIF,
    extra: "Contrast: every drop is triggered by the motif playing its last note.\n\nMix: the quiet world is lo-fi and narrow, the loud world is hi-fi and wide.",
    structure: "Structure:\nIntro: the motif plays in the quiet world.\nVerse 1: her voice over the hum and a soft kick.\nPre-chorus: the motif glitches and speeds up.\nChorus: the loud world explodes on the motif's last note.\nVerse 2: the quiet world, with a faint echo of the loud world.\nBridge: the motif slows down, then cuts out.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the motif powers down, one note at a time.",
    vocal: "One adult female vocalist with a husky, slightly rough voice: gentle and wistful in the quiet world, a strong husky belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 70-80%, short natural English 20-30%.",
    theme: "Theme: a woman cleaning out her late brother's room and finding the console they used to share.\nTwist: in the bridge we learn the save file still has his name next to hers.\n" + FREE,
  },
  {
    id: 6, name: "Snow Globe",
    bpm: "BPM 150, B minor.",
    main: "Concept: a snow globe shaken until it becomes a storm. One melody, two worlds. The motif: a celesta. Quiet world: hushed snowfall and a ticking radiator. Loud world: stormy makina with a pounding kick and shimmering saw walls.",
    core: "Melody first: a pentatonic, folk-like melody that feels like an old memory, sung slowly over a fast beat." + MOTIF,
    extra: "Contrast: the loud world builds by layers, never by a riser; one instrument at a time joins the motif.\n\nMix: icy and glittering on top, warm in the middle.",
    structure: "Structure:\nIntro: the motif alone in the quiet world.\nVerse 1: her voice and the motif.\nChorus: half-time, the loud world starts to gather.\nVerse 2: the loud world grows one layer at a time.\nPre-chorus: everything shakes, then silence.\nChorus: the full loud world, the melody still slow above it.\nBridge: the quiet world, the motif settling like snow.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the motif alone, the storm settled.",
    vocal: "One adult female vocalist with a husky, velvety voice: soft and calm in the quiet world, a husky, soaring belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 90-100%, English only as short hook words.",
    theme: "Theme: a woman keeping a snow globe from the winter she was happiest.\nTwist: in the bridge we learn the globe is cracked and she has never let anyone see it.\n" + FREE,
  },
  {
    id: 7, name: "Between Stations",
    bpm: "BPM 155, C minor.",
    main: "Concept: a radio caught between stations that finally tunes in. One melody, two worlds. The motif: a detuned radio melody. Quiet world: radio static and a late-night drive. Loud world: crisp makina with a tight kick and bright stabs.",
    core: "Melody first: an aching chromatic line descends under a simple melody, and the hook ends on a note that never resolves." + MOTIF,
    extra: "Contrast: the loud world arrives as if the signal suddenly locks in, perfectly clear.\n\nMix: the quiet world is filtered and narrow, the loud world is full range.",
    structure: "Structure:\nIntro: the motif drifts in and out of the quiet world.\nVerse 1: her voice, filtered, over static.\nPre-chorus: the motif comes into focus.\nChorus: the signal locks in, the loud world clear and bright.\nVerse 2: the signal fades back into the quiet world.\nBreakdown: only the motif and her breath.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the signal drifts away again.",
    vocal: "One adult female vocalist with a husky, low voice: distant and filtered in the quiet world, a clear, husky belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese and English mixed inside every bar, random switching mid-line.",
    theme: "Theme: a woman driving at night, scanning radio stations for the song that played on her first date.\nTwist: in the bridge we learn she is the one who wrote that song.\n" + FREE,
  },
  {
    id: 8, name: "Summer Festival",
    bpm: "BPM 160, D minor.",
    main: "Concept: the last night of a summer festival that turns into a rave. One melody, two worlds. The motif: a bamboo flute. Quiet world: cicadas, a warm night breeze and distant festival drums. Loud world: festival makina with a hard kick, taiko hits and a soaring lead.",
    core: "Melody first: a nostalgic pentatonic chorus; a half-time melody floats over a double-time beat." + MOTIF,
    extra: "Contrast: the quiet world feels like walking away from the festival, the loud world like running back into it.\n\nMix: warm and humid in the quiet world, bright and huge in the loud world.",
    structure: "Structure:\nIntro: the motif over the quiet world.\nVerse 1: her voice and distant drums.\nPre-chorus: the drums come closer.\nChorus: the loud world explodes, the motif doubling her voice.\nVerse 2: back in the quiet world, the festival far away.\nBridge: silence, then the motif alone like the last firework.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: cicadas and the motif, fading.",
    vocal: "One adult female vocalist with a husky, earthy voice: wistful in the quiet world, a bold, husky belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 65%, short natural English 35%, with one English hook in the chorus.",
    theme: "Theme: a woman at the last summer festival before she leaves her hometown for good.\nTwist: in the bridge we learn the person she promised to meet there is watching from far away.\n" + FREE,
  },
  {
    id: 9, name: "Worn Cassette",
    bpm: "BPM 152, A minor.",
    main: "Concept: a worn cassette tape that bursts into color. One melody, two worlds. The motif: a nylon guitar on a worn tape. Quiet world: tape wobble and hiss. Loud world: bright makina with a punchy kick and glowing chords.",
    core: "Melody first: the verse melody and the chorus melody are the same tune, first slow and sad, then fast and bright." + MOTIF,
    extra: "Contrast: the switch between worlds sounds like a tape speeding up from wobble to full speed.\n\nMix: the quiet world is mono and warped, the loud world is stereo and clean.",
    structure: "Structure:\nIntro: the motif warbling in the quiet world.\nVerse 1: she sings the melody slow and low.\nPre-chorus: the tape speeds up.\nChorus: the same melody, now fast and bright in the loud world.\nVerse 2: the tape slows back down.\nBridge: the motif stops, she sings one line alone.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the tape runs out.",
    vocal: "One adult female vocalist with a husky, lived-in voice: intimate in the quiet world, a husky, cathartic belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 75%, short natural English 25%, English used only for short repeated calls.",
    theme: "Theme: a woman finding a mixtape her mother made for her when she was a child.\nTwist: in the bridge we learn the last song on the tape is her mother singing.\n" + FREE,
  },
  {
    id: 10, name: "Lighthouse",
    bpm: "BPM 166, F# minor.",
    main: "Concept: a lone light in the dark that becomes a sunrise. One melody, two worlds. The motif: a lone grand piano. Quiet world: a huge empty hall and the sound of the sea. Loud world: epic makina with a pounding kick and wide anthemic leads.",
    core: "Melody first: an ascending progression (IV-V-vi) that feels just before tears, with a suspended note that resolves late." + MOTIF,
    extra: "Contrast: the loud world enters only after the quiet world has gone completely still.\n\nMix: huge reverb in the quiet world, tight and punchy in the loud world.",
    structure: "Structure:\nIntro: the motif in the quiet world, very slow.\nVerse 1: her voice and the motif only.\nChorus: still quiet, the melody held back.\nVerse 2: a heartbeat kick joins.\nPre-chorus: everything goes still.\nChorus: the loud world arrives at last.\nBridge: the motif alone, one held note.\nFinal chorus: key change up a step, energy rises, bigger voice.\nOutro: the motif alone at sunrise.",
    vocal: "One adult female vocalist with a husky, deep voice: steady and calm in the quiet world, a husky, unbreakable belt in the loud world.\n" + NOMALE,
    ratio: "Lyrics: Japanese 50-60%, short natural English 40-50%.",
    theme: "Theme: a woman who keeps a light on in her window for someone lost at sea.\nTwist: in the bridge we learn she is the one finally coming home.\n" + FREE,
  },
];

// パターンに付かない物語（1 場面 ＋ どんでん返し）
const THEME_EXTRA = [
"Theme: a woman returning a borrowed umbrella to someone she has not seen in ten years.\nTwist: in the bridge we learn she kept it so she would always have a reason to return.\n" + FREE,
"Theme: a woman rehearsing a wedding speech for her best friend.\nTwist: in the bridge we learn she is in love with the bride.\n" + FREE,
];

// ランダム生成時は Loud world の makina だけをこの候補と入れ替える（既定 OFF）
const GENRE_SWAPS = [
"UK hardcore", "J-core", "hyper techno", "eurobeat", "drum & bass", "trance", "future bass", "breakbeat", "happy hardcore",
];

const AVOID_FIXED = "Avoid: male vocal, duet, choir, childish or overly cute voice, robotic auto-tune, a wall of sound with no quiet sections, filling every silence, muddy mix, long fade-out, generic festival EDM drop.";

const BPM_EXTRA = ["BPM 158, C# minor.", "BPM 164, G minor."];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  avoid: [AVOID_FIXED],
};
})();
