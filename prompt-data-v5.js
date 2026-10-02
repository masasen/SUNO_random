// V5 のプロンプト候補データ（Glitchcore hip-hop × sweet Lolita female vocals）。
// V1〜V4 と違い、歌詞テーマ・Never use・Avoid も V5 専用。古文フラグメントは使わない。
// このファイルだけ編集すれば V5 の候補が更新されます。変更後はページを再読み込みしてください。
//
// 全ベースの main は BASE（指定のスタイル文）で始まり、その後ろにベースごとの味付けを足す。
// main は自動トリムで削られないので、どのランダム結果にもスタイル文が必ず入る。
// ジャンル置換は BASE 先頭の「Glitchcore hip-hop」だけを入れ替える（既定 OFF）。
// 歌詞の文言は指定せず、テーマは情景と感情だけを抽象的に書いて SUNO 側に任せる。
// Structure とサウンド補足は V1〜V4 に出てくる区画・段落の種類をすべて持つ（全ベース共通の骨格 ＋ 珍しい区画はベースごとに分散）。
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
    extra: "Main concept: one sugary hook keeps returning, faster and more broken each time, while intensity never stops rising.\n\nSamples: use heavy DJ-style sampling throughout: rave vocal one-shots, tape-stops, pitched-up breaths, camera shutters, phone notification blips, reverse cymbals. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: stutter edits on the last beat of every bar, buffer repeats, sudden tape stops, pitch-shifted vocal chops.\n\nDrops: the build rises for 8 bars, one beat of total silence, then the drop slams in at full width.\n\nKeep the glitch-rap core dominant: punchy, glossy, loud, short sticky hook.\n\nHyperpop is secondary contrast only: pitched-up vocal layers and bubbly synths inside the hooks.\n\nMix: hyper-compressed, sparkling top end. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching synth sparkles, vocal chop.\nHook: hook first, short and sticky, 808 muted.\nVerse 1: fast sweet rap over the driving beat.\nPre-chorus: synth layers stack, rising tension.\nSilence: one beat of dead air.\nChorus 1: sudden distorted bass drop, sung hook.\nPost-chorus: half-time bounce, vocal chops.\nRap verse 2: faster rap, stutter edits.\nBridge: filtered sparkles, one breathy line.\nBuild: snare roll, riser.\nFinal chorus: biggest drop, every layer on.\nFinal bars: stutter chops, 808 tail, sudden silence.",
    vocal: "ONE sweet Lolita female vocalist only: high, sugary, doll-like tone with crisp fast rap.\nSweet sing-song hooks between the rap lines; her own pitched-up doubles glitch in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a sugar-coated girl whose thoughts move faster than the screen can load.\nEmotion: hyper, giddy, slightly overwhelmed.\n" + FREE,
  },
  {
    id: 2, name: "Doll Circuit",
    bpm: "BPM 160, A minor.",
    main: BASE + " Flavor: digicore glitch with a music-box melody running through broken circuits. Mood: cute, eerie, restless.",
    core: "Core sound: tight trap kick, distorted sliding 808, fast triplet hats, a music-box lead glitching in and out, compressed pluck stacks, shimmering pads.",
    extra: "Samples: use heavy DJ-style sampling throughout: music-box one-shots, toy squeaks, reversed breaths, glitch blips, radio-filtered whispers. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: music-box notes reversed and stuttered, digital dropouts, sample-rate crushes on the vocal.\n\nStage 1:\nmusic box and trap kick, sparse 808, whispery rap.\n\nStage 2:\nhalf-time drop, distorted sliding 808, glitching music box.\n\nStage 3:\ndouble-time hats, full synth stacks, music box shattered into chops.\n\nDrops: the music box winds up into rising tension, cuts to silence, then the bass drops hard.\n\nKeep the glitch-rap core dominant: crunchy, eerie, doll-house sparkle.\n\nDigicore is secondary contrast only: lo-fi plucks and wobbly pitch inside the verses.\n\nMix: bright, crunchy, heavy bass. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching music box alone.\nVerse 1: fast whispery-sweet rap.\nPre-chorus: music box speeds up.\nSilence: one bar, a single breath.\nChorus 1: sudden drop, distorted bass, sung hook.\nPost-chorus: chopped music-box loop.\nVerse 2: rap tightens, dropouts.\nBridge: near silence, music box and pad.\nSpoken word: one whispered sentence.\nBuild: rising tension, riser.\nFinal chorus: everything glitching at once.\nOutro: music box winds down, cut.",
    vocal: "ONE sweet Lolita female vocalist only: whispery, doll-like, porcelain-sweet tone with precise fast rap.\nSoft breathy hooks; her voice is sample-crushed and stuttered in the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a living doll whose circuits keep skipping, trying to finish a sentence before she glitches out.\nEmotion: cute, fragile, quietly eerie.\n" + FREE,
  },
  {
    id: 3, name: "Lace Breakcore",
    bpm: "BPM 175, D minor.",
    main: BASE + " Flavor: breakcore edge with chopped amen breaks under the hip-hop groove. Mood: frantic, sweet, chaotic.",
    core: "Core sound: hard kick under rapid chopped amen breaks, distorted reese-like bass, bright compressed synth chords, shimmering glassy arps, noise bursts.",
    extra: "Samples: use heavy DJ-style sampling throughout: amen break fragments, vinyl cuts, scratch hits, sirens, crowd shouts, rewind FX. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: break chops reshuffled every bar, granular freezes, sudden reverse swells.\n\nPhase 1:\nhip-hop groove with light break chops under the rap.\n\nPhase 2:\nfull breakcore, rapid amen reshuffles, distorted bass.\n\nPhase 3:\nmaximum chaos, double-time breaks, every sample cut faster.\n\nDrops: tension rises with accelerating break rolls, then a hard stop and a crushing drop.\n\nKeep the glitch-rap core dominant: clear vocal over the chaos.\n\nBreakcore is secondary contrast only: amen chops and noise bursts in the drops.\n\nMix: loud, crisp breaks. About 2:15, hard cut.",
    structure: "Structure:\nIntro (2 bars): break roll, glitch freeze.\nVerse 1: rapid sweet rap over breaks.\nPre-chorus: break rolls accelerate.\nSilence: one beat, hard stop.\nChorus 1: crushing bass drop, sung hook.\nPost-chorus: chopped amen solo.\nRap break: rap alone over a single break loop.\nVerse 2: rap at full speed.\nBridge: granular pad, one line.\nTransition: accelerating breaks and rising bass.\nFinal chorus: breaks and bass at maximum.\nEnd with rapid DJ cuts and abrupt silence.",
    vocal: "ONE sweet Lolita female vocalist only: bright, cute yet sharp tone with relentless fast rap.\nShort sung hook lines; her own voice is chopped like the breaks in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a girl in a lace dress running through a city that keeps breaking apart around her.\nEmotion: frantic, determined, sweet under pressure.\n" + FREE,
  },
  {
    id: 4, name: "Candy Overdrive",
    bpm: "BPM 150, C minor.",
    main: BASE + " Flavor: overdriven trap bounce with candy-bright lead stabs. Mood: bratty, bouncy, bold.",
    core: "Core sound: hard trap kick, heavily distorted 808 glides, double-time hats, candy-bright compressed lead stabs, shimmering synth bells, clipped snares.",
    extra: "Constantly alternate half-time 808 bounce sections with double-time flow sections where hats and rap speed double.\n\nSamples: use heavy DJ-style sampling throughout: 808 one-shots, vinyl cuts, cash-register dings, crowd shouts, tape-stops, reverse hits. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: 808 stutters, vocal pitch flips, sudden half-bar mutes.\n\nDrops: rising synth swell for 4 bars, a half-bar mute, then the overdriven 808 drop.\n\nKeep the glitch-rap core dominant: heavy, bratty, punchy.\n\nTrap is secondary contrast only: rolling hats and 808 glides under the hooks.\n\nMix: heavy distorted low end, bright top. About 2:05, hard cut.",
    structure: "Structure:\nIntro (4 bars): candy stabs, filtered beat.\nVerse 1: bratty fast rap, half-time bounce.\nPre-chorus: synth swell, rising tension.\nSilence: half a bar.\nChorus 1: distorted 808 drop, sung hook.\nPost-chorus: double-time hats, chopped ad-libs.\nVerse 2: rap with pitch flips.\nBridge: filtered stabs, one teasing line.\nRap bridge: double-time rap over 808 only.\nBuild: snare roll.\nFinal chorus: loudest, stabs doubled.\nFinish with frantic sample cuts and abrupt stop.",
    vocal: "ONE sweet Lolita female vocalist only: sugary, bratty, playful tone with bouncy fast rap.\nTeasing sung hooks; her ad-libs are pitch-flipped in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a sweet-looking girl with a sharp tongue, refusing to be told how to behave.\nEmotion: bratty, defiant, playful.\n" + FREE,
  },
  {
    id: 5, name: "Pastel Stutter",
    bpm: "BPM 165, E minor.",
    main: BASE + " Flavor: jersey-club kick patterns and stuttering vocal chops in pastel colors. Mood: bouncy, dizzy, cute.",
    core: "Core sound: jersey-club triplet kick pattern, distorted bass hits, squeaky bed-spring percussion, bright compressed synth chords, shimmering pastel pads.",
    extra: "Constantly alternate jersey-club triplet kicks with straight half-time bounce, switching every 8 bars.\n\nSamples: use heavy DJ-style sampling throughout: bed-spring squeaks, chopped vocal syllables, crowd shouts, air-horn-free sirens, reverse hits. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: rapid vocal stutters, chopped syllables, buffer loops on the last word.\n\nDrops: rising chord stacks, a sudden silence, then the jersey-club kick drop.\n\nKeep the glitch-rap core dominant: bouncy, cute, punchy.\n\nJersey club is secondary contrast only: triplet kicks and squeaks in the drops.\n\nMix: punchy kicks, bright pastel top. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): stuttered vocal chop.\nHook: hook first over triplet kicks.\nVerse 1: bouncy fast rap.\nPre-chorus: chords stack.\nSilence: one bar.\nChorus: jersey-club drop, sung hook.\nPost-chorus: stuttered syllables loop.\nRap verse 2: stutter-heavy rap.\nBreakdown: kicks drop out, pastel pads.\nBridge: one airy line.\nFinal chorus: double-time kicks.\nFinal bars: buffer loop, repeated hook, sudden silence.",
    vocal: "ONE sweet Lolita female vocalist only: cute, airy, sing-song tone with bouncy fast rap.\nHer syllables are stuttered and looped as part of the beat.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a girl spinning in her pastel room until the walls start to stutter.\nEmotion: dizzy, cute, a little lost.\n" + FREE,
  },
  {
    id: 6, name: "Glass Slipper Crash",
    bpm: "BPM 180, G minor.",
    main: BASE + " Flavor: nightcore-speed energy with pitched-up layers and crystal shards. Mood: fairy-tale, frantic, sparkling.",
    core: "Core sound: fast four-on-the-floor kick, distorted bass stabs, pitched-up synth leads, crystal glass hits, bright compressed supersaw layers, shimmering harp-like arps.",
    extra: "Main concept: a fairy-tale melody that speeds up and shatters a little more in every section.\n\nSamples: use heavy DJ-style sampling throughout: glass shatters, clock chimes, harp one-shots, reverse cymbals, pitched-up breaths. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: glass-shatter transitions, pitch dives, rapid gate chops.\n\nDrops: a fast riser climbs to a glass-shatter hit, a beat of silence, then the drop.\n\nKeep the glitch-rap core dominant: fast, glittering, direct.\n\nNightcore is secondary contrast only: pitched-up layers and speed inside the hooks.\n\nMix: very bright, glittering. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): crystal arps, clock chime.\nVerse 1: very fast sweet rap.\nPre-chorus: riser, rising tension.\nSilence: one beat after a glass shatter.\nChorus 1: sudden drop, sung hook.\nPost-chorus: gate-chopped harp.\nVerse 2: pitch dives, faster rap.\nBridge: clock ticking, one line.\nBuild: gate chops tighten.\nDrop: instrumental shatter drop.\nFinal chorus: brightest, everything sparkling.\nLast section: maximum speed, shorter phrases, abrupt silence.",
    vocal: "ONE sweet Lolita female vocalist only: high, crystal-clear, fairy-tale tone with very fast rap.\nLight sung hooks; her voice is pitched up and gated in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a fairy-tale princess running out of the ball as the clock glitches past midnight.\nEmotion: frantic, sparkling, bittersweet.\n" + FREE,
  },
  {
    id: 7, name: "Ribbon Static",
    bpm: "BPM 155, B minor.",
    main: BASE + " Flavor: drift-phonk cowbell melodies wrapped in static and ribbons. Mood: dark-cute, cool, hypnotic.",
    core: "Core sound: punchy kick, heavily distorted bass, phonk cowbell melody, static noise bed, bright compressed synth layers, shimmering pads.",
    extra: "Electronic, not band-driven: no live guitars or acoustic drums; every sound is synthetic, filtered or glitched.\n\nSamples: use heavy DJ-style sampling throughout: radio static, cowbell one-shots, vinyl cuts, filtered voices, tape-stops. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: radio static sweeps, cowbell stutters, sudden low-pass dives.\n\nDrops: the static builds into rising tension, cuts out, then the bass and cowbell drop.\n\nKeep the glitch-rap core dominant: gritty, cool, hypnotic.\n\nDrift phonk is secondary contrast only: cowbell melody and slides in the drops.\n\nMix: gritty low end, wide static. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): static and cowbell.\nVerse 1: cool fast rap.\nPre-chorus: static rises.\nSilence: one bar of static cut.\nChorus 1: bass and cowbell drop, sung hook.\nPost-chorus: cowbell stutters.\nVerse 2: rap with low-pass dives.\nBreakdown: static and pad only.\nBridge: filtered voice.\nSpoken word: a radio-filtered sentence.\nFinal chorus: heaviest, static swirling.\nOutro: static fades into a cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet but cool, slightly dark tone with steady fast rap.\nBreathy sung hooks; her voice is filtered through static in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a girl tying ribbons on a broken radio, listening for a signal from someone far away.\nEmotion: cool, lonely, quietly hopeful.\n" + FREE,
  },
  {
    id: 8, name: "Porcelain Panic",
    bpm: "BPM 172, F minor.",
    main: BASE + " Flavor: sudden half-time switches that crack the groove like porcelain. Mood: tense, fragile, explosive.",
    core: "Core sound: hard kick, distorted bass that switches between half-time and full speed, bright compressed synth stabs, shimmering glass pads, crackling textures.",
    extra: "Constantly alternate half-time cracks with full-speed sections so the groove keeps breaking and reforming.\n\nSamples: use heavy DJ-style sampling throughout: porcelain cracks, teaspoon clinks, reversed vocal tails, rewind FX, crowd shouts. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: crack sounds on each switch, tempo halving and doubling, reversed vocal tails.\n\nDrops: tension rises in half-time, then cracks into a full-speed drop.\n\nKeep the glitch-rap core dominant: tense, punchy, dynamic.\n\nHalf-time trap is secondary contrast only: heavy pauses inside the switches.\n\nMix: punchy, loud drops. About 2:15, hard cut.",
    structure: "Structure:\nIntro (2 bars): crackle, glass pads.\nVerse 1: fast rap at full speed.\nPre-chorus: half-time, tension rises.\nSilence: one beat before the crack.\nChorus 1: full-speed drop, sung hook.\nPost-chorus: sudden half-time, chopped voice.\nUse brief half-time interruptions and DJ cuts for repeated shocks.\nVerse 2: rap with tempo switches.\nBridge: fragile line over pads.\nBuild: rising tension.\nFinal chorus: biggest, full speed.\nEnd with rewind-style cut and sudden vocal stop.",
    vocal: "ONE sweet Lolita female vocalist only: delicate, porcelain-sweet tone that sharpens into rapid fast rap.\nFragile sung lines in half-time; her voice reverses into the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a porcelain-perfect girl holding herself together while hairline cracks spread.\nEmotion: tense, fragile, close to breaking.\n" + FREE,
  },
  {
    id: 9, name: "Bubblegum Bitcrush",
    bpm: "BPM 158, D major.",
    main: BASE + " Flavor: chiptune 8-bit glitch layer and bubblegum melodies. Mood: playful, bright, chaotic.",
    core: "Core sound: punchy kick, distorted chip-style bass, 8-bit square-wave melodies, bright compressed synth layers, shimmering bell sparkles, bubble-pop percussion.",
    extra: "Samples: use heavy DJ-style sampling throughout: 8-bit blips, bubble pops, coin sounds, scratch hits, pitched-up giggles. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: bitcrushed vocal bursts, 8-bit arpeggio stutters, sudden pitch-ups.\n\nStage 1:\n8-bit melody and punchy kick, playful rap.\n\nStage 2:\nhalf-time drop, distorted chip bass, bitcrushed vocals.\n\nStage 3:\ndouble-time rush, 8-bit arps and synth stacks at full speed.\n\nDrops: an 8-bit riser climbs, a pop, a beat of silence, then the drop.\n\nKeep the glitch-rap core dominant: bright, crunchy, playful.\n\nChiptune is secondary contrast only: square-wave hooks inside the drops.\n\nMix: candy-colored. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): 8-bit melody.\nVerse 1: playful fast rap.\nPre-chorus: 8-bit riser.\nSilence: one beat after a pop.\nChorus 1: sudden drop, sung hook.\nPost-chorus: bitcrushed vocal bursts.\nRap verse 2: bitcrushed rap.\nBreak: 4 bars, 8-bit melody and a tape-stop.\nBridge: bubble pops, one line.\nTransition: arps accelerate, rising bass.\nFinal chorus: brightest.\nOutro: 8-bit blip, cut.",
    vocal: "ONE sweet Lolita female vocalist only: bubbly, high, giggly-sweet tone with playful fast rap.\nSing-song hooks; her voice is bitcrushed in bursts.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a girl living inside an old handheld game, blowing bubbles while the pixels glitch.\nEmotion: playful, bright, mischievous.\n" + FREE,
  },
  {
    id: 10, name: "Velvet Error",
    bpm: "BPM 145, C# minor.",
    main: BASE + " Flavor: gothic Lolita darkness with harpsichord lines and error-screen glitches. Mood: dark, elegant, haunting.",
    core: "Core sound: heavy kick, deeply distorted bass, glitching harpsichord lines, bright compressed synth layers, shimmering choir-like pads, error-beep percussion.",
    extra: "Main concept: an elegant harpsichord theme that freezes and corrupts a little more in every section.\n\nSamples: use heavy DJ-style sampling throughout: error beeps, harpsichord one-shots, church-bell hits, reverse hits, filtered whispers. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: error beeps, frozen frames of harpsichord, sudden digital silence.\n\nDrops: the harpsichord climbs into rising tension, freezes, then the bass drops.\n\nKeep the glitch-rap core dominant: dark, heavy, elegant.\n\nGothic baroque is secondary contrast only: harpsichord and choir-like pads.\n\nMix: dark low end, glitchy top. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching harpsichord.\nVerse 1: elegant fast rap.\nPre-chorus: harpsichord climbs.\nSilence: one bar, frozen frame.\nChorus 1: sudden bass drop, sung hook.\nPost-chorus: frozen harpsichord loop.\nVerse 2: darker rap.\nBridge: bells and pads.\nRap bridge: rap over the harpsichord alone.\nBuild: error beeps multiply.\nFinal chorus: heaviest.\nFinal drop: instrumental, harpsichord shattered.\nOutro: harpsichord freeze, cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet, elegant, slightly haunting tone with controlled fast rap.\nGraceful sung hooks; her voice freezes and repeats in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a gothic Lolita girl in a dark velvet room, her reflection showing error messages.\nEmotion: elegant, haunted, defiant.\n" + FREE,
  },
  {
    id: 11, name: "Strawberry Overclock",
    bpm: "BPM 185, A minor.",
    main: BASE + " Flavor: drum-and-bass speed overclocked to the limit. Mood: breathless, sweet, euphoric.",
    core: "Core sound: fast rolling breakbeats, distorted reese bass, overclocked synth arpeggios, bright compressed chord stacks, shimmering top layers.",
    extra: "Samples: use heavy DJ-style sampling throughout: overheating noise bursts, keyboard clicks, break fragments, sirens, rewind FX. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: overheating noise bursts, CPU-crash stutters, rapid filter jumps.\n\nPhase 1:\nfast hip-hop rap over rolling breaks.\n\nPhase 2:\nhalf-time drop, distorted reese, overclocked arps.\n\nPhase 3:\nfinal rush, double-time breaks and every layer at full speed.\n\nDrops: the arps accelerate into rising tension, crash to silence, then the drop.\n\nKeep the glitch-rap core dominant: fast, breathless.\n\nDrum and bass is secondary contrast only: rolling breaks in the drops.\n\nMix: fast, bright. About 2:05, hard cut.",
    structure: "Structure:\nIntro (2 bars): overclocked arps.\nVerse 1: breathless fast rap.\nPre-chorus: arps accelerate.\nSilence: one beat crash.\nChorus 1: sudden drop, sung hook.\nPost-chorus: noise bursts and breaks.\nRap break: rap over drums only.\nVerse 2: rap at top speed.\nBridge: one breath, pad.\nTransition: percussion doubles in speed.\nFinal chorus: maximum speed.\nLast section: shorter phrases, rapid fills, abrupt silence.",
    vocal: "ONE sweet Lolita female vocalist only: sweet, bright, breathless tone with extremely fast rap.\nTiny sung hooks between bursts; her voice crash-stutters in the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a girl pushing her heart past its limits just to keep up with the night.\nEmotion: breathless, euphoric, slightly reckless.\n" + FREE,
  },
  {
    id: 12, name: "Teacup Tornado",
    bpm: "BPM 168, E minor.",
    main: BASE + " Flavor: rage-style stacked synths swirling like a tea party in a storm. Mood: chaotic, cute, intense.",
    core: "Core sound: hard kick, distorted bass slides, rage-style stacked lead synths, bright compressed layers, shimmering teacup-clink percussion.",
    extra: "Electronic, not orchestral: the tea-party mood comes from synths and samples only, never live strings.\n\nSamples: use heavy DJ-style sampling throughout: teacup clinks, spoon stirs, polite claps, scratch hits, reverse sweeps. Familiar club vocabulary, but original and not copied.\n\nGlitch FX: swirling pitch bends, clink stutters, sudden reverse sweeps.\n\nDrops: synths swirl into rising tension, a clink in silence, then the drop.\n\nKeep the glitch-rap core dominant: loud, swirling, intense.\n\nRage-style synth stacking is secondary contrast only: stacked leads in the drops.\n\nMix: wide, loud. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): swirling synths, clinks.\nHook: hook first, polite and sweet.\nVerse 1: cute fast rap.\nPre-chorus: swirl rises.\nSilence: one clink in silence.\nChorus 1: sudden drop, sung hook.\nPost-chorus: pitch-bent swirl.\nVerse 2: rap turns fierce.\nBridge: polite line over pads.\nBuild: reverse sweeps.\nFinal chorus: biggest swirl.\nFinish with a clink, a frantic sample cut and an abrupt stop.",
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
