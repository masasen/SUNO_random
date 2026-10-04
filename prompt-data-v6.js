// V6 のプロンプト候補データ（V2 をベースに、歌詞テーマ・サウンド補足・Structure・ボーカル指定・Lyrics 比率を 2 倍にした版）。
// PATTERNS は V2 の 11 パターンそのまま。追加分はパターンに紐づけず、候補欄に足すだけの EXTRA_MORE / STRUCTURE_MORE / VOCAL_MORE / THEME_MORE に持つ。
// 歌詞テーマは V4 の共通テーマ（46 件）＋ THEME_MORE（46 件）。古文フラグメント・Never use は prompt-data-v4.js を共通で使い、Avoid は V2 と同じ 1 行。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

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
  {
    id: 11, name: "No.11 Kawaii Trap",
    bpm: "BPM 94-98 half-time, double-time 188-196 energy.",
    main: "Japanese Kawaii Trap fused with hyperpop sparkle and glitch-hop edits, Cute-surface × Venom-core Girls Rap.",
    core: "Core sound: massive distorted 808 slides, hard clipped kick, crisp clap-snare on 3, rapid 16th and 32nd hi-hat rolls with triplet flams, music-box and toy-bell melody, bright bitcrushed synth plucks, sparkly chiptune arps, detuned pluck hook in B-flat minor, stutter edits and sub drops.",
    extra: "Constantly alternate half-time bounce sections with double-time flow sections where hats and vocal speed double.\n\nUse especially heavy glitch-edit sampling: stuttered vocal chops, pitched-up \"ah\" one-shots, tape-stops, bitcrush sweeps, game-menu blips, camera shutters, reverse cymbals, radio-filtered ad-libs, crowd \"hey!\" shouts and record scratches. Samples should be densely cut like a fast phone-speed mashup, while remaining original rather than copied from specific recordings.\n\nKeep the sound punchy, glossy and loud: sub-heavy low end, sparkling highs, short sticky hook, chantable repeated title line and strong rhythmic impact.\n\nFuture Bass is secondary: supersaw chords, pitch-bend wobble and sidechain pump inside the hooks only.",
    structure: "Structure:\nIntro: filtered music-box riff + whispered ad-lib + riser, 808 muted.\nChorus 1: hook first, full 808 drop, chanted title line and gang ad-libs.\nVerse 1: bouncy half-time flow, sparse 808, cute delivery with sharp edges.\nChorus 2: hook returns with denser hat rolls.\nVerse 2: double-time rapid rap, heavier 808 slides, stacked internal rhymes.\nBreak: 4 bars, everything drops to filtered pluck + spoken line + tape-stop.\nFinal chorus: loudest section, 808 slides + supersaw layer, hook repeated with crowd shouts.\nFinal bars: stutter chops, 808 tail, repeated hook, sudden silence.",
    vocal: "ONE Japanese female vocalist only, early 20s. Bright candy-sweet tone with a bratty bite, crisp consonants and light pitch-correction sheen.\nWhisper → sing-song talk-rap → fast clipped rap → confident chant → bratty shout peak.\nNo male voice, duet, choir, growl or scream.",
    ratio: "Lyrics: English-main 70% with Japanese 30%, natural code-switching within lines.",
    theme: "Theme: a girl everyone underestimates because she looks sweet — she flips it and owns the night on her own terms.\nScenes: rain on a crosswalk, glitter on scuffed sneakers, a mirror check before walking in, a cracked phone screen still glowing, a whole room turning around when she arrives.\nEmotion: playful confidence and defiance rather than anger. Sweet outside, unshakable inside.\nChorus: a short chantable title phrase repeated, then the reveal of what hides under the sweet surface.",
  },
];

// V2 の 8 行 ＋ No.11 の 1 行に、同じ数（9 行）を足して 2 倍にする
const LYRICS_RATIOS = [
"Lyrics: Japanese 60-70%, short natural English 30-40%.",
"Lyrics: Japanese 70-80%, short natural English 20-30%.",
"Lyrics: Japanese 80-90%, short natural English 10-20%.",
"Lyrics: Japanese 50-60%, short natural English 40-50%.",
"Lyrics: Japanese 40-50%, natural English 50-60%.",
"Lyrics: Japanese 90-100%, English only as short hook words.",
"Lyrics: Japanese 65%, short natural English 35%, with one English hook in the chorus.",
"Lyrics: Japanese 75%, short natural English 25%, English used only for short repeated calls.",
"Lyrics: Japanese verses 90%, chorus switches to English 60%.",
"Lyrics: English verses 70%, Japanese chorus 80%, the title line stays in Japanese.",
"Lyrics: Japanese 70%, English 30%, English only at the end of each line as a short tag.",
"Lyrics: Japanese 85%, English 15%, English only as shouted calls in the post-chorus.",
"Lyrics: Japanese 55%, English 45%, alternating every two lines.",
"Lyrics: Japanese 60%, English 40%, call-and-response between a Japanese line and a short English answer.",
"Lyrics: Japanese 95%, one English word repeated as the hook.",
"Lyrics: Japanese 30-40%, natural English 60-70%, Japanese saved for the emotional peak lines.",
"Lyrics: Japanese 80%, English 20%, whispered English in the intro and bridge only.",
];

// メイン 1 行目のジャンル語を差し替えて曲の空気だけを強制的に変える
const GENRE_SWAPS = [
"punk", "digital hardcore", "hardstyle", "UK hardcore", "happy hardcore",
"gabber", "J-core", "breakcore", "drum & bass", "dubstep",
"trap", "phonk", "hyperpop", "synthwave", "nu-disco",
"big beat", "industrial techno", "bass house", "jersey club", "drill",
"city pop", "shoegaze", "ska punk", "disco funk", "jungle",
];

// V2 と同じ。V4 の Avoid から、ジャンル置換の候補（hardstyle / dubstep）と矛盾する hardstyle kicks / dubstep wobble を外した 1 行
const AVOID_FIXED = "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, rock band arrangement, orchestral cinematic scoring, acoustic ballad, overtuned robotic vocal, long fade-out.";

// V2 の 5 行に、125 付近の候補と half-time（倍テンポ併記）の候補を足す
const BPM_EXTRA = [
"BPM 150-160.", "BPM 155-165.", "BPM 160-170.", "BPM 165-175.", "BPM 170-180.",
"BPM 122-128.", "BPM 124-126.", "BPM 125.", "BPM 125-132.", "BPM 120-125, pushing to 130 in the final chorus.",
"BPM 62-64 half-time, double-time 124-128 energy.",
"BPM 70-75 half-time, double-time 140-150 energy.",
"BPM 75-80 half-time, double-time 150-160 energy.",
"BPM 80-85 half-time, double-time 160-170 energy.",
"BPM 85-88 half-time, double-time 170-176 energy.",
"BPM 88-90 half-time, double-time 176-180 energy.",
"BPM 90-94 half-time, double-time 180-188 energy.",
];

// V2 の 11 パターン分と同じ数を足すサウンド補足（--- 区切りの 1 候補と同じ）
const EXTRA_MORE = [
"Use heavy DJ-style sampling throughout: pitched-down rave vocal one-shots, crowd claps, short spoken countdowns, vinyl cuts, rewind FX, sirens, reverse hits, break fragments and filtered radio voices. Samples should feel instantly familiar to club listeners but remain original and not copied from a specific song.\n\nKeep the groove heavy and steady around a mid-tempo club pulse: rubbery bass, dry kick, swung hats and short stabbing chords. Let the hook repeat until it becomes hypnotic.\n\nFuture Bass is secondary: wide sidechained chords, deep sub and pitch bends only in the post-chorus.",
"Main concept: the track breathes between half-time weight and double-time rush. The same melody survives both speeds.\n\nUse frequent DJ-style samples: chopped vocal stabs, crowd shouts, scratches, tape-stop FX, sirens, reverse cymbals and short spoken fragments. Make them rhythmic and original rather than taken from existing songs.\n\nKeep the early-2000s club sound dominant: raw, compressed, dry and synthetic.\n\nFuture Bass is secondary contrast only: deep sub, sidechained chords and glitch fills inside the half-time drops.",
"Use abundant DJ-style sampling: robotic vocal one-shots, vocoder fragments, crowd hits, vinyl scratches, laser zaps, reverse impacts, chopped break loops and old-school club FX. Recycle the same samples as rhythmic motifs. Keep them original and non-specific.\n\nKeep it bright, metallic and relentless: arpeggiated saw leads, gated pads, rapid minor-key riffs and short snare rushes.\n\nFuture Bass remains secondary: huge chords, deep sub and pitch-bent leads only in brief half-time breaks.",
"Phase 1:\nmid-tempo 125 BPM club groove, dry 4-on-floor kick, rolling offbeat bass, filtered stabs and minimal hats.\n\nPhase 2:\nhalf-time drop, massive sub, huge sidechained chords, slow pitch bends and chopped vocal samples.\n\nPhase 3:\ndouble-time rush, rapid hats, breakbeat layers over hard kick, bright saw leads and dense DJ cuts.\n\nUse DJ-style samples throughout: rave shouts, scratches, sirens, reverse hits and radio-filtered voices. Original, not copied.",
"Use dense DJ-style sampling: whispered vocal loops, breath one-shots, crowd murmurs, vinyl crackle, scratch accents, reverse hits and short filtered spoken lines. Samples should sit inside the groove like extra percussion. Familiar club vocabulary, but original.\n\nKeep the mix dark, dry and close: heavy sub, tight kick, minimal hats and a single bright lead that cuts through.\n\nFuture Bass is secondary: wide chords and deep sub appear only in the final chorus.",
"Constantly alternate tight 4-on-floor sections with half-time bounce sections where the kick drops away and the sub takes over.\n\nUse heavy DJ-style samples: chopped rave vocals, gang shouts, scratches, rewind FX, airhorn-like club FX, sirens and short radio snippets. Keep them frequent, rhythmic and original.\n\nKeep the sound punchy, loud and repetitive with short sticky riffs.\n\nFuture Bass is secondary: supersaw chords and pitch-bend wobble inside the hooks only.",
"Use frequent DJ-style sampling: pitched-up vocal chops, crowd chants, vinyl stop FX, scratch cuts, sirens, reverse hits, glitch stutters and filtered spoken samples. Treat samples as answers to the vocal. Keep them original and non-specific.\n\nKeep it warm and groovy at a mid-tempo club pace: funky octave bass, crisp claps, open hats, bright synth brass and short Eurodance chord stabs.\n\nFuture Bass is contrast only: deep sub and sidechained chords in a short half-time post-chorus.",
"Stage 1:\nslow half-time intro, deep sub pulse, sparse claps, pads and whisper.\n\nStage 2:\nfast hard 4-on-floor, rolling offbeat bass, rave stabs, bright saw leads and rapid minor-key arps.\n\nStage 3:\ndouble-time breakbeat finale, rolling sub, sharp snares, rapid hats and transformed vocal samples.\n\nUse DJ-style samples throughout: rave shouts, scratches, vinyl cuts, sirens and rewind FX. Recycle them across all stages. Original, not copied.",
"Use heavy DJ-style sampling throughout: distorted vocal shots, short crowd screams, scratch bursts, bitcrushed one-shots, sirens, reverse impacts and chopped break fragments. Dense and playful, but original.\n\nKeep production raw, abrasive and compressed: distorted kick, saturated bass, noisy hats, metallic hits and repetitive minor-key riffs.\n\nFuture Bass remains secondary: deep sub, wide chords and pitch bends only in the bridge.",
"Main concept: a minimal groove that keeps adding one layer every 8 bars until the final chorus explodes.\n\nUse DJ-style samples: short vocal one-shots, finger snaps, crowd calls, vinyl cuts, scratches, reverse hits and radio-filtered voices. Each new layer brings one new sample. Original and non-specific.\n\nKeep it tight, dry and hypnotic rather than cinematic.\n\nFuture Bass is secondary: huge sidechained chords only after the last build.",
"Use frequent DJ-style sampling: rave vocal one-shots, crowd chants, vinyl scratches, sirens, rewind FX, reverse hits, break fragments and chopped voices. Keep them familiar in club language but original.\n\nKeep the early-2000s club energy dominant: hard dry kick, bouncing offbeat bass, hoover stabs, bright saw hooks, fast hats and short snare builds. Simple addictive motifs and vocal-synth call-and-response.\n\nFuture Bass is secondary: half-time drops with deep sub, pitch bends and glitch transitions.",
];

// V2 の 11 パターン分と同じ数を足す Structure
const STRUCTURE_MORE = [
"Structure:\nIntro: mid-tempo filtered groove + sampled shout + whisper.\nVerse 1: dry 4-on-floor, rubbery bass, intimate vocal.\nPre: snare build, rising stabs, brief silence.\nChorus 1: full club release, bright hook, chest vocal.\nPost: half-time drop, massive sub, chopped samples.\nVerse 2: darker groove, shorter lines.\nBridge: pads, breath and vinyl texture.\nFinal chorus: double-time hats over the hook, rapid DJ cuts and abrupt ending.",
"Structure:\nIntro: half-time sub pulse + whisper.\nVerse 1: half-time bounce, sparse drums, low vocal.\nPre: tempo feel doubles, snare roll, sample cuts.\nChorus 1: double-time explosion, bright saw hook, belt.\nPost: drop back to half-time, deep sub and vocal chops.\nVerse 2: double-time flow, darker riff.\nBridge: near silence, voice and pad.\nFinal chorus: switch between half-time and double-time every 4 bars, then hard cut.",
"Structure:\nChorus 1: hook first, full energy, chanted title line.\nVerse 1: minimal fast groove, dry kick, offbeat bass.\nPre: rising arp, sample cuts.\nChorus 2: hook returns with denser drums.\nVerse 2: harder groove, new synth riff.\nBreak: 4 bars of filtered pluck and spoken line.\nFinal chorus: loudest section, crowd shouts, repeated hook and sudden silence.",
"Structure:\nIntro: slow 125 BPM-feel kick + filtered riff + whisper.\nVerse 1: steady club groove, rolling bass.\nPre: accelerating snares and rising sequence.\nChorus 1: bright hook over hard kick.\nPost: half-time Future Bass drop.\nVerse 2: faster hats, darker bass.\nBuild: percussion doubles, DJ cuts get denser.\nFinal chorus: double-time rush + original melody + huge chords, abrupt stop.",
"Structure:\nIntro: dark drone + scratch + whisper.\nVerse 1: tight kick and sub only, close vocal.\nPre: one bright lead enters, sample cuts rise.\nChorus 1: explosive release, chest belt.\nPost: drums vanish, sub and chopped voice.\nVerse 2: darker groove, half-spoken vocal.\nBridge: almost silence, breath and vinyl crackle.\nBuild: snare rush and brief silence.\nFinal chorus: full weight, rapid fills and hard cut.",
"Structure:\nIntro: filtered drums + sampled shout.\nVerse 1: half-time bounce, sub-heavy.\nPre: rhythm straightens into 4-on-floor.\nChorus 1: hard straight groove, bright hook.\nPost: half-time bounce returns with gang shouts.\nVerse 2: straight groove, faster vocal.\nBridge: drums out, sub pulse and whisper.\nFinal chorus: alternate straight and half-time every 8 bars, repeated hook and rewind cut.",
"Structure:\nIntro: brass stab + vinyl stop + whisper.\nVerse 1: funky mid-tempo groove, octave bass.\nPre: Eurodance chords rise, snare build.\nChorus 1: bright synth brass hook, chest vocal.\nPost: short half-time drop with deep sub.\nVerse 2: groove tightens, new bass line.\nBridge: claps, breath and pads.\nFinal chorus: fuller groove, call-and-response with samples, sudden stop.",
"Structure:\nIntro: half-time pads, sub pulse, whisper.\nVerse 1: slow half-time groove, restrained vocal.\nPre: drums gradually speed up.\nChorus 1: fast hard 4-on-floor release.\nVerse 2: fast groove, darker sequence.\nBridge: everything stops, single voice.\nTransition: accelerating breakbeat and rising bass.\nFinal chorus: double-time breakbeat + rave lead + Future Bass chords, abrupt end.",
"Structure:\nIntro: distorted kick + noise burst + spoken line.\nVerse 1: abrasive dry groove, saturated bass.\nPre: bitcrushed build, sample stutters.\nChorus 1: loud fast release, raw shout.\nPost: glitch break with chopped vocals.\nVerse 2: harder, shorter lines.\nBridge: half-time weight, wide chords.\nFinal chorus: full speed, distorted bass and rapid glitches, hard cut.",
"Structure:\nIntro: one kick and one sample.\nVerse 1: add bass, then hats, every 8 bars.\nPre: add arp and snare build.\nChorus 1: first full groove, bright hook.\nVerse 2: strip back to kick and vocal, rebuild faster.\nBridge: silence, whisper, single pad.\nBuild: every layer returns at once.\nFinal chorus: maximum density, huge chords, repeated hook and abrupt silence.",
"Structure:\nIntro: hoover rise + sampled shout + whisper.\nVerse 1: bouncy offbeat bass, dry kick.\nPre: saw chords rise, sample cuts accelerate.\nChorus 1: rave hook over hard kick, chest vocal.\nPost: half-time drop, deep sub, pitch bends.\nVerse 2: faster groove, darker riff.\nBreakdown: ambient space and scratch.\nFinal chorus: hard groove + Future Bass weight + DJ cuts, sudden stop.",
];

// V2 の 11 パターン分と同じ数を足すボーカル指定（1 行目は声質、自動トリムで残る）
const VOCAL_MORE = [
"ONE Japanese female vocalist only, 30s. Smoky low-mid voice, breathy verses, strong chest tone in the chorus.\nWhisper → half-spoken → restrained melody → chest belt → raw melodic shout.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, late 20s. Cool dry tone, crisp consonants, rhythmic delivery.\nSpoken → rhythmic talk-rap → clipped melody → confident chant → belt peak.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 40s. Deep alto, dark husky texture, slow vibrato on long notes.\nLow whisper → intimate singing → tense half-spoken → powerful belt → controlled shout.\nNo male voice, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 30s. Bright mid-range voice with a raspy edge, punchy attack.\nTalk-sung verse → fast rap bursts → melodic hook → chest belt → shouted climax.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 50s. Weathered husky voice, low register, heavy breath and grit.\nWhisper → low murmured verse → restrained melody → gritty belt → raw cry-like peak.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 20s. Clear cool voice, slightly flat affect, sharp rhythmic timing.\nMonotone spoken verse → cool chant → clean melody → strong belt.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 40s. Mature soulful voice, warm low-mid tone, natural rasp.\nHummed intro → half-spoken verse → groovy melody → soulful belt → ad-lib shout.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 30s. Husky voice, dry close-mic verses, wide doubled chorus.\nWhisper → spoken-sung → restrained melody → doubled chest belt → melodic shout.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 40s. Raw rough voice, punk attitude, strong chest tone.\nSpoken → snarled half-sung → fast melody → shouted hook → controlled scream-like peak.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 30s. Soft airy low voice that slowly hardens through the song.\nBreath → whisper → quiet singing → firm chest voice → full belt in the final chorus.\nNo male vocal, duet, choir, growl or metal scream.",
"ONE Japanese female vocalist only, 40s. Mature husky voice, low-mid focus, slight rasp, commanding presence.\nWhisper → rhythmic half-spoken → restrained melody → chest belt → raw shout.\nNo male vocal, duet, choir, growl or metal scream.",
];

// V4 の 46 テーマに同じ数（46 件）を足して 2 倍にする。Never use（prompt-data-v4.js）の語は使わない
const THEME_MORE = [
"Theme: the last shift before quitting a job she outgrew. She clocks out for the final time and does not look back.\nScenes: a locker emptied into a tote bag, a name tag left on the counter, the staff door swinging shut, a cold wind at the back exit.\nEmotion: tired, then light, then quietly thrilled.\nChorus: a short phrase about walking out lighter than she walked in.",
"Theme: a phone with one percent battery and a long way home. She chooses to stop checking and just walk.\nScenes: a dimming screen, a closed shutter street, vending machine light, shoes clicking on wet asphalt.\nEmotion: unease turning into calm freedom.\nChorus: letting the screen go dark and trusting her own feet.",
"Theme: a rival who pushed her to get better. She finally admits the respect she never said out loud.\nScenes: a practice room mirror, two water bottles on the floor, a scoreboard, sweat on a towel.\nEmotion: competitive fire softened by gratitude.\nChorus: a short line that sounds like a challenge and a thank-you at once.",
"Theme: moving out of her parents' house at forty. Late, but on her own terms.\nScenes: cardboard boxes, a key on a string, an empty room echoing, the first instant noodle dinner alone.\nEmotion: nervous pride and a little laughter.\nChorus: starting late is still starting.",
"Theme: a karaoke booth alone after a bad day. She sings until her voice cracks and feels better.\nScenes: a small booth, a tambourine, a lyrics screen, a melting drink, the hallway noise from other rooms.\nEmotion: frustration burned off into release.\nChorus: shouting the bad day out one line at a time.",
"Theme: a summer festival she attends alone after a breakup. She finds she enjoys it anyway.\nScenes: paper lanterns, a goldfish scoop, smoke from the grill stands, a yukata sleeve, fireworks over the river.\nEmotion: bittersweet at first, then genuinely happy.\nChorus: the sky lighting up for her alone.",
"Theme: boxing training as a way to stop being afraid. Every hit is a promise to herself.\nScenes: taped hands, a heavy bag swinging, a coach's short shout, a cracked mirror in the gym.\nEmotion: fear turning into focus and power.\nChorus: one more round, she is still standing.",
"Theme: an old cassette tape found in a drawer. Her younger voice is on it, singing badly and boldly.\nScenes: a dusty drawer, a tape player, a crooked handwritten label, a laugh caught on the recording.\nEmotion: embarrassed, then moved, then inspired.\nChorus: answering her younger self with a louder voice.",
"Theme: the night before an audition she almost skipped. She decides to show up.\nScenes: a hanger with a borrowed jacket, lyrics written on her palm, a train schedule, a mirror at three in the morning.\nEmotion: doubt wrestling with stubborn hope.\nChorus: she will show up and let them see.",
"Theme: running out of a wedding she was invited to, not her own. She simply wants air and finds a new idea in the wind.\nScenes: a banquet hall, heels in her hand, a parking lot under orange lights, a bouquet she never caught.\nEmotion: restless, then free and amused.\nChorus: barefoot in the lot, choosing her own direction.",
"Theme: learning to drive at last. The car stalls, she laughs, and tries again.\nScenes: a learner sticker, a nervous instructor, a long straight road, hands at ten and two.\nEmotion: awkward, then exhilarated.\nChorus: the road opening up as she finds the gear.",
"Theme: a typhoon night alone in an old apartment. The storm outside matches the storm inside, and both pass.\nScenes: rattling windows, a flashlight, a candle, a radio weather report, a calm sky at dawn.\nEmotion: anxious, then strangely peaceful.\nChorus: the wind can shout, she will not break.",
"Theme: a secret rooftop where she goes to think. The city below never knows she is there.\nScenes: a rusty door, a water tank, laundry flapping, a train crossing far below.\nEmotion: solitary but not lonely.\nChorus: her quiet throne above the noise.",
"Theme: winning a small game of arcade boxing against a stranger. A silly victory that lifts the whole week.\nScenes: arcade lights, coin slots, a score screen, a stranger's thumbs-up.\nEmotion: playful triumph.\nChorus: tiny win, giant grin.",
"Theme: cutting her hair short herself in the bathroom. A rough haircut that feels like a reset.\nScenes: scissors, hair in the sink, a crooked fringe, a surprised reflection.\nEmotion: impulsive, then delighted.\nChorus: new outline, same fire.",
"Theme: an old friend's message after ten years of silence. She decides to answer.\nScenes: an unfamiliar profile icon, a cup of tea going cold, typing and deleting, finally pressing send.\nEmotion: hesitation turning into warmth.\nChorus: picking up the thread where it was cut.",
"Theme: a dance battle in a parking garage. She is the oldest one there and the one nobody can stop watching.\nScenes: concrete pillars, a portable speaker, a circle of sneakers, echoes off the ceiling.\nEmotion: defiant joy.\nChorus: age is just a number on the floor.",
"Theme: the first morning after finishing a long illness. Ordinary things feel brand new.\nScenes: sunlight on a kitchen table, the taste of toast, a walk around the block, a bicycle bell.\nEmotion: gratitude and fresh energy.\nChorus: alive in the simplest beat.",
"Theme: a midnight laundromat where strangers share silence. She finds rhythm in the spinning machines.\nScenes: rows of washers, a folding table, a vending coffee, a cat outside the glass door.\nEmotion: calm and gently hopeful.\nChorus: the machines keep spinning, so does she.",
"Theme: quitting a toxic group chat. One tap and the noise is gone.\nScenes: a muted phone, a long scroll of messages, a thumb hovering, a sudden silence in the room.\nEmotion: relief mixed with a little guilt, then pure lightness.\nChorus: leaving the noise and keeping her peace.",
"Theme: a late-night ramen stall after a hard win at work. She celebrates alone and loudly.\nScenes: steam rising, a paper lantern, a noisy slurp, a chef's nod, a cold beer glass.\nEmotion: proud and satisfied.\nChorus: toasting herself in the steam.",
"Theme: she becomes the villain in someone else's story and decides she does not care.\nScenes: whispers in an office corridor, a smirk in the elevator mirror, heels on marble floor.\nEmotion: cool confidence and dark humor.\nChorus: let them write her as the villain.",
"Theme: a bicycle ride down a long hill without brakes. Fear and laughter at the same speed.\nScenes: a steep slope, wind in her eyes, a cat jumping aside, the sea appearing at the bottom.\nEmotion: thrill bordering on panic, then joy.\nChorus: no brakes, only speed.",
"Theme: an old video game she finally beats after twenty years. The final boss falls.\nScenes: a dusty console, a worn controller, a flickering TV, the ending credits rolling.\nEmotion: nostalgic triumph.\nChorus: game clear after all this time.",
"Theme: returning to her hometown station as a stranger. She sees it differently now.\nScenes: a small platform, a closed shop, a faded poster, the same mountain behind the roofs.\nEmotion: wistful, then settled.\nChorus: the town stayed still, she kept moving.",
"Theme: a heat wave afternoon when the whole city slows down. She moves anyway.\nScenes: shimmering asphalt, cicadas, a shaved ice stand, sweat on her collar.\nEmotion: heavy, then defiantly energetic.\nChorus: the heat cannot slow her pulse.",
"Theme: a fortune slip that says bad luck. She ties it to the branch and laughs at it.\nScenes: a shrine, a paper slip, a wooden rack, a crow calling overhead.\nEmotion: amused defiance.\nChorus: she makes her own luck.",
"Theme: the first snow of the year falling on the way home from the night shift.\nScenes: an empty bus stop, snowflakes on her coat, footprints on a white sidewalk, a quiet street.\nEmotion: exhausted, then tender and calm.\nChorus: the world goes quiet just for her.",
"Theme: she teaches a younger girl how to dance and sees her old self.\nScenes: a community hall, a borrowed speaker, small sneakers, a mirror with stickers.\nEmotion: protective warmth and pride.\nChorus: passing the beat to the next one.",
"Theme: a fight with herself at the mirror at dawn. She chooses to keep going.\nScenes: a bathroom light buzzing, splashed water, tired eyes, a determined jaw.\nEmotion: harsh, then resolute.\nChorus: one more day, she says to the glass.",
"Theme: driving all night to see the sea for no reason at all.\nScenes: a highway rest stop, canned coffee, a sleepy toll booth, waves at sunrise.\nEmotion: aimless freedom.\nChorus: no reason needed to go.",
"Theme: losing a big contest and laughing anyway. The loss makes her hungrier.\nScenes: a results board, a crumpled entry form, a friend's hand on her shoulder, a long walk home.\nEmotion: sting turning into fire.\nChorus: losing just lit the fuse.",
"Theme: a power outage that turns the apartment block into a community for one night.\nScenes: candles in windows, neighbors on the stairwell, a battery radio, children laughing in the dark.\nEmotion: unexpected warmth.\nChorus: darkness that brought everyone close.",
"Theme: a missed last train that turns into the best night of the month.\nScenes: an empty station, a closed gate, a stranger's joke, a walk across the bridge until dawn.\nEmotion: annoyed, then delighted.\nChorus: missing the train, catching the night.",
"Theme: she finally sells the guitar she never learned to play. Letting go of an old dream to make room for a new one.\nScenes: a pawn shop counter, a dusty case, a tag with a price, empty hands on the way out.\nEmotion: a little sad, mostly free.\nChorus: letting go to make room.",
"Theme: rain on the first day of a new job. She walks in soaked and smiling.\nScenes: a broken umbrella, wet shoes, a reception desk, a new badge on her chest.\nEmotion: nervous excitement that the rain cannot wash away.\nChorus: soaked but ready.",
"Theme: a talent show at a local shopping center. Small stage, huge heart.\nScenes: a plastic stage, folding chairs, a squeaky microphone, shoppers stopping to watch.\nEmotion: shy start, fearless finish.\nChorus: any stage is a stage.",
"Theme: she writes a letter to her future self and buries it.\nScenes: a tin box, a shovel, a park tree, ink stains on her fingers.\nEmotion: quiet hope.\nChorus: see you on the other side of time.",
"Theme: an argument with her sister that ends in laughter.\nScenes: a cramped kitchen, a slammed cupboard, a shared snack, the same laugh they had as kids.\nEmotion: heat, then warmth.\nChorus: fighting loud, forgiving faster.",
"Theme: a night bus across the country to start over.\nScenes: a reclining seat, a curtain, a service area at midnight, an unknown city at sunrise.\nEmotion: uncertain but brave.\nChorus: the road carries her to a new page.",
"Theme: she becomes the loudest voice in a quiet meeting room.\nScenes: a long table, closed laptops, a pen tapping, everyone turning toward her.\nEmotion: nervous courage turning into command.\nChorus: she speaks, the room listens.",
"Theme: the comeback after an injury. Her body remembers the rhythm.\nScenes: a brace on her knee, a slow jog, a physical therapy room, the first full sprint.\nEmotion: fear turning into joy.\nChorus: back on her feet, faster than before.",
"Theme: a vending machine that eats her last coin. She laughs and walks on.\nScenes: a lonely street, a blinking button, a coin slot, a cat watching from a wall.\nEmotion: small frustration, big shrug.\nChorus: losing a coin, keeping her cool.",
"Theme: an old photo booth strip found in a used book. Strangers smiling across time.\nScenes: a secondhand bookshop, a yellowed strip, four frames of laughter, her own smile in the window glass.\nEmotion: curious and warm.\nChorus: smiles that outlast everything.",
"Theme: she joins a drumming circle and finds her pulse again.\nScenes: a riverside park, hand drums, mismatched rhythms locking together, sweat and laughter.\nEmotion: shy to ecstatic.\nChorus: one heartbeat in many hands.",
"Theme: the final night of a closing club she loved. She dances until the lights come on.\nScenes: a last call sign, a DJ waving goodbye, a crowded floor, a sticker on the exit door.\nEmotion: grief and celebration together.\nChorus: dancing until the very last song.",
];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  extras: EXTRA_MORE,
  structures: STRUCTURE_MORE,
  vocals: VOCAL_MORE,
  themes: THEME_MORE,
  avoid: [AVOID_FIXED],
};
})();
