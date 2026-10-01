// V5 のプロンプト候補データ（makina ベースのコール＆レスポンス / DJ サンプリング / サビ先出し）。
// V1〜V4 と違い、歌詞テーマ・古文フラグメント・Never use・Avoid も V5 専用。
// このファイルだけ編集すれば V5 の候補が更新されます。変更後はページを再読み込みしてください。
//
// ジャンル名は各パターンの main 先頭「Main genre: makina.」の 1 か所だけに書く。
// 他の段落は「the main genre」で指すので、ジャンル置換の 1 語だけで曲全体が矛盾なく入れ替わる。
// 好みの元ネタ（JRPG の戦闘曲・音ゲーのブレイクビーツ・2000 年代 J-club のラップ×歌）は
// SUNO が固有名詞を弾くため、作品名・アーティスト名を書かずに音の特徴で指定している。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v5 = (() => {

const PATTERNS = [
  {
    id: 1, name: "Boss Rush Hands-Up",
    bpm: "BPM 160, D minor.",
    main: "Main genre: makina. Fused with heroic JRPG boss-battle synth brass, rhythm-game breakbeat fills and hands-up call-and-response chants. Mood: euphoric, heroic, nonstop, fists in the air.",
    core: "Core sound: the main genre's own kick, bass and lead stay at the center; heroic detuned synth-brass stabs; a fast 16th-note arpeggio leitmotif; chopped amen-style breakbeat fills every 4 bars; bright wide supersaw opening on every chorus.",
    extra: "Call & response: every chorus line is answered by a crowd shout or a chopped echo of its last word.\n\nSamples: DJ shouts (\"hey!\", \"one more time!\"), crowd \"ho!\" answers, record scratch, rewind, \"ready... go!\" count. Original, not copied.\n\nDrops: the first chorus hits at full power right after the 4-bar intro, no slow build-up.\n\nMix: punchy loud low end, bright brass on top, the final chorus is the peak. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): scratch, \"ready... go!\", breakbeat fill.\nChorus: full drop at once, call-and-response hook.\nVerse 1: rap over the main-genre groove, brass stabs.\nPre-chorus: rising snare, \"say what?\" shouts.\nChorus: bigger, crowd answers every line.\nBreak: DJ scratch solo over breakbeat only.\nBridge: heroic synth-brass fanfare, one classical-Japanese line.\nFinal chorus: key up, everyone chants.\nOutro: hook tag, rewind stop, hard cut.",
    vocal: "Duo: one male rapper (crisp, confident English flow, hype ad-libs) and one female vocalist (bright, powerful, belted sung hooks).\nThe rapper calls, the singer answers; they trade lines in the chorus.\nNo choir; the crowd shouts are short and in the background.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: the boss gauge appears and the whole floor becomes the party that fights it. Nobody runs; the next hit is ours.\nScenes: a health bar flashing red, a hundred hands raised like a spell, sneakers on a shaking floor, the DJ pointing at the crowd on the downbeat.\nEmotion: fearless, giddy, all-in.\nChorus: a shoutable English battle call answered by the crowd, \"one more round!\" energy.",
  },
  {
    id: 2, name: "Organ Wall Run",
    bpm: "BPM 156, D minor.",
    main: "Main genre: makina. Fused with a dark retro-RPG final-battle prog sound: a sustained organ-like synth wall, a relentless 16th-note chromatic bassline and distorted power chords, plus call-and-response chants. Mood: dramatic, unstoppable, goosebumps.",
    core: "Core sound: the main genre's own kick and lead at the center; a harmonically dense organ-like synth wall that never decays; a 16th-note bassline sliding down by semitones; flat-II (Phrygian) chord shifts; low distorted power-chord guitar layer; snappy breakbeat fills into every section.",
    extra: "Call & response: the chorus is a call from the lead vocal and a one-word answer from the crowd on every bar.\n\nSamples: a lone synth riff of repeated staccato stabs opens the song, then a vinyl spin-back and a crowd roar as the band hits. Original, not copied.\n\nDrops: the organ wall and full drums enter together on the first chorus; the bridge drops to bass and power chords only.\n\nMix: wide, loud organ wall; heavy mid-bass; the final chorus is the loudest. About 2:40, hard cut.",
    structure: "Structure:\nIntro (4 bars): lone synth riff, stabs, spin-back.\nChorus: full band and organ wall, call-and-response hook.\nVerse 1: tense rap over the chromatic bassline.\nPre-chorus: power chords, snare roll, crowd \"hey!\"\nChorus: full force, crowd answers.\nBridge: bass and power chords only, classical-Japanese chant.\nBuild-up: organ swells, breakbeat roll.\nFinal chorus: loudest, everyone answers.\nOutro: lone riff returns, hard cut.",
    vocal: "ONE Japanese female vocalist only, singing fluent English: strong, bright, slightly gritty belt; rhythmic rap-sung verses.\nShe calls; the crowd answers with short shouts; her own stacked doubles echo the last word.\nNo male lead vocal, no choir.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: the last floor of the tower. The music refuses to stop, so neither does she; every step is an attack.\nScenes: an elevator dial hitting the top, a strobe sliced into frames, a cape made of a hoodie, the crowd forming a circle around her.\nEmotion: dark thrill turning into triumph.\nChorus: a short English war cry the crowd throws back word for word.",
  },
  {
    id: 3, name: "Amen Keysound Rave",
    bpm: "BPM 162, F minor.",
    main: "Main genre: makina. Fused with rhythm-game breakbeat: chopped amen breaks, key-sound vocal chops and scratch cuts, with call-and-response chants. Mood: hyper, playful, adrenaline, combo-chasing.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; chopped amen breakbeat layered on top and soloed in breaks; vocal chops tuned like key sounds; reese bass stabs; bright piano stabs; turntable scratch fills; tight snare rolls.",
    extra: "Call & response: each hook line is answered by a pitched vocal chop of its last syllable, then a crowd \"yeah!\".\n\nSamples: break-loop stutter, scratch, \"combo!\" style announcer shout, crowd count \"1, 2, 3, 4!\". Original, not copied.\n\nDrops: the chorus lands on the first beat after a one-beat silence; the break section strips to the amen loop only.\n\nMix: crisp snare, loud breaks, centered vocal. About 2:20, hard cut.",
    structure: "Structure:\nIntro (2 bars): break loop stutter, \"1, 2, 3, 4!\"\nChorus: full drop, call-and-response hook with vocal chops.\nVerse 1: fast English rap over breaks.\nPre-chorus: piano stabs, rising chops.\nChorus: hook again, chops answer every line.\nBreak: amen loop and scratch solo.\nBridge: classical-Japanese line chopped like a key sound.\nFinal chorus: double-time breaks, crowd answers.\nOutro: one stutter, hard cut.",
    vocal: "Duo: one male rapper (fast, precise, playful flow) and one female vocalist (cute-cool, bright, crisp diction).\nThe rapper drives the verses; the singer owns the hook; they answer each other in every chorus.\nNo choir.",
    ratio: "Lyrics: English 90%, Japanese 10% only as brief classical-Japanese fragments.",
    theme: "Theme: a full combo run. Every note lands, the chain keeps growing, and she does not dare blink.\nScenes: a combo counter climbing, fingertips on glowing keys, a crowd behind the cabinet, the last note falling like a meteor.\nEmotion: focused, giddy, unstoppable.\nChorus: a short English hook about never dropping the chain, answered by \"keep it!\" style shouts.",
  },
  {
    id: 4, name: "Club Jazz Crossfire",
    bpm: "BPM 150, A minor.",
    main: "Main genre: makina. Fused with 2000s J-club rap-pop crossover: jazzy seventh-chord stabs, a smooth rap and soulful sung hook, and call-and-response between them. Mood: stylish, warm, flirty, peak-time.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; jazzy minor-seventh piano stabs and Rhodes chords; funky slap-style bass licks between phrases; shuffled hats; filtered disco strings; a crisp breakbeat fill into every chorus.",
    extra: "Call & response: the singer sings the hook, the rapper answers each line with a short ad-lib (\"uh-huh\", \"say it again\").\n\nSamples: vinyl crackle, DJ \"come on!\" shout, filter sweep, rewind into the first chorus. Original, not copied.\n\nDrops: the first chorus opens the filter fully at once; the second verse drops to piano and drums only.\n\nMix: warm mids, silky top, upfront vocals. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): filtered piano, \"come on!\", rewind.\nChorus: filter opens, sung hook, rapper answers.\nVerse 1: smooth English rap, jazzy stabs.\nPre-chorus: singer and rapper trade lines.\nChorus: full groove, ad-lib answers.\nBridge: piano and drums only, classical-Japanese sung line.\nFinal chorus: key up, both voices stacked.\nOutro: hook tag, vinyl stop.",
    vocal: "Duo: one male rapper (smooth, laid-back, confident English flow) and one female vocalist (soulful, airy-to-powerful R&B tone).\nThey trade lines like a conversation; the hook is hers, the answers are his.\nNo choir.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: two strangers on opposite sides of the floor answering each other in rhythm instead of words.\nScenes: a glance through a strobe, a drink left on the speaker, two steps mirroring each other, the DJ catching it and dropping the beat.\nEmotion: playful tension, sparkling chemistry.\nChorus: a call and its answer, a short English line the other voice completes.",
  },
  {
    id: 5, name: "Scratch Commander",
    bpm: "BPM 158, G minor.",
    main: "Main genre: makina. Fused with turntablism: scratch hooks, DJ cuts and hype-man call-and-response, plus a rhythm-game breakbeat backbone. Mood: rowdy, cocky, party-starting.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; scratched vocal hooks; transformer scratches; beat-juggled breakbeat; air-raid synth riser; punchy brass stab hits; stuttered pickups into every chorus.",
    extra: "Call & response: the hype man shouts, the crowd answers; the scratch repeats the answer back.\n\nSamples: \"everybody say ho!\" style chant, scratch cuts, rewind, crossfader stutters, crowd roar. Original, not copied.\n\nDrops: hard stop, scratch, then the chorus slams in; a scratch solo replaces the second verse half.\n\nMix: loud, dry, in-your-face; scratches panned wide. About 2:20, hard cut.",
    structure: "Structure:\nIntro (2 bars): scratch, \"everybody say...\" \"ho!\"\nChorus: slam in, call-and-response chant.\nVerse 1: cocky English rap, scratch fills.\nChorus: crowd answers louder.\nBreak: scratch solo and beat juggle.\nVerse 2: half rap, half chant.\nBridge: one classical-Japanese line scratched and repeated.\nFinal chorus: everyone shouts, brass hits.\nOutro: rewind stop, hard cut.",
    vocal: "ONE Japanese female vocalist only, singing and rapping in fluent English: punchy, cocky, bright tone; hype-man style shouts.\nShe calls, the crowd answers; short stacked shouts of her own voice on the answers.\nNo male lead vocal, no choir.",
    ratio: "Lyrics: English 90%, Japanese 10% only as brief classical-Japanese fragments.",
    theme: "Theme: she takes the mic from the DJ and runs the room. Every shout is a command and the crowd obeys.\nScenes: a mic grabbed from the booth, hands up on the count, the crossfader snapping, the room jumping on one beat.\nEmotion: cocky joy, total control.\nChorus: a two-word English command and the crowd's answer.",
  },
  {
    id: 6, name: "Crystal Prelude Rush",
    bpm: "BPM 164, E minor.",
    main: "Main genre: makina. Fused with a JRPG crystal-prelude harp arpeggio, heroic victory-fanfare brass and hands-up call-and-response chants. Mood: glittering, nostalgic, soaring, euphoric.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; a rising-and-falling harp-like synth arpeggio over wide chords; triumphant synth-brass fanfare hits; bell sparkles; gated trance-style pads; breakbeat fills into the chorus.",
    extra: "Call & response: the hook is a short sung line answered by a chanted \"hey!\" or an echoed last word.\n\nSamples: a crystal chime, an 8-bit coin blip, DJ \"put your hands up!\" shout, riser and reverse cymbal. Original, not copied.\n\nDrops: the intro arpeggio flows straight into the chorus with no build-up; the final chorus adds a fanfare on top.\n\nMix: bright, wide, sparkling top; strong kick. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): crystal arpeggio alone, \"hands up!\"\nChorus: full drop, call-and-response hook.\nVerse 1: sung-rap over arpeggio and kick.\nPre-chorus: fanfare brass rises.\nChorus: crowd answers every line.\nBridge: arpeggio alone, classical-Japanese line.\nFinal chorus: key up, fanfare on top.\nOutro: arpeggio fades into one hit, cut.",
    vocal: "Duo: one male rapper (bright, upbeat English flow) and one female vocalist (clear, shining, high belted hooks).\nThe singer leads the chorus; the rapper answers and drives the verses.\nNo choir.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: the opening screen of a new adventure. Saving the game is over; she presses start and the world opens.\nScenes: a title screen glowing, a crystal in a hoodie pocket, a sunrise over the station, a party lining up behind her.\nEmotion: nostalgic sparkle turning into pure hype.\nChorus: a short English \"press start\" style call answered by the crowd.",
  },
  {
    id: 7, name: "Era Hopper Cypher",
    bpm: "BPM 155, C minor.",
    main: "Main genre: makina. Fused with an era-hopping retro-RPG chapter feel: each section borrows a different flavor (spaghetti-western whistle, kung-fu gong, sci-fi bleeps), held together by breakbeat and call-and-response chants. Mood: playful, wild, cinematic, nonstop.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; a western whistle motif; gong and wood-block hits; sci-fi bleep arpeggios; chopped breakbeat fills between chapters; one big distorted power-chord riff for the chorus.",
    extra: "Call & response: each chorus line gets a one-word crowd answer that changes with the chapter.\n\nSamples: a coin-insert blip, gong hit, laser zap, DJ \"next stage!\" shout, rewind between sections. Original, not copied.\n\nDrops: every chapter switches flavor on a rewind, then the chorus hits full force.\n\nMix: punchy and colorful, wide FX. About 2:40, hard cut.",
    structure: "Structure:\nIntro (2 bars): coin blip, \"next stage!\"\nChorus: power-chord riff, call-and-response hook.\nVerse 1: western whistle chapter, rap.\nChorus: crowd answers.\nVerse 2: kung-fu gong chapter, faster rap.\nBridge: sci-fi bleep chapter, classical-Japanese line.\nFinal chorus: all flavors at once.\nOutro: rewind, hard cut.",
    vocal: "ONE Japanese female vocalist only, singing and rapping in fluent English: versatile, playful character voice; tight rap; bright belted chorus.\nShe calls, the crowd answers; her own doubled voice answers in the bridge.\nNo male lead vocal, no choir.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: one dancer jumping through every era of the floor: the duel at noon, the dojo, the spaceship. Same groove, different century.\nScenes: a dusty saloon door, a dojo bow, a starship hatch, the same sneakers in every scene.\nEmotion: mischievous fun, unstoppable momentum.\nChorus: a short English hook that stays the same while the crowd answer changes.",
  },
  {
    id: 8, name: "Last Dungeon Party",
    bpm: "BPM 165, F# minor.",
    main: "Main genre: makina. Fused with chiptune dungeon riffs, a JRPG final-dungeon synth-brass theme and a rhythm-game breakbeat, with call-and-response chants. Mood: thrilling, mischievous, sweaty, euphoric.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; square-wave chiptune riff doubling the lead; heroic synth brass; chopped breakbeat layered under the kick; 8-bit noise snare; descending minor-key riff that turns major in the chorus.",
    extra: "Call & response: the chorus is a party chant; every line ends with a crowd \"hey!\" or an 8-bit echo of the last word.\n\nSamples: treasure-chest jingle style blip, door creak, DJ \"let's go!\" shout, crowd stomp. Original, not copied.\n\nDrops: the chorus switches the riff from minor to major at full power; the break is chiptune and breakbeat only.\n\nMix: loud, crunchy chip layer, heavy kick. About 2:20, hard cut.",
    structure: "Structure:\nIntro (4 bars): chiptune riff, door creak, \"let's go!\"\nChorus: full drop, major-key call-and-response hook.\nVerse 1: rap over minor-key riff.\nPre-chorus: synth brass rising.\nChorus: crowd answers louder.\nBreak: chiptune and breakbeat only.\nBridge: classical-Japanese chant over brass.\nFinal chorus: everyone answers, key up.\nOutro: treasure jingle, hard cut.",
    vocal: "Duo: one male rapper (gritty, energetic English flow) and one female vocalist (bright, cheeky, powerful hooks).\nThey shout the calls together and answer each other in the verses.\nNo choir.",
    ratio: "Lyrics: English 90%, Japanese 10% only as brief classical-Japanese fragments.",
    theme: "Theme: the final dungeon turns into a house party. The monsters dance, the treasure is the drop, and nobody wants to leave.\nScenes: torches replaced by strobes, a chest bursting with confetti, a skeleton DJ, the whole party jumping on the boss's floor.\nEmotion: mischievous joy, sweaty euphoria.\nChorus: a short English party chant answered by the crowd every bar.",
  },
  {
    id: 9, name: "Lounge to Floor",
    bpm: "BPM 152, B minor.",
    main: "Main genre: makina. Fused with a 2000s J-club piano-house crossover: the hook starts as a lounge piano line and explodes into the main genre, with rap and sung call-and-response. Mood: glamorous, rising, feel-good, peak-time.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; house piano chords with jazzy sevenths; filtered disco bass licks; finger snaps; bright supersaw stacked on the piano in every chorus; breakbeat fills into each section.",
    extra: "Call & response: the singer's hook is answered by the rapper's echo, then by the crowd on the last line.\n\nSamples: lounge chatter fading out, glass clink, DJ \"switch!\" shout, tape-stop, crowd cheer. Original, not copied.\n\nDrops: the piano hook switches to the full main-genre groove on \"switch!\"; the second verse returns to piano for 4 bars.\n\nMix: glossy, warm piano, punchy kick. About 2:30, hard cut.",
    structure: "Structure:\nIntro (4 bars): lounge piano, chatter, \"switch!\"\nChorus: full drop under the piano hook, call-and-response.\nVerse 1: smooth English rap.\nPre-chorus: singer and rapper trade lines.\nChorus: crowd answers the last line.\nVerse 2: piano only for 4 bars, then full.\nBridge: classical-Japanese sung line over piano.\nFinal chorus: key up, everyone sings.\nOutro: piano tag, tape-stop.",
    vocal: "Duo: one male rapper (smooth, charismatic English flow) and one female vocalist (soulful, glamorous, powerful hooks).\nThe hook is hers; he answers and echoes; they finish the last chorus together.\nNo choir.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: the after-party upstairs is too polite, so she pulls everyone down to the real floor.\nScenes: a lounge piano, a velvet rope unhooked, a staircase full of people, the bass hitting the moment the door opens.\nEmotion: glamorous mischief turning into pure release.\nChorus: a short English \"come downstairs\" style call the crowd answers.",
  },
  {
    id: 10, name: "Gauge Max Anthem",
    bpm: "BPM 160, G minor.",
    main: "Main genre: makina. Fused with a hands-up gamer anthem: a hyper-gauge build, heroic synth brass, rhythm-game breakbeat and stadium call-and-response chants. Mood: explosive, triumphant, hands-up, no brakes.",
    core: "Core sound: the main genre's own kick, bass and lead at the center; heroic synth-brass hook doubled by a supersaw; fast arpeggios; breakbeat layered under the chorus; vocal chops of the hook word; snare rolls and risers before every section.",
    extra: "Call & response: the lead calls the hook word, the crowd shouts it back twice, every bar.\n\nSamples: power-up chime, \"gauge max!\" style DJ shout, crowd clap pattern, rewind, scratch. Original, not copied.\n\nDrops: the song starts on the chorus after a 2-bar gauge-filling riser; the final chorus doubles the drums.\n\nMix: huge, loud, wide; kick and brass on top. About 2:20, hard cut.",
    structure: "Structure:\nIntro (2 bars): gauge-filling riser, \"gauge max!\"\nChorus: full drop, call-and-response hook word.\nVerse 1: rap over breakbeat and kick.\nPre-chorus: claps, risers, chant.\nChorus: crowd shouts back twice.\nBreak: vocal chops and scratch.\nBridge: classical-Japanese chant, half the band.\nFinal chorus: double drums, everyone shouts.\nOutro: hook word once, hard cut.",
    vocal: "ONE Japanese female vocalist only, singing and rapping in fluent English: powerful, bright, anthemic belt; tight rhythmic rap verses.\nShe calls the hook word; the crowd and her stacked doubles shout it back.\nNo male lead vocal, no choir.",
    ratio: "Lyrics: English 85%, Japanese 15% only as brief classical-Japanese fragments.",
    theme: "Theme: the special gauge is full. One button, one jump, and the whole room fires together.\nScenes: a meter flashing gold, a thousand phones lit up, a jump frozen at the top, confetti on the drop.\nEmotion: explosive joy, total unity.\nChorus: one shoutable English hook word the crowd throws back twice.",
  },
];

// パターンに付かない追加テーマ。英語メインで盛り上がる場面を選ぶ
const THEME_EXTRA = [
`Theme: the first beat after a long silence. The power cut ends, the speakers wake up, and the floor screams back to life.
Scenes: a dark room, phone lights, a hum in the speakers, the kick returning like a heartbeat.
Emotion: suspense exploding into joy.
Chorus: a short English "we're back" call answered by the crowd.`,

`Theme: a rival crew on the other side of the floor. The battle is won with steps and shouts, not fists.
Scenes: two circles facing each other, a sneaker squeak, a freeze on the beat, the crowd choosing a side.
Emotion: competitive grin, playful pride.
Chorus: a short English challenge line and the crowd's answer.`,

`Theme: the last song before the lights come on. Nobody leaves; they make it the loudest one.
Scenes: a clock above the bar, sweat on the ceiling, the DJ raising one finger, every voice on the final hook.
Emotion: bittersweet turned into all-out celebration.
Chorus: a short English "one more" chant the crowd shouts back.`,

`Theme: a game-over screen that she refuses. Continue, continue, continue, until the beat gives in.
Scenes: a countdown from nine, a coin in shaking fingers, the continue button smashed, the stage restarting louder.
Emotion: stubborn, defiant, laughing.
Chorus: a short English "continue" call answered by the crowd.`,
];

const LYRICS_RATIOS = [
"Lyrics: English 80%, Japanese 20% only as brief classical-Japanese fragments.",
"Lyrics: English 90%, Japanese 10% only as brief classical-Japanese fragments.",
];

// メイン行の 1 語を差し替える候補。曲全体がこのジャンルを土台に組み直される
const GENRE_SWAPS = [
"UK hardcore", "happy hardcore", "J-core", "eurobeat", "hard trance", "jungle",
"drum & bass", "breakbeat", "big beat", "jersey club", "Baltimore club", "footwork juke",
"electro house", "future bass", "hyperpop", "UK garage", "nu-disco", "speed garage",
];

// 歌詞は英語メイン、古文フラグメントだけは日本語で書かせる
const CLASSICAL_FIXED =
`Occasionally generate brief original classical-Japanese-style fragments, written in Japanese, as 2 to 4 short chant or bridge lines inside the English lyrics. Use archaic endings and old vocabulary, let English lines call or answer them, and keep them easy to shout. Do not quote existing works.`;

const NEVER_USE_FIXED = "neon, ignite, fire inside, light up the night, tonight's the night, forever, baby, heartbeat, set me free, fly away, stars align, destiny, dreams come true, we are young, ネオン, 運命, 永遠, 奇跡, 桜, 翼.";
const AVOID_FIXED = "Avoid: slow build-up, long intro, chorus arriving late, half-time drag, sad mellow mood, whispered vocal, ballad tempo, choir, metal screams or growls, thin weak low end, muddy mix, orchestral cinematic scoring, acoustic arrangement, overtuned robotic vocal, long fade-out.";

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
