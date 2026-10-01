// V5 のプロンプト候補データ（5 鍵アーケード初代〜5thMIX の新規収録曲ラインナップを完全模倣）。
// V1〜V4 と違い、歌詞テーマ・Never use・Avoid も V5 専用。古文フラグメントは使わない。
// このファイルだけ編集すれば V5 の候補が更新されます。変更後はページを再読み込みしてください。
//
// SONGS の 1 行が 1 ベース。ジャンル表記・BPM は当時の曲リスト（bm5keys-forever.com / zakugiri.com）に合わせ、
// 楽器・構成は公開資料に曲ごとの記載がないため、FAMILIES（ジャンル系統）ごとの当時の定番の音で組み立てる。
// 曲名・アーティスト名・作品名は SUNO が弾くため出力に入れず、音源解析メモ欄（src）にだけ残す。
// 固有名詞を含むジャンル表記（DANCEMANIA / KONAMIX）は出力用の genre で一般的なジャンル名に置き換える。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v5 = (() => {

const REFERENCE = {
  name: "SOURCE 5 鍵 初代〜5thMIX 新規収録曲",
  at: "1st 12 / 2nd 12 / 3rd 16 / complete 4 / 4th 23 / 5th 28 = 95 曲",
  note: "各作品の新規収録曲（リバイバルは除く、別ミックス・隠し曲・DJ BATTLE は含む）。ジャンル表記・BPM・曲名・名義は bm5keys-forever.com（1st〜complete）と zakugiri.com の曲リスト（4th・5th）から取得。4th・5th は名義が取れていない曲が多く、ジャンル表記もゲーム内表記と同じかは未確認。サイト間で食い違う BPM は bm5keys を採用。5th の隠し曲 THRASH TRAXX はジャンル・BPM 不明のため含めていない。楽器・ボーカル・展開は曲ごとの公開情報がないため、ジャンル表記から当時（1997〜1999 年）の定番の音で組み立てている。",
};

const KEYSOUND = " Every melody note, stab and scratch is a crisp isolated one-shot sample, like rhythm-game key sounds, easy to play along.";
const FREE = "Write every line in your own fresh words; invent the details and the hook yourself. If the track is instrumental, let this only color the sound.";

// ジャンル系統ごとの音作り・構成・テーマ
const FAMILIES = {
  hiphop: {
    core: "Core sound: dusty sampled boom-bap drum break, round sub bassline, a jazzy or soulful loop chopped on an old hardware sampler, turntable scratch hook, vinyl crackle.",
    extra: "Samples: short vocal shouts, record scratches, vinyl crackle, a DJ cut-in. Original, not copied.\n\nMix: warm, dusty, mid-heavy late-90s sampler sound, no modern loudness. About 1:50, cut on the beat.",
    structure: "Structure:\nIntro (4 bars): scratch and drum break.\nVerse 1: rap over the loop.\nHook: scratched and sung hook.\nVerse 2: rap, sample flipped.\nScratch break: DJ cuts over the drums.\nHook: final hook.\nOutro: loop stops on a scratch.",
    theme: "Theme: a late-90s city night, crate-digging and cruising with friends, the loop playing from a car window.\nMood: cool, confident, nostalgic.",
  },
  reggae: {
    core: "Core sound: one-drop drums, offbeat skank guitar and organ bubble, deep round dub bass, melodica phrases, spring-reverb dub echoes.",
    extra: "Samples: dub sirens, echo throws on the snare, a short toasting shout. Original, not copied.\n\nMix: warm, bass-heavy sound-system mix with tape echo. About 1:50, cut on the beat.",
    structure: "Structure:\nIntro (4 bars): riddim with dub echo.\nVerse 1: laid-back vocal.\nChorus: sing-along hook.\nDub break: drums and bass with echoes.\nVerse 2: toasting.\nChorus: final hook.\nOutro: echo tail cut short.",
    theme: "Theme: a sunny afternoon sound system by the sea, everyone swaying to the riddim.\nMood: easy, warm, joyful.",
  },
  ska: {
    core: "Core sound: fast offbeat ska guitar, tight brass section, walking bass, snappy live drums, Hammond organ fills.",
    extra: "Samples: crowd shouts, brass stabs, a drum fill into each section. Original, not copied.\n\nMix: punchy live-band mix, bright horns. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): brass fanfare.\nVerse 1: shouted vocal over skank.\nChorus: horns and gang vocals.\nBreak: tempo dips, walking bass.\nChorus: back to full speed.\nOutro: brass hit, stop.",
    theme: "Theme: a sweaty basement gig where the whole crowd skanks in a circle.\nMood: rowdy, upbeat, carefree.",
  },
  techno: {
    core: "Core sound: analog drum machine kick and claps, 909-style hats, hypnotic synth loops, squelching acid bassline, filter sweeps.",
    extra: "Samples: robotic voice cuts, noise sweeps, a single reversed crash. Original, not copied.\n\nMix: tight, punchy late-90s club mix, mono-solid kick. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): kick and hats.\nLoop A: main synth loop enters.\nBuild: filter opens, rolls.\nPeak: full loop with acid line.\nBreak: drums drop, loop alone.\nPeak: everything back.\nOutro: kick alone, stop.",
    theme: "Theme: a warehouse at 3 a.m., strobes and machines, nothing but the loop.\nMood: hypnotic, driving, focused.",
  },
  ambient: {
    core: "Core sound: slow evolving analog pads, bubbling synth sequences, soft broken beat or gentle four-on-the-floor, airy bell tones.",
    extra: "Samples: nature-like textures, distant voices, soft vinyl noise. Original, not copied.\n\nMix: wide, airy, soft-focus mix. About 2:00, slow cut.",
    structure: "Structure:\nIntro (4 bars): pads alone.\nSection A: soft beat enters.\nSection B: melody blooms.\nBreak: pads and bells.\nSection B: full again.\nOutro: pads fade fast.",
    theme: "Theme: waking up slowly as light fills a quiet room, life beginning again.\nMood: calm, hopeful, floating.",
  },
  breakbeat: {
    core: "Core sound: fast chopped funk drum breaks, punchy bass stabs, rave-style synth hits, short diva vocal shots, turntable scratches.",
    extra: "Samples: diva vocal shots, scratches, chopped break fills. Original, not copied.\n\nMix: bright, punchy breakbeat mix. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): break and scratches.\nSection A: bass stabs and breaks.\nHook: vocal shots and synth riff.\nBreak: drums chopped solo.\nHook: full again.\nOutro: break stops.",
    theme: "Theme: showing off on the dance floor, every move faster than the last.\nMood: flashy, energetic, playful.",
  },
  bigbeat: {
    core: "Core sound: heavy distorted breakbeat loop, squelching acid bass, sampled guitar or brass riff, siren synths, crunchy lo-fi drums.",
    extra: "Samples: distorted vocal shouts, sirens, scratches. Original, not copied.\n\nMix: loud, crunchy, overdriven late-90s big beat mix. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): filtered break.\nSection A: riff and break.\nBuild: snare roll, siren.\nDrop: full distorted groove.\nBreak: acid line alone.\nDrop: final groove.\nOutro: hard stop.",
    theme: "Theme: a rowdy club where the bass shakes the walls and nobody holds back.\nMood: gritty, swaggering, rowdy.",
  },
  soul: {
    core: "Core sound: live-feel drums, groovy bassline, Rhodes and clavinet, tight horn section, lush strings, tambourine.",
    extra: "Samples: horn stabs, a short crowd cheer, vinyl warmth. Original, not copied.\n\nMix: warm, analog, vintage soul mix. About 1:50, cut after the last hook.",
    structure: "Structure:\nIntro (4 bars): horns and drums.\nVerse 1: smooth vocal.\nChorus: horns and backing vocals.\nVerse 2: groove deepens.\nBreak: percussion and bass.\nChorus: final hook.\nOutro: horn hit.",
    theme: "Theme: falling for someone on a crowded dance floor under a disco ball.\nMood: groovy, sweet, warm.",
  },
  jazz: {
    core: "Core sound: jazz piano or Rhodes, upright bass, brushed or funky live drums, muted trumpet and saxophone, Hammond organ.",
    extra: "Samples: club chatter, a count-in, horn swells. Original, not copied.\n\nMix: warm, live jazz-club mix. About 2:00, cut after the last phrase.",
    structure: "Structure:\nIntro (4 bars): piano and bass.\nTheme A: main melody.\nTheme B: horns take over.\nSolo: short instrument solo.\nTheme A: return.\nOutro: final chord.",
    theme: "Theme: a smoky late-night jazz club, one last song before closing.\nMood: elegant, intimate, swinging.",
  },
  latin: {
    core: "Core sound: nylon-string guitar, congas and bongos, flute or vibraphone, brushed breakbeat, warm bass.",
    extra: "Samples: shakers, claves, soft crowd chatter. Original, not copied.\n\nMix: breezy, bright, airy mix. About 1:50, cut on the beat.",
    structure: "Structure:\nIntro (4 bars): guitar and percussion.\nVerse 1: soft vocal or flute melody.\nChorus: full groove.\nBreak: percussion solo.\nChorus: final.\nOutro: guitar strum, stop.",
    theme: "Theme: a summer terrace at sunset, a soft breeze and a glass in hand.\nMood: breezy, chic, sunny.",
  },
  house: {
    core: "Core sound: four-on-the-floor drum machine kick, offbeat open hats, house piano chords, organ bass, claps, string stabs.",
    extra: "Samples: diva vocal ad-libs, crowd whistle, filter sweeps. Original, not copied.\n\nMix: warm, punchy late-90s house mix. About 1:40, cut on the beat.",
    structure: "Structure:\nIntro (4 bars): kick and hats.\nVerse: vocal over piano chords.\nChorus: full house groove and hook.\nBreak: piano and vocal alone.\nChorus: final hook.\nOutro: drums, stop.",
    theme: "Theme: the first warm night of the year, a crowd moving together under the lights.\nMood: bright, uplifting, nostalgic.",
  },
  rave: {
    core: "Core sound: hoover lead, rave piano stabs, chopped breakbeats over a kick, sub bass, sirens and pitched-up diva vocal shots.",
    extra: "Samples: rave sirens, air raid risers, pitched diva shots. Original, not copied.\n\nMix: loud, bright early-90s rave mix. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): siren and breaks.\nSection A: hoover riff.\nBuild: piano stabs, snare roll.\nDrop: full rave groove.\nBreak: piano alone.\nDrop: final.\nOutro: hoover, stop.",
    theme: "Theme: an open-air rave where everyone forgets the time.\nMood: euphoric, wild, free.",
  },
  hardcore: {
    core: "Core sound: distorted kick drum, fast breakbeats, screaming synth leads, piano or noise riffs, aggressive sub bass.",
    extra: "Samples: noise bursts, sped-up vocal shots, sirens. Original, not copied.\n\nMix: loud, distorted, relentless mix. About 1:40, hard cut.",
    structure: "Structure:\nIntro (2 bars): distorted kick.\nSection A: main riff.\nBuild: snare roll.\nDrop: full speed.\nBreak: riff alone.\nDrop: final.\nOutro: hard stop.",
    theme: "Theme: running at full speed with no brakes, the world blurring past.\nMood: intense, reckless, exhilarating.",
  },
  dnb: {
    core: "Core sound: fast chopped amen breaks, deep rolling reese or sub bass, jazzy pads and chords, crisp ride cymbals.",
    extra: "Samples: jazz chord stabs, short vocal shots, time-stretched break fills. Original, not copied.\n\nMix: deep sub, crisp breaks, late-90s drum and bass mix. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): pads and filtered break.\nDrop: full breaks and bass.\nSection B: chords evolve.\nBreak: pads alone.\nDrop: final.\nOutro: break stops.",
    theme: "Theme: a high-speed night drive along a coastal highway, lights streaking past.\nMood: deep, fast, flowing.",
  },
  eurobeat: {
    core: "Core sound: octave-jumping synth bass, four-on-the-floor kick, bright synth stabs and brass, catchy synth lead riff, big gated chorus.",
    extra: "Samples: vocal ad-libs, synth risers, crash on each section. Original, not copied.\n\nMix: bright, glossy late-90s dance-pop mix. About 1:50, cut on the beat.",
    structure: "Structure:\nIntro (4 bars): synth riff.\nVerse 1: vocal over bass.\nPre-chorus: rising.\nChorus: big hook.\nVerse 2: rap or vocal.\nChorus: final hook.\nOutro: synth riff, stop.",
    theme: "Theme: a glittering dance floor where love and speed blur together.\nMood: dramatic, bright, romantic.",
  },
  jpop: {
    core: "Core sound: bright synth pads and brass, gated drums, slap or synth bass, sparkling bells, catchy sung melody.",
    extra: "Samples: vocal harmonies, sparkle effects, crash on the chorus. Original, not copied.\n\nMix: bright, glossy Japanese pop mix. About 1:50, cut after the last chorus.",
    structure: "Structure:\nIntro (4 bars): synth riff.\nVerse 1: sung melody.\nPre-chorus: rising.\nChorus: big sentimental hook.\nVerse 2: short.\nChorus: final hook.\nOutro: synth riff.",
    theme: "Theme: believing in someone again after a long time apart.\nMood: sentimental, bright, hopeful.",
  },
  trance: {
    core: "Core sound: driving kick, rolling bass, gated trance pads, acid line, soaring lead synth, arpeggios.",
    extra: "Samples: risers, reverse cymbals, a whispered vocal cut. Original, not copied.\n\nMix: wide, bright late-90s trance mix. About 2:00, hard cut.",
    structure: "Structure:\nIntro (4 bars): kick and arps.\nBuild: pads and acid.\nBreakdown: lead melody alone.\nDrop: full trance groove.\nOutro: arps, stop.",
    theme: "Theme: rising above the city at dawn, everything below becoming small.\nMood: intense, soaring, transcendent.",
  },
  rock: {
    core: "Core sound: distorted electric guitar riffs, programmed breakbeat or live drums, synth bass, digital effects.",
    extra: "Samples: guitar feedback, digital glitches, a shouted count-in. Original, not copied.\n\nMix: edgy, punchy late-90s rock mix. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): guitar riff.\nVerse 1: vocal over riff.\nChorus: full band hook.\nVerse 2: tighter.\nGuitar break: short solo.\nChorus: final.\nOutro: riff stop.",
    theme: "Theme: restless youth on a rooftop, wanting to reach something far away.\nMood: restless, edgy, dreamy.",
  },
  world: {
    core: "Core sound: tribal hand drums, latin or ethnic percussion, chanting textures, earthy bass, a dance beat underneath.",
    extra: "Samples: chants, hand claps, ethnic flute phrases. Original, not copied.\n\nMix: earthy, warm, percussive mix. About 1:50, cut on the beat.",
    structure: "Structure:\nIntro (4 bars): percussion.\nSection A: groove enters.\nChant: vocal textures.\nBreak: percussion solo.\nSection A: full.\nOutro: drums stop.",
    theme: "Theme: a festival around a fire, rhythms passed from hand to hand.\nMood: primal, earthy, joyful.",
  },
  electro: {
    core: "Core sound: robotic drum machine, rubbery synth bass, vocoder hooks, digital bleeps, glitchy textures.",
    extra: "Samples: vocoder phrases, computer bleeps, glitch cuts. Original, not copied.\n\nMix: clean, cold, digital mix. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): drum machine.\nSection A: bass and vocoder.\nHook: robotic phrase.\nBreak: bleeps alone.\nHook: final.\nOutro: machine stops.",
    theme: "Theme: a machine learning to dance, cold circuits warming up.\nMood: cool, robotic, curious.",
  },
  game: {
    core: "Core sound: retro game-sound synth melodies, chip-like arpeggios, driving techno beat, synth bass, laser effects.",
    extra: "Samples: retro power-up blips, laser zaps, explosion hits. Original, not copied.\n\nMix: punchy techno mix with bright retro leads. About 1:50, hard cut.",
    structure: "Structure:\nIntro (4 bars): retro arpeggio.\nSection A: melody over beat.\nSection B: heroic theme.\nBreak: arpeggio alone.\nSection B: final.\nOutro: blip, stop.",
    theme: "Theme: a pilot launching into a space battle, stars rushing past.\nMood: heroic, retro, speedy.",
  },
  battle: {
    core: "Core sound: a hip-hop drum break looped, turntablist scratch solos, beat juggling, cut-up vocal phrases.",
    extra: "Samples: scratches, transformer cuts, crowd cheers. Original, not copied.\n\nMix: dry, raw, scratch-forward mix. About 1:30, hard cut.",
    structure: "Structure:\nIntro (2 bars): break.\nRound 1: scratch solo.\nRound 2: beat juggle.\nRound 3: fast cuts.\nOutro: break stops.",
    theme: "Theme: two DJs facing off, trading routines until the crowd decides.\nMood: competitive, cocky, playful.",
  },
  rnb: {
    core: "Core sound: swung drum machine groove, smooth Rhodes and pad chords, deep bass, finger snaps, layered vocal harmonies.",
    extra: "Samples: vocal ad-libs, snaps, vinyl warmth. Original, not copied.\n\nMix: smooth, warm late-90s R&B mix. About 1:50, cut after the last hook.",
    structure: "Structure:\nIntro (4 bars): chords and snaps.\nVerse 1: smooth vocal.\nChorus: layered harmonies.\nVerse 2: short.\nBridge: ad-libs.\nChorus: final.\nOutro: chords.",
    theme: "Theme: a late-night promise between two people who only have eyes for each other.\nMood: smooth, devoted, sultry.",
  },
  lounge: {
    core: "Core sound: vibraphone, easy-listening organ, brushed drums, space-age synth bleeps, upright bass.",
    extra: "Samples: cocktail-bar chatter, theremin-like swoops. Original, not copied.\n\nMix: soft, retro, lounge mix. About 1:50, cut after the last phrase.",
    structure: "Structure:\nIntro (4 bars): vibraphone.\nTheme A: organ melody.\nTheme B: space bleeps.\nTheme A: return.\nOutro: final chord.",
    theme: "Theme: floating in a retro-future space lounge, sipping something cold.\nMood: spacey, mellow, playful.",
  },
};

const VOCALS = {
  inst: "Instrumental: no lead vocal.\nOnly short sampled vocal shots, DJ cuts and scratches carry the human voice.",
  male_rap: "One male rapper: relaxed late-90s flow, clear diction.\nShort sampled shouts fill the gaps.",
  male_jp_rap: "One male rapper in Japanese: laid-back late-90s flow.\nA short sung chorus with a light harmony.",
  male_sung: "One male vocalist: warm, soulful late-90s tone.\nLight backing harmonies on the chorus.",
  male_toast: "One male reggae vocalist: laid-back singing and toasting.\nShort echoed shouts in the dub sections.",
  female_sung: "One female vocalist: clear, soulful late-90s tone.\nLight backing harmonies on the chorus.",
  female_jp: "One female vocalist singing in Japanese: bright, sentimental pop tone.\nLayered harmonies on the chorus.",
  female_diva: "One female diva vocalist: powerful gospel-tinged house vocal with ad-libs.\nShort pitched vocal shots in the breaks.",
  duo: "One female singer on the chorus and one male rapper on the verses, classic late-90s dance-pop.\nShort ad-libs between lines.",
};

const RATIOS = {
  en: "Lyrics: English only, short and catchy.",
  en_jp: "Lyrics: mostly English with a few Japanese words.",
  jp: "Lyrics: Japanese with a few English words.",
  inst: "Lyrics: none. Instrumental track; sampled vocal shots only.",
};

// [作品, ゲーム内ジャンル表記, 出力用ジャンル, BPM 行, 系統, ボーカル, 言語, 曲調, ムード, 曲名, 名義, 備考]
const SONGS = [
  ["1st", "HIP～HOP", "HIP-HOP", "BPM 96 (starts at 100 and eases down to 94-96).", "hiphop", "male_rap", "en", "laid-back boom-bap with a jazzy sampled loop and a scratch hook", "cool, easy, head-nodding", "u gotta groove", "DJ nagureo", "BPM 100-94-96。"],
  ["1st", "REGGAE", "REGGAE", "BPM 90.", "reggae", "male_toast", "en", "sunny one-drop reggae with organ bubble and dub echo", "relaxed, sunny, swaying", "jam jam reggae", "jam master '73", ""],
  ["1st", "TECHNO", "TECHNO", "BPM 132.", "techno", "inst", "inst", "romantic synth-pop flavored techno with analog arpeggios over a driving drum machine", "sleek, nostalgic, driving", "OVERDOSER (romo mix)", "MIRAK", "1P。"],
  ["1st", "TECHNO", "TECHNO", "BPM 134.", "ambient", "inst", "inst", "ambient techno mix with floating pads and soft bleeps over a steady pulse", "dreamy, hypnotic", "OVERDOSER (ambient mix)", "MIRAK", "2P。"],
  ["1st", "BREAK～BTS", "BREAK-BTS", "BPM 150.", "breakbeat", "inst", "inst", "fast funky breakbeat with chopped drum breaks, bass stabs and diva vocal shots", "energetic, flashy", "2 gorgeous 4 U", "prophet～31", "1P。"],
  ["1st", "BREAK～BTS", "BREAK-BTS", "BPM 112.", "bigbeat", "inst", "inst", "heavy big beat with a distorted break loop, acid squelch and a sampled riff", "gritty, swaggering", "greed eater", "The Dust Fathers", "2P。"],
  ["1st", "SOUL", "SOUL", "BPM 141.", "soul", "female_sung", "en", "uptempo retro soul-disco with horns, strings and a groovy bassline, cut as a 7-inch single edit", "groovy, sweet, danceable", "LOVE SO GROOVY", "LOVEMINTS", "1P。"],
  ["1st", "SOUL", "SOUL", "BPM 141.", "soul", "female_sung", "en", "uptempo retro soul-disco stretched into a 12-inch extended version with a long percussion break", "groovy, extended, floor-filling", "LOVE SO GROOVY (12inch version)", "LOVEMINTS", "2P。"],
  ["1st", "HOUSE", "HOUSE", "BPM 130.", "house", "male_sung", "en", "late-90s vocal house with piano chords, organ bass and a catchy sung hook, single mix", "bright, uplifting, nostalgic", "20,novemver (single mix)", "DJ nagureo", "1P。ボーカル・作詞 chappy、1:20。"],
  ["1st", "HOUSE", "HOUSE", "BPM 130.", "house", "male_sung", "en", "late-90s vocal house cut down to a tight radio edit with the hook up front", "bright, compact, catchy", "20,novemver (radio edit)", "DJ nagureo", "2P。"],
  ["1st", "RAVE", "RAVE", "BPM 144 (drifting between 145 and 140).", "rave", "inst", "inst", "early-90s rave with a hoover lead, rave piano stabs, breakbeat and diva vocal shots", "euphoric, wild, secret-stage energy", "e～emotion", "e.o.s.", "隠し曲。BPM 145-140。"],
  ["1st", "-", "DJ BATTLE", "BPM 93.", "battle", "inst", "inst", "turntablist battle routine with scratch solos traded over a hip-hop break", "competitive, cocky", "DJ BATTLE", "-", "DJ バトル専用。"],

  ["2nd", "AMBIENT", "AMBIENT", "BPM 110.", "ambient", "inst", "inst", "ambient electronica with slow pads, bubbling synths and a soft broken beat", "calm, organic, awakening", "Beginning of Life", "QUADRA", ""],
  ["2nd", "REGGAE FUNKY MIX", "REGGAE FUNKY MIX", "BPM 90.", "reggae", "male_toast", "en", "funky reggae remix of a one-drop riddim with slap bass and wah guitar", "playful, funky", "jam jam reggae (Funky Jam Cookie mix)", "Crunky Boy", ""],
  ["2nd", "BALLADE(JAZZ-SOUL)", "BALLADE (JAZZ-SOUL)", "BPM 100.", "jazz", "female_sung", "en", "slow jazz-soul ballad with Rhodes, brushed drums and a tender vocal", "tender, intimate, romantic", "Do you love me?", "reo-nagumo", ""],
  ["2nd", "HIP-HOP STREET MIX", "HIP-HOP STREET MIX", "BPM 94.", "hiphop", "male_rap", "en", "street hip-hop dub remix with heavy drums, dubbed-out bass and echoing scratches", "raw, gritty", "u gotta groove (Triple Mazin Dub)", "DJ Mazinger", ""],
  ["2nd", "JAPANESE HIP-HOP", "JAPANESE HIP-HOP", "BPM 97.", "hiphop", "male_jp_rap", "jp", "Japanese hip-hop with a laid-back city loop and a sung chorus", "urban, nostalgic, laid-back", "tokai", "co-key / DJ Mazinger", "出現条件あり。"],
  ["2nd", "KONAMIX", "RETRO GAME REMIX", "BPM 134.", "game", "inst", "inst", "techno remix in the style of a classic space shoot-em-up soundtrack, chip-like synth melodies over a drum machine beat, original melody", "heroic, retro, speedy", "Salamander Beat Crush mix", "NITE SYSTEM", "出現条件あり。ジャンル表記は固有名詞のため出力では一般名に置換。"],
  ["2nd", "HOUSE SPILITUAL MIX", "HOUSE SPIRITUAL MIX", "BPM 131.", "house", "female_diva", "en", "spiritual deep house remix with a gospel-tinged diva, organ chords and a warm after-hours groove", "soulful, warm, late-night", "LOVE SO GROOVY (Nite's After Luv mix)", "NITE SYSTEM", "ジャンル綴りは当時の表記のまま（出力では SPIRITUAL）。"],
  ["2nd", "MINIMAL TECHNO MIX", "MINIMAL TECHNO MIX", "BPM 133.", "techno", "inst", "inst", "minimal driving dub techno with a hypnotic loop, dub chords and rolling percussion", "hypnotic, cool", "OVERDOSER (Driving Dub mix)", "QUADRA", "出現条件あり。zakugiri では BPM 138。"],
  ["2nd", "SKA", "SKA", "BPM 160 (dips to 144 in the middle, then back to 160).", "ska", "male_sung", "en", "fast skanking ska with a brass section, offbeat guitar, walking bass and a tempo dip in the middle", "rowdy, upbeat, fun", "SKA a go go", "THE BALD HEADS", "BPM 160-144-160。"],
  ["2nd", "DRUM'N BASS MIX", "DRUM'N BASS MIX", "BPM 155.", "dnb", "inst", "inst", "drum and bass with clear jazzy pads and rolling amen breaks", "deep, clear, flowing", "Deep Clear Eyes", "QUADRA", "出現条件あり。"],
  ["2nd", "HARD TEKNO", "HARD TEKNO", "BPM 140.", "techno", "inst", "inst", "hard acid techno with a pounding kick, squelching acid bassline and distorted stabs", "aggressive, relentless", "Acid Bomb", "DJ FX", "出現条件あり。"],
  ["2nd", "RAVE", "RAVE", "BPM 144 (drifting between 145 and 140).", "rave", "inst", "inst", "rave remix revisited with a hoover, piano stabs and harder breaks", "euphoric, harder", "e-motion (2nd MIX)", "e.o.s", "隠し曲。BPM 145-140。"],

  ["3rd", "AMBIENT", "AMBIENT", "BPM 125.", "ambient", "inst", "inst", "uplifting ambient house with airy pads, soft piano and a gentle four-on-the-floor", "hopeful, airy", "life goes on", "Quadra", ""],
  ["3rd", "SOUL", "SOUL", "BPM 100.", "soul", "female_sung", "en", "smooth late-90s neo-soul groove with Rhodes and live bass", "smooth, cool, searching", "find out", "nouvo nude", "zakugiri では BPM 110。"],
  ["3rd", "J-DANCE POP", "J-DANCE POP", "BPM 130.", "jpop", "female_jp", "jp", "Japanese dance-pop megamix with bright synths, eurobeat bass and a catchy sung chorus", "bright, sparkling", "Believe again HYPER MEGA MIX", "dj nagureo featuring miryam", ""],
  ["3rd", "HIPHOP", "HIPHOP", "BPM 100.", "hiphop", "male_rap", "en", "hard-hitting hip-hop with a featured rapper, a dark piano loop and scratches", "tough, confident", "s.d.z", "DJ mazinger featuring Muhammad", ""],
  ["3rd", "HOUSE", "HOUSE", "BPM 130.", "house", "inst", "inst", "filtered disco house with a chopped disco loop and phasing filters", "wild, funky", "wild I/O", "nouvo nude", ""],
  ["3rd", "BOSSA GROOVE", "BOSSA GROOVE", "BPM 143.", "latin", "female_sung", "en_jp", "uptempo bossa nova club groove with nylon guitar, flute and a brushed breakbeat", "breezy, chic, sunny", "La Bossanova de Fabienne", "staccato two-F", ""],
  ["3rd", "FUNKY JAZZ GROOVE", "FUNKY JAZZ GROOVE", "BPM 113.", "jazz", "inst", "inst", "funky jazz band groove with a horn section, Hammond organ, slap bass and live drums", "funky, swinging, defiant", "Stop Violence!", "Herbie Hammock & His Band", ""],
  ["3rd", "REGGAE", "REGGAE", "BPM 94.", "reggae", "male_toast", "en", "dancehall reggae with toasting, a royal steppers riddim and dub sirens", "proud, bouncy", "Queen's Jamaica", "Crunky Boy featuring Muhammad", ""],
  ["3rd", "BIGBEAT MIX", "BIGBEAT MIX", "BPM 140.", "bigbeat", "inst", "inst", "big beat remix with the tension of a stealth-action game theme, distorted breaks, brass hits and spy-movie suspense, original melody", "tense, cinematic, gritty", "METALGEAR SOLID ～Main Theme", "ESPACIO BROTHERS", ""],
  ["3rd", "WORLD GROOVE", "WORLD GROOVE", "BPM 126.", "world", "inst", "inst", "tribal world groove with hand drums, chants and a drone over a house beat", "primal, earthy", "tribe groove", "nite system", ""],
  ["3rd", "EURO BEAT", "EURO BEAT", "BPM 154.", "eurobeat", "female_sung", "jp", "classic eurobeat with octave synth bass, a bright lead and a dramatic minor-key chorus", "dramatic, fast, romantic", "LUV TO ME", "THIRD-MIX", ""],
  ["3rd", "HARD TECHNO", "HARD TECHNO", "BPM 140.", "techno", "inst", "inst", "hard techno attack with a pounding kick, metallic percussion and acid stabs", "aggressive, attacking", "Attack the music", "DJ FX", "ANOTHER 譜面あり。"],
  ["3rd", "drum'n bass", "DRUM'N BASS", "BPM 160.", "dnb", "inst", "inst", "fast highway drum and bass with rushing breaks, deep reese bass and a speedy synth riff", "speedy, exhilarating", "super highway", "nouvo nude", "オペレーター用コマンドで選曲。"],
  ["3rd", "80'S J-POP", "80'S J-POP", "BPM 130.", "jpop", "female_jp", "jp", "80s Japanese idol-pop with gated drums, bright synth brass and a sentimental chorus", "nostalgic, sentimental", "Believe again", "Emotion of Sound featuring miryam", "隠し曲。"],
  ["3rd", "DIGITAL FUNK", "DIGITAL FUNK", "BPM 97.", "electro", "inst", "inst", "digital funk with robotic synth bass, vocoder hooks and a tight drum machine", "cool, robotic, funky", "nine seconds", "nouvo nude", "隠し曲。zakugiri では BPM 90。"],
  ["3rd", "DIGI ROCK", "DIGI ROCK", "BPM 112.", "rock", "male_sung", "en", "digital rock with a distorted guitar riff over a programmed breakbeat and synth bass", "edgy, restless", "area code", "nouvo nude", "隠し曲。"],

  ["complete", "DANCE POP", "DANCE POP", "BPM 130.", "jpop", "female_sung", "en", "English-language dance-pop version with bright synths, four-on-the-floor and a catchy chorus", "bright, uplifting", "Believe again (english version)", "dj nagureo", ""],
  ["complete", "J-TEKNO", "J-TEKNO", "BPM 145.", "techno", "inst", "inst", "Japanese-style melodic techno with fast arpeggios, quirky synth leads and a punchy drum machine", "quick, quirky, playful", "quick master (reform Version)", "Yohei Shimizu", ""],
  ["complete", "HARD HOUSE", "HARD HOUSE", "BPM 130.", "house", "inst", "inst", "hard house remix with a pounding kick, offbeat bass stabs and chopped diva vocal shots", "hard, pumping", "20,november (hard mix)", "DJ nagureo", "ANOTHER 版はコマンドで出す。"],
  ["complete", "EUROBEAT", "EUROBEAT", "BPM 154.", "eurobeat", "female_sung", "en", "English-language eurobeat version with octave bass, bright leads and a dramatic chorus", "dramatic, fast, glamorous", "LUV TO ME (English Version)", "THIRD-MIX", "ANOTHER 版あり。"],

  ["4th", "R&B", "R&B", "BPM 90.", "rnb", "female_sung", "en", "late-90s R&B with a swung drum machine, smooth chords and a devoted sung hook", "devoted, smooth", "I LiVe JUST 4U", "不明", "アナザーランクあり。"],
  ["4th", "JAZZ HOUSE", "JAZZ HOUSE", "BPM 110.", "house", "female_sung", "en", "jazz house with live upright bass, jazzy Rhodes chords and a soulful vocal over a deep house beat", "elegant, warm", "YOU MAKE ME", "MONDAY MICHIRU", ""],
  ["4th", "HIPHOP", "HIPHOP", "BPM 93.", "hiphop", "male_rap", "en", "party hip-hop with a bouncy popping sample and scratch cuts", "playful, poppy", "POPCORN", "不明", "アナザーランクあり。"],
  ["4th", "FUTURE JAZZ", "FUTURE JAZZ", "BPM 168.", "dnb", "inst", "inst", "future jazz drum and bass with fast broken beats, jazz chords and a rugged bassline", "rugged, sophisticated", "RUGGED ASH", "不明", ""],
  ["4th", "DANCE POP", "DANCE POP", "BPM 132.", "eurobeat", "female_sung", "en", "keep-moving dance-pop with eurodance bass, bright synth stabs and a motivating chorus", "energetic, positive", "KEEP ON MOVIN'", "不明", ""],
  ["4th", "R&B", "R&B", "BPM 105.", "rnb", "male_sung", "en", "uptempo R&B with funky bass, a crisp drum machine and a chasing sung hook", "flirty, chasing", "HUNTING FOR YOU", "不明", ""],
  ["4th", "JUNGLE", "JUNGLE", "BPM 190.", "dnb", "inst", "inst", "dirty jungle with frantic chopped amen breaks, distorted reese bass and paranoid stabs", "frantic, intense", "PARANOIA MAX (dirty mix)", "不明", ""],
  ["4th", "CUBE BEAT", "CUBE BEAT", "BPM 103.", "electro", "male_jp_rap", "jp", "quirky blocky funk with odd synth hits, taiko-like accents and a cheeky Japanese vocal", "cheeky, challenging", "KAKATTEKONKAI", "不明", ""],
  ["4th", "HOUSE", "HOUSE", "BPM 128.", "house", "female_diva", "en", "brand-new-world vocal house with piano chords, strings and an uplifting diva", "uplifting, fresh", "BRAND NEW WORLD", "不明", "アナザーランクあり。"],
  ["4th", "SOUL HIPHOP", "SOUL HIPHOP", "BPM 117.", "hiphop", "male_rap", "en", "soulful hip-hop with a live-band feel, horns and a smooth sung hook", "smooth, cruising", "TAKE A RIDE", "LARRY DUNN", ""],
  ["4th", "JAZZY HIPHOP", "JAZZY HIPHOP", "BPM 100.", "hiphop", "male_rap", "en", "jazzy hip-hop with upright bass, muted trumpet and pumped-up drums", "jazzy, pumped", "JAZZ A PUMP UP", "TAKUMI", "アナザーランクあり。"],
  ["4th", "DRUM'N'BASS", "DRUM'N'BASS", "BPM 160.", "dnb", "inst", "inst", "fizzy liquid drum and bass with bubbly synths, rolling breaks and bright pads", "fizzy, refreshing", "SODA", "不明", ""],
  ["4th", "70's SOUL", "70'S SOUL", "BPM 112.", "soul", "male_sung", "en", "70s soul with live drums, wah guitar, horns and strings in a confident groove", "groovy, classy", "TAKE CONTROL", "LARRY DUNN", ""],
  ["4th", "TECHNO", "TECHNO", "BPM 135.", "techno", "inst", "inst", "build-up techno with layered loops that keep stacking, drum rolls and a rising filter", "building, hypnotic", "BUILD-UP", "不明", ""],
  ["4th", "BIG BEAT", "BIG BEAT", "BPM 131.", "bigbeat", "inst", "inst", "destructive big beat with distorted breaks, siren synths and crunchy bass", "destructive, rowdy", "DESTRUCTION", "不明", ""],
  ["4th", "RAVE", "RAVE", "BPM 152.", "rave", "inst", "inst", "chain-reaction rave with hoover chords, breakbeats and rave piano", "euphoric, chained", "CHAIN", "不明", ""],
  ["4th", "HARD HOUSE", "HARD HOUSE", "BPM 130.", "house", "inst", "inst", "weighted hard house with a heavy kick, rubbery bass and tough stabs", "heavy, driving", "WEIGHTED ACTION", "不明", ""],
  ["4th", "MINIMAL", "MINIMAL", "BPM 145.", "techno", "inst", "inst", "drunken minimal techno with wobbly loops, off-kilter percussion and playful bleeps", "tipsy, quirky", "DRUNK MONKY", "不明", "アナザーランクあり。"],
  ["4th", "TRANCE", "TRANCE", "BPM 150.", "trance", "inst", "inst", "dark screaming trance with gated pads, an acid line and a screaming lead", "intense, dark, soaring", "GENOM SCREAMS", "不明", ""],
  ["4th", "HAPPY", "HAPPY HARDCORE", "BPM 144.", "hardcore", "female_sung", "en", "happy hardcore with a bouncy kick, piano riffs and a sped-up cheerful vocal", "happy, dashing", "LOGICAL DASH", "不明", "アナザーランクあり。"],
  ["4th", "LOUNGE", "LOUNGE", "BPM 88.", "lounge", "inst", "inst", "spaced-out lounge with vibraphone, easy-listening organ and space-age bleeps", "spacey, mellow", "SPACED OUT", "不明", "隠し曲。"],
  ["4th", "DEEP HOUSE", "DEEP HOUSE", "BPM 133.", "house", "inst", "inst", "deep house with warm pads, jazzy chords and a peaceful groove", "peaceful, deep", "peace-out", "不明", "隠し曲。"],
  ["4th", "DANCE POP", "DANCE POP", "BPM 126.", "eurobeat", "female_sung", "en", "sultry dance-pop with a deep synth bass and a breathy vocal hook", "sultry, deep", "deep in you", "不明", "隠し曲。アナザーランクあり。"],

  ["5th", "DANCEMANIA", "EURODANCE", "BPM 132.", "eurobeat", "duo", "en", "futuristic eurodance with octave synth bass, stabby chords, a female hook and male rap", "futuristic, driving", "TOTAL RECALL", "不明", "ジャンル表記は固有名詞のため出力では EURODANCE に置換。"],
  ["5th", "FUTURE JAZZ", "FUTURE JAZZ", "BPM 160.", "dnb", "inst", "inst", "future jazz exploring a new world with jazzy broken beats and airy pads", "adventurous, airy", "FINDING A NEW WORLD", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 128.", "eurobeat", "female_sung", "en", "wonderland eurodance with sparkling synths, bouncy bass and a sweet female hook", "dreamy, sweet", "WONDERLAND", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 135.", "eurobeat", "female_sung", "en", "operator eurodance with telephone-like synth blips, pumping bass and a catchy female hook", "flirty, pumping", "OPERATOR", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 143.", "eurobeat", "duo", "en", "all-night eurodance with fast bass, rave stabs, a female hook and male rap", "partying, tireless", "DO IT ALL NIGHT", "不明", ""],
  ["5th", "R&B", "R&B", "BPM 91.", "rnb", "female_sung", "en", "come-get-it R&B with a swung beat, smooth bass and a confident vocal", "confident, sultry", "COME AND GET IT", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 132.", "eurobeat", "female_diva", "en", "uplifting eurodance-house with piano, a diva vocal and a positive climbing chorus", "uplifting, positive", "THE ONLY WAY IS UP", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 132.", "eurobeat", "duo", "en", "floor-filler eurodance with a punchy kick, a synth riff, male rap verses and a female hook", "floor-filling, hype", "UP ON THE FLOOR", "不明", ""],
  ["5th", "LATINAIRES BEATS", "LATIN BEATS", "BPM 92.", "latin", "female_sung", "en", "latin beats with congas, timbales and flamenco-style guitar over a hip-hop groove", "passionate, warm", "HIGHER", "不明", "アナザーランクあり。"],
  ["5th", "MINIMAL", "MINIMAL", "BPM 145.", "techno", "inst", "inst", "cyclic minimal techno with a looping cycle, subtle shifts and clicky percussion", "hypnotic, cyclic", "CYCLE", "不明", "アナザーランクあり。"],
  ["5th", "ELECTRONICA", "ELECTRONICA", "BPM 111.", "electro", "inst", "inst", "system electronica with glitchy beats, digital textures and cold synths", "cold, intricate", "SYSTEM", "不明", "アナザーランクあり。"],
  ["5th", "REGGAE", "REGGAE", "BPM 90.", "reggae", "male_toast", "en", "jamming reggae mix with a lovers rock groove and a jam-session feel", "sweet, jammy", "BOA BOA LADY(JAMMING-MIX)", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 135.", "eurobeat", "female_sung", "en", "hard version of the operator eurodance with a harder kick, driving bass and rave stabs", "harder, pumping", "OPERATOR(hard version)", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 132.", "eurobeat", "female_diva", "en", "hard version of the uplifting eurodance-house with a pounding kick and hard piano", "uplifting, harder", "THE ONLY WAY IS UP(hard version)", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 132.", "eurobeat", "duo", "en", "hard version of the floor-filler eurodance with a hard kick and a distorted synth riff", "hype, harder", "UP ON THE FLOOR(hard version)", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 143.", "eurobeat", "duo", "en", "racing eurodance with a speeding synth riff, engine-rev risers and fast bass", "racing, speedy", "THE RACE", "不明", ""],
  ["5th", "HIPHOP", "HIPHOP", "BPM 101.", "hiphop", "male_rap", "en", "freak-out hip-hop with wild funk samples and crazy scratches", "wild, freaky", "FREAKOUT", "不明", "アナザーランクあり。"],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 143.", "eurobeat", "duo", "en", "hard version of the racing eurodance with a harder kick and more distortion", "racing, harder", "THE RACE(hard version)", "不明", ""],
  ["5th", "JAZZ ELECTRO", "JAZZ ELECTRO", "BPM 114.", "electro", "inst", "inst", "jazz electro where a robotic drum machine plays jazz, with a vocoder solo and Rhodes", "robotic, jazzy", "MANMACHINE PLAYS JAZZ", "不明", ""],
  ["5th", "DANCEMANIA", "EURODANCE", "BPM 143.", "eurobeat", "duo", "en", "hard version of the all-night eurodance with a harder kick and faster stabs", "partying, harder", "DO IT ALL NIGHT(hard version)", "不明", ""],
  ["5th", "HIPHOP", "HIPHOP", "BPM 92.", "hiphop", "male_rap", "en", "pro-style hip-hop with hard drums, a horn stab loop and a confident rap", "confident, polished", "ALL PRO", "不明", ""],
  ["5th", "DIGITAL HARDCORE", "DIGITAL HARDCORE", "BPM 240.", "hardcore", "inst", "inst", "digital hardcore with distorted breakbeats, noise bursts and punk energy", "chaotic, furious", "CRYMSON", "不明", "アナザーランクあり。"],
  ["5th", "TECHNO", "TECHNO", "BPM 150.", "techno", "inst", "inst", "fast rugged techno with gritty denim-tough loops", "rugged, fast", "DENIM", "不明", "隠し曲。"],
  ["5th", "TECHNO", "TECHNO", "BPM 135.", "techno", "inst", "inst", "slam-dunk techno with bouncy slamming loops and court-side energy", "bouncy, slamming", "22DUNK", "不明", ""],
  ["5th", "HARENTI TECHNO", "HARENTI TECHNO", "BPM 136.", "techno", "inst", "inst", "shameless techno with cheeky melodic leads and playful vocal-sample cuts", "cheeky, shameless", "LINN 1999", "不明", "隠し曲。"],
  ["5th", "RAVE", "RAVE", "BPM 157.", "rave", "inst", "inst", "fast rave with hoover stabs, breakbeats and rave sirens", "frantic, euphoric", "R3", "不明", ""],
  ["5th", "ALTERNATIVE ROCK", "ALTERNATIVE ROCK", "BPM 144.", "rock", "male_sung", "en", "alternative rock with distorted guitars, live drums and a starry melodic chorus", "dreamy, energetic", "PRINCE ON A STAR", "不明", ""],
  ["5th", "GABBAH", "GABBA", "BPM 195 (pushing from 190 up to 200).", "hardcore", "inst", "inst", "gabber with distorted kick drums, hellish synth screams and a hardcore pace", "hellish, brutal", "HELL SCAPER", "不明", "BPM 190〜200。"],
];

const MIX_NAMES = { "1st": "初代", "2nd": "2ndMIX", "3rd": "3rdMIX", complete: "completeMIX", "4th": "4thMIX", "5th": "5thMIX" };

const PATTERNS = SONGS.map(([mix, label, genre, bpm, family, vocal, ratio, desc, mood, title, artist, note], i) => {
  const f = FAMILIES[family];
  return {
    id: i + 1, name: mix + " / " + label,
    src: { at: MIX_NAMES[mix] + " / " + label + " / " + bpm.replace(/\.$/, ""), note: "元曲: " + title + "（" + artist + "）。" + note + "楽器・ボーカル・展開は公開資料に曲ごとの記載がないため、ジャンル表記から当時の定番の音で組み立てています。" },
    bpm,
    main: "Genre: " + genre + ". Late-1990s Japanese arcade DJ-game track: " + desc + ". Mood: " + mood + ".",
    core: f.core + KEYSOUND,
    extra: f.extra,
    structure: f.structure,
    vocal: VOCALS[vocal],
    ratio: RATIOS[ratio],
    theme: f.theme + "\n" + FREE,
  };
});

const THEME_EXTRA = [];
const LYRICS_RATIOS = Object.values(RATIOS);
// 完全模倣が目的なので置換は既定で OFF。崩したいときに使う当時のジャンル表記
const GENRE_SWAPS = [
"HIP-HOP", "REGGAE", "TECHNO", "BREAK-BTS", "SOUL", "HOUSE", "RAVE", "SKA", "AMBIENT", "DRUM'N BASS",
"EURO BEAT", "BIGBEAT", "JUNGLE", "TRANCE", "HAPPY HARDCORE", "GABBA", "DEEP HOUSE", "FUTURE JAZZ", "LOUNGE", "R&B",
];
const NEVER_USE_FIXED = "neon, ignite, light up the night, forever, baby, heartbeat, fly away, destiny, dreams come true, stars align, ネオン, 運命, 永遠, 奇跡.";
const AVOID_FIXED = "Avoid: modern EDM supersaw drops, trap hi-hats, dubstep wobble, hyperpop, heavy autotune, modern brickwall loudness, cinematic orchestra, long intro, long fade-out, tracks longer than 2:30.";
const BPM_EXTRA = [];

return {
  reference: REFERENCE,
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  never: [NEVER_USE_FIXED],
  avoid: [AVOID_FIXED],
};
})();
