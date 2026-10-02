// V6 のプロンプト候補データ（感情の設計図: 物語とどんでん返しの歌詞 × 重低音で乗れるグルーヴ）。
// 曲調は重低音のドコドコ（歪んだキック・キックロール・タムロール・サブベース）、止め、DJ サンプリングで、最後まで乗り続けられるグルーヴにする。
// 声は大人の女性のハスキーボイスを楽器のように使う（短く刻んだフレーズ中心で、歌詞に意味がなくても成立する）。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
//
// モチーフ楽器とグルーヴはメイン行のコンセプトカードの中だけで定義する。
// Structure・グルーヴの仕掛け・補足・ボーカルは楽器名を書かず「the motif / the groove」で指すので、
// ランダムにどう組み合わせても話がかみ合う。ジャンル名 makina はコンセプトカードの Groove に 1 回だけ書く（置換対象）。
// 言語比率と Never use は V5 の指定をそのまま使う（app.js の resolveData が V5 から借りる。データファイル同士は読み込み順が決まらないので直接参照しない）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

const FREE = "Write every line in your own fresh words.";

const PATTERNS = [
  {
    id: 1, name: "Lullaby to Rave",
    bpm: "BPM 165, D minor.",
    main: "Concept: a lullaby that turns into a rave. One hook, one groove. The motif: a music box, chopped like a DJ sample. Groove: hard makina with pounding distorted kicks and a deep rolling sub bass.",
    core: "Groove first: a distorted four-on-the-floor kick with 16th-note kick rolls before every drop, and an offbeat sub bass locked to it. The whole track rides this one groove.",
    extra: "Stops: a full stop for one beat before each drop, then everything slams back in.\n\nDJ samples: wordless vocal shouts, record scratches, rewinds, sirens, crowd cheers. Original, not copied.\n\nMix: sub-heavy and loud, the kick hits the chest, clean mids.",
    structure: "Structure:\nIntro: the groove's kick with a filtered sample, DJ-friendly.\nBuild: kick roll speeding up, riser.\nDrop 1: the full groove, the motif chopped as the hook.\nStop: one beat of silence, then back in.\nVerse: kick and sub only, her husky voice over the groove.\nBridge: 4 bars, only the motif and her voice; the twist is sung here.\nBuild: kick roll, rewind.\nFinal drop: key change up a step, energy rises, the groove at full power.\nOutro: kick and the motif, hard stop.",
    vocal: "One adult female vocalist with a husky, smoky voice, used like an instrument: short chopped phrases and one repeated hook over the groove; few words, rhythm first.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 70-80%, short natural English 20-30%.",
    theme: "Theme: a woman replaying the last song her childhood friend sang to her before moving away.\nTwist: in the bridge we learn she was the one who left.\n" + FREE,
  },
  {
    id: 2, name: "Last Voicemail",
    bpm: "BPM 160, F minor.",
    main: "Concept: a saved voicemail that becomes a dance floor anthem. One hook, one groove. The motif: an answering-machine chime, chopped like a DJ sample. Groove: full-speed makina with heavy kicks, an offbeat sub bass and hoover stabs.",
    core: "Groove first: a pounding kick with a galloping bass on every off-beat and tom rolls tumbling into each section. The whole track rides this one groove.",
    extra: "Stops: a tape stop on the last beat of every 8 bars.\n\nDJ samples: vinyl spinbacks, chopped vocal shots, rave stabs, radio-filtered voices. Original, not copied.\n\nMix: deep sub and a forward kick, nothing muddy.",
    structure: "Structure:\nIntro: the motif alone for 2 bars, then the groove kicks in.\nVerse: the groove stripped to kick and bass, her voice low.\nBuild: snare roll and kick roll together.\nDrop 1: the full groove, vocal chops on the off-beats.\nStop: tape stop, then the drop restarts.\nBridge: the groove muffled, the motif and one sung line; the twist lands here.\nBuild: kick roll, riser.\nFinal drop: key change up a step, energy rises, every sample at once.\nOutro: kick only, hard stop.",
    vocal: "One adult female vocalist with a husky, raspy voice, used like an instrument: half-spoken phrases chopped into the off-beats; a husky cry on the final drop.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 60-70%, short natural English 30-40%.",
    theme: "Theme: a woman listening to a voicemail she has saved for years, too afraid to delete it.\nTwist: in the bridge we learn the message is her own voice, left for someone who never heard it.\n" + FREE,
  },
  {
    id: 3, name: "After-School Chime",
    bpm: "BPM 158, A minor.",
    main: "Concept: the end-of-school chime that turns into a farewell rave. One hook, one groove. The motif: a school chime melody, chopped like a DJ sample. Groove: euphoric makina with a booming kick and a galloping bassline.",
    core: "Groove first: a steady pounding kick that bursts into double-time kick runs every 8 bars over a deep reese sub. The whole track rides this one groove.",
    extra: "Stops: the bass cuts out for two beats while the kick keeps going, then the sub returns.\n\nDJ samples: scratch cuts, crowd roars, air raid sirens, chopped break fills. Original, not copied.\n\nMix: massive sub, punchy kick, bright stabs on top.",
    structure: "Structure:\nIntro: kick and scratches, DJ-friendly.\nBuild: kick roll into the first drop.\nDrop 1: the full groove, the motif as a chopped hook.\nVerse: kick and sub, her husky phrases.\nStop: the bass cuts for two beats.\nDrop 2: the groove returns harder.\nBridge: 4 bars, the motif and her voice; the twist is sung here.\nBuild: double-time kick roll.\nFinal drop: key change up a step, energy rises.\nOutro: the motif scratched out, hard stop.",
    vocal: "One adult female vocalist with a husky, warm voice, used like an instrument: a repeated hook line used like an instrument; few words, all rhythm.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 80-90%, short natural English 10-20%.",
    theme: "Theme: a woman visiting her old school on the day before it is torn down.\nTwist: in the bridge we learn she came to return something she borrowed long ago.\n" + FREE,
  },
  {
    id: 4, name: "Last Train Jingle",
    bpm: "BPM 162, E minor.",
    main: "Concept: a station departure jingle that becomes the last dance of the night. One hook, one groove. The motif: a departure jingle, chopped like a DJ sample. Groove: driving makina with a hard kick and a thick rolling bass.",
    core: "Groove first: a heavy kick and a sliding sub bass that drops out for one beat at the end of every phrase. The whole track rides this one groove.",
    extra: "Stops: a hard stop with a single vocal shot in the silence.\n\nDJ samples: pitched vocal one-shots, rewinds, reverse cymbals, crowd claps. Original, not copied.\n\nMix: heavy sub, tight kick, dry and loud.",
    structure: "Structure:\nIntro: a vocal shot, then the groove.\nVerse: kick and sliding sub, her voice in short phrases.\nBuild: kick roll, rising siren.\nDrop 1: the full groove, the motif chopped as the hook.\nStop: hard stop, one vocal shot in the silence.\nDrop 2: back in at full power.\nBridge: only the motif and her voice; the twist is sung here.\nBuild: kick roll, rewind.\nFinal drop: key change up a step, energy rises.\nOutro: hard stop on a vocal shot.",
    vocal: "One adult female vocalist with a husky, breathy voice, used like an instrument: breathy chopped phrases, a single vocal shot in every stop.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: English 70-80%, Japanese for the rest.",
    theme: "Theme: a woman who lets the last train leave without her every night.\nTwist: in the bridge we learn she is waiting for someone who took that train years ago.\n" + FREE,
  },
  {
    id: 5, name: "Boot-Up Screen",
    bpm: "BPM 170, G minor.",
    main: "Concept: a childhood game console starting up one last time. One hook, one groove. The motif: an 8-bit startup melody, chopped like a DJ sample. Groove: hyper makina with relentless kicks and a growling sub.",
    core: "Groove first: a punchy kick layered with booming floor-tom rolls and a sidechained sub bass that pumps the whole track. The whole track rides this one groove.",
    extra: "Stops: a stutter stop: the groove freezes in short repeats, then drops back in.\n\nDJ samples: stuttered vocal chops, record scratches, sirens, rave horns. Original, not copied.\n\nMix: sub-forward and pumping, the kick on top.",
    structure: "Structure:\nIntro: tom roll into the groove.\nVerse: kick and pumping sub, her voice chopped.\nBuild: kick roll and tom roll stacked.\nDrop 1: the full groove, the motif stuttered as the hook.\nStop: stutter freeze, then back in.\nBridge: the motif and her voice over a muffled kick; the twist is sung here.\nBuild: kick roll.\nFinal drop: key change up a step, energy rises, toms on every phrase.\nOutro: the groove freezes, hard stop.",
    vocal: "One adult female vocalist with a husky, rough voice, used like an instrument: stuttered chopped phrases that ride the kick; a raw belt only on the final drop.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 70-80%, short natural English 20-30%.",
    theme: "Theme: a woman cleaning out her late brother's room and finding the console they used to share.\nTwist: in the bridge we learn the save file still has his name next to hers.\n" + FREE,
  },
  {
    id: 6, name: "Snow Globe",
    bpm: "BPM 150, B minor.",
    main: "Concept: a snow globe shaken until it becomes a storm. One hook, one groove. The motif: a celesta, chopped like a DJ sample. Groove: stormy makina with a pounding kick and a sub bass that shakes the floor.",
    core: "Groove first: a hard kick followed by a short reverse bass hit on every beat, with a rolling sub underneath. The whole track rides this one groove.",
    extra: "Stops: a rewind stop before the final drop.\n\nDJ samples: rewinds, vinyl cuts, wordless shouts, chopped breaks. Original, not copied.\n\nMix: thick sub, clipped kick, wide stabs.",
    structure: "Structure:\nIntro: the groove's kick and reverse bass hits.\nBuild: kick roll, scratch.\nDrop 1: the full groove, the motif chopped on the off-beat.\nVerse: kick and sub, her husky voice.\nStop: one beat of silence.\nBridge: the motif alone with her voice; the twist is sung here.\nBuild: rewind stop, then kick roll.\nFinal drop: key change up a step, energy rises.\nOutro: kick and reverse bass, hard stop.",
    vocal: "One adult female vocalist with a husky, velvety voice, used like an instrument: smooth short phrases sitting on the groove like a synth line.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 90-100%, English only as short hook words.",
    theme: "Theme: a woman keeping a snow globe from the winter she was happiest.\nTwist: in the bridge we learn the globe is cracked and she has never let anyone see it.\n" + FREE,
  },
  {
    id: 7, name: "Between Stations",
    bpm: "BPM 155, C minor.",
    main: "Concept: a radio caught between stations that finally tunes in. One hook, one groove. The motif: a detuned radio melody, chopped like a DJ sample. Groove: crisp makina with a punchy kick and a bouncing sub bass.",
    core: "Groove first: a broken kick pattern in the verses that locks into a straight pounding four-on-the-floor in the drops, with a fat sub bass. The whole track rides this one groove.",
    extra: "Stops: kick-only bars: everything but the kick drops out for 2 bars, then the full groove crashes back.\n\nDJ samples: crowd shouts, scratches, sirens, radio-filtered voices. Original, not copied.\n\nMix: sub-heavy, kick-first, loud and clean.",
    structure: "Structure:\nIntro: the groove as a broken kick pattern and samples.\nVerse: broken groove, her voice in short phrases.\nBuild: kick roll locking into four-on-the-floor.\nDrop 1: the straight pounding groove, the motif as the hook.\nStop: kick-only bars, then the full groove crashes back.\nBridge: broken groove, the motif and her voice; the twist is sung here.\nBuild: kick roll.\nFinal drop: key change up a step, energy rises.\nOutro: kick only, hard stop.",
    vocal: "One adult female vocalist with a husky, low voice, used like an instrument: low phrases cut into the groove; the hook repeated until it becomes a sample.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese and English mixed inside every bar, random switching mid-line.",
    theme: "Theme: a woman driving at night, scanning radio stations for the song that played on her first date.\nTwist: in the bridge we learn she is the one who wrote that song.\n" + FREE,
  },
  {
    id: 8, name: "Summer Festival",
    bpm: "BPM 160, D minor.",
    main: "Concept: the last night of a summer festival that turns into a rave. One hook, one groove. The motif: a bamboo flute, chopped like a DJ sample. Groove: festival makina with a hard kick, taiko hits and deep bass.",
    core: "Groove first: a booming kick with a long sub tail, triplet kick fills at every phrase end and a bouncing bassline. The whole track rides this one groove.",
    extra: "Stops: one bar of silence broken by a scratch.\n\nDJ samples: scratch solos, festival crowd cheers, chopped vocal shots, rave stabs. Original, not copied.\n\nMix: booming sub, sharp kick, bright top.",
    structure: "Structure:\nIntro: the groove with crowd cheers.\nBuild: triplet kick roll.\nDrop 1: the full groove, the motif chopped as the hook.\nVerse: kick and bouncing bass, her husky voice.\nStop: one bar of silence broken by a scratch.\nDrop 2: harder.\nBridge: the motif and her voice over a soft kick; the twist is sung here.\nBuild: kick roll, crowd roar.\nFinal drop: key change up a step, energy rises.\nOutro: the motif, hard stop.",
    vocal: "One adult female vocalist with a husky, earthy voice, used like an instrument: bold chopped shouts without words mixed with one sung hook.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 65%, short natural English 35%, with one English hook in the chorus.",
    theme: "Theme: a woman at the last summer festival before she leaves her hometown for good.\nTwist: in the bridge we learn the person she promised to meet there is watching from far away.\n" + FREE,
  },
  {
    id: 9, name: "Worn Cassette",
    bpm: "BPM 152, A minor.",
    main: "Concept: a worn cassette tape that bursts into color. One hook, one groove. The motif: a nylon guitar on a worn tape, chopped like a DJ sample. Groove: bright makina with a punchy kick and a fat rolling bass.",
    core: "Groove first: a relentless kick with a rumbling sub bass, and a snare roll plus kick roll before every drop. The whole track rides this one groove.",
    extra: "Stops: a filter slam: the groove muffles for one beat, then opens fully.\n\nDJ samples: rewinds, pitched vocal shots, sirens, vinyl crackle cuts. Original, not copied.\n\nMix: fat sub, solid kick, no long reverb.",
    structure: "Structure:\nIntro: kick and a filtered sample.\nBuild: snare roll plus kick roll.\nDrop 1: the full groove, the motif chopped as the hook.\nVerse: kick and rumbling sub, her voice.\nStop: filter slam, one muffled beat.\nBridge: the motif and her voice, kick muffled; the twist is sung here.\nBuild: kick roll, rewind.\nFinal drop: key change up a step, energy rises.\nOutro: the groove cuts on a rewind.",
    vocal: "One adult female vocalist with a husky, lived-in voice, used like an instrument: intimate short lines, then chopped into the beat in the drops.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 75%, short natural English 25%, English used only for short repeated calls.",
    theme: "Theme: a woman finding a mixtape her mother made for her when she was a child.\nTwist: in the bridge we learn the last song on the tape is her mother singing.\n" + FREE,
  },
  {
    id: 10, name: "Lighthouse",
    bpm: "BPM 166, F# minor.",
    main: "Concept: a lone light in the dark that becomes a sunrise. One hook, one groove. The motif: a lone grand piano, chopped like a DJ sample. Groove: epic makina with a booming kick and a deep sub.",
    core: "Groove first: a tight kick and an octave-jumping bass that bounces, with tom rolls and kick rolls stacking before the drops. The whole track rides this one groove.",
    extra: "Stops: a double stop: two short stops in a row before the drop.\n\nDJ samples: scratches, crowd roars, chopped vocal shots, reverse hits. Original, not copied.\n\nMix: deep sub that shakes the floor, punchy kick.",
    structure: "Structure:\nIntro: the groove's kick and tom rolls.\nVerse: kick and bouncing bass, her husky voice.\nBuild: tom roll and kick roll stacking.\nDrop 1: the full groove, the motif chopped as the hook.\nStop: two short stops in a row.\nDrop 2: back in at full power.\nBridge: the motif and her voice only; the twist is sung here.\nBuild: kick roll.\nFinal drop: key change up a step, energy rises.\nOutro: one last kick, hard stop.",
    vocal: "One adult female vocalist with a husky, deep voice, used like an instrument: steady short phrases riding the kick; an unbreakable belt on the final drop.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 50-60%, short natural English 40-50%.",
    theme: "Theme: a woman who keeps a light on in her window for someone lost at sea.\nTwist: in the bridge we learn she is the one finally coming home.\n" + FREE,
  },
];

// パターンに付かない物語（1 場面 ＋ どんでん返し）
const THEME_EXTRA = [
"Theme: a woman returning a borrowed umbrella to someone she has not seen in ten years.\nTwist: in the bridge we learn she kept it so she would always have a reason to return.\n" + FREE,
"Theme: a woman rehearsing a wedding speech for her best friend.\nTwist: in the bridge we learn she is in love with the bride.\n" + FREE,
];

// Groove の makina だけをこの候補と入れ替える（既定 OFF）。重低音で乗れるジャンル
const GENRE_SWAPS = [
"hard bass", "hardstyle", "jumpstyle", "UK hardcore", "bass house", "drift phonk", "hard techno", "jungle", "J-core", "gabber",
];

const AVOID_FIXED = "Avoid: male vocal, duet, choir, childish or overly cute voice, robotic auto-tune, weak thin kick, soft low end, long ambient breakdowns, slow ballad sections, long intro, long fade-out, muddy mix.";

const BPM_EXTRA = ["BPM 158, C# minor.", "BPM 164, G minor."];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  avoid: [AVOID_FIXED],
};
})();
