// V1 のプロンプト候補データ（prompt.md の 10 パターン ＋ Thema.md の 14 テーマ）。
// このファイルだけ編集すれば V1 の候補が更新されます。変更後はページを再読み込みしてください。
// 歌詞テーマ・古文フラグメント・Never use は prompt-data-v4.js を全版共通で使う。Avoid は V1 / V2 それぞれがこのファイルで持つ。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v1 = (() => {

const PATTERNS = [
  {
    id: 1, name: "No.1 Cyber Trance",
    bpm: "BPM 158-168.",
    main: "Early-2000s Japanese club Hyper Techno fused with Cyber Trance, Italian hard Eurodance, rave techno and modern Future Bass.",
    core: "Core sound: relentless 4-on-floor, hard dry kick, driving offbeat bass, rubbery distorted synth bass, fast open hats, metallic percussion, rave stabs, bright saw leads, rapid minor-key riffs, gated synths, Eurodance chord movement, short snare builds and abrupt beat cuts.",
    extra: "Use heavy DJ-style sampling throughout: familiar-sounding rave vocal one-shots, short crowd shouts, vinyl cuts, scratch hits, sirens, reverse hits, break fragments, radio-style snippets, chopped voices and classic club FX. Samples should feel instantly familiar to club listeners but remain original, generic and not copied from a specific song.\n\nKeep the early-2000s club sound dominant: raw, compressed, dry, synthetic and energetic. Use simple addictive synth motifs, repeated riffs and vocal-synth call-and-response.\n\nFuture Bass is secondary contrast only: deep sub, huge sidechained chords, pitch bends, glitch fills and half-time sections.",
    structure: "Structure:\nIntro: filtered minor-key sequence + DJ samples + whisper.\nVerse 1: minimal hard dance groove, dry kick, offbeat bass.\nPre: rising sequence, snare build, sample cuts, brief silence.\nChorus 1: explosive Hyper Techno / Cyber Trance, bright saw hook, rave stabs, chest vocal.\nPost: sudden half-time Future Bass, huge chords, deep sub, chopped samples.\nVerse 2: fast return, darker mechanical groove, new synth riff.\nBridge: whisper, bass pulse, sparse vinyl/scratch texture.\nFinal chorus: Hyper Techno rhythm + Eurodance melody + Future Bass weight, rapid fills, DJ cuts and abrupt ending.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky low-mid voice, natural rasp, strong chest tone, never cute or idol-like.\nVocal arc: whisper → restrained half-sung → tense half-spoken → chest belt → raw melodic shout → controlled scream-like climax.\nNo metal scream, growl, male vocal, duet or choir.",
  },
  {
    id: 2, name: "No.2 Eurobeat",
    bpm: "BPM 162-178.",
    main: "Early-2000s Japanese club Hyper Techno fused with Italian Eurobeat, Eurodance and modern Future Bass.",
    core: "Core sound: relentless 4-on-floor, hard dry kick, fast octave bass, rolling offbeat bass, bright synth brass, sharp rave stabs, rapid saw riffs, minor-key arps, Eurodance chord movement, fast open hats and short snare builds.",
    extra: "Use frequent DJ-style samples: rave vocal shouts, crowd chants, short spoken one-shots, vinyl cuts, scratch accents, sirens, reverse hits, breakbeat fragments, radio snippets and chopped vocal FX. Make them feel like familiar classic club tools, but original rather than direct samples from existing songs.\n\nKeep the early-2000s club character dominant: raw, compressed, direct, synthetic and extremely energetic. Use simple catchy melodies, repeated riffs and strong vocal-synth call-and-response.\n\nFuture Bass is secondary: deep sub, sidechained chords, pitch bends, glitch fills and half-time drops.",
    structure: "Structure:\nIntro: filtered dance riff + sampled shout + whisper.\nVerse 1: minimal fast groove, octave bass.\nPre: rising Eurodance chords, ascending lead, snare build and sample cuts.\nChorus 1: explosive hard Eurodance, synth brass, bright saw hook, chest vocal.\nPost: sudden half-time Future Bass, deep sub, bent chords and chopped samples.\nVerse 2: fast return with darker minor-key sequence.\nBridge: stripped pads, whisper and vinyl texture.\nFinal chorus: Eurobeat drive + Hyper Techno rhythm + Future Bass weight, denser and more desperate.\nEnd with rapid DJ cuts and abrupt silence.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky voice, rich low-mid tone, slight rasp, strong chest resonance, never youthful, cute or idol-like.\nWhisper → half-spoken → restrained singing → chest belt → melodic shout → controlled scream-like climax.\nNo metal scream, growl, male vocal, duet or choir.",
  },
  {
    id: 3, name: "No.3 Hard Trance",
    bpm: "BPM 150-170.",
    main: "Dark early-2000s Japanese club Hyper Techno fused with hard trance, rave techno and modern Future Bass.",
    core: "Core sound: heavy dry 4-on-floor kick, rolling offbeat trance bass, dark sequenced bass, resonant synth pulses, acidic touches, metallic percussion, gated synths, hypnotic arps, bright supersaws, minor-key leads, rave stabs and fast hats.",
    extra: "Use frequent DJ-style sampling: dark rave shouts, short spoken phrases, vinyl scratches, sirens, reverse hits, chopped break loops, old-school club FX, crowd hits and brief radio-filtered voices. Samples should sound familiar in function and attitude, but remain original and non-specific.\n\nKeep it raw, compact and driving rather than cinematic. Dark verses contrast with bright euphoric hooks. Use repeated minor-key riffs that become hypnotic.\n\nFuture Bass remains secondary: deep sub, huge sidechained chords, pitch bends, glitch cuts and half-time drums.",
    structure: "Structure:\nIntro: dark filtered sequence + sampled FX + whisper.\nVerse 1: minimal hard-trance groove, dry kick and bass.\nPre: kick disappears, arp rises, sample cuts increase.\nChorus 1: explosive hard electronic dance, bright saw melody over dark harmony.\nPost: sudden half-time Future Bass, massive sub, bent chords and vocal chops.\nVerse 2: darker mechanical techno sequence.\nBridge: almost no drums, low drone, scratch texture and whisper.\nBuild: acid rise, fast snares, DJ cuts, brief silence.\nFinal chorus: hard trance bass + rave stabs + supersaws + Future Bass weight.\nFinish with frantic sample cuts and abrupt stop.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky low-mid voice, slight natural rasp, strong chest tone and emotionally worn texture.\nWhisper → half-spoken → restrained melody → chest belt → raw melodic shout → controlled scream-like climax.\nNo metal scream, growl, male voice, duet or choir.",
  },
  {
    id: 4, name: "No.4 Speed Garage",
    bpm: "BPM 150-166.",
    main: "Early-2000s Japanese club Hyper Techno fused with UK Speed Garage, rave dance and modern Future Bass.",
    core: "Core sound: alternate fast straight 4-on-floor with shuffled 2-step. Hard dry kick, skipping hats, sharp snares, syncopated percussion, elastic garage bass, reese accents, offbeat bass, rave stabs, bright saw leads and minor-key riffs.",
    extra: "Use heavy DJ-style sampling throughout: chopped rave vocals, short crowd shouts, vinyl cuts, scratches, rewind FX, sirens, filtered spoken samples, break fragments, reverse hits and classic club-style one-shots. Keep samples frequent, rhythmic and familiar-sounding without copying specific recordings.\n\nKeep the early-2000s electronic club character raw, punchy and repetitive. Use short hooks and strong rhythmic contrast.\n\nFuture Bass is secondary: deep sub, sidechained chords, pitch bends and glitch transitions.",
    structure: "Structure:\nIntro: filtered garage drums + vinyl cut + whisper.\nVerse 1: 2-step groove, elastic bass, intimate vocal.\nPre: rhythm gradually straightens into 4-on-floor while rave synths rise.\nChorus 1: full fast rave-dance release, bright saw hook and chest belt.\nPost: sudden heavy Speed Garage / half-time Future Bass with chopped samples.\nVerse 2: faster shuffle, darker bass and synth call-and-response.\nBridge: drums vanish, sub pulse, scratch FX and whisper.\nBuild: snares, sample cuts and rising synth.\nFinal chorus: alternate straight 4-on-floor and shuffled garage every 4-8 bars with huge Future Bass chords.\nEnd with rewind-style cut and sudden vocal stop.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky voice, low-mid focused, slight rasp.\nWhisper → rhythmic half-spoken → restrained melody → chest belt → raw shout → controlled scream-like climax.\nNo metal scream, growl, male vocal, duet or choir.",
  },
  {
    id: 5, name: "No.5 → Drum & Bass",
    bpm: "BPM starts around 150, ending with a 172-176 BPM Drum & Bass feel.",
    main: "Three-stage evolving track: early-2000s Japanese club Hyper Techno → modern Future Bass → melodic Drum & Bass. Keep one recognizable melody through all stages.",
    core: "",
    extra: "Use DJ-style samples throughout: rave vocal one-shots, crowd shouts, scratches, vinyl cuts, sirens, reverse hits, chopped break fragments, radio-filtered voices, rewind effects and classic club one-shots. Recycle and transform the same samples across all three stages so they become part of the track identity. Keep them original and non-specific.\n\nStage 1:\nhard dry 4-on-floor kick, rolling offbeat bass, bright saw leads, rapid minor-key arps, rave stabs, repeated riffs and Eurodance chords.\n\nStage 2:\nhalf-time drums, huge sidechained chords, deep sub, pitch bends, wide synths, glitch cuts and chopped samples.\n\nStage 3:\nfast breakbeat, rolling sub, sharp snare, rapid hats, rave stabs, transformed vocal samples and original saw melody.",
    structure: "Structure:\nIntro: whisper + filtered synth riff + sampled FX.\nVerse 1: raw fast club groove.\nPre: rising sequence, snare build and sample cuts.\nChorus 1: euphoric Hyper Techno release.\nPost: sudden collapse into half-time Future Bass.\nVerse 2: sparse Future Bass, deep sub.\nChorus 2: larger chords and stronger vocal.\nBridge: near silence, voice, pad and vinyl texture.\nTransition: accelerating percussion, chopped samples and rising bass.\nFinal chorus: melodic DnB rhythm + original rave lead + Future Bass chords.\nEnd abruptly after repeated vocal/sample hook.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky low-mid voice, natural rasp, strong chest tone.\nWhisper → restrained → half-spoken → emotional singing → chest belt → melodic shout → controlled scream-like climax.\nNo metal scream, growl, male vocal, duet or choir.",
  },
  {
    id: 6, name: "No.6 Hard House",
    bpm: "BPM 150-165.",
    main: "Early-2000s Japanese club Hyper Techno fused with hard house, hard dance, rave techno and modern Future Bass.",
    core: "Core sound: hard dry 4-on-floor kick, bouncy offbeat bass, reverse-bass accents, hoover synths, rave stabs, rapid minor-key riffs, bright saw leads, fast hats, metallic percussion and short snare rushes.",
    extra: "Use abundant DJ-style samples: rave shouts, crowd calls, short spoken one-shots, vinyl scratches, sirens, airhorn-like club FX, reverse hits, break fragments, filtered voices and rhythmic sample cuts. Treat samples as part of the groove, often answering the vocal or synth riff. Keep them familiar in club language but original.\n\nKeep it melodic and club-focused, not modern hardstyle. Production should feel raw, compressed, synthetic and aggressively repetitive.\n\nFuture Bass is contrast only: huge sidechained chords, deep sub, pitch bends, glitch fills and short half-time sections.",
    structure: "Structure:\nIntro: filtered hard kick + sampled shout + whisper.\nVerse 1: bouncy hard-dance groove.\nPre: bass falls away, saw chords rise, sample cuts accelerate.\nChorus 1: bright rave melody over hard kick and bass.\nPost: sudden half-time Future Bass with huge sub and vocal chops.\nVerse 2: harder groove, shorter lines, new riff.\nBreakdown: ambient space, breath, scratch and whisper.\nBuild: accelerating snares, hoover rise and brief silence.\nFinal chorus: hard-house low end + rave melody + Future Bass weight.\nUse brief half-time interruptions and DJ cuts for repeated shocks.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky low-mid voice, natural rasp and strong chest resonance.\nWhisper → dry low-register vocal → tense half-speaking → belt → shout → melodic scream-like climax.\nNo metal scream, growl, male singer, duet or choir.",
  },
  {
    id: 7, name: "No.7 Electroclash",
    bpm: "BPM 148-164.",
    main: "Early-2000s Japanese club Hyper Techno fused with electroclash, dirty electro, rave techno, digital punk attitude and modern Future Bass.",
    core: "Core sound: fast dry kick, dirty mono synth bass, distorted electronic bass, rave stabs, bright saw hooks, retro digital synths, bitcrushed percussion, robotic stabs, metallic hits, glitch cuts, noise bursts and repetitive minor-key riffs.",
    extra: "Electronic, not guitar-driven punk.\n\nUse many DJ-style samples: distorted rave vocal shots, spoken fragments, crowd calls, record scratches, vinyl stop FX, sirens, radio snippets, reverse impacts, old-school break fragments, chopped voices and synthetic one-shots. Make sampling dense and playful, like a DJ cutting familiar club vocabulary into the track, but without direct copyrighted samples.\n\nKeep production raw, compressed, synthetic and slightly abrasive. Use short catchy motifs, stop-start rhythms and vocal-synth/sample call-and-response.\n\nFuture Bass remains secondary: deep sub, wide sidechained chords, pitch bends and half-time contrast.",
    structure: "Structure:\nVerse 1: dry electro beat, dirty bass, whisper / spoken vocal.\nPre: bright rave arp and sample cuts enter.\nChorus 1: explosive fast electronic dance, supersaw hook and chest belt.\nPost: distorted electroclash with bitcrushed edits and chopped vocals.\nVerse 2: more aggressive electronic-punk attitude.\nBridge: half-time Future Bass, huge chords, vinyl texture and wide vocal.\nBuild: repeating pulse, scratches and snare rise.\nFinal chorus: full-speed rave groove, dirty electro bass, Future Bass chords and rapid glitches.\nEnd with repeated sampled shout and abrupt silence.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky voice, dry close-mic verses, natural rasp and strong chest belt.\nWhisper → spoken-sung → restrained melody → belt → shout → controlled scream-like peak.\nNo metal vocal, growl, male voice, duet or choir.",
  },
  {
    id: 8, name: "No.8 Psytrance",
    bpm: "BPM 150-174.",
    main: "Early-2000s Japanese club Hyper Techno fused with melodic psytrance, rave techno and modern Future Bass.",
    core: "Core sound: fast dry 4-on-floor kick, rolling psychedelic bassline, hypnotic 16th-note sequences, resonant pulses, acidic touches, gated effects, rave stabs, bright saw leads, minor-key melodies, fast hats and metallic percussion.",
    extra: "Use frequent DJ-style sampling: psychedelic vocal one-shots, rave shouts, short spoken fragments, vinyl scratches, sirens, reverse hits, filtered voices, chopped break samples, crowd sounds and classic club FX. Samples should appear rhythmically throughout the arrangement and mutate with filters, pitch and gating. Keep them original and non-specific.\n\nKeep it melodic, catchy and club-oriented rather than dark underground psytrance. Early-2000s rave energy must dominate.\n\nFuture Bass is contrast only: deep sub, huge sidechained chords, pitch bends, glitch transitions and half-time sections.",
    structure: "Structure:\nIntro: hypnotic filtered sequence + sampled voice + whisper.\nVerse 1: minimal psychedelic bass and synth pulses.\nPre: bright rave melody appears while sample cuts accelerate.\nChorus 1: euphoric hard electronic dance explosion.\nPost: psy bass continues while drums switch to half-time Future Bass with chopped samples.\nVerse 2: darker hypnotic sequence.\nBridge: floating pads, whisper, vinyl texture, almost no drums.\nBuild: faster sequences, sample cuts and snare rolls.\nFinal chorus: psy bass + rave saws + Future Bass chords, maximum speed and emotion.\nEnd with repeated sample fragment and hard cut.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky low-mid voice, slight rasp and strong chest tone.\nWhisper → restrained singing → tense half-spoken → belt → raw shout → controlled melodic scream-like climax.\nNo metal scream, growl, male vocal, duet or choir.",
  },
  {
    id: 9, name: "No.9 Rave Breakbeat",
    bpm: "BPM 150-168.",
    main: "Early-2000s Japanese club Hyper Techno fused with rave breakbeat, breakbeat hardcore energy and modern Future Bass.",
    core: "Core sound: hard dry kick, rolling offbeat bass, chopped breakbeats, sharp snares, rapid hats, rave stabs, bright saw leads, minor-key arps, pitched synth hooks, metallic percussion and sudden stop-start edits.",
    extra: "Constantly alternate straight 4-on-floor sections with energetic broken-beat sections.\n\nUse especially heavy DJ-style sampling: chopped rave vocals, crowd shouts, scratches, vinyl cuts, rewind FX, sirens, reverse hits, classic break fragments, radio-filtered voices, rhythmic one-shots and short spoken samples. Samples should be densely cut and rearranged like a fast club DJ set, while remaining original rather than copied from specific recordings.\n\nKeep the sound raw, direct and early-2000s: short memorable riffs, simple repeated melodies and strong rhythmic impact.\n\nFuture Bass is secondary: deep sub, wide sidechained chords, pitch bends and glitch fills.",
    structure: "Structure:\nIntro: chopped breakbeat + filtered rave synth + vinyl sample + whisper.\nVerse 1: broken rhythm, sparse bass and restrained vocal.\nPre: drums gradually straighten into 4-on-floor.\nChorus 1: full fast rave-dance release, bright saw hook and chest belt.\nPost: immediate breakbeat switch with heavy sub, Future Bass chords and chopped vocals.\nVerse 2: faster chopped drums and darker bass.\nBridge: minimal vocal, atmospheric pad, scratch texture.\nBuild: alternate broken beat and straight kick with increasingly dense DJ cuts.\nFinal chorus: rave melody over hybrid breakbeat / 4-on-floor rhythm with huge Future Bass harmonies.\nFinal bars: rapid cuts, rewind effect, repeated hook, sudden silence.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky voice, rich low-mid tone and slight natural rasp.\nWhisper → half-spoken → restrained singing → chest belt → raw melodic shout → controlled scream-like peak.\nNo metal scream, growl, male voice, duet or choir.",
  },
  {
    id: 10, name: "No.10 Multi-phase",
    bpm: "BPM 156-176.",
    main: "Multi-phase early-2000s Japanese club Hyper Techno / rave techno / hard Eurodance fused with modern Future Bass.",
    core: "",
    extra: "Main concept: one recognizable melody changes character several times while intensity continuously rises.\n\nUse dense DJ-style sampling throughout: rave vocal one-shots, crowd calls, short spoken samples, vinyl scratches, rewind FX, sirens, reverse hits, break fragments, radio-filtered voices, chopped vocals and classic synthetic club FX. Reuse, pitch, gate, reverse and chop these samples differently in each phase so they become recurring motifs. Familiar club vocabulary, but original and not taken directly from existing songs.\n\nPhase 1:\nfast dry 4-on-floor kick, rolling offbeat bass, gated arps, bright saw leads, rave stabs, minor-key riffs, metallic percussion and Eurodance hooks.\n\nPhase 2:\nhalf-time Future Bass, huge sidechained chords, deep sub, pitch bends, sparse drums, glitch cuts and heavily chopped samples.\n\nPhase 3:\ndouble-time final rush, rapid breakbeat-style percussion layered with hard 4-on-floor kick, fast hats, rolling bass, rave stabs, huge saw leads and rapid DJ cuts.\n\nKeep early-2000s club production dominant: raw, compressed, synthetic, direct and repetitive rather than cinematic.",
    structure: "Structure:\nIntro: whisper + filtered minor-key riff + sampled FX.\nVerse 1: minimal fast club groove.\nPre: rising sequence, snare build, sample cuts, brief silence.\nChorus 1: euphoric Hyper Techno / hard Eurodance.\nPost: sudden half-time Future Bass.\nVerse 2: darker sparse electronic groove with chopped voice samples.\nBridge: almost no drums, whisper, vinyl texture and tension.\nBuild: percussion gradually doubles in speed while DJ cuts become denser.\nFinal chorus: double-time feel + hard 4-on-floor + Future Bass chords + original rave melody.\nLast section: maximum intensity, shorter phrases, rapid fills, scratch cuts, repeated hook and abrupt silence.",
    vocal: "ONE Japanese female vocalist only, 40s. Mature husky low-mid voice, natural rasp, strong chest tone and emotionally worn character.\nWhisper → half-spoken → restrained singing → chest belt → raw shout → controlled scream-like climax.\nNo metal scream, growl, male vocalist, duet or choir.",
  },
];

const LYRICS_RATIOS = [
"Lyrics: Japanese 60-70%, short natural English 30-40%.",
"Lyrics: Japanese 70-80%, short natural English 20-30%.",
"Lyrics: Japanese 80-90%, short natural English 10-20%.",
"Lyrics: Japanese 50-60%, short natural English 40-50%.",
"Lyrics: Japanese 40-50%, natural English 50-60%.",
"Lyrics: Japanese 90-100%, English only as short hook words.",
"Lyrics: Japanese 65%, short natural English 35%, with one English hook in the chorus.",
"Lyrics: Japanese 75%, short natural English 25%, English used only for short repeated calls.",
];

// メイン 1 行目のジャンル語を差し替えて曲の空気だけを強制的に変える
const GENRE_SWAPS = [
"punk", "digital hardcore", "hardstyle", "UK hardcore", "happy hardcore",
"gabber", "J-core", "breakcore", "drum & bass", "dubstep",
"trap", "phonk", "hyperpop", "synthwave", "nu-disco",
"big beat", "industrial techno", "bass house", "jersey club", "drill",
"city pop", "shoegaze", "ska punk", "disco funk", "jungle",
];

// V4 の Avoid から、ジャンル置換の候補（hardstyle / dubstep）と矛盾する hardstyle kicks / dubstep wobble を外した 1 行
const AVOID_FIXED = "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, rock band arrangement, orchestral cinematic scoring, acoustic ballad, overtuned robotic vocal, long fade-out.";

const BPM_EXTRA = [
"BPM 150-160.", "BPM 155-165.", "BPM 160-170.", "BPM 165-175.", "BPM 170-180.",
];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  avoid: [AVOID_FIXED],
};
})();
