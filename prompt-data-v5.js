// V5 のプロンプト候補データ（Glitchcore hip-hop × sweet Lolita female vocals）。
// V1〜V4 と違い、歌詞テーマ・Never use・Avoid も V5 専用。古文フラグメントは使わない。
// このファイルだけ編集すれば V5 の候補が更新されます。変更後はページを再読み込みしてください。
//
// 全ベースの main は BASE（指定のスタイル文）で始まり、その後ろにベースごとの味付けを足す。
// main は自動トリムで削られないので、どのランダム結果にもスタイル文が必ず入る。
// ジャンル置換は BASE 先頭の「Glitchcore hip-hop」だけを入れ替える（既定 OFF）。
// 歌詞の文言は指定せず、テーマは情景と感情だけを抽象的に書いて SUNO 側に任せる。
// Structure とサウンド補足は V1〜V4 に出てくる区画・段落の種類をすべて持つ（全ベース共通の骨格 ＋ 珍しい区画はベースごとに分散）。
// 転調は効きやすい書き方に絞る: 1 曲 1 回・最後のサビへ up a step・理論用語を使わない・耳で分かる変化（energy rises / bigger voice）を添える。
// BPM 行（削られない）に短い指示、Structure は Final chorus 行の中、補足の先頭の Modulation 段落で歌詞の区画タグの中に書かせる
// （[Final Chorus: key change up a step, ...]）。独立した [Key Change] タグは効きにくいので使わせない。全ベース同じ指定なのは、
// ランダム生成で BPM 行・Structure・補足が別ベースから選ばれても食い違わないため。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v5 = (() => {

const BASE = "Genre: Glitchcore hip-hop. Sweet Lolita female vocals, fast rap over a fast, driving beat, bright compressed synth layers with rising tension and sudden drops, distorted bass and shimmering synths.";
const FREE = "Write every line in your own fresh words; invent the details and the hook yourself.";
const NOMALE = "No male vocal, no duet, no choir.";

const EN = "Lyrics: English 70-80%, Japanese for the rest.";
const JP = "Lyrics: Japanese 70-80%, short natural English 20-30%.";
const MIX = "Lyrics: Japanese and English mixed inside every bar, random switching mid-line.";

const PATTERNS = [
  {
    id: 1, name: "Sugar Glitch Rush",
    bpm: "BPM 170, F# minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: hyperpop-leaning sugar rush with bitcrushed sparkles. Mood: hyper, sweet, overstimulated.",
    core: "Core sound: punchy clipped kick, rolling distorted 808 bass, rapid hi-hat rolls, bright supersaw stacks squashed by heavy compression, shimmering bell arpeggios, bitcrushed sparkle layer.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nMain concept: one sugary hook keeps returning, faster and more broken each time, while intensity never stops rising.\n\nSamples: use heavy DJ-style sampling throughout: rave vocal one-shots, tape-stops, pitched-up breaths, camera shutters, phone notification blips, reverse cymbals. Original, not copied.\n\nGlitch FX: stutter edits on the last beat of every bar, buffer repeats, sudden tape stops, pitch-shifted vocal chops.\n\nDrops: the build rises for 8 bars, one beat of total silence, then the drop slams in at full width.\n\nKeep the glitch-rap core dominant: punchy, glossy, loud, short sticky hook.\n\nHyperpop is secondary contrast only: pitched-up vocal layers and bubbly synths inside the hooks.\n\nMix: hyper-compressed, sparkling top end. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching synth sparkles, vocal chop.\nHook: hook first, short and sticky, 808 muted.\nVerse 1: fast sweet rap over the driving beat.\nPre-chorus: synth layers stack, rising tension.\nSilence: one beat of dead air.\nChorus 1: sudden distorted bass drop, sung hook.\nPost-chorus: half-time bounce, vocal chops.\nRap verse 2: faster rap, stutter edits.\nBridge: filtered sparkles, one breathy line.\nBuild: snare roll, riser.\nFinal chorus: key change up a step, energy rises, bigger voice, biggest drop, every layer on.\nFinal bars: stutter chops, 808 tail, sudden silence.",
    vocal: "ONE sweet Lolita female vocalist only: high, sugary, doll-like tone with crisp fast rap.\nSweet sing-song hooks between the rap lines; her own pitched-up doubles glitch in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a sugar-coated girl whose thoughts move faster than the screen can load.\nEmotion: hyper, giddy, slightly overwhelmed.\n" + FREE,
  },
  {
    id: 2, name: "Doll Circuit",
    bpm: "BPM 160, A minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: digicore glitch with a music-box melody running through broken circuits. Mood: cute, eerie, restless.",
    core: "Core sound: tight trap kick, distorted sliding 808, fast triplet hats, a music-box lead glitching in and out, compressed pluck stacks, shimmering pads.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nSamples: use heavy DJ-style sampling throughout: music-box one-shots, toy squeaks, reversed breaths, glitch blips, radio-filtered whispers. Original, not copied.\n\nGlitch FX: music-box notes reversed and stuttered, digital dropouts, sample-rate crushes on the vocal.\n\nStage 1:\nmusic box and trap kick, sparse 808, whispery rap.\n\nStage 2:\nhalf-time drop, distorted sliding 808, glitching music box.\n\nStage 3:\ndouble-time hats, full synth stacks, music box shattered into chops.\n\nDrops: the music box winds up into rising tension, cuts to silence, then the bass drops hard.\n\nKeep the glitch-rap core dominant: crunchy, eerie, doll-house sparkle.\n\nDigicore is secondary contrast only: lo-fi plucks and wobbly pitch inside the verses.\n\nMix: bright, crunchy, heavy bass. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching music box alone.\nVerse 1: fast whispery-sweet rap.\nPre-chorus: music box speeds up.\nSilence: one bar, a single breath.\nChorus 1: sudden drop, distorted bass, sung hook.\nPost-chorus: chopped music-box loop.\nVerse 2: rap tightens, dropouts.\nBridge: near silence, music box and pad.\nSpoken word: one whispered sentence.\nBuild: rising tension, riser.\nFinal chorus: key change up a step, energy rises, bigger voice, everything glitching at once.\nOutro: music box winds down, cut.",
    vocal: "ONE sweet Lolita female vocalist only: whispery, doll-like, porcelain-sweet tone with precise fast rap.\nSoft breathy hooks; her voice is sample-crushed and stuttered in the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a living doll whose circuits keep skipping, trying to finish a sentence before she glitches out.\nEmotion: cute, fragile, quietly eerie.\n" + FREE,
  },
  {
    id: 3, name: "Lace Breakcore",
    bpm: "BPM 175, D minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: breakcore edge with chopped amen breaks under the hip-hop groove. Mood: frantic, sweet, chaotic.",
    core: "Core sound: hard kick under rapid chopped amen breaks, distorted reese-like bass, bright compressed synth chords, shimmering glassy arps, noise bursts.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nSamples: use heavy DJ-style sampling throughout: amen break fragments, vinyl cuts, scratch hits, sirens, crowd shouts, rewind FX. Original, not copied.\n\nGlitch FX: break chops reshuffled every bar, granular freezes, sudden reverse swells.\n\nPhase 1:\nhip-hop groove with light break chops under the rap.\n\nPhase 2:\nfull breakcore, rapid amen reshuffles, distorted bass.\n\nPhase 3:\nmaximum chaos, double-time breaks, every sample cut faster.\n\nDrops: tension rises with accelerating break rolls, then a hard stop and a crushing drop.\n\nKeep the glitch-rap core dominant: clear vocal over the chaos.\n\nBreakcore is secondary contrast only: amen chops and noise bursts in the drops.\n\nMix: loud, crisp breaks. About 2:15, hard cut.",
    structure: "Structure:\nIntro (2 bars): break roll, glitch freeze.\nVerse 1: rapid sweet rap over breaks.\nPre-chorus: break rolls accelerate.\nSilence: one beat, hard stop.\nChorus 1: crushing bass drop, sung hook.\nPost-chorus: chopped amen solo.\nRap break: rap alone over a single break loop.\nVerse 2: rap at full speed.\nBridge: granular pad, one line.\nTransition: accelerating breaks and rising bass.\nFinal chorus: key change up a step, energy rises, bigger voice, breaks and bass at maximum.\nEnd with rapid DJ cuts and abrupt silence.",
    vocal: "ONE sweet Lolita female vocalist only: bright, cute yet sharp tone with relentless fast rap.\nShort sung hook lines; her own voice is chopped like the breaks in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a girl in a lace dress running through a city that keeps breaking apart around her.\nEmotion: frantic, determined, sweet under pressure.\n" + FREE,
  },
  {
    id: 4, name: "Candy Overdrive",
    bpm: "BPM 150, C minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: overdriven trap bounce with candy-bright lead stabs. Mood: bratty, bouncy, bold.",
    core: "Core sound: hard trap kick, heavily distorted 808 glides, double-time hats, candy-bright compressed lead stabs, shimmering synth bells, clipped snares.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nConstantly alternate half-time 808 bounce sections with double-time flow sections where hats and rap speed double.\n\nSamples: use heavy DJ-style sampling throughout: 808 one-shots, vinyl cuts, cash-register dings, crowd shouts, tape-stops, reverse hits. Original, not copied.\n\nGlitch FX: 808 stutters, vocal pitch flips, sudden half-bar mutes.\n\nDrops: rising synth swell for 4 bars, a half-bar mute, then the overdriven 808 drop.\n\nKeep the glitch-rap core dominant: heavy, bratty, punchy.\n\nTrap is secondary contrast only: rolling hats and 808 glides under the hooks.\n\nMix: heavy distorted low end, bright top. About 2:05, hard cut.",
    structure: "Structure:\nIntro (4 bars): candy stabs, filtered beat.\nVerse 1: bratty fast rap, half-time bounce.\nPre-chorus: synth swell, rising tension.\nSilence: half a bar.\nChorus 1: distorted 808 drop, sung hook.\nPost-chorus: double-time hats, chopped ad-libs.\nVerse 2: rap with pitch flips.\nBridge: filtered stabs, one teasing line.\nRap bridge: double-time rap over 808 only.\nBuild: snare roll.\nFinal chorus: key change up a step, energy rises, bigger voice, loudest, stabs doubled.\nFinish with frantic sample cuts and abrupt stop.",
    vocal: "ONE sweet Lolita female vocalist only: sugary, bratty, playful tone with bouncy fast rap.\nTeasing sung hooks; her ad-libs are pitch-flipped in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a sweet-looking girl with a sharp tongue, refusing to be told how to behave.\nEmotion: bratty, defiant, playful.\n" + FREE,
  },
  {
    id: 5, name: "Pastel Stutter",
    bpm: "BPM 165, E minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: jersey-club kick patterns and stuttering vocal chops in pastel colors. Mood: bouncy, dizzy, cute.",
    core: "Core sound: jersey-club triplet kick pattern, distorted bass hits, squeaky bed-spring percussion, bright compressed synth chords, shimmering pastel pads.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nConstantly alternate jersey-club triplet kicks with straight half-time bounce, switching every 8 bars.\n\nSamples: use heavy DJ-style sampling throughout: bed-spring squeaks, chopped vocal syllables, crowd shouts, air-horn-free sirens, reverse hits. Original, not copied.\n\nGlitch FX: rapid vocal stutters, chopped syllables, buffer loops on the last word.\n\nDrops: rising chord stacks, a sudden silence, then the jersey-club kick drop.\n\nKeep the glitch-rap core dominant: bouncy, cute, punchy.\n\nJersey club is secondary contrast only: triplet kicks and squeaks in the drops.\n\nMix: punchy kicks, bright pastel top. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): stuttered vocal chop.\nHook: hook first over triplet kicks.\nVerse 1: bouncy fast rap.\nPre-chorus: chords stack.\nSilence: one bar.\nChorus: jersey-club drop, sung hook.\nPost-chorus: stuttered syllables loop.\nRap verse 2: stutter-heavy rap.\nBreakdown: kicks drop out, pastel pads.\nBridge: one airy line.\nFinal chorus: key change up a step, energy rises, bigger voice, double-time kicks.\nFinal bars: buffer loop, repeated hook, sudden silence.",
    vocal: "ONE sweet Lolita female vocalist only: cute, airy, sing-song tone with bouncy fast rap.\nHer syllables are stuttered and looped as part of the beat.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a girl spinning in her pastel room until the walls start to stutter.\nEmotion: dizzy, cute, a little lost.\n" + FREE,
  },
  {
    id: 6, name: "Glass Slipper Crash",
    bpm: "BPM 180, G minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: nightcore-speed energy with pitched-up layers and crystal shards. Mood: fairy-tale, frantic, sparkling.",
    core: "Core sound: fast four-on-the-floor kick, distorted bass stabs, pitched-up synth leads, crystal glass hits, bright compressed supersaw layers, shimmering harp-like arps.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nMain concept: a fairy-tale melody that speeds up and shatters a little more in every section.\n\nSamples: use heavy DJ-style sampling throughout: glass shatters, clock chimes, harp one-shots, reverse cymbals, pitched-up breaths. Original, not copied.\n\nGlitch FX: glass-shatter transitions, pitch dives, rapid gate chops.\n\nDrops: a fast riser climbs to a glass-shatter hit, a beat of silence, then the drop.\n\nKeep the glitch-rap core dominant: fast, glittering, direct.\n\nNightcore is secondary contrast only: pitched-up layers and speed inside the hooks.\n\nMix: very bright, glittering. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): crystal arps, clock chime.\nVerse 1: very fast sweet rap.\nPre-chorus: riser, rising tension.\nSilence: one beat after a glass shatter.\nChorus 1: sudden drop, sung hook.\nPost-chorus: gate-chopped harp.\nVerse 2: pitch dives, faster rap.\nBridge: clock ticking, one line.\nBuild: gate chops tighten.\nDrop: instrumental shatter drop.\nFinal chorus: key change up a step, energy rises, bigger voice, brightest, everything sparkling.\nLast section: maximum speed, shorter phrases, abrupt silence.",
    vocal: "ONE sweet Lolita female vocalist only: high, crystal-clear, fairy-tale tone with very fast rap.\nLight sung hooks; her voice is pitched up and gated in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a fairy-tale princess running out of the ball as the clock glitches past midnight.\nEmotion: frantic, sparkling, bittersweet.\n" + FREE,
  },
  {
    id: 7, name: "Ribbon Static",
    bpm: "BPM 155, B minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: drift-phonk cowbell melodies wrapped in static and ribbons. Mood: dark-cute, cool, hypnotic.",
    core: "Core sound: punchy kick, heavily distorted bass, phonk cowbell melody, static noise bed, bright compressed synth layers, shimmering pads.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nElectronic, not band-driven: no live guitars or acoustic drums; every sound is synthetic, filtered or glitched.\n\nSamples: use heavy DJ-style sampling throughout: radio static, cowbell one-shots, vinyl cuts, filtered voices, tape-stops. Original, not copied.\n\nGlitch FX: radio static sweeps, cowbell stutters, sudden low-pass dives.\n\nDrops: the static builds into rising tension, cuts out, then the bass and cowbell drop.\n\nKeep the glitch-rap core dominant: gritty, cool, hypnotic.\n\nDrift phonk is secondary contrast only: cowbell melody and slides in the drops.\n\nMix: gritty low end, wide static. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): static and cowbell.\nVerse 1: cool fast rap.\nPre-chorus: static rises.\nSilence: one bar of static cut.\nChorus 1: bass and cowbell drop, sung hook.\nPost-chorus: cowbell stutters.\nVerse 2: rap with low-pass dives.\nBreakdown: static and pad only.\nBridge: filtered voice.\nSpoken word: a radio-filtered sentence.\nFinal chorus: key change up a step, energy rises, bigger voice, heaviest, static swirling.\nOutro: static fades into a cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet but cool, slightly dark tone with steady fast rap.\nBreathy sung hooks; her voice is filtered through static in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a girl tying ribbons on a broken radio, listening for a signal from someone far away.\nEmotion: cool, lonely, quietly hopeful.\n" + FREE,
  },
  {
    id: 8, name: "Porcelain Panic",
    bpm: "BPM 172, F minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: sudden half-time switches that crack the groove like porcelain. Mood: tense, fragile, explosive.",
    core: "Core sound: hard kick, distorted bass that switches between half-time and full speed, bright compressed synth stabs, shimmering glass pads, crackling textures.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nConstantly alternate half-time cracks with full-speed sections so the groove keeps breaking and reforming.\n\nSamples: use heavy DJ-style sampling throughout: porcelain cracks, teaspoon clinks, reversed vocal tails, rewind FX, crowd shouts. Original, not copied.\n\nGlitch FX: crack sounds on each switch, tempo halving and doubling, reversed vocal tails.\n\nDrops: tension rises in half-time, then cracks into a full-speed drop.\n\nKeep the glitch-rap core dominant: tense, punchy, dynamic.\n\nHalf-time trap is secondary contrast only: heavy pauses inside the switches.\n\nMix: punchy, loud drops. About 2:15, hard cut.",
    structure: "Structure:\nIntro (2 bars): crackle, glass pads.\nVerse 1: fast rap at full speed.\nPre-chorus: half-time, tension rises.\nSilence: one beat before the crack.\nChorus 1: full-speed drop, sung hook.\nPost-chorus: sudden half-time, chopped voice.\nUse brief half-time interruptions and DJ cuts for repeated shocks.\nVerse 2: rap with tempo switches.\nBridge: fragile line over pads.\nBuild: rising tension.\nFinal chorus: key change up a step, energy rises, bigger voice, biggest, full speed.\nEnd with rewind-style cut and sudden vocal stop.",
    vocal: "ONE sweet Lolita female vocalist only: delicate, porcelain-sweet tone that sharpens into rapid fast rap.\nFragile sung lines in half-time; her voice reverses into the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a porcelain-perfect girl holding herself together while hairline cracks spread.\nEmotion: tense, fragile, close to breaking.\n" + FREE,
  },
  {
    id: 9, name: "Bubblegum Bitcrush",
    bpm: "BPM 158, D major, key change up a step into the final chorus.",
    main: BASE + " Flavor: chiptune 8-bit glitch layer and bubblegum melodies. Mood: playful, bright, chaotic.",
    core: "Core sound: punchy kick, distorted chip-style bass, 8-bit square-wave melodies, bright compressed synth layers, shimmering bell sparkles, bubble-pop percussion.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nSamples: use heavy DJ-style sampling throughout: 8-bit blips, bubble pops, coin sounds, scratch hits, pitched-up giggles. Original, not copied.\n\nGlitch FX: bitcrushed vocal bursts, 8-bit arpeggio stutters, sudden pitch-ups.\n\nStage 1:\n8-bit melody and punchy kick, playful rap.\n\nStage 2:\nhalf-time drop, distorted chip bass, bitcrushed vocals.\n\nStage 3:\ndouble-time rush, 8-bit arps and synth stacks at full speed.\n\nDrops: an 8-bit riser climbs, a pop, a beat of silence, then the drop.\n\nKeep the glitch-rap core dominant: bright, crunchy, playful.\n\nChiptune is secondary contrast only: square-wave hooks inside the drops.\n\nMix: candy-colored. About 2:00, hard cut.",
    structure: "Structure:\nIntro (2 bars): 8-bit melody.\nVerse 1: playful fast rap.\nPre-chorus: 8-bit riser.\nSilence: one beat after a pop.\nChorus 1: sudden drop, sung hook.\nPost-chorus: bitcrushed vocal bursts.\nRap verse 2: bitcrushed rap.\nBreak: 4 bars, 8-bit melody and a tape-stop.\nBridge: bubble pops, one line.\nTransition: arps accelerate, rising bass.\nFinal chorus: key change up a step, energy rises, bigger voice, brightest.\nOutro: 8-bit blip, cut.",
    vocal: "ONE sweet Lolita female vocalist only: bubbly, high, giggly-sweet tone with playful fast rap.\nSing-song hooks; her voice is bitcrushed in bursts.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a girl living inside an old handheld game, blowing bubbles while the pixels glitch.\nEmotion: playful, bright, mischievous.\n" + FREE,
  },
  {
    id: 10, name: "Velvet Error",
    bpm: "BPM 145, C# minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: gothic Lolita darkness with harpsichord lines and error-screen glitches. Mood: dark, elegant, haunting.",
    core: "Core sound: heavy kick, deeply distorted bass, glitching harpsichord lines, bright compressed synth layers, shimmering choir-like pads, error-beep percussion.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nMain concept: an elegant harpsichord theme that freezes and corrupts a little more in every section.\n\nSamples: use heavy DJ-style sampling throughout: error beeps, harpsichord one-shots, church-bell hits, reverse hits, filtered whispers. Original, not copied.\n\nGlitch FX: error beeps, frozen frames of harpsichord, sudden digital silence.\n\nDrops: the harpsichord climbs into rising tension, freezes, then the bass drops.\n\nKeep the glitch-rap core dominant: dark, heavy, elegant.\n\nGothic baroque is secondary contrast only: harpsichord and choir-like pads.\n\nMix: dark low end, glitchy top. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): glitching harpsichord.\nVerse 1: elegant fast rap.\nPre-chorus: harpsichord climbs.\nSilence: one bar, frozen frame.\nChorus 1: sudden bass drop, sung hook.\nPost-chorus: frozen harpsichord loop.\nVerse 2: darker rap.\nBridge: bells and pads.\nRap bridge: rap over the harpsichord alone.\nBuild: error beeps multiply.\nFinal chorus: key change up a step, energy rises, bigger voice, heaviest.\nFinal drop: instrumental, harpsichord shattered.\nOutro: harpsichord freeze, cut.",
    vocal: "ONE sweet Lolita female vocalist only: sweet, elegant, slightly haunting tone with controlled fast rap.\nGraceful sung hooks; her voice freezes and repeats in the drops.\n" + NOMALE,
    ratio: JP,
    theme: "Theme: a gothic Lolita girl in a dark velvet room, her reflection showing error messages.\nEmotion: elegant, haunted, defiant.\n" + FREE,
  },
  {
    id: 11, name: "Strawberry Overclock",
    bpm: "BPM 185, A minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: drum-and-bass speed overclocked to the limit. Mood: breathless, sweet, euphoric.",
    core: "Core sound: fast rolling breakbeats, distorted reese bass, overclocked synth arpeggios, bright compressed chord stacks, shimmering top layers.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nSamples: use heavy DJ-style sampling throughout: overheating noise bursts, keyboard clicks, break fragments, sirens, rewind FX. Original, not copied.\n\nGlitch FX: overheating noise bursts, CPU-crash stutters, rapid filter jumps.\n\nPhase 1:\nfast hip-hop rap over rolling breaks.\n\nPhase 2:\nhalf-time drop, distorted reese, overclocked arps.\n\nPhase 3:\nfinal rush, double-time breaks and every layer at full speed.\n\nDrops: the arps accelerate into rising tension, crash to silence, then the drop.\n\nKeep the glitch-rap core dominant: fast, breathless.\n\nDrum and bass is secondary contrast only: rolling breaks in the drops.\n\nMix: fast, bright. About 2:05, hard cut.",
    structure: "Structure:\nIntro (2 bars): overclocked arps.\nVerse 1: breathless fast rap.\nPre-chorus: arps accelerate.\nSilence: one beat crash.\nChorus 1: sudden drop, sung hook.\nPost-chorus: noise bursts and breaks.\nRap break: rap over drums only.\nVerse 2: rap at top speed.\nBridge: one breath, pad.\nTransition: percussion doubles in speed.\nFinal chorus: key change up a step, energy rises, bigger voice, maximum speed.\nLast section: shorter phrases, rapid fills, abrupt silence.",
    vocal: "ONE sweet Lolita female vocalist only: sweet, bright, breathless tone with extremely fast rap.\nTiny sung hooks between bursts; her voice crash-stutters in the drops.\n" + NOMALE,
    ratio: MIX,
    theme: "Theme: a girl pushing her heart past its limits just to keep up with the night.\nEmotion: breathless, euphoric, slightly reckless.\n" + FREE,
  },
  {
    id: 12, name: "Teacup Tornado",
    bpm: "BPM 168, E minor, key change up a step into the final chorus.",
    main: BASE + " Flavor: rage-style stacked synths swirling like a tea party in a storm. Mood: chaotic, cute, intense.",
    core: "Core sound: hard kick, distorted bass slides, rage-style stacked lead synths, bright compressed layers, shimmering teacup-clink percussion.",
    extra: "Modulation: one key change only, up a step into the final chorus; the energy rises, the mix builds and her voice gets bigger. In the lyrics, write it inside the section tag, like [Final Chorus: key change up a step, energy rises, bigger voice]. No other key change and no separate key change tag.\n\nElectronic, not orchestral: the tea-party mood comes from synths and samples only, never live strings.\n\nSamples: use heavy DJ-style sampling throughout: teacup clinks, spoon stirs, polite claps, scratch hits, reverse sweeps. Original, not copied.\n\nGlitch FX: swirling pitch bends, clink stutters, sudden reverse sweeps.\n\nDrops: synths swirl into rising tension, a clink in silence, then the drop.\n\nKeep the glitch-rap core dominant: loud, swirling, intense.\n\nRage-style synth stacking is secondary contrast only: stacked leads in the drops.\n\nMix: wide, loud. About 2:10, hard cut.",
    structure: "Structure:\nIntro (4 bars): swirling synths, clinks.\nHook: hook first, polite and sweet.\nVerse 1: cute fast rap.\nPre-chorus: swirl rises.\nSilence: one clink in silence.\nChorus 1: sudden drop, sung hook.\nPost-chorus: pitch-bent swirl.\nVerse 2: rap turns fierce.\nBridge: polite line over pads.\nBuild: reverse sweeps.\nFinal chorus: key change up a step, energy rises, bigger voice, biggest swirl.\nFinish with a clink, a frantic sample cut and an abrupt stop.",
    vocal: "ONE sweet Lolita female vocalist only: cute, tea-party-polite tone that turns fierce in fast rap.\nPolite sung hooks; her voice swirls with pitch bends in the drops.\n" + NOMALE,
    ratio: EN,
    theme: "Theme: a perfectly polite tea party that slowly spins out of control.\nEmotion: polite, chaotic, secretly furious.\n" + FREE,
  },
];

// パターンに付かない歌詞テーマ（指定の既定値）
const THEME_EXTRA = [
"Theme: leaving the club at dawn on her own terms. No drama, no crash, just walking out in glitter before the room can pull her back.\nScenes: velvet on the shoulder, the last booth, the exit-sign light on her lashes, a train-line fence, her reflection in a train window, one spark left in her hair.\nEmotion: light, cool and self-possessed; a small goodbye hidden in a grin.\nChorus: a short English phrase about leaving in glitter, not a crash but a silver blur.",
"Theme: cutting away the extra noise to find her own outline. She stops comparing herself and trusts the small fire she has.\nScenes: city noise switched off one by one, decorative words pushed deep into a pocket, a thin pen tracing an outline, a clouded screen, a quiet heartbeat as the signal.\nEmotion: calm focus turning into bright confidence. Minimal, not aggressive.\nChorus: short English style-and-shine phrases, shutting the noise out and moving on as herself.",
"Theme: dependence on someone who is already gone. His scent and warmth remain only as a beautiful ghost she keeps holding.\nScenes: a lingering scent in the corner of the room, fingertips tracing the shape of empty air, a bed too wide for one, a private world nobody interrupts.\nEmotion: sweet and hollow at once. Clinging without drama, lovely and a little eerie.\nChorus: the beautiful ghost called dependence slipping away the tighter she holds it.",
"Theme: a ghost ship drifting after the captain abandoned it. She is the ship, searching for a port that may not exist.\nScenes: an empty sea, fog hiding the stars, a broken compass, rotting wood under each step, the turning tide.\nEmotion: lonely drift and quiet sorrow, never acted out loud.\nChorus: drifting away on a phantom ride with no destination, a ghost looking for a port.",
"Theme: the night before the last step onto a big stage. She kept climbing without looking down, and now the final step glows.\nScenes: stair marks on her soles, nights she was laughed at, distant cheers that feel close, her own stride from here on.\nEmotion: quiet confidence turning into euphoria. No regrets, no hesitation.\nChorus: the last step shining tonight, grabbing the stage she has not seen yet.",
"Theme: carrying the last mix through the rain at midnight. The record shop closes tomorrow, and the disc must reach the radio station dry.\nScenes: a shutter half down, a waterproof bag doubled, the last train stopped, taped shoes on a flooded road, overpass numbers counted one by one, a red station sign.\nEmotion: \"everything is fine\" cracking into honest fear, then pride. The beat still arrives.\nChorus: the needle keeps moving, the disc stays dry, one clean cut survives.",
"Theme: going home at dawn after a long night out, carrying the heat instead of letting it fade.\nScenes: walking the white line like a last ribbon, friends' quiet profiles, the east sky turning pale, glitter dust on her chest, closing shutters, a car window holding the last fire.\nEmotion: tired but glowing; calm face, warm core.\nChorus: going home without disappearing, glitter tucked away, smiling as if empty-handed.",
"Theme: a sweet glass thread she cannot cut. She says she is fine, but her fingertips shake, and every corner of the maze stabs her with one name.\nScenes: a red thorn left in her chest, roses dropped at a corner of the maze, a door she closes, opens and closes again, a thread still tying them together.\nEmotion: pleading and sugary on the surface, quietly frightening underneath. So close, yet far. Never explained, never violent.\nChorus: a two-word English phrase repeated, begging to be held in shape.",
"Theme: staying beside someone who cannot say what hurts. Like a bicycle with a flat tire, they cannot move forward, and she does not push.\nScenes: a flat front tire sinking, a strained smile, an empty reply, a basket carrying the weight they cannot say, a sleepless night shared.\nEmotion: steady, gentle presence. Asking first, carrying without being asked.\nChorus: a simple repeated promise of being right here, even before being called.",
"Theme: a birthday cake cut into six pieces for a sister who cannot come. At dawn she hands the slices to strangers in the waking city.\nScenes: six candles, strawberries lined up, an answering machine blinking, snow closing the highway, a delivery rider, a taxi attendant, a baker, a cleaner, a guard, one slice kept under a clear lid.\nEmotion: festive and lonely at once; nobody replaces her sister, yet the tin grows lighter.\nChorus: wordless chopped syllables around the image of morning reaching the empty seat too.",
"Theme: the morning after deciding to end it. She pays the bill in silence and keeps telling herself she is fine, not yet ready to leave.\nScenes: a school ground white with morning, a single ice cube clinking, a coat sleeve she grabbed, the cold corner of a desk, a crumpled receipt in her pocket, untied shoelaces.\nEmotion: composure with a slight delay in her eyes. Proud, unsteady, honest.\nChorus: \"I'm fine, not yet\" repeated like a countdown until she can finally mean it.",
"Theme: flipping the switch on an ordinary morning. The third alarm is where today starts to win.\nScenes: a gray room at 6 AM, a thumb silencing alarms, a train window reflection, shoulders dropping two centimeters, a playlist lit by a finger, a midday platform with a new stride.\nEmotion: groggy to fully charged. Taking back the day, paying back what she owes herself.\nChorus: \"switch on\" calls, carrying the day and taking her turn.",
"Theme: ending it beautifully and walking out with dignity after the last train. Tears may fall forward, never behind her.\nScenes: a profile left on the glass, slightly higher heels she chose herself, hands hidden in the elevator mirror, white shop signs, a crowd she slips through, a ticket gate where her name is no longer called.\nEmotion: aching yet composed; she does not look back, only keeps her stride.\nChorus: ending it cleanly, without hurting anyone, staying herself.",
"Theme: a rain-soaked last train and a feeling that cannot hold its shape alone. She is waiting, not yet looking, wanting to look.\nScenes: the last-train window watching her, rain turning into lines, fingertips at the edge of the seat, strangers folding umbrellas, an unknown name called too gently, the moon like his shadow.\nEmotion: sweet, unstable devotion. The ring of her feelings keeps loosening but will not let go.\nChorus: a loosening ring, rain on her skin, still not letting go.",
"Theme: the hour between the last train and the first. The night is over, but she is not ready to disappear into the morning yet.\nScenes: a closing shutter, a ticket gate, a train window reflection, glitter or rain still on her coat, the sky turning pale over the tracks.\nEmotion: tired, composed and quietly glowing. Leaving with dignity instead of drama.\nChorus: a short repeated phrase about walking out without fading.",
"Theme: holding her shape in the rain. Everything around her is soaked and unsteady, but the one thing she carries stays dry.\nScenes: a flooded street, taped shoes, a bag pressed to her chest, overpass lights, a destination sign glowing red ahead.\nEmotion: \"I'm fine\" cracking into honest fear, then turning into pride.\nChorus: the beat keeps moving, and so does she.",
"Theme: the final duel with the version of herself that learned to hate. The floor is the last stage, and she answers every attack with a step instead of a scream.\nScenes: a long corridor of pipes and shadows, the same bassline circling like a guard, sparks on the floor, a grin that refuses to break, a mirror splitting into two dancers.\nEmotion: cool menace turning into mercy. She wins by not becoming the villain.\nChorus: a short battle cry about keeping her shape until the loop breaks.",
"Theme: a boss battle that never ends until she changes the rhythm. The same pattern keeps coming back, and she finally dodges it on the off-beat.\nScenes: a flashing hit counter, a riff that starts alone in the dark, heels sliding on a chessboard floor, power chords shaking the lights, one last breath before the save point.\nEmotion: playful, stubborn and a little dangerous; laughing at the pressure.\nChorus: a repeated phrase about stepping out of the loop.",
"Theme: dark-cute love. She wants to look adorable, but her inner world is unstable and she cannot hide how much she depends on him. The relationship is not broken yet, just slightly unsafe, a little short of lovers.\nScenes: her room, the mirror, unfinished makeup, a reply that never comes, the way home, a phone she keeps turning over, small private city moments.\nEmotion: sweetness mixed with impatience, jealousy, possessiveness and unease. Wording is a little calculated and a little toxic, but never too heavy. No horror imagery and no explicit violence.\nChorus: short strong phrases repeated until they become addictive.",
"Theme: yami-kawaii love written pop. The weight is there, but it never turns dark. Cuteness, dependence, selfishness, anxiety and loneliness stay balanced.\nScenes: an ordinary room, a mirror, a small gift, the walk home, waiting for an answer, a day that feels too long.\nEmotion: clingy but bright, sulky, needy, easily hurt. Use everyday words, never clinical or explanatory. Keep it pop and catchy.\nChorus: one short line that sticks after a single listen, repeated.",
"Theme: grown-up cute love. She looks composed, but in front of him she cannot stay honest. They are just before becoming lovers, or already together while she pretends to be at ease.\nScenes: a city view, the walk back from work, a cafe, a taxi, perfume, a jacket left behind, messages traded across a screen.\nEmotion: elegant, lightly teasing, shy, pretending to have room to spare while her real feelings shake. Avoid girlish speech and heavy slang.\nChorus: adult and lingering, but still easy to hum.",
"Theme: a slightly sensual grown-up cute love. Poise, composure and playful games on the surface, loneliness underneath.\nScenes: the end of a long day, a quiet bar, a coat, a window above the city, a hand almost taken, the walk to the station.\nEmotion: natural adult warmth rather than forced cuteness. Two sides at once: confident outside, unsteady inside.\nChorus: sweet, memorable and softly repeated.",
"Theme: yandere love. She is far too devoted to one person and can no longer hide the weight of it. Unrequited or established, the fear of losing him sits at the center.\nScenes: her room, the hours of waiting, a promise, a familiar route, a place full of memories, an object he left behind.\nEmotion: devotion, anxiety, possessiveness and weakening reason. Never explain madness directly; show it as quiet, heavy attachment. No crime or violence imagery.\nChorus: short, strong feelings repeated with rising intensity.",
"Theme: yandere love that still keeps its cuteness. Heavy affection, loneliness and possessiveness carried in words that sound sweet.\nScenes: her room, a promise, a saved message, a shared seat, the road they always walked.\nEmotion: earnest and fragile rather than frightening. Desperate love, never a threat.\nChorus: an addictive short phrase repeated until it aches.",
"Theme: tsundere love. She is stubborn, cannot be honest, and keeps missing her own timing while trying to hide her feelings. They are close, but one step short.\nScenes: a classroom or a street, a cafe, short messages, small misunderstandings, ordinary days.\nEmotion: embarrassment, pride, jealousy and the cuteness of a hidden truth. A little sharp, never cruel. Avoid loud anime clichés.\nChorus: the one place where her real feelings leak out, just a little.",
"Theme: adult tsundere love. Not childish sharpness, but pretended composure, light jokes, deflection and clumsiness at showing anything real.\nScenes: after work, a quiet street, a shared drink, an unsent message, the last train home.\nEmotion: guarded, teasing and quietly warm. Honesty arrives only once.\nChorus: the moment she finally stops pretending.",
"Theme: the love life of a working woman in the city. She is capable and rational at work but a little fragile in love. Office romance, an ex, or something undefined — keep the distance realistic.\nScenes: the commute, the office, lunch, the walk home after overtime, the last train, a Friday evening, a wine glass, messages traded slowly.\nEmotion: tiredness, hope, something she cannot give up on, a trace of warmth and a trace of loneliness. Adult natural wording with real daily texture.\nChorus: unpretentious but memorable adult feeling.",
"Theme: the ordinary days and quiet love of a working adult woman. Nothing dramatic, just real life.\nScenes: a morning train, a desk, a coffee gone cold, the walk home, a shared umbrella, a weekend that ends too fast.\nEmotion: a little tired, a little hopeful, a small flutter. Do not stack office jargon; keep the love inside daily life.\nChorus: soft, natural and easy to sing.",
"Theme: a one-sided love that grows a little bigger on every ordinary day.\nScenes: a glance, a short conversation, a message typed and deleted, the walk home, the same seat every week.\nEmotion: no grand destiny — small events swelling into something she cannot hold. Natural, singable Japanese.\nChorus: simple, warm and rising.",
"Theme: two people who love each other but keep missing each other.\nScenes: small everyday gaps, a call that ends too early, a plan postponed again, the same room holding two different silences.\nEmotion: loneliness rather than anger. The distance widens through tiny misalignments.\nChorus: what stays unsaid, and what she still means.",
"Theme: the vague distance with someone she cannot forget after the end.\nScenes: an old route, a saved photo, a familiar station, a message she keeps rewriting, a place they used to share.\nEmotion: lingering attachment, pride, memory, and knowing she should not look yet looking anyway. Adult and never over-explained.\nChorus: restrained, with the truth sitting just underneath.",
"Theme: the small happiness of a day when love is going well.\nScenes: morning light, a breakfast for two, a walk with no destination, a hand held on an ordinary street.\nEmotion: no big drama — an ordinary day that looks slightly special. Gentle, natural and easy to hum.\nChorus: bright, simple and warm.",
"Theme: a girl everyone underestimates because she looks sweet — she flips it and owns the night on her own terms.\nScenes: rain on a crosswalk, glitter on scuffed sneakers, a mirror check before walking in, a cracked phone screen still glowing, a whole room turning around when she arrives.\nEmotion: playful confidence and defiance rather than anger. Sweet outside, unshakable inside.\nChorus: a short chantable title phrase repeated, then the reveal of what hides under the sweet surface.",
"Theme: a gentle, dignified breakup. Both know it is over and neither wants to blame the other. She wants to end it smiling and thank him for the time they shared.\nScenes: the last walk together, calling his name one final time, a morning without him, looking up at a sky she has never seen before.\nEmotion: sorrow turning into quiet strength. No bitterness, no begging.\nChorus: a short English title phrase, then the promise not to look back.",
"Theme: losing balance on a spinning dance floor and discovering she can rise instead of fall. Gravity stops being an enemy.\nScenes: heels hitting the floor, the ceiling turning, a heartbeat slightly off-axis, the body moving before the mind, a sudden weightless lift.\nEmotion: dizzy exhilaration turning into self-possession. Her balance belongs to her.\nChorus: if there is nowhere to fall, she names this place the sky.",
"Theme: waiting for a sign that never comes, then deciding to take one small step today on her own.\nScenes: a dark road ahead, wind that will not change, footprints she leaves behind, a morning she chooses without a map.\nEmotion: fear set aside, not erased. Quiet determination rather than triumph.\nChorus: her own direction, her own timing, already moving.",
"Theme: realizing she may have loved the future she imagined more than the person in front of her. She separates her own dream from him and decides to carry it herself.\nScenes: the life she drew in her head, his voice she did not really hear, a wish handed over too heavily, looking at him again without the script.\nEmotion: honest self-reflection turning into mature, lighter love.\nChorus: if she still loves him after all this, she wants to say it in a way that truly reaches him.",
"Theme: a couple pretending to be happy, painting daylight over the dark. She finally tears down the perfect picture and chooses honest pain over a pretty lie.\nScenes: curtains opened only for show, matching photos, the same polite words, a silence they call peace.\nEmotion: numb calm cracking into honesty. Not anger, but relief in admitting the truth.\nChorus: saying it is not happiness is where something real begins.",
"Theme: breaking out of the \"always smile, be a good girl\" rules. The fake happiness she wore in public finally cracks, and she lets her real self out.\nScenes: a smile for the picture, a smile for the crowd, a mirror where she no longer recognizes herself, walls built inside her own head.\nEmotion: suppressed frustration exploding into liberation. Defiant and cathartic, never violent.\nChorus: she will not smile on command anymore; right here she becomes herself.",
"Theme: lifting her head after a long hard season. She is not fully healed; she has simply stopped looking only at the ground.\nScenes: sunlight filtering through leaves, light and shadow on the same path, wind she waits for, squinting at a slightly too-bright day.\nEmotion: gentle recovery. She does not have to choose only brightness; she can walk with her shadow.\nChorus: walking into today, a little dazzled, shadow in tow.",
"Theme: a young night drive running from reality. There are no answers, but she keeps pressing the speed higher until sunrise.\nScenes: earbuds in, the passenger seat, a sweaty shirt, city signals flashing past, a strangely white store light glowing in the quiet.\nEmotion: restless, reckless youth. Unfinished and noisy, but alive in this moment.\nChorus: an English plea to the night not to let her down, then running through before morning comes.",
"Theme: good-mood trouble on a city night. Plans go sideways and nobody cares, because everyone is laughing.\nScenes: a new spot, a glance that turns into a smile, one small spark flipping the whole night, the city getting brighter as the pace speeds up.\nEmotion: carefree, cheeky fun. No perfect ending, just something pretty.\nChorus: turning one little night into a whole weekend.",
"Theme: accepting what she cannot see yet. Only a few words, sung like a mantra between the drops.\nScenes: a dark horizon, a low voice, a hand reaching forward without knowing what is there.\nEmotion: calm acceptance fueling forward motion.\nChorus: no sung chorus; the lead melody carries it, with the phrase \"it is fine not to see it\" in Japanese as the only hook.",
"Theme: the morning commute as a starting line. She plugs in her earbuds and turns an ordinary train ride into her own race.\nScenes: a crowded platform, reflections in the train window, footsteps matching the beat, a city waking up.\nEmotion: sleepy to fired-up. Small courage for an ordinary day.\nChorus: this moment is hers to run through.",
"Theme: deep focus at work, the world shrinking to one task. Pressure turns into speed.\nScenes: a desk lamp, a deadline, keys clicking in rhythm, cold coffee forgotten, the last push before finishing.\nEmotion: tense, then flowing, then proud. Not stress, but momentum.\nChorus: nothing can stop her while the beat keeps going.",
"Theme: a dawn highway drive after a long night of thinking. She leaves the old version of herself in the rear-view mirror.\nScenes: an empty highway, a toll gate, the sky turning pale, window down, wind in her hair.\nEmotion: release and quiet excitement about what comes next.\nChorus: accelerate into the morning, no turning back.",
];

// 「Japanese 70-80%, English for the rest.」は「Japanese 70-80%, short natural English 20-30%.」と同じ比率なので除いた
const LYRICS_RATIOS = [
"Lyrics: English 70-80%, Japanese for the rest.",
"Lyrics: Japanese and English mixed inside every bar, random switching mid-line.",
"Lyrics: Japanese 60-70%, short natural English 30-40%.",
"Lyrics: Japanese 70-80%, short natural English 20-30%.",
"Lyrics: Japanese 80-90%, short natural English 10-20%.",
"Lyrics: Japanese 50-60%, short natural English 40-50%.",
"Lyrics: Japanese 40-50%, natural English 50-60%.",
"Lyrics: Japanese 90-100%, English only as short hook words.",
"Lyrics: Japanese 65%, short natural English 35%, with one English hook in the chorus.",
"Lyrics: Japanese 75%, short natural English 25%, English used only for short repeated calls.",
"Lyrics: English-main 70% with Japanese 30%, natural code-switching within lines.",
];

// BASE 先頭の「Glitchcore hip-hop」と入れ替える候補（既定 ON）
const GENRE_SWAPS = [
"makina x Anime Opening x Addictive tracks x Glitchcore hip-hop EDM MiX",
"makina x Anime Opening x Addictive tracks x jersey club EDM MiX",
"makina x Anime Opening x Addictive tracks x hyperpop EDM MiX",
"makina x Anime Opening x Addictive tracks x breakcore EDM MiX",
"makina x Anime Opening x Addictive tracks x digicore EDM MiX",
"makina x Anime Opening x Addictive tracks x nightcore EDM MiX",
"makina x Anime Opening x Addictive tracks x drift phonk EDM MiX",
"makina x Anime Opening x Addictive tracks x drum & bass EDM MiX",
"makina x Anime Opening x Addictive tracks x trap EDM MiX",
"makina x Anime Opening x Addictive tracks x rage EDM MiX",
"makina x Anime Opening x Addictive tracks x jungle EDM MiX",
"makina x Anime Opening x Addictive tracks x happy hardcore EDM MiX",
"makina x Anime Opening x Addictive tracks x future bass EDM MiX",
"makina x Anime Opening x Addictive tracks x hyper techno EDM MiX",
];

const NEVER_USE_FIXED = "ネオン, 午前二時, 既読, コンビニ, 愛してる, 通知, 深夜, べつに, ねえ, 噛んで, キャンディ, リボン, 離れないで, 行かないで, あなたがほしい, 離さない, stay with me, 消えないで, 砂糖, pixel, sugar-face.";
const AVOID_FIXED = "Avoid: male vocal, duet, choir, slow tempo, ballad, acoustic arrangement, muddy mix, thin weak bass, long intro, long fade-out, orchestral cinematic scoring, metal growls.";

const BPM_EXTRA = [
"BPM 150, D minor, key change up a step into the final chorus.",
"BPM 160, F minor, key change up a step into the final chorus.",
"BPM 170, G minor, key change up a step into the final chorus.",
"BPM 180, C minor, key change up a step into the final chorus.",
];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  never: [NEVER_USE_FIXED],
  avoid: [AVOID_FIXED],
};
})();
