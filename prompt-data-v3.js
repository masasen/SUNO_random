// V3 のプロンプト候補データ（Glass Cherry Maze を土台に TRANCE × EDM BANGER Vol.31 の 10 曲）。
// このファイルだけ編集すれば V3 の候補が更新されます。変更後はページを再読み込みしてください。
// 歌詞テーマ・古文フラグメント・Never use / Avoid は prompt-data-v4.js を全版共通で使う（V3 の Never use / Avoid は専用）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v3 = (() => {

// 全ベースの土台: StreetDanceEDM#07「Glass Cherry Maze」の MP3 メタデータ（元プロンプト・歌詞）に準拠。
// メタデータに無い BPM だけは音源解析の実測値（184 / 92 ハーフタイム）を使う。
// その上に「TRANCE × EDM BANGER Vol.31」前半 10 曲の個性を載せる。競合する指定は Glass Cherry Maze を優先する。
const REFERENCE = {
  name: "BASE Glass Cherry Maze",
  at: "StreetDanceEDM#07 / メタデータ準拠 / G minor / 実測 184 BPM（92 ハーフタイム）",
  note: "全ベースの土台。メタデータの元プロンプト準拠: half-time phonk breakdown × street dance、makina レイヤー、ピッチベンドしたリード、歪んだサブのグライド、毎拍の DJ スクラッチ、チョップしたスネアのスタッター始まり、語りラップのヴァース、ピークは割れてもいいベルトで叫ばない、コントラストの強いミックス、2:40-3:00。参考の実測値: 低域約 69%、6kHz 以上 1.1%、実尺 2:10。",
};

const BPM_REF = "BPM 184 (half-time 92 feel), G minor.";

function mainOf(flavor) {
  return "半分の速度で息をのむ. Uptempo half-time phonk breakdown x street dance with a makina layer, fused with " + flavor + ". Mood: pleading, sugary, quietly frightening.";
}

function coreOf(tail) {
  return "Core sound: pounding kick, heavy rolling sub bass with distorted glides, makina layer with a screeching pitch-bent lead riff, dark memorable lead melody, sparse stab hits in half-time sections, " + tail;
}

const SAMPLES_COMMON = "Samples: DJ scratch stabs punctuate every arm-motion beat; rave one-shots, crowd shouts, \"hey!\" calls, rewinds, sirens and stuttered vocal chops fill every gap. Original, not copied.";

const DROPS_COMMON = "Drops: hooks fall into a half-time feel with sparse stab hits and a distorted sub bass glide, then a sudden snap back to full tempo.";

const MIX_COMMON = "Mix: contrast-heavy dynamic mix with a strong minor hook melody; heavy chest-hitting low end, upfront saturated vocal, wide chorus. 2:40-3:00.";

function extraOf(samples, drops) {
  return SAMPLES_COMMON + " " + samples + "\n\n" + DROPS_COMMON + " " + drops + "\n\n" + MIX_COMMON;
}

const VOCAL_COMMON = "ONE Japanese female vocalist only, 40s: husky yet sharp, punchy mid-range voice, tight breath control, percussive attack, never soft or ballad-like.";
const VOCAL_ARC = "Some verse sections are spoken, not sung: flat-pitch Japanese talk-rap with natural speech rhythm. Only the hook and chorus are sung. Peaks are belted and may crack, NOT screamed or growled.";
const VOCAL_NO = "Same singer for every layer, harmony and ad-lib; no male vocal, feature or choir.";

function vocalOf(line, arc) {
  return [VOCAL_COMMON, arc === undefined ? VOCAL_ARC : arc, line, VOCAL_NO].filter(Boolean).join("\n");
}

const INTRO_REF = "Intro: chopped snare stutter before the groove and lead melody lock in";

const PATTERNS = [
  {
    id: 1, name: "Tr.01 Farewell",
    src: { at: "0:00-3:19 / 172 BPM / B♭ minor", note: "唯一の 172 BPM。H/P 比 6.7・オンセット密度 2.4/秒と最も滑らかで、持続系パッドとリードが主体。0:00 からサビ始まり、終盤 2:40 付近が最大音量、最後は短いインスト→フェード。歌詞は穏やかな別れ（日 75 / 英 25）。" },
    bpm: BPM_REF,
    main: mainOf("emotional dark trance: a bittersweet goodbye anthem"),
    core: coreOf("dark sidechained supersaw pads, low piano chords, open offbeat hats, clap on 2 and 4."),
    extra: extraOf("Filtered goodbye whispers.", "The lead sings the hook back over a one-bar riff."),
    structure: "Structure:\n" + INTRO_REF + ".\nVerse 1: restrained talk-rap over kick and rolling sub.\nChorus 1: sung English title hook, full drop.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nVerse 2: sudden sudden snap back to full tempo, talk-rap.\nChorus 2: doubled vocal, scratch stabs.\nBridge: one spoken line over near silence.\nFinal chorus: belted peak that may crack.\nOutro: short sung \"ah\", hard cut.",
    vocal: vocalOf("Restrained talk-rap verses; tearful belted chorus."),
    ratio: "Lyrics: Japanese 75%, natural English 25%, with a two-word English title hook opening the chorus.",
    theme: "Theme: a gentle, dignified breakup. Both know it is over and neither wants to blame the other. She wants to end it smiling and thank him for the time they shared.\nScenes: the last walk together, calling his name one final time, a morning without him, looking up at a sky she has never seen before.\nEmotion: sorrow turning into quiet strength. No bitterness, no begging.\nChorus: a short English title phrase, then the promise not to look back.",
  },
  {
    id: 2, name: "Tr.02 Vertigo Rise",
    src: { at: "3:19-6:22 / 152 BPM / A♭ minor", note: "ステレオ幅 0.37 で最も広く、2k-6kHz 帯 16.5% と最も明るい。H/P 比 3.3 で打楽器寄り、オフビートのハットが強め。サビ始まり。歌詞はダンスフロアでの目眩と上昇（日 60 / 英 40）、終盤に英語の掛け声。" },
    bpm: BPM_REF,
    main: mainOf("stomping percussive EDM trance with wide dark supersaws and dizzy vertigo energy"),
    core: coreOf("busy tribal percussion, wide dark supersaws, spinning gated riff, open offbeat hats."),
    extra: extraOf("Swirling pitch-bent crowd chants.", "Busy percussion keeps stomping under a spinning riff."),
    structure: "Structure:\n" + INTRO_REF + ", crowd chant.\nVerse 1: talk-rap over stomping percussion.\nChorus 1: belted hook, full heavy drop.\nBreak: half-time feel, spinning riff, sparse stab hits.\nVerse 2: sudden snap back to full tempo, busier drums.\nBreakdown: floating low drone, no kick.\nFinal chorus: shouted English calls, belted peak that may crack.\nEnd: hard cut on the last hit.",
    vocal: vocalOf("Weightless talk-rap verses; short shouted English calls in the final chorus."),
    ratio: "Lyrics: Japanese 60%, natural English 40%, with short shouted English calls in the final chorus.",
    theme: "Theme: losing balance on a spinning dance floor and discovering she can rise instead of fall. Gravity stops being an enemy.\nScenes: heels hitting the floor, the ceiling turning, a heartbeat slightly off-axis, the body moving before the mind, a sudden weightless lift.\nEmotion: dizzy exhilaration turning into self-possession. Her balance belongs to her.\nChorus: if there is nowhere to fall, she names this place the sky.",
  },
  {
    id: 3, name: "Tr.03 Offbeat Step",
    src: { at: "6:22-10:21 / 152 BPM / G minor", note: "サブ帯域 30.2% で全曲最大、サイドチェインの揺れ 7.3、オフビートのハット 12.4 と王道トランスの刻み。0:40-1:04 に長めのブレイク、3:12 以降が最大音量（-12.4dB）。歌詞は英語メイン（英 85 / 日 15）で、自分で一歩を選ぶ内容。" },
    bpm: BPM_REF,
    main: mainOf("pumping offbeat trance with sung English hooks"),
    core: coreOf("offbeat open hats, brutal sidechain pump, dark supersaws, 16th-note gated riff."),
    extra: extraOf("Radio-filtered spoken fragments.", "Classic trance pump made heavy; the last 16 bars grow harder."),
    structure: "Structure:\n" + INTRO_REF + ", radio voice.\nVerse 1: Japanese talk-rap, kick and pumping sub.\nChorus 1: sung English hook, pumping drop.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nVerse 2: sudden snap back to full tempo, talk-rap.\nBreakdown: pads, one sung English line.\nFinal chorus: longest and hardest, belted peak that may crack.\nEnd: rewind cut.",
    vocal: vocalOf("Sung hooks in natural English; spoken verses in Japanese; calm, determined tone."),
    ratio: "Lyrics: English 60% for sung hooks and choruses, Japanese 40% for spoken talk-rap verses.",
    theme: "Theme: waiting for a sign that never comes, then deciding to take one small step today on her own.\nScenes: a dark road ahead, wind that will not change, footprints she leaves behind, a morning she chooses without a map.\nEmotion: fear set aside, not erased. Quiet determination rather than triumph.\nChorus: her own direction, her own timing, already moving.",
  },
  {
    id: 4, name: "Tr.04 Major Lift",
    src: { at: "10:21-13:38 / 152 BPM / A♭ major", note: "10 曲中で唯一のメジャーキー。ベース帯 50.2%、1:52 付近に一度落ちた後、2:24 以降は -14dB 台が続く二段ドロップ型。サビ始まり。歌詞は「君」より理想の未来を愛していたと気付く大人の恋（日 85 / 英 15）。" },
    bpm: BPM_REF,
    main: mainOf("euphoric trance chord lifts pulling against minor tension, with a double-drop finale"),
    core: coreOf("euphoric sidechained supersaw lifts, low piano stabs, open offbeat hats, clap on 2 and 4."),
    extra: extraOf("Pitched-up \"hey!\" calls lifting each chorus.", "Euphoric chord lifts ride over the heavy sub."),
    structure: "Structure:\n" + INTRO_REF + ".\nVerse 1: honest talk-rap over heavy sub.\nChorus 1: euphoric lift, full drop.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nVerse 2: sudden snap back to full tempo, reflective talk-rap.\nBreakdown: piano and one spoken line, short.\nFinal chorus: double drop, belt that may crack, full weight to the end.\nEnd: hard cut.",
    vocal: vocalOf("Warm talk-rap verses; hopeful belt that may crack in the double drop."),
    ratio: "Lyrics: Japanese 85%, short natural English 15% woven into lines.",
    theme: "Theme: realizing she may have loved the future she imagined more than the person in front of her. She separates her own dream from him and decides to carry it herself.\nScenes: the life she drew in her head, his voice she did not really hear, a wish handed over too heavily, looking at him again without the script.\nEmotion: honest self-reflection turning into mature, lighter love.\nChorus: if she still loves him after all this, she wants to say it in a way that truly reaches him.",
  },
  {
    id: 5, name: "Tr.05 Paint It Daylight",
    src: { at: "13:38-17:09 / 152 BPM / F minor", note: "サイドチェインの揺れ 1.1 と最小で、ポンプより転がるベースで押す。ハットは 8 分の刻み（3.0）。0:24 以降ほぼ一定のハイエネルギー。サビ始まり、ポストコーラスで英語の韻踏み 2 行を繰り返すチャント。歌詞は幸せな振りをやめる二人（日 55 / 英 45）。" },
    bpm: BPM_REF,
    main: mainOf("driving trance with a rolling distorted bassline and a chanted English post-chorus"),
    core: coreOf("distorted 16th-note rolling bassline, straight 8th hats, gated stabs looping every bar."),
    extra: extraOf("A stuttered loop doubles the chant.", "The chant locks into the loop like a DJ tool."),
    structure: "Structure:\n" + INTRO_REF + ", vinyl cut.\nVerse 1: talk-rap over the driving bassline.\nChorus 1: sung hook, full drop.\nPost: rhymed English chant couplet looped.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nVerse 2: sudden snap back to full tempo, the truth comes out.\nFinal chorus: belted peak that may crack, chant returns.\nEnd: hard cut.",
    vocal: vocalOf("Controlled talk-rap verses; post-chorus: tight spoken-chant English couplets looped like a DJ tool."),
    ratio: "Lyrics: Japanese 55%, natural English 45%, with a rhymed English couplet repeated in the post-chorus.",
    theme: "Theme: a couple pretending to be happy, painting daylight over the dark. She finally tears down the perfect picture and chooses honest pain over a pretty lie.\nScenes: curtains opened only for show, matching photos, the same polite words, a silence they call peace.\nEmotion: numb calm cracking into honesty. Not anger, but relief in admitting the truth.\nChorus: saying it is not happiness is where something real begins.",
  },
  {
    id: 6, name: "Tr.06 Fake Smile Breaker",
    src: { at: "17:09-21:02 / 152 BPM / F minor", note: "H/P 比 9.9・クレスト 4.56 と最も圧縮が強くラウド（-14.6dB）。16 分ハットの周期成分が突出（45〜48）、サイドチェインの揺れ 8.3。2:03 から英語ラップのブレイク。無音でぶつ切り終了。歌詞は「いい子」をやめて本当の自分を解放（日 55 / 英 45）。" },
    bpm: BPM_REF,
    main: mainOf("hard gated EDM trance with an English rap break"),
    core: coreOf("relentless 16th hats, 16th-note gated chords, massive sidechain pump, distorted stabs."),
    extra: extraOf("Camera-shutter clicks around the rap break.", "Tight gates lock with the 16th hats at maximum weight."),
    structure: "Structure:\n" + INTRO_REF + ".\nVerse 1: tense talk-rap, low energy.\nChorus 1: English title calls, explosive gated drop.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nRap break: sudden snap back to full tempo, fast English rap over kick and sub.\nFinal chorus: belted peak that may crack.\nEnd: sampled shout, abrupt silence.",
    vocal: vocalOf("Tense verses; rap break: fast, punchy English rap, then straight back to the belted chorus."),
    ratio: "Lyrics: Japanese 55%, English 45%, with English title hooks and an English rap break.",
    theme: "Theme: breaking out of the \"always smile, be a good girl\" rules. The fake happiness she wore in public finally cracks, and she lets her real self out.\nScenes: a smile for the picture, a smile for the crowd, a mirror where she no longer recognizes herself, walls built inside her own head.\nEmotion: suppressed frustration exploding into liberation. Defiant and cathartic, never violent.\nChorus: she will not smile on command anymore; right here she becomes herself.",
  },
  {
    id: 7, name: "Tr.07 Sunlight Through Leaves",
    src: { at: "21:02-24:57 / 152 BPM / G minor", note: "サイドチェインの揺れ 1.1・ハットの刻み弱めで、滑らかに転がるグルーヴ。0:30 までインスト、ドロップはスキャット（「ダンダダ」）のボーカルチョップ。2:40 付近に静かなブレイク（-22dB）を挟んで最後のドロップ。歌詞は光と影を連れて歩き出す回復の歌（日 85 / 英 15）。" },
    bpm: BPM_REF,
    main: mainOf("light-through-shadow melodic trance with scat vocal-chop hooks"),
    core: coreOf("dark airy pads, looping pluck riff, chopped husky scat vocal lead, open offbeat hats."),
    extra: extraOf("Chopped scat syllables and reverse vocal hits.", "The scat chop hook loops until it turns hypnotic."),
    structure: "Structure:\n" + INTRO_REF + ".\nVerse 1: low talk-rap over rolling sub.\nChorus 1: sung hook, full drop, scat chop post.\nBreak: half-time feel, scat chops, sparse stab hits.\nVerse 2: sudden snap back to full tempo, looking back without blame.\nBreakdown: late and quiet, almost no drums.\nFinal chorus: belted peak that may crack, scat chop tag.\nEnd: short hard cut.",
    vocal: vocalOf("Low, gentle talk-rap; post-chorus: wordless husky scat chopped as the drop lead."),
    ratio: "Lyrics: Japanese 85-90%, English only as short breathing phrases.",
    theme: "Theme: lifting her head after a long hard season. She is not fully healed; she has simply stopped looking only at the ground.\nScenes: sunlight filtering through leaves, light and shadow on the same path, wind she waits for, squinting at a slightly too-bright day.\nEmotion: gentle recovery. She does not have to choose only brightness; she can walk with her shadow.\nChorus: walking into today, a little dazzled, shadow in tow.",
  },
  {
    id: 8, name: "Tr.08 Flashback Night Drive",
    src: { at: "24:57-28:57 / 152 BPM / E♭ minor", note: "ベース帯 50.7%、1:30 から畳み掛ける半ラップの日本語ヴァース。2:24-2:43 に静かなブリッジ、最終サビ後に無音で切断。歌詞は答えのないまま夜を走り抜ける青春のドライブ（日 70 / 英 30）、英語フックの反復。" },
    bpm: BPM_REF,
    main: mainOf("night-drive trance with rapid-fire talk-rap verses and a belted English hook"),
    core: coreOf("dark supersaws, fast looping 16th-note riff, engine-whoosh risers, snare rushes."),
    extra: extraOf("Car-horn stabs, engine whooshes, radio static.", "Headlight speed; the belted English hook rides the drop."),
    structure: "Structure:\n" + INTRO_REF + ", radio static.\nVerse 1: talk-rap over heavy groove.\nChorus 1: belted English hook, full drop.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nVerse 2: sudden snap back to full tempo, rapid-fire breathless talk-rap.\nBridge: quiet, pads only, whispered line.\nFinal chorus: belted peak that may crack.\nEnd: hard cut to silence.",
    vocal: vocalOf("Verse 2: rapid-fire breathless talk-rap; hook: belted English line."),
    ratio: "Lyrics: Japanese 70%, English 30%, with an English night-drive hook repeated in every chorus.",
    theme: "Theme: a young night drive running from reality. There are no answers, but she keeps pressing the speed higher until sunrise.\nScenes: earbuds in, the passenger seat, a sweaty shirt, city signals flashing past, a strangely white store light glowing in the quiet.\nEmotion: restless, reckless youth. Unfinished and noisy, but alive in this moment.\nChorus: an English plea to the night not to let her down, then running through before morning comes.",
  },
  {
    id: 9, name: "Tr.09 Good Mood Trouble",
    src: { at: "28:57-32:16 / 152 BPM / F minor", note: "スペクトル重心 3167Hz・6kHz 以上 1.9% と最も暗く丸い音像。ハットの細かい刻みが弱く、ベース帯 50.1% で低域重視。0:30 から英語メインのボーカル。歌詞は予定が狂っても笑って楽しむ週末の夜（英 80 / 日 20）。" },
    bpm: BPM_REF,
    main: mainOf("a bouncing dark EDM party groove with sung English hooks"),
    core: coreOf("bouncing syncopated bass stabs, low-passed supersaws, muted pluck riff, subtle hats."),
    extra: extraOf("Crowd laughter and \"here we go!\" calls.", "The bouncing bass stab repeats until it hooks."),
    structure: "Structure:\n" + INTRO_REF + ", crowd sample.\nVerse 1: cheeky talk-rap over bass.\nChorus 1: sung English title hook, bouncing drop.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nVerse 2: sudden snap back to full tempo, shorter lines.\nBreak 2: short stop with a rewind.\nFinal chorus: belted peak that may crack, shouted hook tags.\nEnd: short cut.",
    vocal: vocalOf("Cheeky smoky delivery; sung English hooks, playful ad-libs."),
    ratio: "Lyrics: English 60% for sung hooks, Japanese 40% for spoken verses and playful asides.",
    theme: "Theme: good-mood trouble on a city night. Plans go sideways and nobody cares, because everyone is laughing.\nScenes: a new spot, a glance that turns into a smile, one small spark flipping the whole night, the city getting brighter as the pace speeds up.\nEmotion: carefree, cheeky fun. No perfect ending, just something pretty.\nChorus: turning one little night into a whole weekend.",
  },
  {
    id: 10, name: "Tr.10 Long Breakdown",
    src: { at: "32:16-36:10 / 152 BPM / G minor", note: "最初の 40 秒がフィルター越しの低音量イントロ（-20dB）、1:36-2:16 に長いブレイク。サイドチェインの揺れ 7.6、16 分の刻み 2.3。2:48 以降が最大音量、最後は無音で切断。歌詞はほぼ無く、短い日本語フレーズとボーカルチョップだけのインスト寄り。" },
    bpm: BPM_REF,
    main: mainOf("near-instrumental progressive trance with sparse vocal chops and a long breakdown"),
    core: coreOf("huge dark supersaws, hypnotic 16th-note gated riff, low drones, long white-noise risers."),
    extra: extraOf("Chopped husky vocal fragments carry the vocal role.", "Slow-burning; each drop lands heavier after a long build."),
    structure: "Structure:\n" + INTRO_REF + " under a slowly opening filter.\nDrop 1: lead drop with chopped vocal syllables.\nBreak: half-time feel, sparse stab hits, distorted sub glide.\nBreakdown: long, drones, piano and one sung phrase, no kick.\nBuild: snare roll, siren, silence.\nDrop 2: sudden snap back to full tempo, huge drop.\nFinal drop: loudest, extra sub layer.\nEnd: abrupt silence.",
    vocal: vocalOf("Used sparingly as an instrument: a few short spoken or sung Japanese phrases, belted \"ah\" that may crack and rhythmic chops; NOT screamed or growled.", ""),
    ratio: "Lyrics: minimal, only a few short Japanese phrases; the track is mostly instrumental.",
    theme: "Theme: accepting what she cannot see yet. Only a few words, sung like a mantra between the drops.\nScenes: a dark horizon, a low voice, a hand reaching forward without knowing what is there.\nEmotion: calm acceptance fueling forward motion.\nChorus: no sung chorus; the lead melody carries it, with the phrase \"it is fine not to see it\" in Japanese as the only hook.",
  },
];

// V2（Thema.md の 14 テーマ英訳）をそのまま融合
const THEME_V2 = [
`Theme: dark-cute love. She wants to look adorable, but her inner world is unstable and she cannot hide how much she depends on him. The relationship is not broken yet, just slightly unsafe, a little short of lovers.
Scenes: her room, the mirror, unfinished makeup, a reply that never comes, the way home, a phone she keeps turning over, small private city moments.
Emotion: sweetness mixed with impatience, jealousy, possessiveness and unease. Wording is a little calculated and a little toxic, but never too heavy. No horror imagery and no explicit violence.
Chorus: short strong phrases repeated until they become addictive.`,

`Theme: yami-kawaii love written pop. The weight is there, but it never turns dark. Cuteness, dependence, selfishness, anxiety and loneliness stay balanced.
Scenes: an ordinary room, a mirror, a small gift, the walk home, waiting for an answer, a day that feels too long.
Emotion: clingy but bright, sulky, needy, easily hurt. Use everyday words, never clinical or explanatory. Keep it pop and catchy.
Chorus: one short line that sticks after a single listen, repeated.`,

`Theme: grown-up cute love. She looks composed, but in front of him she cannot stay honest. They are just before becoming lovers, or already together while she pretends to be at ease.
Scenes: a city view, the walk back from work, a cafe, a taxi, perfume, a jacket left behind, messages traded across a screen.
Emotion: elegant, lightly teasing, shy, pretending to have room to spare while her real feelings shake. Avoid girlish speech and heavy slang.
Chorus: adult and lingering, but still easy to hum.`,

`Theme: a slightly sensual grown-up cute love. Poise, composure and playful games on the surface, loneliness underneath.
Scenes: the end of a long day, a quiet bar, a coat, a window above the city, a hand almost taken, the walk to the station.
Emotion: natural adult warmth rather than forced cuteness. Two sides at once: confident outside, unsteady inside.
Chorus: sweet, memorable and softly repeated.`,

`Theme: yandere love. She is far too devoted to one person and can no longer hide the weight of it. Unrequited or established, the fear of losing him sits at the center.
Scenes: her room, the hours of waiting, a promise, a familiar route, a place full of memories, an object he left behind.
Emotion: devotion, anxiety, possessiveness and weakening reason. Never explain madness directly; show it as quiet, heavy attachment. No crime or violence imagery.
Chorus: short, strong feelings repeated with rising intensity.`,

`Theme: yandere love that still keeps its cuteness. Heavy affection, loneliness and possessiveness carried in words that sound sweet.
Scenes: her room, a promise, a saved message, a shared seat, the road they always walked.
Emotion: earnest and fragile rather than frightening. Desperate love, never a threat.
Chorus: an addictive short phrase repeated until it aches.`,

`Theme: tsundere love. She is stubborn, cannot be honest, and keeps missing her own timing while trying to hide her feelings. They are close, but one step short.
Scenes: a classroom or a street, a cafe, short messages, small misunderstandings, ordinary days.
Emotion: embarrassment, pride, jealousy and the cuteness of a hidden truth. A little sharp, never cruel. Avoid loud anime clichés.
Chorus: the one place where her real feelings leak out, just a little.`,

`Theme: adult tsundere love. Not childish sharpness, but pretended composure, light jokes, deflection and clumsiness at showing anything real.
Scenes: after work, a quiet street, a shared drink, an unsent message, the last train home.
Emotion: guarded, teasing and quietly warm. Honesty arrives only once.
Chorus: the moment she finally stops pretending.`,

`Theme: the love life of a working woman in the city. She is capable and rational at work but a little fragile in love. Office romance, an ex, or something undefined — keep the distance realistic.
Scenes: the commute, the office, lunch, the walk home after overtime, the last train, a Friday evening, a wine glass, messages traded slowly.
Emotion: tiredness, hope, something she cannot give up on, a trace of warmth and a trace of loneliness. Adult natural wording with real daily texture.
Chorus: unpretentious but memorable adult feeling.`,

`Theme: the ordinary days and quiet love of a working adult woman. Nothing dramatic, just real life.
Scenes: a morning train, a desk, a coffee gone cold, the walk home, a shared umbrella, a weekend that ends too fast.
Emotion: a little tired, a little hopeful, a small flutter. Do not stack office jargon; keep the love inside daily life.
Chorus: soft, natural and easy to sing.`,

`Theme: a one-sided love that grows a little bigger on every ordinary day.
Scenes: a glance, a short conversation, a message typed and deleted, the walk home, the same seat every week.
Emotion: no grand destiny — small events swelling into something she cannot hold. Natural, singable Japanese.
Chorus: simple, warm and rising.`,

`Theme: two people who love each other but keep missing each other.
Scenes: small everyday gaps, a call that ends too early, a plan postponed again, the same room holding two different silences.
Emotion: loneliness rather than anger. The distance widens through tiny misalignments.
Chorus: what stays unsaid, and what she still means.`,

`Theme: the vague distance with someone she cannot forget after the end.
Scenes: an old route, a saved photo, a familiar station, a message she keeps rewriting, a place they used to share.
Emotion: lingering attachment, pride, memory, and knowing she should not look yet looking anyway. Adult and never over-explained.
Chorus: restrained, with the truth sitting just underneath.`,

`Theme: the small happiness of a day when love is going well.
Scenes: morning light, a breakfast for two, a walk with no destination, a hand held on an ordinary street.
Emotion: no big drama — an ordinary day that looks slightly special. Gentle, natural and easy to hum.
Chorus: bright, simple and warm.`,
];

const LYRICS_RATIOS = [
"Lyrics: Japanese 70%, natural English 30%.",
"Lyrics: Japanese 60%, natural English 40%.",
"Lyrics: Japanese 80%, short natural English 20%.",
"Lyrics: English-main 80%, Japanese 20%.",
];

// メイン 1 行目のジャンル語を差し替えて曲の空気だけを強制的に変える
const GENRE_SWAPS = [
"hard trance", "psytrance", "progressive house", "future rave", "eurobeat",
"UK hardcore", "happy hardcore", "drum & bass", "hardstyle", "bass house",
"J-core", "future bass", "melodic techno", "big beat", "hyperpop",
];

// 全ベース共通・各 1 項目のみ
const NEVER_USE_FIXED = "ネオン, 午前二時, 既読, 通知, 運命, 永遠, 奇跡, 桜, 星空, 涙が止まらない, 抱きしめて, 世界で一番, stay with me, forever, baby, neon, ignite.";
const AVOID_FIXED = "Avoid: thin bright pop-EDM sheen, weak bass, cute idol vocal, big-room festival drops, dubstep wobble, hardstyle kicks, happy hardcore, lo-fi, acoustic ballad, rock guitars, metal, orchestral cinematic scoring, slow tempo.";

const BPM_EXTRA = [
"BPM 180 (90 half-time feel), G minor.", "BPM 188 (94 half-time feel), G minor.", "BPM 176 (88 half-time feel), G minor.",
]

return {
  reference: REFERENCE,
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: LYRICS_RATIOS,
  genreSwaps: GENRE_SWAPS,
  never: [NEVER_USE_FIXED],
  avoid: [AVOID_FIXED],
};
})();
