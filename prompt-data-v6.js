// V6 のプロンプト候補データ（DTM の手入力感 × 重低音の EDM / hyper techno / techpara）。
// ピアノロールに 1 音ずつ打ち込んだような機械的な正確さ（クオンタイズ・固定ベロシティ・段階的なオートメーション・
// プログラムチェンジ・人間には弾けない速弾き・ユニゾン重ね・機械的に速まるスネアロール）を全ベースの主役にし、
// 歪んだキック・サブベース・オフビートのベースで重低音を聞かせる。
// 音の時代と質感はメイン行の音源カード（GM 音源モジュール / 国産 PC の FM 音源 / トラッカー / 初期のソフトシンセ / DAW 付属プラグイン）で決める。
// 機種名・ソフト名・製品名は SUNO が弾くので書かない。インスト中心で、歌がある場合だけ言語比率が効く書き方にする。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
// Never use は V5 の指定をそのまま使う（app.js の resolveData が V5 から借りる。データファイル同士は読み込み順が決まらないので直接参照しない）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

const IF_SUNG = "If sung, write every line in your own fresh words.";

const INST_LEAD = "Instrumental: no vocals.\nThe lead synth sings the melody like a voice, typed in note by note.";
const INST_DUEL = "Instrumental: no vocals.\nTwo lead presets trade the melody phrase by phrase, then play it together in unison.";
const INST_PIANO = "Instrumental: no vocals.\nA bright piano preset carries the melody with inhumanly fast fills between phrases.";
const INST_STAB = "Instrumental: no vocals.\nRave stabs and a hoover-like lead carry the melody in octaves.";
const INST_FM = "Instrumental: no vocals.\nFM brass and a square lead carry the melody in octaves.";
const INST_BASS = "Instrumental: no vocals.\nA distorted bass synth carries the hook, doubled by a saw lead in the drops.";
const SYNTH_VOX = "A stiff synthesized singing voice, typed in note by note: fixed pitch steps, exact timing, no breaths.\nFemale-sounding, bright and slightly robotic.";
const HUMAN_VOX = "One female vocalist with a clear, bright voice sings the melody, but the backing stays fully programmed and quantized.\nNo male vocal, no duet, no choir.";

const PATTERNS = [
  {
    id: 1, name: "GM Hyper Techno",
    bpm: "BPM 160, F minor.",
    main: "Genre: hyper techno, hand-typed DTM. Sound source: a 1990s General MIDI sound module, stock presets pushed hard. Mood: relentless, euphoric, hands-up.",
    core: "Typed-in feel: a distorted kick on every beat and an offbeat sub bass typed as exact 8th notes, everything quantized, the same velocity on every note.",
    extra: "Arrangement: a saw lead and a square lead in unison, rave stabs on every accent, the lead preset changes every drop.\n\nDrums: a hard kick on every beat, open hats on the off-beats, a snare roll typed in 16ths then 32nds.\n\nMix: kick and sub bass loud and up front, heavy low end, dry and bright on top.",
    structure: "Structure:\nIntro: kick and offbeat bass only.\nBuild: snare roll in 16ths then 32nds, filter opening in steps.\nDrop: full kick, sub bass and unison leads.\nBreak: stabs alone, volume stepping down.\nBuild: the roll again, faster.\nDrop: a new lead preset, one key higher.\nEnding: a hard stop on the last kick.",
    vocal: INST_STAB,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a packed dance floor at full power, every hand in the air on the drop.\n" + IF_SUNG,
  },
  {
    id: 2, name: "FM Techpara",
    bpm: "BPM 155, F# minor.",
    main: "Genre: techpara, techno parapara with a catchy synth melody, hand-typed DTM. Sound source: a 4-operator FM sound board from 1990s Japanese home computers, with square-wave channels. Mood: flashy, catchy, made for synchronized dance moves.",
    core: "Typed-in feel: a hard four-on-the-floor kick and an octave-jumping FM bass typed as straight 8ths, quantized, fixed velocity, arpeggios at exact 16th notes.",
    extra: "Arrangement: an FM brass lead plays a short catchy hook that repeats every 4 bars; the hook switches to a new FM patch each chorus.\n\nDrums: a punchy kick on every beat, claps on 2 and 4, a gated crash on every chorus start.\n\nMix: kick and FM bass heavy in the low end, crunchy bright top.",
    structure: "Structure:\nIntro: FM arpeggio, then the kick.\nVerse: kick and octave bass, the hook teased.\nBuild: snare roll typed in 16ths, volume stepping up.\nDrop: the full hook, program change on the lead.\nInterlude: a fast FM solo typed in 32nd notes.\nDrop: the hook again, one key higher.\nEnding: a hard stop on one FM brass hit.",
    vocal: HUMAN_VOX,
    ratio: "Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
    theme: "Image: a line of dancers moving their arms in perfect sync under the lights.\n" + IF_SUNG,
  },
  {
    id: 3, name: "Tracker Hyper Techno",
    bpm: "BPM 165, C minor.",
    main: "Genre: hyper techno, hand-typed DTM. Sound source: a tracker with short looped samples and only a few channels, notes typed into rows. Mood: hyper, hard, mischievous.",
    core: "Typed-in feel: a sampled kick retriggered on every row-beat and a short looped bass sample on every off-beat, perfectly quantized, fixed velocity.",
    extra: "Arrangement: a chopped vocal sample is retriggered as a melody; a stab sample plays impossible runs.\n\nDrums: a hard sampled kick on every beat, snare retriggers stuttering at exact 32nd notes.\n\nMix: lo-fi samples but a heavy low end, slight aliasing, punchy and dry.",
    structure: "Structure:\nIntro: stab run, then the kick.\nBuild: snare retriggers speeding up row by row.\nDrop: kick and bass at full power, retriggered vocal melody.\nBreak: the stab plays an impossible 32nd-note run alone.\nBuild: retriggers again.\nDrop: a new sample on the lead.\nEnding: a single retrigger, then silence.",
    vocal: SYNTH_VOX,
    ratio: "Lyrics (if any): Japanese and English mixed inside every bar, random switching mid-line.",
    theme: "Image: dark night streets blurring past from the back of a speeding bike.\n" + IF_SUNG,
  },
  {
    id: 4, name: "Bedroom Electro EDM",
    bpm: "BPM 128, A minor.",
    main: "Genre: electro house EDM, hand-typed DTM. Sound source: early 2000s free soft synths and a stock drum kit, made in a bedroom. Mood: bouncy, cocky, loud.",
    core: "Typed-in feel: a fat kick on every beat and a distorted bass synth typed in rigid 16th notes, quantized, identical velocity, the filter automation drawn in blocky steps.",
    extra: "Arrangement: a distorted bass synth carries the hook, a supersaw from a free plug-in doubles it in the drop.\n\nDrums: a stock kick on every beat, claps on 2 and 4, a snare roll typed in 16ths then 32nds.\n\nMix: heavy sub and kick, slightly thin top, preset reverb, simple volume ducking.",
    structure: "Structure:\nIntro: kick and filtered bass.\nBuild: filter opening in steps, snare roll.\nDrop: the distorted bass hook at full power.\nBreak: chords alone, a preset change.\nBuild: the roll again.\nDrop: bass hook doubled by the supersaw.\nEnding: kick alone, then a hard cut.",
    vocal: INST_LEAD,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a small club where the bass shakes the drinks on the bar.\n" + IF_SUNG,
  },
  {
    id: 5, name: "GM Hard Trance",
    bpm: "BPM 145, D minor.",
    main: "Genre: hard trance, hand-typed DTM. Sound source: a 1990s General MIDI sound module with saw lead, synth strings and orchestral hit presets. Mood: driving, dramatic, relentless.",
    core: "Typed-in feel: a pounding kick on every beat and a rolling offbeat bass in exact 16ths, every note quantized, the same velocity throughout.",
    extra: "Arrangement: gated synth strings typed as 16th notes, orchestral hits on every accent, a saw lead playing the melody in unison with a square lead.\n\nDrums: a hard kick on every beat, open hats on the off-beats, crash on every 8th bar.\n\nMix: dense and dry, strong kick and bass in the low end, every preset clearly separated.",
    structure: "Structure:\nIntro: kick and rolling bass.\nBuild: gated strings, filter opening in steps.\nBreakdown: the melody alone on a saw lead.\nBuild: snare roll in 16ths then 32nds.\nDrop: full kick, bass and unison leads, orchestral hits.\nEnding: kick alone, then a hard cut.",
    vocal: INST_DUEL,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: racing along an elevated highway at night with the city below.\n" + IF_SUNG,
  },
  {
    id: 6, name: "FM Hyper Techno",
    bpm: "BPM 158, G minor.",
    main: "Genre: hyper techno, hand-typed DTM. Sound source: a 4-operator FM sound board from 1990s Japanese home computers, gritty FM bass and brass patches. Mood: fast, gritty, euphoric.",
    core: "Typed-in feel: a hard kick on every beat with a gritty FM bass on every off-beat, quantized, fixed velocity, volume changes in hard steps.",
    extra: "Arrangement: FM brass stabs and a square lead in octaves; the lead switches to a new FM patch every drop.\n\nDrums: a thin sampled kick layered with an FM bass thump on every beat, a gated crash on every drop.\n\nMix: heavy low end from the FM bass, crunchy and narrow on top.",
    structure: "Structure:\nIntro: FM arpeggio alone, then the kick.\nBuild: arpeggio speeding up, snare roll typed in 16ths.\nDrop: kick, FM bass and brass stabs at full power.\nInterlude: a fast FM solo typed in 32nd notes.\nBuild: the roll again.\nDrop: program change on the lead, one key higher.\nEnding: a hard stop on one FM brass hit.",
    vocal: INST_FM,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: an old computer screen flickering while the speakers shake the room.\n" + IF_SUNG,
  },
  {
    id: 7, name: "GM Techpara",
    bpm: "BPM 152, E minor.",
    main: "Genre: techpara, techno parapara with a bright synth hook, hand-typed DTM. Sound source: a 1990s General MIDI sound module, synth lead and piano presets over a pounding kick. Mood: bright, catchy, made for synchronized dance moves.",
    core: "Typed-in feel: a pounding kick on every beat and an offbeat bass typed as exact 8th notes, quantized, identical velocity, the piano riff in rigid 16th notes.",
    extra: "Arrangement: a stock synth lead doubled by a piano preset plays a short repeating hook; the hook moves to a new preset every chorus.\n\nDrums: a General MIDI kick on every beat, open hats on the off-beats, crash on every 8th bar.\n\nMix: loud kick and bass in the low end, plain and bright on top, fixed reverb.",
    structure: "Structure:\nIntro: kick and offbeat bass.\nVerse: piano riff, the hook teased.\nBuild: snare roll typed in 16ths then 32nds.\nDrop: the full hook, piano and synth lead in unison.\nBreak: piano preset alone.\nDrop: the hook on a new preset, one key higher.\nEnding: a hard stop on the last beat.",
    vocal: INST_PIANO,
    ratio: "Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
    theme: "Image: a crowd copying the same arm moves, laughing on every chorus.\n" + IF_SUNG,
  },
  {
    id: 8, name: "Plug-in Festival EDM",
    bpm: "BPM 130, F minor.",
    main: "Genre: festival EDM, hand-typed DTM. Sound source: the stock plug-ins that come with a DAW, a basic saw synth and a stock drum kit. Mood: huge, simple, hands-up.",
    core: "Typed-in feel: a big kick on every beat and a sub bass typed under every chord, quantized, fixed velocity, the riser drawn as a straight automation line.",
    extra: "Arrangement: a stock saw synth plays the drop melody in big block chords, a pluck doubles it an octave up.\n\nDrums: a stock kick on every beat, claps on 2 and 4, a snare roll typed in 16ths then 32nds.\n\nMix: massive kick and sub bass, clean but slightly dull top, preset reverb only.",
    structure: "Structure:\nIntro: pads and a filtered kick.\nBuild: the riser rising in a straight line, snare roll speeding up.\nDrop: the block-chord melody, kick and sub at full power.\nBreak: pads alone, a preset change.\nBuild: the roll again.\nDrop: the melody on a new preset.\nEnding: the kick stops on the last beat.",
    vocal: INST_BASS,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a huge outdoor stage seen from the very back of the crowd.\n" + IF_SUNG,
  },
  {
    id: 9, name: "Tracker Techpara",
    bpm: "BPM 150, D major.",
    main: "Genre: techpara, techno parapara with a chiptune-bright hook, hand-typed DTM. Sound source: a tracker with square, triangle and noise channels plus a sampled kick, notes typed into rows. Mood: playful, catchy, made for synchronized dance moves.",
    core: "Typed-in feel: a sampled kick on every beat and a triangle bass on every off-beat, arpeggios typed as fast row-by-row chords, perfectly quantized, fixed velocity.",
    extra: "Arrangement: a square lead plays a short repeating hook, echoed by a second square one row later.\n\nDrums: a heavy sampled kick on every beat, a noise-channel snare, a fill on every 8th bar.\n\nMix: raw and bright, the sampled kick and bass carrying the low end, no reverb.",
    structure: "Structure:\nIntro: arpeggio alone, then the kick.\nVerse: square hook teased over kick and bass.\nBuild: noise snare typed row by row, speeding up.\nDrop: the full hook with the echo lead.\nBreak: noise-channel drum solo.\nDrop: the lead switches to a new duty cycle preset.\nLoop: seamless loop back to the drop, then a short fade.",
    vocal: INST_DUEL,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a festival of tiny pixel dancers all moving in sync.\n" + IF_SUNG,
  },
  {
    id: 10, name: "Anisong Hyper Techno",
    bpm: "BPM 170, E-flat major.",
    main: "Genre: hyper techno with an anime-song melody, hand-typed DTM. Sound source: early 2000s soft synths and stock plug-ins, piano and saw lead presets. Mood: bright, earnest, rushing.",
    core: "Typed-in feel: a hard kick on every beat and an offbeat bass in exact 8ths, piano runs typed faster than any human, everything quantized, the same velocity on every note.",
    extra: "Arrangement: a piano preset plays constant 16th-note runs, a saw lead doubles the melody, string presets hold block chords.\n\nDrums: a hard kick on every beat, a snare roll typed in 16ths then 32nds before each drop.\n\nMix: heavy kick and sub bass in the low end, bright and busy on top, preset reverb.",
    structure: "Structure:\nIntro: a fast piano run, then the kick.\nVerse: piano and offbeat bass.\nBuild: strings rising in blocky steps, snare roll.\nDrop: everything in, piano runs between phrases.\nInterlude: a 32nd-note piano solo no human could play.\nDrop: one key higher.\nEnding: a final piano run and one kick.",
    vocal: SYNTH_VOX,
    ratio: "Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
    theme: "Image: running to catch someone before the train doors close.\n" + IF_SUNG,
  },
];

const THEME_EXTRA = [
"Image: the last song of the night, the lights flashing faster and faster.\n" + IF_SUNG,
"Image: a title screen waiting for someone to press start.\n" + IF_SUNG,
];

const LYRICS_RATIOS = [
"Lyrics: none. Instrumental, the lead melody carries the song.",
"Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
"Lyrics (if any): English 70-80%, Japanese for the rest.",
];

// ジャンルは各ベースで違うので置換は既定 OFF。使うときは置換元にメイン行のジャンル（例: hyper techno）を入れる
const GENRE_SWAPS = [
"hyper techno", "techpara", "hard trance", "electro house EDM", "festival EDM", "hardstyle", "hard techno", "makina", "eurobeat",
];

const AVOID_FIXED = "Avoid: humanized timing, swing, expressive velocity, live band feel, real orchestra, weak thin kick, soft low end, polished modern mastering, heavy auto-tune, muddy mix.";

const BPM_EXTRA = ["BPM 162, C minor.", "BPM 150, A minor."];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  avoid: [AVOID_FIXED],
};
})();
