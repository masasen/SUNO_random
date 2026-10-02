// V6 のプロンプト候補データ（DTM の手入力感: 打ち込みの手触り × 音源カード）。
// ピアノロールに 1 音ずつ打ち込んだような機械的な正確さ（クオンタイズ・固定ベロシティ・段階的なオートメーション・
// プログラムチェンジ・人間には弾けない速弾き・ユニゾン重ね・GM ドラムの定番フィル）を全ベースの主役にする。
// 音の時代と質感はメイン行の音源カード（GM 音源モジュール / 国産 PC の FM 音源 / トラッカー / 初期のソフトシンセ / DAW 付属プラグイン）で決める。
// 機種名・ソフト名・製品名は SUNO が弾くので書かない。インスト中心で、歌がある場合だけ言語比率が効く書き方にする。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
// Never use は V5 の指定をそのまま使う（app.js の resolveData が V5 から借りる。データファイル同士は読み込み順が決まらないので直接参照しない）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

const IF_SUNG = "If sung, write every line in your own fresh words.";

const INST_LEAD = "Instrumental: no vocals.\nThe lead synth sings the melody like a voice, typed in note by note.";
const INST_DUEL = "Instrumental: no vocals.\nTwo lead presets trade the melody phrase by phrase, then play it together in unison.";
const INST_PIANO = "Instrumental: no vocals.\nA bright piano preset carries the melody with inhumanly fast fills between phrases.";
const INST_BRASS = "Instrumental: no vocals.\nSynth brass and a square lead carry the melody in octaves.";
const INST_GUITAR = "Instrumental: no vocals.\nA distorted guitar preset plays the melody, clearly sequenced, no real strumming.";
const SYNTH_VOX = "A stiff synthesized singing voice, typed in note by note: fixed pitch steps, exact timing, no breaths.\nFemale-sounding, bright and slightly robotic.";
const HUMAN_VOX = "One female vocalist with a clear voice sings the melody, but the backing stays fully programmed and quantized.\nNo male vocal, no duet, no choir.";

const PATTERNS = [
  {
    id: 1, name: "Fusion Battle",
    bpm: "BPM 168, E minor.",
    main: "Genre: Japanese fusion-style game battle theme, hand-typed DTM. Sound source: a 1990s General MIDI sound module, stock presets only. Mood: heroic, tense, showing off.",
    core: "Typed-in feel: every note perfectly quantized to the grid, the same velocity on every note, slap bass typed as 16th notes, synth brass stabs exactly on the beat.",
    extra: "Arrangement: the melody is doubled in unison by synth brass and a square lead; the bass never rests.\n\nDrums: a General MIDI drum kit, crash cymbal on every 8th bar, a descending tom fill into each section.\n\nMix: dry and bright, fixed reverb and chorus sends, no mastering polish; every part clearly audible.",
    structure: "Structure:\nIntro: 4 bars of drum kit and slap bass.\nTheme A: the melody in unison.\nTheme B: key moves up, synth brass hits.\nSolo: a 32nd-note synth solo no human could play.\nTheme A: return, a new preset on the lead.\nLoop: seamless loop back to Theme A, then a short fade.",
    vocal: INST_DUEL,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a boss appearing on the screen and the party drawing their weapons.\n" + IF_SUNG,
  },
  {
    id: 2, name: "FM Eurobeat",
    bpm: "BPM 155, F# minor.",
    main: "Genre: eurobeat, hand-typed DTM. Sound source: a 4-operator FM sound board from 1990s Japanese home computers, with square-wave channels. Mood: fast, dramatic, glittering.",
    core: "Typed-in feel: octave-jumping bass typed as straight 8th notes, quantized and the same velocity throughout, arpeggios at exact 16th notes, volume changes in hard steps.",
    extra: "Arrangement: FM brass and an FM electric piano answer each other; the lead switches to a new FM patch every chorus.\n\nDrums: thin sampled kick and snare, a gated crash on every chorus start.\n\nMix: crunchy, narrow, a little harsh, no modern loudness.",
    structure: "Structure:\nIntro: FM arpeggio alone, then drums.\nVerse: bass and FM electric piano.\nPre-chorus: a rising arpeggio, volume stepping up.\nChorus: full FM brass, program change on the lead.\nInterlude: a fast FM solo typed in 32nd notes.\nChorus: again, one key higher.\nEnding: a hard stop on one FM brass hit.",
    vocal: INST_BRASS,
    ratio: "Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
    theme: "Image: a night highway race seen from an old computer monitor.\n" + IF_SUNG,
  },
  {
    id: 3, name: "Tracker J-core",
    bpm: "BPM 175, C minor.",
    main: "Genre: J-core, hand-typed DTM. Sound source: a tracker with short looped samples and only a few channels, notes typed into rows. Mood: hyper, bouncy, mischievous.",
    core: "Typed-in feel: notes typed row by row, perfectly quantized, fixed velocity, sample retriggers that stutter at exact 32nd notes, pitch slides in hard steps.",
    extra: "Arrangement: a chopped vocal sample is retriggered as a melody; the piano sample plays impossible runs.\n\nDrums: short looped breakbeat samples resequenced row by row, a hard kick on every beat.\n\nMix: lo-fi samples, slight aliasing, punchy and dry.",
    structure: "Structure:\nIntro: piano sample run, then the kick.\nTheme A: retriggered vocal sample melody.\nBuild: snare retriggers speeding up row by row.\nDrop: full kick and bass, piano stabs.\nBreak: the piano plays an impossible 32nd-note run alone.\nDrop: again, a new sample on the lead.\nEnding: a single sample retrigger, then silence.",
    vocal: SYNTH_VOX,
    ratio: "Lyrics (if any): Japanese and English mixed inside every bar, random switching mid-line.",
    theme: "Image: a cartoon cat sprinting across a pixel city at full speed.\n" + IF_SUNG,
  },
  {
    id: 4, name: "Bedroom Trance",
    bpm: "BPM 140, A minor.",
    main: "Genre: trance, hand-typed DTM. Sound source: early 2000s free soft synths and a stock drum kit, made in a bedroom. Mood: soaring, earnest, a little naive.",
    core: "Typed-in feel: gated chords typed as exact 16th notes, every note quantized, identical velocity, the filter automation drawn in blocky steps.",
    extra: "Arrangement: a supersaw lead from a free plug-in, the melody doubled by a pluck one octave up.\n\nDrums: a stock four-on-the-floor kick, open hat on every off-beat, a snare roll typed in 16ths then 32nds.\n\nMix: wide but slightly thin, preset reverb, no sidechain finesse.",
    structure: "Structure:\nIntro: kick and off-beat hats.\nBuild: arpeggio enters, filter opening in steps.\nBreakdown: pads and the lead melody alone.\nSnare roll: 16ths turning into 32nds.\nDrop: full lead, a new preset doubling it.\nEnding: kick alone, then a hard cut.",
    vocal: INST_LEAD,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: dawn over a sleeping city seen from a bedroom window with the monitor still on.\n" + IF_SUNG,
  },
  {
    id: 5, name: "Prog Final Boss",
    bpm: "BPM 150, D minor.",
    main: "Genre: progressive rock game final boss theme, hand-typed DTM. Sound source: a 1990s General MIDI sound module with an organ, distorted guitar and orchestral hit presets. Mood: grand, dark, relentless.",
    core: "Typed-in feel: odd-meter riffs typed precisely, quantized, the same velocity on every note, the organ and guitar locked in perfect unison.",
    extra: "Arrangement: orchestral hits on every accent, organ and distorted guitar presets play the riff together, a harpsichord preset in the quiet part.\n\nDrums: a General MIDI drum kit with double kick typed as 16ths, tom fills descending.\n\nMix: dry, dense, every preset clearly separated.",
    structure: "Structure:\nIntro: orchestral hits and organ.\nRiff A: organ and guitar in unison, 7/8 bars.\nTheme: the melody on a synth lead.\nQuiet part: harpsichord preset alone.\nSolo: guitar and organ trade 32nd-note runs.\nRiff A: return, louder.\nLoop: back to the Riff A for the next phase of the fight.",
    vocal: INST_GUITAR,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: the last tower collapsing while the final enemy changes form.\n" + IF_SUNG,
  },
  {
    id: 6, name: "Typed City Pop",
    bpm: "BPM 118, B-flat major.",
    main: "Genre: city pop, hand-typed DTM. Sound source: a 4-operator FM sound board from 1990s Japanese home computers, electric piano and slap bass patches. Mood: breezy, nostalgic, night-drive.",
    core: "Typed-in feel: slap bass typed with exact ghost notes, every note quantized, fixed velocity, electric piano chords landing exactly on the grid.",
    extra: "Arrangement: FM electric piano chords, FM slap bass, a square lead playing the melody with a sax-like patch on the chorus.\n\nDrums: a programmed kit with a sampled snare, claps on 2 and 4, a tom fill every 8 bars.\n\nMix: clean and narrow, fixed chorus send on the keys.",
    structure: "Structure:\nIntro: electric piano and slap bass.\nVerse: the melody on a soft lead.\nPre-chorus: chords move up, volume in steps.\nChorus: program change to a sax-like patch.\nSolo: a fast FM solo typed in 32nd notes.\nChorus: again.\nEnding: a fade-out over the chorus.",
    vocal: HUMAN_VOX,
    ratio: "Lyrics (if any): Japanese 80-90%, short natural English 10-20%.",
    theme: "Image: city lights from a car window late at night, the radio playing something old.\n" + IF_SUNG,
  },
  {
    id: 7, name: "MIDI Makina",
    bpm: "BPM 162, G minor.",
    main: "Genre: makina, hand-typed DTM. Sound source: a 1990s General MIDI sound module, synth lead and piano presets over a pounding kick. Mood: euphoric, fast, hands-up.",
    core: "Typed-in feel: offbeat bass typed as exact 8th notes, quantized, identical velocity on every note, the piano riff in rigid 16th notes.",
    extra: "Arrangement: a stock synth lead doubled by a piano preset, rave-like orchestral hits on the accents.\n\nDrums: a General MIDI kick on every beat, open hats on the off-beats, crash on every 8th bar.\n\nMix: loud but plain, fixed reverb, no polish.",
    structure: "Structure:\nIntro: kick and offbeat bass.\nTheme A: piano riff and synth lead in unison.\nBuild: snare roll typed in 16ths then 32nds.\nTheme B: the melody on a new preset, one key higher.\nBreak: piano preset alone.\nTheme A: return at full power.\nEnding: a hard stop on the last beat.",
    vocal: INST_PIANO,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a crowded dance floor in a small town, everyone with hands up.\n" + IF_SUNG,
  },
  {
    id: 8, name: "Plug-in Drum & Bass",
    bpm: "BPM 172, F minor.",
    main: "Genre: drum & bass, hand-typed DTM. Sound source: the stock plug-ins that come with a DAW, a sampled break and a basic bass synth. Mood: speedy, cool, restless.",
    core: "Typed-in feel: the break chopped and typed slice by slice, quantized, fixed velocity, the bass notes sliding in hard steps.",
    extra: "Arrangement: stock electric piano chords, a basic bass synth, a pluck melody doubled an octave up.\n\nDrums: a sampled break resequenced by hand, a kick under every first slice.\n\nMix: clean, slightly dull top, preset reverb only.",
    structure: "Structure:\nIntro: pads and a filtered break.\nDrop: break and bass, the pluck melody.\nSection B: the break rearranged slice by slice.\nBreak: electric piano alone, a preset change.\nDrop: again with 32nd-note break edits.\nEnding: the break stops on one slice.",
    vocal: INST_LEAD,
    ratio: "Lyrics (if any): English 70-80%, Japanese for the rest.",
    theme: "Image: a late train racing through tunnels, lights flashing past.\n" + IF_SUNG,
  },
  {
    id: 9, name: "Tracker Chiptechno",
    bpm: "BPM 145, D major.",
    main: "Genre: chiptune-flavored techno, hand-typed DTM. Sound source: a tracker with square, triangle and noise channels, notes typed into rows. Mood: playful, bright, nostalgic.",
    core: "Typed-in feel: arpeggios typed as fast row-by-row chords, perfectly quantized, fixed velocity, vibrato typed as hard pitch steps.",
    extra: "Arrangement: a square lead and a triangle bass, the melody echoed by a second square one row later.\n\nDrums: a noise-channel snare and a short sampled kick, a fill on every 8th bar.\n\nMix: raw, mono-ish, bright, no reverb.",
    structure: "Structure:\nIntro: arpeggio alone.\nTheme A: square lead melody.\nTheme B: echo lead, the bass busier.\nBreak: noise-channel drum solo typed row by row.\nTheme A: the lead switches to a new duty cycle preset.\nLoop: seamless loop back to Theme A, then a short fade.",
    vocal: INST_DUEL,
    ratio: "Lyrics: none. Instrumental, the lead melody carries the song.",
    theme: "Image: a hidden bonus stage found by accident after school.\n" + IF_SUNG,
  },
  {
    id: 10, name: "Anisong DTM",
    bpm: "BPM 180, E-flat major.",
    main: "Genre: anime-song style J-pop, hand-typed DTM. Sound source: early 2000s soft synths and stock plug-ins, piano and strings presets. Mood: bright, earnest, rushing.",
    core: "Typed-in feel: piano runs typed faster than any human, everything quantized, the same velocity on every note, string chords entered as block chords.",
    extra: "Arrangement: a piano preset plays constant 16th-note runs, string presets hold block chords, a synth lead doubles the melody.\n\nDrums: a programmed rock kit, crash on every chorus, a descending tom fill into each chorus.\n\nMix: bright and busy, preset reverb, slightly harsh highs.",
    structure: "Structure:\nIntro: a fast piano run, then the full band of presets.\nVerse: piano and bass.\nPre-chorus: strings rise in blocky steps.\nChorus: everything in, piano runs between lines.\nInterlude: a 32nd-note piano solo no human could play.\nChorus: one key higher.\nEnding: a final piano run and one chord.",
    vocal: SYNTH_VOX,
    ratio: "Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
    theme: "Image: running to catch someone before the train doors close.\n" + IF_SUNG,
  },
];

const THEME_EXTRA = [
"Image: a save point in a quiet forest where the music suddenly gets calm.\n" + IF_SUNG,
"Image: a title screen waiting for someone to press start.\n" + IF_SUNG,
];

const LYRICS_RATIOS = [
"Lyrics: none. Instrumental, the lead melody carries the song.",
"Lyrics (if any): Japanese 70-80%, short natural English 20-30%.",
"Lyrics (if any): English 70-80%, Japanese for the rest.",
];

// ジャンルは各ベースで違うので置換は既定 OFF。使うときは置換元にメイン行のジャンル（例: makina）を入れる
const GENRE_SWAPS = [
"makina", "eurobeat", "J-core", "trance", "drum & bass", "city pop", "happy hardcore", "progressive rock",
];

const AVOID_FIXED = "Avoid: humanized timing, swing, expressive velocity, live band feel, real orchestra, polished modern mastering, big-room EDM drop, heavy auto-tune, muddy mix.";

const BPM_EXTRA = ["BPM 160, C minor.", "BPM 132, A minor."];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  avoid: [AVOID_FIXED],
};
})();
