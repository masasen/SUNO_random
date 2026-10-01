// V5 のプロンプト候補データ（Glitchcore hip-hop × sweet Lolita female vocals）。
// V1〜V4 と違い、歌詞テーマ・Never use・Avoid も V5 専用。古文フラグメントは使わない。
// このファイルだけ編集すれば V5 の候補が更新されます。変更後はページを再読み込みしてください。
//
// 全ベースの main は BASE（指定のスタイル文）で始まり、その後ろにベースごとの味付けを足す。
// main は自動トリムで削られないので、どのランダム結果にもスタイル文が必ず入る。
// ジャンル置換は BASE 先頭の「Glitchcore hip-hop」だけを入れ替える（既定 OFF）。
// 歌詞の文言は指定せず、テーマは情景と感情だけを抽象的に書いて SUNO 側に任せる。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v5 = (() => {

const BASE = "Genre: Glitchcore hip-hop. Sweet Lolita female vocals, fast rap over a fast, driving beat, bright compressed synth layers with rising tension and sudden drops, distorted bass and shimmering synths.";
const FREE = "Write every line in your own fresh words; invent the details and the hook yourself.";
const NOMALE = "No male vocal, no duet, no choir.";

const EN = "Lyrics: English 70-80%, Japanese for the rest.";
const JP = "Lyrics: Japanese 70-80%, English for the rest.";
const MIX = "Lyrics: Japanese and English mixed inside every bar, switching mid-line.";

const PATTERNS = [
  {
    id: 1, name: "Sugar Glitch Rush",
    bpm: "BPM 170, F# minor.",
    main: BASE + " Flavor: hyperpop-leaning sugar rush with bitcrushed sparkles. Mood: hyper, sweet, overstimulated.",
    core: "Core sound: punchy clipped kick, rolling distorted 808 bass, rapid hi-hat rolls, bright supersaw stacks squashed by heavy compression, shimmering bell arpeggios, bitcrushed sparkle layer.",
    extra: "Glitch FX: stutter edits on the last beat of every bar, buffer repeats, sudden tape stops, pitch-shifted vocal chops.\n\nDrops: the build rises for 8 bars, then one beat of total silence, then the drop slams in at full width.\n\nMix: loud, bright, hyper-compressed, sparkling top end. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching synth sparkles, vocal chop.\nVerse 1: fast sweet rap over the driving beat.\nBuild: synth layers stack, rising tension.\nDrop: sudden silence, then distorted bass drop.\nVerse 2: faster rap, stutter edits.\nBuild: snare roll, riser.\nFinal drop: biggest, every layer on.\nOutro: one glitch, hard cut.",
    vocal: "ONE sweet Lolita female vocalist only: high, sugary, doll-like tone with crisp fast rap.\nSweet sing-song hooks between the rap lines; her own pitched-up doubles glitch in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a sugar-coated girl whose thoughts move faster than the screen can load.\nEmotion: hyper, giddy, slightly overwhelmed.\n" + FREE,
  },
  {
    id: 2, name: "Doll Circuit",
    bpm: "BPM 160, A minor.",
    main: BASE + " Flavor: digicore glitch with a music-box melody running through broken circuits. Mood: cute, eerie, restless.",
    core: "Core sound: tight trap kick, distorted sliding 808, fast triplet hats, a music-box lead glitching in and out, compressed pluck stacks, shimmering pads.",
    extra: "Glitch FX: music-box notes reversed and stuttered, digital dropouts, sample-rate crushes on the vocal.\n\nDrops: the music box winds up into rising tension, cuts to silence, then the bass drops hard.\n\nMix: bright, crunchy, doll-house sparkle over heavy bass. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching music box alone.\nVerse 1: fast whispery-sweet rap.\nBuild: music box speeds up, synths stack.\nDrop: sudden drop, distorted bass.\nVerse 2: rap tightens, dropouts.\nBuild: rising tension, riser.\nFinal drop: everything glitching at once.\nOutro: music box winds down, cut.",
    vocal: "ONE sweet Lolita female vocalist only: whispery, doll-like, porcelain-sweet tone with precise fast rap.\nSoft breathy hooks; her voice is sample-crushed and stuttered in the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a living doll whose circuits keep skipping, trying to finish a sentence before she glitches out.\nEmotion: cute, fragile, quietly eerie.\n" + FREE,
  },
  {
    id: 3, name: "Lace Breakcore",
    bpm: "BPM 175, D minor.",
    main: BASE + " Flavor: breakcore edge with chopped amen breaks under the hip-hop groove. Mood: frantic, sweet, chaotic.",
    core: "Core sound: hard kick under rapid chopped amen breaks, distorted reese-like bass, bright compressed synth chords, shimmering glassy arps, noise bursts.",
    extra: "Glitch FX: break chops reshuffled every bar, granular freezes, sudden reverse swells.\n\nDrops: tension rises with accelerating break rolls, then a hard stop and a crushing drop.\n\nMix: loud and chaotic but clear vocal, crisp breaks. About 2:15, hard cut.",
    structure: "Structure:\nIntro (2 bars): break roll, glitch freeze.\nVerse 1: rapid sweet rap over breaks.\nBuild: break rolls accelerate, rising tension.\nDrop: hard stop, then crushing bass drop.\nBreak: chopped amen solo.\nVerse 2: rap at full speed.\nFinal drop: breaks and bass at maximum.\nOutro: granular freeze, cut.",
    vocal: "ONE sweet Lolita female vocalist only: bright, cute yet sharp tone with relentless fast rap.\nShort sung hook lines; her own voice is chopped like the breaks in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a girl in a lace dress running through a city that keeps breaking apart around her.\nEmotion: frantic, determined, sweet under pressure.\n" + FREE,
  },
  {
    id: 4, name: "Candy Overdrive",
    bpm: "BPM 150, C minor.",
    main: BASE + " Flavor: overdriven trap bounce with candy-bright lead stabs. Mood: bratty, bouncy, bold.",
    core: "Core sound: hard trap kick, heavily distorted 808 glides, double-time hats, candy-bright compressed lead stabs, shimmering synth bells, clipped snares.",
    extra: "Glitch FX: 808 stutters, vocal pitch flips, sudden half-bar mutes.\n\nDrops: rising synth swell for 4 bars, a half-bar mute, then the overdriven 808 drop.\n\nMix: heavy distorted low end, bright top, very loud. About 2:05, hard cut.",
    structure: "Structure:\nIntro (4 bars): candy stabs, filtered beat.\nVerse 1: bratty fast rap.\nBuild: synth swell, rising tension.\nDrop: sudden mute, distorted 808 drop.\nVerse 2: rap with pitch flips.\nBuild: snare roll.\nFinal drop: loudest, stabs doubled.\nOutro: 808 stutter, cut.",
    vocal: "ONE sweet Lolita female vocalist only: sugary, bratty, playful tone with bouncy fast rap.\nTeasing sung hooks; her ad-libs are pitch-flipped in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a sweet-looking girl with a sharp tongue, refusing to be told how to behave.\nEmotion: bratty, defiant, playful.\n" + FREE,
  },
  {
    id: 5, name: "Pastel Stutter",
    bpm: "BPM 165, E minor.",
    main: BASE + " Flavor: jersey-club kick patterns and stuttering vocal chops in pastel colors. Mood: bouncy, dizzy, cute.",
    core: "Core sound: jersey-club triplet kick pattern, distorted bass hits, squeaky bed-spring percussion, bright compressed synth chords, shimmering pastel pads.",
    extra: "Glitch FX: rapid vocal stutters, chopped syllables, buffer loops on the last word.\n\nDrops: rising chord stacks, a sudden silence, then the jersey-club kick drop.\n\nMix: punchy kicks, bright pastel top, clean vocal. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): stuttered vocal chop.\nVerse 1: bouncy fast rap.\nBuild: chords stack, rising tension.\nDrop: sudden silence, jersey-club drop.\nVerse 2: stutter-heavy rap.\nBuild: riser.\nFinal drop: double-time kicks.\nOutro: buffer loop, cut.",
    vocal: "ONE sweet Lolita female vocalist only: cute, airy, sing-song tone with bouncy fast rap.\nHer syllables are stuttered and looped as part of the beat.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a girl spinning in her pastel room until the walls start to stutter.\nEmotion: dizzy, cute, a little lost.\n" + FREE,
  },
  {
    id: 6, name: "Glass Slipper Crash",
    bpm: "BPM 180, G minor.",
    main: BASE + " Flavor: nightcore-speed energy with pitched-up layers and crystal shards. Mood: fairy-tale, frantic, sparkling.",
    core: "Core sound: fast four-on-the-floor kick, distorted bass stabs, pitched-up synth leads, crystal glass hits, bright compressed supersaw layers, shimmering harp-like arps.",
    extra: "Glitch FX: glass-shatter transitions, pitch dives, rapid gate chops.\n\nDrops: a fast riser climbs to a glass-shatter hit, a beat of silence, then the drop.\n\nMix: very bright, fast, glittering mix. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): crystal arps.\nVerse 1: very fast sweet rap.\nBuild: riser, rising tension.\nDrop: glass shatter, sudden drop.\nVerse 2: pitch dives, faster rap.\nBuild: gate chops.\nFinal drop: brightest, everything sparkling.\nOutro: shatter, cut.",
    vocal: "ONE sweet Lolita female vocalist only: high, crystal-clear, fairy-tale tone with very fast rap.\nLight sung hooks; her voice is pitched up and gated in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a fairy-tale princess running out of the ball as the clock glitches past midnight.\nEmotion: frantic, sparkling, bittersweet.\n" + FREE,
  },
  {
    id: 7, name: "Ribbon Static",
    bpm: "BPM 155, B minor.",
    main: BASE + " Flavor: drift-phonk cowbell melodies wrapped in static and ribbons. Mood: dark-cute, cool, hypnotic.",
    core: "Core sound: punchy kick, heavily distorted bass, phonk cowbell melody, static noise bed, bright compressed synth layers, shimmering pads.",
    extra: "Glitch FX: radio static sweeps, cowbell stutters, sudden low-pass dives.\n\nDrops: the static builds into rising tension, cuts out, then the bass and cowbell drop.\n\nMix: gritty low end, bright cowbell, wide static. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): static and cowbell.\nVerse 1: cool fast rap.\nBuild: static rises, synths stack.\nDrop: sudden cut, bass and cowbell drop.\nVerse 2: rap with low-pass dives.\nBuild: rising tension.\nFinal drop: heaviest, static swirling.\nOutro: static fades into a cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet but cool, slightly dark tone with steady fast rap.\nBreathy sung hooks; her voice is filtered through static in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a girl tying ribbons on a broken radio, listening for a signal from someone far away.\nEmotion: cool, lonely, quietly hopeful.\n" + FREE,
  },
  {
    id: 8, name: "Porcelain Panic",
    bpm: "BPM 172, F minor.",
    main: BASE + " Flavor: sudden half-time switches that crack the groove like porcelain. Mood: tense, fragile, explosive.",
    core: "Core sound: hard kick, distorted bass that switches between half-time and full speed, bright compressed synth stabs, shimmering glass pads, crackling textures.",
    extra: "Glitch FX: crack sounds on each switch, tempo halving and doubling, reversed vocal tails.\n\nDrops: tension rises in half-time, then cracks into a full-speed drop.\n\nMix: punchy, dynamic, loud drops. About 2:15, hard cut.",
    structure: "Structure:\nIntro (2 bars): crackle, glass pads.\nVerse 1: fast rap at full speed.\nSwitch: half-time, tension rises.\nDrop: cracks back to full speed.\nVerse 2: rap with tempo switches.\nBuild: rising tension.\nFinal drop: biggest, full speed.\nOutro: one crack, cut.",
    vocal: "ONE sweet Lolita female vocalist only: delicate, porcelain-sweet tone that sharpens into rapid fast rap.\nFragile sung lines in half-time; her voice reverses into the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a porcelain-perfect girl holding herself together while hairline cracks spread.\nEmotion: tense, fragile, close to breaking.\n" + FREE,
  },
  {
    id: 9, name: "Bubblegum Bitcrush",
    bpm: "BPM 158, D major.",
    main: BASE + " Flavor: chiptune 8-bit glitch layer and bubblegum melodies. Mood: playful, bright, chaotic.",
    core: "Core sound: punchy kick, distorted chip-style bass, 8-bit square-wave melodies, bright compressed synth layers, shimmering bell sparkles, bubble-pop percussion.",
    extra: "Glitch FX: bitcrushed vocal bursts, 8-bit arpeggio stutters, sudden pitch-ups.\n\nDrops: an 8-bit riser climbs, a pop, a beat of silence, then the drop.\n\nMix: bright, crunchy, candy-colored. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): 8-bit melody.\nVerse 1: playful fast rap.\nBuild: 8-bit riser, rising tension.\nDrop: pop, sudden drop.\nVerse 2: bitcrushed rap.\nBuild: arps stack.\nFinal drop: brightest.\nOutro: 8-bit blip, cut.",
    vocal: "ONE sweet Lolita female vocalist only: bubbly, high, giggly-sweet tone with playful fast rap.\nSing-song hooks; her voice is bitcrushed in bursts.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a girl living inside an old handheld game, blowing bubbles while the pixels glitch.\nEmotion: playful, bright, mischievous.\n" + FREE,
  },
  {
    id: 10, name: "Velvet Error",
    bpm: "BPM 145, C# minor.",
    main: BASE + " Flavor: gothic Lolita darkness with harpsichord lines and error-screen glitches. Mood: dark, elegant, haunting.",
    core: "Core sound: heavy kick, deeply distorted bass, glitching harpsichord lines, bright compressed synth layers, shimmering choir-like pads, error-beep percussion.",
    extra: "Glitch FX: error beeps, frozen frames of harpsichord, sudden digital silence.\n\nDrops: the harpsichord climbs into rising tension, freezes, then the bass drops.\n\nMix: dark low end, bright glitchy top. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching harpsichord.\nVerse 1: elegant fast rap.\nBuild: harpsichord climbs, rising tension.\nDrop: freeze, sudden bass drop.\nVerse 2: darker rap.\nBuild: error beeps multiply.\nFinal drop: heaviest.\nOutro: harpsichord freeze, cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet, elegant, slightly haunting tone with controlled fast rap.\nGraceful sung hooks; her voice freezes and repeats in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a gothic Lolita girl in a dark velvet room, her reflection showing error messages.\nEmotion: elegant, haunted, defiant.\n" + FREE,
  },
  {
    id: 11, name: "Strawberry Overclock",
    bpm: "BPM 185, A minor.",
    main: BASE + " Flavor: drum-and-bass speed overclocked to the limit. Mood: breathless, sweet, euphoric.",
    core: "Core sound: fast rolling breakbeats, distorted reese bass, overclocked synth arpeggios, bright compressed chord stacks, shimmering top layers.",
    extra: "Glitch FX: overheating noise bursts, CPU-crash stutters, rapid filter jumps.\n\nDrops: the arps accelerate into rising tension, crash to silence, then the drop.\n\nMix: fast, bright, breathless. About 2:05, hard cut.",
    structure: "Structure:\nIntro (2 bars): overclocked arps.\nVerse 1: breathless fast rap.\nBuild: arps accelerate, rising tension.\nDrop: crash, sudden drop.\nVerse 2: rap at top speed.\nBuild: noise bursts.\nFinal drop: maximum speed.\nOutro: crash, cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet, bright, breathless tone with extremely fast rap.\nTiny sung hooks between bursts; her voice crash-stutters in the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a girl pushing her heart past its limits just to keep up with the night.\nEmotion: breathless, euphoric, slightly reckless.\n" + FREE,
  },
  {
    id: 12, name: "Teacup Tornado",
    bpm: "BPM 168, E minor.",
    main: BASE + " Flavor: rage-style stacked synths swirling like a tea party in a storm. Mood: chaotic, cute, intense.",
    core: "Core sound: hard kick, distorted bass slides, rage-style stacked lead synths, bright compressed layers, shimmering teacup-clink percussion.",
    extra: "Glitch FX: swirling pitch bends, clink stutters, sudden reverse sweeps.\n\nDrops: synths swirl into rising tension, a teacup clink in silence, then the drop.\n\nMix: wide, loud, swirling. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): swirling synths, clinks.\nVerse 1: cute fast rap.\nBuild: swirl rises, rising tension.\nDrop: clink, sudden drop.\nVerse 2: rap with pitch bends.\nBuild: reverse sweeps.\nFinal drop: biggest swirl.\nOutro: clink, cut.",
    vocal: "ONE sweet Lolita female vocalist only: cute, tea-party-polite tone that turns fierce in fast rap.\nPolite sung hooks; her voice swirls with pitch bends in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a perfectly polite tea party that slowly spins out of control.\nEmotion: polite, chaotic, secretly furious.\n" + FREE,
  },
];

const LYRICS_RATIOS = [EN, JP, MIX];

// BASE 先頭の「Glitchcore hip-hop」と入れ替える候補
const GENRE_SWAPS = [
"jersey club", "hyperpop", "breakcore", "digicore", "nightcore", "drift phonk",
"drum & bass", "trap", "rage", "jungle", "happy hardcore", "future bass",
];

const NEVER_USE_FIXED = "neon, ignite, light up the night, forever, baby, heartbeat, fly away, destiny, dreams come true, ネオン, 運命, 永遠, 奇跡.";
const AVOID_FIXED = "Avoid: male vocal, duet, choir, slow tempo, ballad, acoustic arrangement, muddy mix, thin weak bass, long intro, long fade-out, orchestral cinematic scoring, metal growls.";

const BPM_EXTRA = ["BPM 150, D minor.", "BPM 160, F minor.", "BPM 170, G minor.", "BPM 180, C minor."];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  themes: [],
  never: [NEVER_USE_FIXED],
  avoid: [AVOID_FIXED],
};
})();
