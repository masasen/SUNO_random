// V5 のプロンプト候補データ（makina ベース / DJ サンプリング / サビ先出し）。
// V1〜V4 と違い、歌詞テーマ・古文フラグメント・Never use・Avoid も V5 専用。
// このファイルだけ編集すれば V5 の候補が更新されます。変更後はページを再読み込みしてください。
//
// ジャンル名は各パターンの main 先頭「Main genre: makina.」の 1 か所だけに書く。
// 他の段落は「the main genre」で指すので、ジャンル置換の 1 語だけで曲全体が矛盾なく入れ替わる。
// 好みの元ネタ（JRPG の戦闘曲・音ゲーのブレイクビーツ・2000 年代 J-club のラップ×歌）は
// SUNO が固有名詞を弾くため、作品名・アーティスト名を書かずに音の特徴で指定している。
// Structure と歌詞テーマには具体的な歌詞の文言を書かず、言葉選びは SUNO 側の LLM に任せてランダム性を持たせる。
// ボーカルは全パターン 40 代女性 1 人の whisper-to-scream で、男性パートは入れない。
// コール＆レスポンスは入れず、ラップはメロディー感のある melodic rap だけを指定する。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v5 = (() => {

const PATTERNS = [
  {
    id: 1, name: "Boss Rush Hands-Up",
    bpm: "BPM 160, D minor.",
    main: "Main genre: makina. Fused with heroic JRPG boss-battle synth brass and rhythm-game breakbeat fills. Mood: euphoric, heroic, nonstop, fists in the air.",
    core: "Core sound: the main genre's own kick, bass and lead stay at the center; heroic detuned synth-brass stabs; a fast 16th-note arpeggio leitmotif; chopped amen-style breakbeat fills every 4 bars; bright wide supersaw opening on every chorus.",
    extra: "Samples: short DJ shouts, record scratch, rewind, a whispered count-in. Original, not copied.\n\nDrops: the first chorus hits at full power right after the 4-bar intro, no slow build-up.\n\nMix: punchy loud low end, bright brass on top, the final chorus is the peak. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): scratch, whispered count-in, breakbeat fill.\nChorus: full drop at once, screamed sung hook.\nVerse 1: whispered melodic rap over the main-genre groove.\nPre-chorus: rising snare, voice climbing.\nChorus: bigger, stacked hook.\nBreak: DJ scratch solo over breakbeat only.\nBridge: synth-brass fanfare, one classical-Japanese line.\nFinal chorus: key up, full scream.\nOutro: hook tag, rewind stop, hard cut.",
    vocal: "ONE female vocalist in her 40s only: mature, smoky, commanding tone with whisper-to-scream dynamics.\nVerses are close-mic whispered melodic rap that always carries a tune; the chorus breaks into raw screamed belts with her own stacked doubles.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: English 70-80%, Japanese for the rest.",
    theme: "Theme: a tsundere woman on the dance floor who insists she came only for the music, while every move says otherwise.\nEmotion: prickly, flustered, secretly thrilled.\nChorus: a short hook that denies everything while the melody gives her away.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 2, name: "Organ Wall Run",
    bpm: "BPM 156, D minor.",
    main: "Main genre: makina. Fused with a dark retro-RPG final-battle prog sound: a sustained organ-like synth wall, a relentless 16th-note chromatic bassline and distorted power chords. Mood: dramatic, unstoppable, goosebumps.",
    core: "Core sound: the main genre's own kick and lead at the center; a harmonically dense organ-like synth wall that never decays; a 16th-note bassline sliding down by semitones; flat-II (Phrygian) chord shifts; low distorted power-chord guitar layer; snappy breakbeat fills into every section.",
    extra: "Samples: a lone synth riff of repeated staccato stabs opens the song, then a vinyl spin-back and a crowd roar as the band hits. Original, not copied.\n\nDrops: the organ wall and full drums enter together on the first chorus; the bridge drops to bass and power chords only.\n\nMix: wide, loud organ wall; heavy mid-bass; the final chorus is the loudest. About 2:40, hard cut.",
    structure: "Structure:\nIntro (4 bars): lone synth riff, stabs, spin-back.\nChorus: full band and organ wall, screamed sung hook.\nVerse 1: tense whispered melodic rap over the chromatic bassline.\nPre-chorus: power chords, snare roll, voice rising.\nChorus: full force, stacked hook.\nBridge: bass and power chords only, classical-Japanese chant.\nBuild-up: organ swells, breakbeat roll.\nFinal chorus: loudest, screamed peak.\nOutro: lone riff returns, hard cut.",
    vocal: "ONE female vocalist in her 40s only: dark, husky, theatrical tone with whisper-to-scream dynamics.\nShe whispers the verses as melodic rap like a secret, rises through the pre-chorus and screams the sung hook; her own doubles thicken the chorus.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 70-80%, English for the rest.",
    theme: "Theme: a yandere woman whose sweetness hides how much she watches and remembers about the one she loves.\nEmotion: adoring, possessive, cute and unsettling at once.\nChorus: a short hook claiming him as hers, sweeter and scarier each time.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 3, name: "Amen Keysound Rave",
    bpm: "BPM 162, F minor.",
    main: "Main genre: makina. Fused with rhythm-game breakbeat: chopped amen breaks, key-sound vocal chops and scratch cuts. Mood: hyper, playful, adrenaline, combo-chasing.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; chopped amen breakbeat layered on top and soloed in breaks; vocal chops tuned like key sounds; reese bass stabs; bright piano stabs; turntable scratch fills; tight snare rolls.",
    extra: "Samples: break-loop stutter, scratch, pitched vocal chops of the hook, an announcer-style shout. Original, not copied.\n\nDrops: the chorus lands on the first beat after a one-beat silence; the break section strips to the amen loop only.\n\nMix: crisp snare, loud breaks, centered vocal. About 2:20, hard cut.",
    structure: "Structure:\nIntro (2 bars): break loop stutter, vocal chop.\nChorus: full drop, sung hook laced with vocal chops.\nVerse 1: fast whispered melodic rap over breaks.\nPre-chorus: piano stabs, rising chops.\nChorus: hook again, bigger chops.\nBreak: amen loop and scratch solo.\nBridge: classical-Japanese line chopped like a key sound.\nFinal chorus: double-time breaks, screamed hook.\nOutro: one stutter, hard cut.",
    vocal: "ONE female vocalist in her 40s only: sharp, playful yet worn tone with whisper-to-scream dynamics.\nFast whispered melodic rap with a clear tune in the verses, sudden screamed bursts on the sung hook, chopped layers of her own voice.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese and English mixed inside every bar, switching mid-line in the 2000s J-club rap-pop style.",
    theme: "Theme: a yami-kawaii woman, pastel on the outside and cracked on the inside, who will not stop dancing long enough to feel it.\nEmotion: sweet, hollow, defiantly cheerful.\nChorus: a short hook insisting she is fine while the melody cracks.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 4, name: "Club Jazz Crossfire",
    bpm: "BPM 150, A minor.",
    main: "Main genre: makina. Fused with 2000s J-club rap-pop crossover: jazzy seventh-chord stabs, smooth melodic rap flowing into a soulful sung hook. Mood: stylish, warm, flirty, peak-time.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; jazzy minor-seventh piano stabs and Rhodes chords; funky slap-style bass licks between phrases; shuffled hats; filtered disco strings; a crisp breakbeat fill into every chorus.",
    extra: "Samples: vinyl crackle, a short DJ shout, filter sweep, rewind into the first chorus. Original, not copied.\n\nDrops: the first chorus opens the filter fully at once; the second verse drops to piano and drums only.\n\nMix: warm mids, silky top, upfront vocals. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): filtered piano, a whispered ad-lib, rewind.\nChorus: filter opens, soulful sung hook.\nVerse 1: smooth half-whispered melodic rap, jazzy stabs.\nPre-chorus: melodic rap gliding into singing, voice rising.\nChorus: full groove, layered hook.\nBridge: piano and drums only, classical-Japanese sung line.\nFinal chorus: key up, screamed belt on top.\nOutro: hook tag, vinyl stop.",
    vocal: "ONE female vocalist in her 40s only: soulful, sultry, lived-in tone with whisper-to-scream dynamics.\nSmooth whispered melodic rap that slides into singing in the verses; the hook grows into a raw screamed belt.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese and English mixed inside every bar, switching mid-line in the 2000s J-club rap-pop style.",
    theme: "Theme: a clingy woman waiting for a reply that never comes, turning the waiting into a dance.\nEmotion: needy, impatient, half joking and half not.\nChorus: a short hook demanding a reply, more desperate each time.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 5, name: "Scratch Commander",
    bpm: "BPM 158, G minor.",
    main: "Main genre: makina. Fused with turntablism: scratch hooks and DJ cuts over a rhythm-game breakbeat backbone. Mood: rowdy, cocky, party-starting.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; scratched vocal hooks; transformer scratches; beat-juggled breakbeat; air-raid synth riser; punchy brass stab hits; stuttered pickups into every chorus.",
    extra: "Samples: scratch cuts, rewind, crossfader stutters, crowd roar. Original, not copied.\n\nDrops: hard stop, scratch, then the chorus slams in; a scratch solo replaces the second verse half.\n\nMix: loud, dry, in-your-face; scratches panned wide. About 2:20, hard cut.",
    structure: "Structure:\nIntro (2 bars): scratch, a whispered line.\nChorus: slam in, screamed sung hook.\nVerse 1: cocky whispered melodic rap, scratch fills.\nChorus: louder, stacked hook.\nBreak: scratch solo and beat juggle.\nVerse 2: melodic rap rising into singing.\nBridge: one classical-Japanese line scratched and repeated.\nFinal chorus: full scream, brass hits.\nOutro: rewind stop, hard cut.",
    vocal: "ONE female vocalist in her 40s only: punchy, cocky, gravelly tone with whisper-to-scream dynamics.\nWhispered melodic rap with a catchy tune in the verses, a screamed sung hook with stacked doubles of her own voice.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: English 70-80%, Japanese for the rest.",
    theme: "Theme: a tsundere woman who spends every verse insisting she hates him, until the words slip in the last chorus.\nEmotion: stubborn, embarrassed, melting.\nChorus: a short hook whose meaning quietly flips in the last chorus.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 6, name: "Crystal Prelude Rush",
    bpm: "BPM 164, E minor.",
    main: "Main genre: makina. Fused with a JRPG crystal-prelude harp arpeggio and heroic victory-fanfare brass. Mood: glittering, nostalgic, soaring, euphoric.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; a rising-and-falling harp-like synth arpeggio over wide chords; triumphant synth-brass fanfare hits; bell sparkles; gated trance-style pads; breakbeat fills into the chorus.",
    extra: "Samples: a crystal chime, an 8-bit coin blip, a short DJ shout, riser and reverse cymbal. Original, not copied.\n\nDrops: the intro arpeggio flows straight into the chorus with no build-up; the final chorus adds a fanfare on top.\n\nMix: bright, wide, sparkling top; strong kick. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): crystal arpeggio alone, a breathy whisper.\nChorus: full drop, soaring sung hook.\nVerse 1: whispered melodic rap over arpeggio and kick.\nPre-chorus: fanfare brass rises, voice climbing.\nChorus: bigger, layered hook.\nBridge: arpeggio alone, classical-Japanese line.\nFinal chorus: key up, screamed peak, fanfare on top.\nOutro: arpeggio fades into one hit, cut.",
    vocal: "ONE female vocalist in her 40s only: clear, wistful, bittersweet tone with whisper-to-scream dynamics.\nBreathy whispered melodic rap over the arpeggio, a soaring belt in the chorus that cracks into a scream at the peak.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 70-80%, English for the rest.",
    theme: "Theme: a yandere woman holding him to a promise he made once, laughing, which she fully intends to collect.\nEmotion: sweet, patient, a little terrifying.\nChorus: a short hook about the promise, refusing to let go.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 7, name: "Era Hopper Cypher",
    bpm: "BPM 155, C minor.",
    main: "Main genre: makina. Fused with an era-hopping retro-RPG chapter feel: each section borrows a different flavor (spaghetti-western whistle, kung-fu gong, sci-fi bleeps), held together by breakbeat. Mood: playful, wild, cinematic, nonstop.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; a western whistle motif; gong and wood-block hits; sci-fi bleep arpeggios; chopped breakbeat fills between chapters; one big distorted power-chord riff for the chorus.",
    extra: "Samples: a coin-insert blip, gong hit, laser zap, a short DJ shout, rewind between sections. Original, not copied.\n\nDrops: every section switches flavor on a rewind, then the chorus hits full force.\n\nMix: punchy and colorful, wide FX. About 2:40, hard cut.",
    structure: "Structure:\nIntro (2 bars): coin blip, a whispered line.\nChorus: power-chord riff, sung hook.\nVerse 1: western whistle flavor, whispered melodic rap.\nChorus: bigger, stacked hook.\nVerse 2: kung-fu gong flavor, faster melodic rap.\nBridge: sci-fi bleep flavor, classical-Japanese line.\nFinal chorus: all flavors at once, screamed hook.\nOutro: rewind, hard cut.",
    vocal: "ONE female vocalist in her 40s only: versatile, mischievous, unstable tone with whisper-to-scream dynamics.\nShe swings from a giggling whispered melodic rap to a screamed sung hook within a bar; her own doubles thicken the bridge.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: English 70-80%, Japanese for the rest.",
    theme: "Theme: a woman whose moods swing from love to hate and back within a single beat, and who enjoys the whiplash.\nEmotion: chaotic, dramatic, playfully unstable.\nChorus: a short hook that flips between two opposite feelings.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 8, name: "Last Dungeon Party",
    bpm: "BPM 165, F# minor.",
    main: "Main genre: makina. Fused with chiptune dungeon riffs, a JRPG final-dungeon synth-brass theme and a rhythm-game breakbeat. Mood: thrilling, mischievous, sweaty, euphoric.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; square-wave chiptune riff doubling the lead; heroic synth brass; chopped breakbeat layered under the kick; 8-bit noise snare; descending minor-key riff that turns major in the chorus.",
    extra: "Samples: a treasure-chest style jingle, door creak, a short DJ shout, crowd stomp. Original, not copied.\n\nDrops: the chorus switches the riff from minor to major at full power; the break is chiptune and breakbeat only.\n\nMix: loud, crunchy chip layer, heavy kick. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): chiptune riff, door creak, a whisper.\nChorus: full drop, major-key sung hook.\nVerse 1: whispered melodic rap over minor-key riff.\nPre-chorus: synth brass rising, voice tightening.\nChorus: louder, stacked hook.\nBreak: chiptune and breakbeat only.\nBridge: classical-Japanese chant over brass.\nFinal chorus: key up, screamed peak.\nOutro: jingle, hard cut.",
    vocal: "ONE female vocalist in her 40s only: sugary yet razor-edged tone with whisper-to-scream dynamics.\nA too-sweet whispered melodic rap in the verses that snaps into a screamed sung hook; stacked doubles of her own voice.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese 70-80%, English for the rest.",
    theme: "Theme: a jealous woman with a too-wide smile who sees him with someone else and keeps dancing closer.\nEmotion: jealous, sugary, quietly dangerous.\nChorus: a short hook dismissing the rival with a dangerous smile.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 9, name: "Lounge to Floor",
    bpm: "BPM 152, B minor.",
    main: "Main genre: makina. Fused with a 2000s J-club piano-house crossover: the hook starts as a lounge piano line and explodes into the main genre, with melodic rap and soulful singing. Mood: glamorous, rising, feel-good, peak-time.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; house piano chords with jazzy sevenths; filtered disco bass licks; finger snaps; bright supersaw stacked on the piano in every chorus; breakbeat fills into each section.",
    extra: "Samples: lounge chatter fading out, glass clink, a short DJ shout, tape-stop, crowd cheer. Original, not copied.\n\nDrops: the piano hook switches to the full main-genre groove on a DJ shout; the second verse returns to piano for 4 bars.\n\nMix: glossy, warm piano, punchy kick. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): lounge piano, chatter, a whisper.\nChorus: full drop under the piano hook, sung.\nVerse 1: smooth whispered melodic rap.\nPre-chorus: melodic rap gliding into singing, voice rising.\nChorus: bigger, layered hook.\nVerse 2: piano only for 4 bars, then full.\nBridge: classical-Japanese sung line over piano.\nFinal chorus: key up, screamed belt.\nOutro: piano tag, tape-stop.",
    vocal: "ONE female vocalist in her 40s only: glamorous, fragile, doll-like tone with whisper-to-scream dynamics.\nDelicate whispered melodic rap over the piano, a sung hook that tears into a scream in the final chorus.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: Japanese and English mixed inside every bar, switching mid-line in the 2000s J-club rap-pop style.",
    theme: "Theme: a yami-kawaii woman like a pretty, slightly broken doll, waiting on the shelf to be chosen as his favorite.\nEmotion: needy, dreamy, sweetly desperate.\nChorus: a short hook begging to be chosen, prettier and more broken each time.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
  {
    id: 10, name: "Gauge Max Anthem",
    bpm: "BPM 160, G minor.",
    main: "Main genre: makina. Fused with a hands-up gamer anthem: a hyper-gauge build, heroic synth brass and rhythm-game breakbeat. Mood: explosive, triumphant, hands-up, no brakes.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; heroic synth-brass hook doubled by a supersaw; fast arpeggios; breakbeat layered under the chorus; vocal chops of the hook word; snare rolls and risers before every section.",
    extra: "Samples: power-up chime, a short DJ shout, clap pattern, rewind, scratch. Original, not copied.\n\nDrops: the song starts on the chorus after a 2-bar riser; the final chorus doubles the drums.\n\nMix: huge, loud, wide; kick and brass on top. About 2:20, hard cut.",
    structure: "Structure:\nIntro (2 bars): riser, a whispered hook word.\nChorus: full drop, anthemic sung hook.\nVerse 1: whispered melodic rap over breakbeat and kick.\nPre-chorus: claps, risers, voice climbing.\nChorus: bigger, stacked hook.\nBreak: vocal chops and scratch.\nBridge: classical-Japanese chant, half the band.\nFinal chorus: double drums, screamed hook.\nOutro: hook word once, hard cut.",
    vocal: "ONE female vocalist in her 40s only: powerful, obsessive, anthemic tone with whisper-to-scream dynamics.\nWhispered melodic rap close to the mic, a screamed sung hook doubled by her own stacked voice.\nNo male vocal, no duet, no choir.",
    ratio: "Lyrics: English 70-80%, Japanese for the rest.",
    theme: "Theme: a woman who refuses to accept the breakup and keeps showing up wherever he dances.\nEmotion: stubborn, obsessive, gleefully unbothered.\nChorus: a short hook insisting it is not over, more stubborn each time.\nWrite every line in your own fresh words; invent the details and the hook yourself.",
  },
];

// パターンに付かない追加テーマ
const THEME_EXTRA = [];

const LYRICS_RATIOS = [
"Lyrics: English 70-80%, Japanese for the rest.",
"Lyrics: Japanese 70-80%, English for the rest.",
"Lyrics: Japanese and English mixed inside every bar, switching mid-line in the 2000s J-club rap-pop style.",
];

// メイン行の 1 語を差し替える候補。曲全体がこのジャンルを土台に組み直される
const GENRE_SWAPS = [
"UK hardcore", "happy hardcore", "J-core", "eurobeat", "hard trance", "jungle",
"drum & bass", "breakbeat", "big beat", "jersey club", "Baltimore club", "footwork juke",
"electro house", "future bass", "hyperpop", "UK garage", "nu-disco", "speed garage",
];

// 古文フラグメントは言語比率に関わらず日本語で書かせる
const CLASSICAL_FIXED =
`Occasionally generate brief original classical-Japanese-style fragments, written in Japanese, as 2 to 4 short chant or bridge lines inside the lyrics. Use archaic endings and old vocabulary, and keep them short and singable. Do not quote existing works.`;

const NEVER_USE_FIXED = "neon, ignite, fire inside, light up the night, tonight's the night, forever, baby, heartbeat, set me free, fly away, stars align, destiny, dreams come true, we are young, ネオン, 運命, 永遠, 奇跡, 桜, 翼.";
const AVOID_FIXED = "Avoid: male vocal, male rap, duet, monotone spoken rap, slow build-up, long intro, chorus arriving late, half-time drag, sad mellow mood, ballad tempo, choir, death growls, thin weak low end, muddy mix, orchestral cinematic scoring, acoustic arrangement, overtuned robotic vocal, long fade-out.";

const BPM_EXTRA = [
"BPM 150, A minor.", "BPM 155, C minor.", "BPM 158, G minor.", "BPM 162, F minor.",
"BPM 165, F# minor.", "BPM 170, D minor.",
];

return {
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  themes: THEME_EXTRA,
  never: [NEVER_USE_FIXED],
  avoid: [AVOID_FIXED],
  classical: CLASSICAL_FIXED,
};
})();
