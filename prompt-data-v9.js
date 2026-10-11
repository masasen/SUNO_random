// V9 のプロンプト候補データ（testwork/Adobe_MCP/MP3/EDM/Remove の 21 アルバム・307 曲）。
// 1 アルバム 1 ベース。BPM・キー・帯域バランス・ステレオ幅・音量推移・終わり方は librosa の実測（アルバム内の中央値と代表曲）、
// ジャンル・声・ムード・言語比率・歌詞テーマは MP3 の歌詞メタデータから起こしている。歌詞テーマは V9 専用で、V1〜V8 のテーマは使わない。
// 古文フラグメントと Never use は app.js が V1〜V8 のものをすべて集めて候補にする。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v9 = (() => {

const REFERENCE = {
  "name": "SOURCE EDM / Remove 21 アルバム",
  "at": "testwork/Adobe_MCP/MP3/EDM/Remove / 307 曲 / librosa 実測 ＋ ID3 メタデータ（title・lyrics）",
  "note": "解析が主、メタデータが補完。MP3 の ID3 には元プロンプトが無く（title / artist / comment / lyrics のみ）、音は全曲 librosa で実測（BPM はオンセット包絡のビートトラッキング、キーは Krumhansl 推定、帯域比は STFT のパワー比、ステレオ幅は Side/Mid の RMS 比、H/P 比は HPSS、音量推移は 2 秒窓の RMS）。アルバムごとに中央値を取り、代表曲（中央値に最も近い曲）の音量推移からイントロ・谷・山・終わり方を読んでいます。21 アルバムの中央値レンジ: 112〜140 BPM、低域 62〜75%、ステレオ幅 0.17〜0.28、H/P 比 2.4〜4.3。きっと、またね（28 曲）だけは .mp3.txt に元プロンプトがあり、ジャンル・声質はそれに従っています。ほかの 20 アルバムのジャンル・音色・声の人物像・ムード・言語比率・歌詞テーマは、歌詞メタデータ（全 307 曲）を読んで起こしています。歌詞テーマは V1〜V8 のものを使わず、1 アルバム 3 件を新しく書いています（既存曲の歌詞フレーズは引用していません）。"
};

const PATTERNS = [
  {
    "id": 1,
    "name": "Velvet Venom",
    "src": {
      "at": "01 Velvet Venom / 14 曲 / 実測 136 BPM / F# minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）73.2%・サブ（60Hz 未満）23.8%・2k-6kHz 6.7%・6kHz 以上 3.9%、ステレオ幅 0.211、H/P 比 4.28、オンセット 4.25/秒、長さ 2:42〜3:32。BPM は 96〜152（中央値 136）、キーは F# minor 7・F minor 3・F major 1 曲。終わり方はフェード 2 曲、他はぶつ切り。代表曲「黒猫デンジャラス」: 2:58 / 136 BPM / F minor、イントロ -27.8dB → 本体 -16.0dB、最大 -14.3dB（0:14）、1:08 に谷。メタデータ（歌詞）: 「毒を塗った指先で誘う」/ sultry, menacing, playful, possessive, electric / 日本語 約 65%。"
    },
    "bpm": "BPM 136, F# minor.",
    "main": "毒を塗った指先で誘う. Para para eurobeat x trance para para x yamikawaii hyper techno street dance, femme-fatale girls rap with a sultry sung hook. Mood: sultry, menacing, playful, possessive, electric.",
    "core": "Core sound: hard four-on-the-floor kick, heavy rolling sub, octave-jumping eurobeat bass, bright supersaw stabs, glossy trance pads, chain-rattle percussion, a sly minor-key synth riff answered by vocal chops.",
    "extra": "Samples: chain clinks, a stiletto-heel click, a lighter flick and a purring laugh before the drops. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; one breakdown around 1:08 pulls back to pads and voice before the hook returns; the first hook already hits the peak and the rest holds it.\n\nMix: focused stereo image, chest-heavy low end, smooth top end; upfront vocal. About 2:56, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: same peak, chant answers.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: sultry femme-fatale tone, purring and teasing, turning cold and possessive without warning.\nVerses are rhythmic rap with whispered asides; the chorus is a sung para para hook, never belted.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 65%, natural English 35%; several tracks fully in English; the rest mostly in Japanese with katakana loanwords and short English ad-libs like hey or woah.",
    "theme": "Theme: a woman in red lipstick runs the dance floor like a casino table, offering every admirer a game she has already rigged to win.\nScenes: cigarette smoke curling from her fingertips, a roulette wheel of kisses, a chain clinking on her bag, a crystal chandelier swaying, smudged black mascara, stiletto heels on concrete.\nEmotion: amused and in control, enjoying how they lose their footing; never letting anyone see her truly want something.\nChorus: a seductive dare to follow her into a dangerous game where reason is left at the door.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, rock band arrangement, acoustic ballad, overtuned robotic vocal, long fade-out."
  },
  {
    "id": 2,
    "name": "Dark Mirror",
    "src": {
      "at": "02 Dark Mirror / 14 曲 / 実測 136 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）73.5%・サブ（60Hz 未満）24.4%・2k-6kHz 8.0%・6kHz 以上 4.1%、ステレオ幅 0.207、H/P 比 3.48、オンセット 3.76/秒、長さ 1:47〜3:50。BPM は 96〜144（中央値 136）、キーは F minor 9・E major 2・C# minor 1 曲。終わり方はフェード 1 曲、他はぶつ切り。代表曲「月下チェーンハート」: 3:06 / 136 BPM / F minor、イントロ -28.1dB → 本体 -14.9dB、最大 -12.7dB（3:02）、2:06 に谷。メタデータ（歌詞）: 「鏡越しに隠す素顔」/ cute, unhinged, sly, jealous, secretly lonely / 日本語 約 85%。"
    },
    "bpm": "BPM 136, F minor.",
    "main": "鏡越しに隠す素顔. Yamikawaii gal para para x denpa hyper techno x masquerade street dance, sweet-threat girls rap with a giggling sung hook. Mood: cute, unhinged, sly, jealous, secretly lonely.",
    "core": "Core sound: punchy four-on-the-floor kick, thick sub, bouncy eurobeat octave bass, glassy music-box arps, candy-bright lead stabs, mirror-shimmer reverse pads, stuttered vocal chops in the gaps.",
    "extra": "Samples: a shattering mirror, a giggle reversed, a lollipop pop and a masquerade bell before each hook. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; one breakdown around 2:06 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, chest-heavy low end, smooth top end; upfront vocal. About 3:02, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: bubbly gal voice that giggles and whispers sweet threats, with a fragile crack underneath.\nVerses are fast playful rap; the chorus is a sung cute-dark hook with self-doubled whispers.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 85%, natural English 15%; mostly katakana slang; short English words like danger or step dropped into verses, and one track fully in English.",
    "theme": "Theme: a girl paints on a perfect pastel face in the mirror, while her reflection shows the poison she keeps behind it.\nScenes: cat-eye liner drawn in one stroke, a rusted pink piercing, heart-pattern tights with a run, a tear mole wet with fake tears, a lock-screen secret account, the mirror's cold glass.\nEmotion: playful two-facedness that slowly becomes unsettling; the mask and the face blur together.\nChorus: a teasing invitation to fall for her without ever knowing which face is real.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, long fade-out."
  },
  {
    "id": 3,
    "name": "Forbidden Pixel",
    "src": {
      "at": "03 Forbidden Pixel / 14 曲 / 実測 136 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）65.0%・サブ（60Hz 未満）21.0%・2k-6kHz 8.8%・6kHz 以上 5.4%、ステレオ幅 0.256、H/P 比 3.27、オンセット 3.97/秒、長さ 2:06〜3:56。BPM は 96〜152（中央値 136）、キーは F minor 8・C# major 2・F# minor 1 曲。終わり方はフェード 1 曲、他はぶつ切り。代表曲「ギャルモード起動」: 2:06 / 136 BPM / C# major、イントロ -19.9dB → 本体 -15.8dB、最大 -13.2dB（2:00）、1:42 に谷。メタデータ（歌詞）: 「理性を外して踊る夜」/ hyped, feverish, bratty, dangerous, intoxicating / 日本語 約 85%。"
    },
    "bpm": "BPM 136, F minor.",
    "main": "理性を外して踊る夜. Gal-mode hyper techno x para para x yandere club EDM street dance, crowd-hyping girls rap with a feverish sung hook. Mood: hyped, feverish, bratty, dangerous, intoxicating.",
    "core": "Core sound: driving four-on-the-floor kick, punchy sub, glitchy 8-bit square arps, bright plucky leads, rising snare rolls, supersaw chords on the drops, retriggered vocal chops on every hook.",
    "extra": "Samples: arcade coin blips, a system reboot chime, crowd \"hey!\" calls and a tape-stop before the last chorus. Original, not copied.\n\nDrops: the groove is at full level from the first bar; one breakdown around 1:42 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: wide stereo image, punchy but lean low end, bright, airy top; upfront vocal. About 3:00, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: husky party-gal voice, hyping the crowd one moment and whispering unnerving sweet threats the next.\nVerses are tight rhythmic rap; the chorus is a sung shoutable hook, never screamed.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 85%, natural English 15%; one track fully in English; elsewhere English hooks like dive, alive, higher, quick, reboot slotted into the chorus.",
    "theme": "Theme: a gal flips her party switch, takes a taxi to the club with her friends, and refuses to come down until morning.\nScenes: freshly set bangs in a taxi window, nails flashing under a mirror ball, glasses clinking, a speaker cone shaking her ribs, sweaty hair at the nape, a group selfie pose.\nEmotion: pure release; worries are thrown away and the night only goes up.\nChorus: a call-and-response chant to keep the energy climbing with no limit and no stop.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, rock band arrangement, acoustic ballad, overtuned robotic vocal, long fade-out."
  },
  {
    "id": 4,
    "name": "Burning Nightfall",
    "src": {
      "at": "04 Burning Nightfall / 14 曲 / 実測 136 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）62.5%・サブ（60Hz 未満）15.8%・2k-6kHz 10.5%・6kHz 以上 5.5%、ステレオ幅 0.276、H/P 比 2.99、オンセット 3.85/秒、長さ 2:26〜4:48。BPM は 96〜162（中央値 136）、キーは F minor 4・E minor 2・F major 2 曲。終わり方はフェード 2 曲、他はぶつ切り。代表曲「紅蓮ロマンス中毒」: 3:26 / 136 BPM / E♭ minor、イントロ -25.6dB → 本体 -15.1dB、最大 -12.9dB（2:22）、谷なし。メタデータ（歌詞）: 「妖しい灯が招く宵の宴」/ sly, smoldering, nostalgic, defiant, festive / 日本語 約 85%。"
    },
    "bpm": "BPM 136, F minor.",
    "main": "妖しい灯が招く宵の宴. Wa-style festival hyper techno x para para x kitsune-night trance street dance, sly hostess girls rap with a chanted sung hook. Mood: sly, smoldering, nostalgic, defiant, festive.",
    "core": "Core sound: hard four-on-the-floor kick, warm heavy sub, shamisen-like plucked lead, taiko-style tom fills, bright trance supersaws, hand-clap chants, fox-fire shimmer pads, a pentatonic synth riff over a minor bassline.",
    "extra": "Samples: festival drums, wooden clappers, a temple bell, crowd chants and a crackling bonfire. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: wide stereo image, punchy but lean low end, bright, airy top; upfront vocal. About 3:00, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: husky, sly hostess voice that switches to a warm street chant and a bright determined shout.\nVerses are rhythmic rap; the chorus is a sung festival hook with self-stacked chant answers.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 85%, natural English 15%; mostly Japanese with katakana loanwords; one anthem fully in English, and short English shouts like hey or one more.",
    "theme": "Theme: a fox-spirit hostess throws a night banquet, enchants every guest, and disappears with their hearts before dawn.\nScenes: flickering fox fire, warped colored lights, a black-lacquer lipstick, a lighter flame held to jealous stares, pin heels on a lantern-lit floor, a guest's name forgotten by morning.\nEmotion: mischievous and dangerous, enjoying the trick; heaven and hell feel the same at her party.\nChorus: a beckoning chant to come get fooled and keep dancing until they fall for her.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, rock band arrangement, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 5,
    "name": "Sugar Adrenaline",
    "src": {
      "at": "05 Sugar Adrenaline / 13 曲 / 実測 136 BPM / F minor",
      "note": "13 曲の中央値: 低域（250Hz 未満）68.7%・サブ（60Hz 未満）17.2%・2k-6kHz 8.7%・6kHz 以上 4.7%、ステレオ幅 0.225、H/P 比 3.01、オンセット 3.94/秒、長さ 2:22〜4:24。BPM は 103〜152（中央値 136）、キーは F minor 7・F# minor 2・A♭ minor 1 曲。終わり方はフェード 1 曲、他はぶつ切り。代表曲「堕ちてあげる」: 3:22 / 136 BPM / F minor、イントロ -28.8dB → 本体 -15.3dB、最大 -12.6dB（3:10）、1:24 に谷。メタデータ（歌詞）: 「甘さより速さで飛ばす」/ hyper, bratty, feral, glitchy, defiant / 日本語 約 70%。"
    },
    "bpm": "BPM 136, F minor.",
    "main": "甘さより速さで飛ばす. Hyperpop x glitchcore hyper techno x bratty para para street dance, high-energy girls rap with a feral sung hook. Mood: hyper, bratty, feral, glitchy, defiant.",
    "core": "Core sound: slamming four-on-the-floor kick, distorted sub, bitcrushed lead stabs, glitch stutters, pitched-up vocal chops, rapid snare rolls, bright compressed synth layers with sudden drops.",
    "extra": "Samples: a soda-can crack, a heart-rate monitor beep, glitch stutters and a bratty laugh before the drops. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; one breakdown around 1:24 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, solid low end, smooth top end; upfront vocal. About 3:07, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: bratty, high-energy gal voice, sweet on top with a feral, growling edge when she pushes.\nVerses are fast rap; the chorus is a sung punchy hook, never screamed.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 70%, natural English 30%; two tracks fully in English; the rest use katakana slang with short English punches like kick it or hey.",
    "theme": "Theme: a party girl refuses to crash when the bar lights dim; she just keeps accelerating, dragging everyone higher with her.\nScenes: cat-eye liner cutting through strobes, platform shoes on a sticky floor, a side ponytail, a dropped map pin before she vanishes, a VIP line she walks past, a bass road under her feet.\nEmotion: invincible and reckless; speed is the only feeling she trusts tonight.\nChorus: a rapid-fire English hook about a sweet high that bites and keeps speeding up instead of crashing.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, rock band arrangement, acoustic ballad, slow tempo, long fade-out."
  },
  {
    "id": 6,
    "name": "Venus & Ashes",
    "src": {
      "at": "06 Venus & Ashes / 14 曲 / 実測 140 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）70.5%・サブ（60Hz 未満）20.8%・2k-6kHz 8.5%・6kHz 以上 5.1%、ステレオ幅 0.233、H/P 比 3.67、オンセット 3.81/秒、長さ 2:29〜3:33。BPM は 89〜172（中央値 140）、キーは F minor 6・F# minor 3・B♭ minor 2 曲。終わり方はフェード 2 曲、他はぶつ切り。代表曲「紅蓮ロマンス中毒」: 3:17 / 136 BPM / F minor、イントロ -24.6dB → 本体 -14.9dB、最大 -12.1dB（3:08）、谷なし。メタデータ（歌詞）: 「灰の中から笑って咲く」/ smoky, commanding, needy, wild, liberated / 日本語 約 75%。"
    },
    "bpm": "BPM 140, F minor.",
    "main": "灰の中から笑って咲く. Diva hyper techno x para para x crimson trance street dance, commanding girls rap with a bright running sung hook. Mood: smoky, commanding, needy, wild, liberated.",
    "core": "Core sound: hard four-on-the-floor kick, thick rolling sub, octave eurobeat bass, blazing supersaw chords, airy diva pads, crisp claps, a rising minor arpeggio that bursts open on every chorus.",
    "extra": "Samples: a struck match, embers crackling, a high-heel stomp and a crowd roar under the final chorus. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: focused stereo image, solid low end, bright, airy top; upfront vocal. About 2:55, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: smoky, commanding diva voice that melts into needy whispers and bursts into a bright running shout.\nVerses are confident rap; the chorus is a sung anthem hook, never screamed.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 75%, natural English 25%; a few tracks fully in English; elsewhere short English ad-libs and occasional English hook words inside the main-language chorus.",
    "theme": "Theme: a goddess-like seductress hosts one night of sweet traps and leaves before sunrise, never giving her name.\nScenes: perfume that tests people, a low whisper at the ear, slightly smeared mascara, a passcode murmured like a spell, a cashmere-soft voice, sunrise she turns into her ally.\nEmotion: languid and powerful, savoring control; love and poison are left undecided on purpose.\nChorus: a hypnotic invitation to a dangerous game where reason is left behind and no one is allowed to go home.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, rock band arrangement, acoustic ballad, overtuned robotic vocal."
  },
  {
    "id": 7,
    "name": "Shadow Addiction",
    "src": {
      "at": "07 Shadow Addiction / 14 曲 / 実測 121 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）75.0%・サブ（60Hz 未満）22.1%・2k-6kHz 7.1%・6kHz 以上 4.9%、ステレオ幅 0.229、H/P 比 3.65、オンセット 4.13/秒、長さ 1:30〜3:29。BPM は 103〜152（中央値 121）、キーは F minor 6・F major 3・C# major 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Half in “I Love You”／英語まじりの I Love You」: 2:17 / 129 BPM / F minor、イントロ -15.4dB → 本体 -15.6dB、最大 -14.2dB（0:06）、0:52 に谷。メタデータ（歌詞）: 「影ごと抱きしめる夜」/ obsessive, feverish, wistful, reckless, quietly lonely / 日本語 約 45%。"
    },
    "bpm": "BPM 121, F minor.",
    "main": "影ごと抱きしめる夜. Dark club pop x obsessive future bass x half-time street dance, cute-unhinged girls rap with a breathless sung hook. Mood: obsessive, feverish, wistful, reckless, quietly lonely.",
    "core": "Core sound: tight punchy kick, heavy deep sub, dark detuned future-bass chords, whispery vocal chops, ticking hi-hats, cold bell arps, a sidechained pad that breathes under every line.",
    "extra": "Samples: an unanswered phone tone, a door chain sliding, breathy whispers and a heartbeat thump before the drops. Original, not copied.\n\nDrops: the groove is at full level from the first bar; one breakdown around 0:52 pulls back to pads and voice before the hook returns; the first hook already hits the peak and the rest holds it.\n\nMix: focused stereo image, chest-heavy low end, smooth top end; upfront vocal. About 2:46, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: same peak, chant answers.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: cute but unhinged voice that whispers sweetly, then snaps into possessive threats and breathless club shouts.\nVerses switch between English and Japanese rap; the chorus is a sung hook with doubled whispers.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 55%, Japanese 45%; full English verses in some songs, English hook words and short phrases mixed into Japanese choruses.",
    "theme": "Theme: a girl who has decided her partner belongs to her alone quietly rewrites his whole world, erasing old contacts and plans until only her face is left.\nScenes: a lock-screen passcode she memorized, a deleted sticker, a call she refuses to hang up, a scarlet nail tapping the glass, a countdown on her fingers.\nEmotion: starts sweet and playful, tightens into a smiling menace; love and threat become the same breath.\nChorus: chant a short hook about not letting him escape, looping like a spiral, ending on a giggle.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 8,
    "name": "Sunburn Starfall",
    "src": {
      "at": "08 Sunburn Starfall / 14 曲 / 実測 115 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）69.5%・サブ（60Hz 未満）18.1%・2k-6kHz 7.8%・6kHz 以上 5.5%、ステレオ幅 0.261、H/P 比 3.54、オンセット 4.50/秒、長さ 1:32〜3:39。BPM は 108〜162（中央値 115）、キーは F minor 6・A♭ minor 1・A♭ major 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Go Home Lonely／ひとりで帰りたくない」: 2:31 / 118 BPM / E minor、イントロ -15.7dB → 本体 -15.0dB、最大 -13.4dB（2:22）、谷なし。メタデータ（歌詞）: 「雨上がりに焦げる胸」/ sunny, flirtatious, breezy, dangerous, slightly bittersweet / 日本語 約 35%。"
    },
    "bpm": "BPM 115, F minor.",
    "main": "雨上がりに焦げる胸. Summer city-pop house x bilingual dance pop x breezy street dance, playful girls rap with a sunny sung hook. Mood: sunny, flirtatious, breezy, dangerous, slightly bittersweet.",
    "core": "Core sound: bouncy house kick, warm round sub, funky slap-style synth bass, glossy electric-piano chords, plucky guitar-like synth, bright shaker grooves, a sparkling lead that rises at every chorus.",
    "extra": "Samples: rain on asphalt, a car door shutting, sea breeze, a phone face-down buzz and a laugh between lines. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: wide stereo image, solid low end, bright, airy top; upfront vocal. About 2:38, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: bright, playful voice teasing in two languages, with a smoky edge on darker lines.\nVerses are light rhythmic rap and spoken lines; the chorus is a sung breezy hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 65%, Japanese 35%; mostly English verses and choruses with short spoken-style lines and quoted phrases switching in mid-sentence.",
    "theme": "Theme: two young people caught in a summer downpour turn a ruined afternoon into the start of something, laughing at their own clumsiness.\nScenes: a soaked white shirt, a bent plastic umbrella, a fogged café window with a doodled heart, a cheap paper cup, a crowded train car with warm hands.\nEmotion: giddy and tender; the gloom outside makes the small warmth between them feel huge.\nChorus: a sweeping English line comparing the person to clear weather breaking through, with one squeezing-chest phrase in the other language.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring, long fade-out."
  },
  {
    "id": 9,
    "name": "Sweetest Doom",
    "src": {
      "at": "09 Sweetest Doom / 14 曲 / 実測 123 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）69.1%・サブ（60Hz 未満）17.4%・2k-6kHz 8.4%・6kHz 以上 4.5%、ステレオ幅 0.234、H/P 比 3.31、オンセット 4.26/秒、長さ 2:20〜3:48。BPM は 96〜172（中央値 123）、キーは F minor 6・F# minor 2・E♭ major 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Sweetest Doom／甘い破滅」: 3:48 / 123 BPM / F minor、イントロ -23.1dB → 本体 -14.8dB、最大 -13.0dB（3:36）、0:48 に谷。メタデータ（歌詞）: 「綺麗に壊れていく恋」/ dark-cute, toxic, sultry, nostalgic, defiant / 日本語 約 55%。"
    },
    "bpm": "BPM 123, F minor.",
    "main": "綺麗に壊れていく恋. Dark-cute synth pop x toxic future bass x nostalgic street dance, venomous-sweet girls rap with a whisper-to-scream sung hook. Mood: dark-cute, toxic, sultry, nostalgic, defiant.",
    "core": "Core sound: punchy kick, deep sub, dark glossy synth chords, sugary bell arps over a minor bassline, distorted bass swells, reverse cymbals, a retro synth lead that cracks into distortion at the peaks.",
    "extra": "Samples: a music-box wind-up, glass cracking, a highway whoosh and a sleepy yawn before the hook. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; one breakdown around 0:48 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, solid low end, smooth top end; upfront vocal. About 2:55, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: husky, sleep-deprived voice, sweet on the surface and venomous underneath, from whisper to a cracking shout.\nVerses are rhythmic rap; the chorus is a sung hook, never growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 55%, natural English 45%; English tag words and short phrases slipped into Japanese lines, plus a few fully English songs.",
    "theme": "Theme: a woman sitting on her bedroom floor drafts a message she will never send, knowing the love is poison and wanting to sink into it anyway.\nScenes: smudged eyeliner in a mirror, a cigarette she swore off, heels kicked into a corner, an ashtray piled high, a thumb hovering over the send key.\nEmotion: numb, self-mocking, then dangerously tender; she treats her own ruin like a dress she likes wearing.\nChorus: a seductive line asking to be broken beautifully, with an English phrase naming the sweet destruction.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 10,
    "name": "Paper & Midnight",
    "src": {
      "at": "10 Paper & Midnight / 14 曲 / 実測 115 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）68.0%・サブ（60Hz 未満）15.6%・2k-6kHz 9.2%・6kHz 以上 5.5%、ステレオ幅 0.262、H/P 比 3.43、オンセット 4.24/秒、長さ 2:04〜3:26。BPM は 103〜162（中央値 115）、キーは F minor 6・C# major 1・A minor 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Kono Mama de Itai」: 2:29 / 112 BPM / F minor、イントロ -15.8dB → 本体 -15.1dB、最大 -12.6dB（1:48）、1:14 に谷。メタデータ（歌詞）: 「折り目のついた夜の記憶」/ nostalgic, restless, hopeful, tender, slightly reckless / 日本語 約 25%。"
    },
    "bpm": "BPM 115, F minor.",
    "main": "折り目のついた夜の記憶. Nostalgic indie dance pop x lo-fi house x bilingual street dance, conversational girls rap with a tender sung hook. Mood: nostalgic, restless, hopeful, tender, slightly reckless.",
    "core": "Core sound: soft punchy kick, warm sub, chorused clean-guitar-like synth, dusty electric-piano chords, tape-warm pads, light shaker and rimshot groove, a simple hooky lead that floats over the chorus.",
    "extra": "Samples: a Polaroid shutter, paper folding, breath on glass, a coffee cup set down and a train door chime. Original, not copied.\n\nDrops: the groove is at full level from the first bar; one breakdown around 1:14 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: wide stereo image, solid low end, bright, airy top; upfront vocal. About 2:41, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: soft, conversational indie-pop voice, like talking to an old friend, with a playful possessive alter ego.\nVerses are half-spoken rap; the chorus is a sung warm hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 75%, Japanese 25%; mostly English lyrics with Japanese and romanized Japanese phrases dropped into choruses and dialogue.",
    "theme": "Theme: years later, someone keeps finding traces of a first love in ordinary things and can neither throw them away nor stop smiling at them.\nScenes: instant photos from a car back seat, a coat still on the hook, a folded ticket stub, a skipped stone on a summer river, a birthday on the calendar.\nEmotion: wistful and gently aching, ending in a quiet wish that the other person is happy somewhere.\nChorus: an English line about keepsakes that refuse to fade, with one longing word in the other language.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring, long fade-out."
  },
  {
    "id": 11,
    "name": "Almost Infinite",
    "src": {
      "at": "11 Almost Infinite / 14 曲 / 実測 133 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）67.2%・サブ（60Hz 未満）17.2%・2k-6kHz 9.8%・6kHz 以上 5.4%、ステレオ幅 0.249、H/P 比 2.83、オンセット 4.38/秒、長さ 1:38〜3:41。BPM は 86〜162（中央値 133）、キーは F minor 8・F# minor 1・B minor 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Ruin Me Letter／壊してラブレター」: 3:41 / 129 BPM / F minor、イントロ -27.4dB → 本体 -17.6dB、最大 -14.3dB（3:34）、2:50 に谷。メタデータ（歌詞）: 「未完成のまま走り出す」/ youthful, hopeful, wistful, defiant, dizzy / 日本語 約 40%。"
    },
    "bpm": "BPM 133, F minor.",
    "main": "未完成のまま走り出す. Youthful anime-opening EDM x bilingual pop punk dance x street dance, earnest-to-bratty girls rap with a loud sung hook. Mood: youthful, hopeful, wistful, defiant, dizzy.",
    "core": "Core sound: driving kick, punchy sub, bright power-chord synths, fast arpeggiated leads, crash-heavy build-ups, hand-clap stomps, a rising chord progression that opens wide in the drops.",
    "extra": "Samples: a school chime, sneakers squeaking, a window rattling in the wind and a last-train announcement tone. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; one breakdown around 2:50 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, solid low end, bright, airy top; upfront vocal. About 2:44, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: earnest late-teen voice swinging from shy diary-like confession to bratty, loud self-assertion.\nVerses are rhythmic rap; the chorus is a sung shout-along hook, never screamed.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 60%, Japanese 40%; bilingual line switching inside choruses, with some fully English songs and English hype words in drops.",
    "theme": "Theme: a student pretending to study late at night keeps writing a crush's name in the margins, failing every attempt to forget.\nScenes: an open textbook, an untouched can of cold tea, an eraser worn down, a quiet window over a sleeping town, a notebook page full of one name.\nEmotion: shy, lonely, slightly self-deprecating; she accepts she will never graduate from this feeling.\nChorus: a classroom metaphor about learning the wrong lesson, half in English, half in the other language.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 12,
    "name": "Skyline Fireworks",
    "src": {
      "at": "12 Skyline Fireworks / 14 曲 / 実測 123 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）63.4%・サブ（60Hz 未満）15.0%・2k-6kHz 11.1%・6kHz 以上 5.1%、ステレオ幅 0.262、H/P 比 3.28、オンセット 3.81/秒、長さ 2:31〜3:26。BPM は 96〜152（中央値 123）、キーは F minor 8・E minor 1・E♭ minor 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「君だけバグってる」: 2:56 / 129 BPM / E minor、イントロ -19.4dB → 本体 -15.6dB、最大 -12.7dB（2:48）、谷なし。メタデータ（歌詞）: 「胸の雑音を打ち上げて」/ bubbly, warm, edgy, glitchy, self-assured / 日本語 約 50%。"
    },
    "bpm": "BPM 123, F minor.",
    "main": "胸の雑音を打ち上げて. City-girl club pop x glitch future bass x fireworks street dance, bright-to-thorny girls rap with a bubbly sung hook. Mood: bubbly, warm, edgy, glitchy, self-assured.",
    "core": "Core sound: punchy kick, round sub, sparkly future-bass chords, glitch stutters, bubbly pluck arps, a zebra-stripe rhythm of claps and rims, firework-burst risers before each chorus.",
    "extra": "Samples: fireworks bursting, a crosswalk signal beep, a camera shutter and a glitchy reset tone. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: wide stereo image, punchy but lean low end, bright, airy top; upfront vocal. About 2:49, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: bright city-girl voice, sugary and goofy in love lines, sharp, husky and thorny in darker ones.\nVerses are bouncy rap; the chorus is a sung bubbly hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 50%, natural English 50%; English choruses on the sweet tracks, English punch words like groove, vibes and dive inside Japanese club songs.",
    "theme": "Theme: she oversleeps, spills coffee on her favorite dress and races across the city, and one small message from her person turns every worry into joy.\nScenes: a coffee stain on a dress, a pedestrian crossing she dances across, stairs taken two at a time, a random sticker on her screen, a crowded street where her feet feel lighter.\nEmotion: flustered then elated; the anxiety pops into bright happiness.\nChorus: an English hook comparing nerves turning into bursts of color in the sky, with one sweet phrase in the other language.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring, long fade-out."
  },
  {
    "id": 13,
    "name": "Override Delete",
    "src": {
      "at": "13 Override Delete / 14 曲 / 実測 115 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）66.5%・サブ（60Hz 未満）18.2%・2k-6kHz 9.8%・6kHz 以上 5.9%、ステレオ幅 0.261、H/P 比 3.22、オンセット 4.35/秒、長さ 1:34〜3:20。BPM は 108〜162（中央値 115）、キーは F minor 9・B minor 1・E♭ major 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Heart Hits the Brakes／心の急ブレーキ」: 2:18 / 112 BPM / F minor、イントロ -16.4dB → 本体 -15.7dB、最大 -14.5dB（1:46）、谷なし。メタデータ（歌詞）: 「上書きして飛び出せ」/ rebellious, ambiguous, restless, playful, unfiltered / 日本語 約 55%。"
    },
    "bpm": "BPM 115, F minor.",
    "main": "上書きして飛び出せ. Rebellious girl-group dance pop x electro trap x highway street dance, attitude-heavy girls rap with a slogan sung hook. Mood: rebellious, ambiguous, restless, playful, unfiltered.",
    "core": "Core sound: hard punchy kick, distorted electro bass, gritty 808 slides, sirens and system-alert synths, snare-heavy marching claps, a chant-ready minor lead riff.",
    "extra": "Samples: an error beep, a delete-key click, tires screeching, crowd chants and a megaphone crackle. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: wide stereo image, solid low end, bright, airy top; upfront vocal. About 2:54, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female lead vocalist: bold girl-group lead full of attitude, trading lines with a cocky street-rap alter ego in her own voice.\nVerses are punchy rap; the chorus is a sung slogan hook with self-stacked chants.\nSame singer for every layer, harmony and ad-lib; no choir.",
    "ratio": "Lyrics: Japanese 55%, natural English 45%; English hype phrases and slogans dropped into Japanese verses, with several songs switching to English choruses.",
    "theme": "Theme: a cocky teenager spits at adults' rules and ready-made truths, insisting on choosing both heaven and hell for himself.\nScenes: a door pushed open into a jungle of knowledge, a word fired like a pistol, a pounding chest, a girl dancing free, a sneer thrown at authority.\nEmotion: arrogant and nihilistic on top, hungry for connection underneath.\nChorus: a confrontational rap hook challenging the listener who they think they are, repeated like a chant.",
    "avoid": "Avoid: choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 14,
    "name": "Second Chance Youth",
    "src": {
      "at": "14 Second Chance Youth / 14 曲 / 実測 112 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）64.1%・サブ（60Hz 未満）15.6%・2k-6kHz 9.2%・6kHz 以上 5.6%、ステレオ幅 0.277、H/P 比 3.41、オンセット 3.84/秒、長さ 2:04〜4:37。BPM は 96〜162（中央値 112）、キーは F minor 6・A♭ minor 2・F# minor 2 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Clumsy Hands, Quiet Magic／不器用な手と静かな魔法」: 4:20 / 112 BPM / A♭ minor、イントロ -16.7dB → 本体 -16.9dB、最大 -14.5dB（2:14）、2:08 に谷。メタデータ（歌詞）: 「遅れても今日から始める」/ wistful, scrappy, hopeful, restless, quietly defiant / 日本語 約 40%。"
    },
    "bpm": "BPM 112, F minor.",
    "main": "遅れても今日から始める. Nostalgic bilingual dance pop x sunrise house x scrappy street dance, young girls rap with a hopeful sung hook. Mood: wistful, scrappy, hopeful, restless, quietly defiant.",
    "core": "Core sound: warm punchy kick, soft sub, radio-warm electric-piano chords, plucky sunrise synth, crisp claps, light breakbeat fills, a slow-rising pad that brightens toward the final chorus.",
    "extra": "Samples: radio tuning static, a save-file chime, a bicycle bell and morning birds. Original, not copied.\n\nDrops: the groove is at full level from the first bar; one breakdown around 2:08 pulls back to pads and voice before the hook returns; the first hook already hits the peak and the rest holds it.\n\nMix: wide stereo image, punchy but lean low end, bright, airy top; upfront vocal. About 2:52, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: same peak, chant answers.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: young bilingual voice drifting between soft nostalgic murmurs and sudden bratty bursts, sometimes a sweet unhinged whisper.\nVerses are light rap; the chorus is a sung hopeful hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 60%, Japanese 40%; full English verses and choruses with short spoken asides and single hook lines switching into Japanese.",
    "theme": "Theme: someone keeps stumbling over traces of a past love while trying to clear out the room. Every object they mean to give away ends up back in their hands, and moving on happens one small relapse at a time.\nScenes: a coat that still hangs by the door, a shoebox of instant photos, a fogged car window with a traced name, a crumpled cinema stub, a friend's sofa after closing time\nEmotion: tender and aching, then slowly lighter; grief turns into a grateful kind of letting go.\nChorus: a simple English line about keeping one thing and finally putting the rest down.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring, long fade-out."
  },
  {
    "id": 15,
    "name": "Overflowing Static",
    "src": {
      "at": "15 Overflowing Static / 14 曲 / 実測 133 BPM / B minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）72.3%・サブ（60Hz 未満）20.1%・2k-6kHz 8.5%・6kHz 以上 4.9%、ステレオ幅 0.199、H/P 比 3.41、オンセット 4.03/秒、長さ 1:39〜3:23。BPM は 108〜152（中央値 133）、キーは B minor 3・F minor 3・E♭ major 2 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Never Leaving Where You Are／君のいる場所から離れない」: 2:14 / 129 BPM / B minor、イントロ -18.7dB → 本体 -17.8dB、最大 -13.4dB（1:36）、谷なし。メタデータ（歌詞）: 「混線した言葉で恋をする」/ bittersweet, flirty, feverish, rebellious, glitchy / 日本語 約 45%。"
    },
    "bpm": "BPM 133, B minor.",
    "main": "混線した言葉で恋をする. Code-switching glitch pop x static future bass x stomp street dance, flirty girls rap with a pleading sung hook. Mood: bittersweet, flirty, feverish, rebellious, glitchy.",
    "core": "Core sound: stomping kick, heavy sub, crackling static textures, glitch-cut vocal chops, bittersweet detuned chords, a looping pluck that overflows into a wall of synths on the drops.",
    "extra": "Samples: radio static, a looping voice memo, foot stomps, a candy wrapper and a broken-signal beep. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: narrow, centered stereo image, chest-heavy low end, smooth top end; upfront vocal. About 2:38, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: playful code-switching voice that teases in one breath and pleads in the next, darker when jealousy takes over.\nVerses are rhythmic rap; the chorus is a sung hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 55%, Japanese 45%; English and Japanese swap mid-line, with single words and short tags dropped into chorus phrases.",
    "theme": "Theme: two people who speak half in one language and half in another talk until morning, saying the real thing only in the language that feels safer. The confession keeps getting rewritten in a different script.\nScenes: a homework sheet left open, a phone screen lighting a pillow, a station gate closing between them, two umbrellas and one shared secret, a canned drink sweating on a desk\nEmotion: nervous sweetness that grows into honest longing; even the goodbye feels like a door left ajar.\nChorus: a mixed-language hook about saying goodnight but staying awake for each other.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 16,
    "name": "Crossing Threads",
    "src": {
      "at": "※16 Crossing Threads / 14 曲 / 実測 118 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）66.0%・サブ（60Hz 未満）22.2%・2k-6kHz 9.8%・6kHz 以上 5.5%、ステレオ幅 0.235、H/P 比 3.25、オンセット 4.45/秒、長さ 2:15〜3:59。BPM は 86〜172（中央値 118）、キーは F minor 7・E♭ major 2・E minor 2 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Still Drying, Still Trying／乾く途中のまま進もう」: 2:25 / 118 BPM / F minor、イントロ -17.7dB → 本体 -16.1dB、最大 -14.2dB（1:38）、0:48 に谷。メタデータ（歌詞）: 「言いかけて交差するふたり」/ hesitant, tender, intoxicating, possessive, fierce / 日本語 約 45%。"
    },
    "bpm": "BPM 118, F minor.",
    "main": "言いかけて交差するふたり. Bilingual romance dance pop x trance para para x yandere future bass street dance, shy-to-fierce girls rap with a sing-song hook. Mood: hesitant, tender, intoxicating, possessive, fierce.",
    "core": "Core sound: punchy kick, deep sub, crossing arpeggios panned left and right, soft trance pads, threadlike pluck melodies, sing-song vocal chops, a heart-pulse kick pattern under the bridge.",
    "extra": "Samples: a sewing-thread snap, a message send whoosh, a heartbeat, and a whispered giggle. Original, not copied.\n\nDrops: the groove is at full level from the first bar; one breakdown around 0:48 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, solid low end, bright, airy top; upfront vocal. About 2:50, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: airy, slightly shy bilingual voice hiding feelings in jokes, switching to a sing-song yandere tone that whispers threats sweetly.\nVerses are light rap; the chorus is a sung hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 55%, Japanese 45%; English verse lines with romanized phrases and short quoted lines from Japanese threaded through the chorus.",
    "theme": "Theme: two people on the same commuter line circle a confession they never finish. One starts typing and erases it; the other keeps reading between the lines and wants it said straight.\nScenes: a phone at three percent battery, a clear plastic umbrella in sudden rain, a vending machine glowing on an empty street, a ticket gate, a capsule-toy charm on a bag\nEmotion: nervous hope tangled with frustration; finally daring to ask for a clear answer.\nChorus: a bilingual hook asking if they are lost in the city lines or just afraid to try.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 17,
    "name": "Neon Paper Crane",
    "src": {
      "at": "※17 Neon Paper Crane / 14 曲 / 実測 123 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）68.8%・サブ（60Hz 未満）20.9%・2k-6kHz 8.1%・6kHz 以上 4.9%、ステレオ幅 0.230、H/P 比 3.58、オンセット 3.99/秒、長さ 2:19〜3:25。BPM は 103〜144（中央値 123）、キーは F minor 7・B♭ minor 2・F# minor 2 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「君だけバグってる」: 3:09 / 118 BPM / F minor、イントロ -20.2dB → 本体 -17.1dB、最大 -13.7dB（3:04）、0:20 に谷。メタデータ（歌詞）: 「折りたたんだ不安を飛ばす」/ fragile, warm, playful, lovesick, obsessive / 日本語 約 40%。"
    },
    "bpm": "BPM 123, F minor.",
    "main": "折りたたんだ不安を飛ばす. Fragile bilingual synth pop x hyper lift-off future bass x glitch street dance, teasing girls rap with a warm sung hook. Mood: fragile, warm, playful, lovesick, obsessive.",
    "core": "Core sound: punchy kick, soft deep sub, papery pluck arps, warm detuned chords, glitch blips, a lift-off riser before every drop, a bittersweet lead that folds into vocal chops.",
    "extra": "Samples: paper folding, wings fluttering, rain on a window, a train door and a glitchy text tone. Original, not copied.\n\nDrops: the groove is at full level from the first bar; one breakdown around 0:20 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, solid low end, smooth top end; upfront vocal. About 2:52, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: soft, slightly husky young voice teasing with romanized asides, smiling through nerves, switching to a glitchy yandere tone.\nVerses are light rap; the chorus is a sung warm hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 60%, Japanese 40%; English-led verses with romanized words and quoted short phrases in Japanese sprinkled into the chorus.",
    "theme": "Theme: two shy almost-lovers share the same ride home and pass small notes and teasing words instead of saying it. Little by little they turn fear into folded paper and send it off together.\nScenes: a cold can of tea on the last ride, burnt toast and a stained white shirt, a napkin with scribbled plans, a shared earbud, two names on a mailbox\nEmotion: giggly and fragile, growing into steady warmth; the quiet click of being chosen.\nChorus: a light bilingual hook about folding worries into paper birds and breathing again.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring, long fade-out."
  },
  {
    "id": 18,
    "name": "Into the Blue",
    "src": {
      "at": "18 Into the Blue / 14 曲 / 実測 112 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）63.9%・サブ（60Hz 未満）15.3%・2k-6kHz 8.8%・6kHz 以上 6.2%、ステレオ幅 0.245、H/P 比 3.27、オンセット 4.09/秒、長さ 2:24〜3:38。BPM は 99〜162（中央値 112）、キーは F minor 8・F# minor 2・A♭ major 1 曲。終わり方はフェード 2 曲、他はぶつ切り。代表曲「Game Over, Restart／ゲームオーバー・再スタート」: 2:40 / 112 BPM / F minor、イントロ -19.1dB → 本体 -16.1dB、最大 -13.9dB（1:52）、谷なし。メタデータ（歌詞）: 「青に飛び込んで謝りに行く」/ urgent, raw, smoky, euphoric, tender / 日本語 約 45%。"
    },
    "bpm": "BPM 112, F minor.",
    "main": "青に飛び込んで謝りに行く. Blue-night synth pop x euphoric house x night-runner street dance, raw breathy girls rap with an urgent sung hook. Mood: urgent, raw, smoky, euphoric, tender.",
    "core": "Core sound: tight kick, deep sub, cool blue synth pads, pulsing arpeggios, crisp hats, a soaring filtered lead that opens on every chorus, ocean-wide reverb tails.",
    "extra": "Samples: a crosswalk chime, waves crashing, a game-over blip and a running-footsteps loop. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: focused stereo image, punchy but lean low end, bright, airy top; upfront vocal. About 2:57, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: breathy young voice cracking with regret in verses, sultry and jaded after hours, shouting pure hype on the floor.\nVerses are rhythmic rap; the chorus is a sung urgent hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 55%, Japanese 45%; English-led choruses with short phrases from Japanese as answers and emotional tags.",
    "theme": "Theme: someone who kept hiding behind jokes finally runs across the city to apologize. He or she rehearses the words on an empty train and says them out loud at the corner where they used to meet.\nScenes: a shaking ticket in a wet hand, a corner sign they always met at, a crosswalk with raised hands, a subway with bad signal, a cold mug on a windowsill\nEmotion: shame and fear melt into clumsy honesty; the relief of finally saying it.\nChorus: a pleading English line asking to be heard across the skyline, answered by a short vow to stay.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring."
  },
  {
    "id": 19,
    "name": "Steel Pixel Heart",
    "src": {
      "at": "※19 Steel Pixel Heart / 14 曲 / 実測 112 BPM / F minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）64.1%・サブ（60Hz 未満）17.1%・2k-6kHz 10.4%・6kHz 以上 5.2%、ステレオ幅 0.237、H/P 比 3.48、オンセット 4.07/秒、長さ 2:07〜4:50。BPM は 108〜144（中央値 112）、キーは F minor 7・C# minor 2・A♭ major 1 曲。終わり方はフェード 0 曲、他はぶつ切り。代表曲「Pink Obsession Sync／塗りつぶすピンク」: 3:49 / 112 BPM / C# minor、イントロ -24.0dB → 本体 -16.9dB、最大 -15.4dB（2:30）、0:30 に谷。メタデータ（歌詞）: 「送れない下書きを抱えて」/ lonely, hesitant, sultry, sweetly menacing, resilient / 日本語 約 50%。"
    },
    "bpm": "BPM 112, F minor.",
    "main": "送れない下書きを抱えて. Lonely urban synth pop x steel-heel electro x city street dance, low tired girls rap with a doll-bright sung hook. Mood: lonely, hesitant, sultry, sweetly menacing, resilient.",
    "core": "Core sound: tight steel-hit kick, heavy sub, metallic percussion, cold pixel arps, chrome synth stabs, elevator-hum pads, a bright doll-like lead that cuts through on the chorus.",
    "extra": "Samples: elevator dings, a taxi meter tick, heel clicks on steel, a save-or-delete prompt tone. Original, not copied.\n\nDrops: the intro starts quiet and filtered, then the full groove slams in; one breakdown around 0:30 pulls back to pads and voice before the hook returns; the final chorus is the loudest moment.\n\nMix: focused stereo image, punchy but lean low end, bright, airy top; upfront vocal. About 2:40, hard cut.",
    "structure": "Structure:\nIntro: quiet filtered groove, one whispered line.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBreakdown: pads and voice only, half-time feel.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: low, tired urban voice talking to herself, slipping into a bright, possessive doll-like tone.\nVerses are half-spoken rap; the chorus is a sung hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 50%, natural English 50%; short English tech and feeling words woven into lines, plus fully English bilingual-romance tracks with romanized phrases.",
    "theme": "Theme: a woman who swore off someone keeps writing and never sending a long message to them. She edits it in elevators and taxis, saves it, and promises to say it face to face next time.\nScenes: a cigarette she said she quit, an elevator mirror, mascara smudges hidden with a smile, a pile of taxi receipts, a blinking cursor over a backspace key\nEmotion: restless and bruised, slowly finding the nerve to stop hiding; a quiet goodnight to the maybe.\nChorus: a breathy hook about a love letter stuck between save and delete.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, hardstyle kicks, dubstep wobble, rock band arrangement, orchestral cinematic scoring, acoustic ballad, long fade-out."
  },
  {
    "id": 20,
    "name": "Velfarre Memories",
    "src": {
      "at": "20 Velfarre Memories / 14 曲 / 実測 121 BPM / E minor",
      "note": "14 曲の中央値: 低域（250Hz 未満）73.0%・サブ（60Hz 未満）24.3%・2k-6kHz 7.3%・6kHz 以上 3.0%、ステレオ幅 0.174、H/P 比 3.53、オンセット 4.44/秒、長さ 1:21〜2:48。BPM は 99〜162（中央値 121）、キーは E minor 3・C major 2・A♭ major 1 曲。終わり方はフェード 1 曲、他はぶつ切り。代表曲「羽根扇の午前零時 - Midnight Feather Fan」: 2:05 / 129 BPM / E minor、イントロ -20.3dB → 本体 -15.6dB、最大 -12.2dB（1:24）、谷なし。メタデータ（歌詞）: 「踊り場の記憶を更新する」/ glamorous, triumphant, nostalgic, self-assured, luminous / 日本語 約 45%。"
    },
    "bpm": "BPM 121, E minor.",
    "main": "踊り場の記憶を更新する. Early-2000s Tokyo disco house x para para eurobeat x glamorous street dance, elegant half-spoken girls rap with a triumphant sung hook. Mood: glamorous, triumphant, nostalgic, self-assured, luminous.",
    "core": "Core sound: four-on-the-floor disco kick, heavy sub, octave eurobeat bass, string-like disco stabs, mirror-ball shimmer, feather-fan whooshes, a bright brass-like synth hook.",
    "extra": "Samples: a mirror ball spinning, champagne fizz, feather-fan whooshes, a locker key and a taxi door. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: narrow, centered stereo image, chest-heavy low end, dark, rolled-off top; upfront vocal. About 2:06, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: confident grown woman, cool and elegant, half-speaking vows over the beat with a quiet smile.\nVerses are half-spoken rap; the chorus is a sung triumphant hook.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: English 55%, Japanese 45%; some tracks run fully in English with one line in Japanese per hook; others flip that, with short English calls and shouted cues.",
    "theme": "Theme: a grown woman returns to the disco floor of her youth and meets the younger self she left there. Instead of mourning the past, she dances it into an updated version of who she is now.\nScenes: a faded entry stamp on the wrist, an old poster in the stairwell, a coat-check ticket folded in a glove, a feather fan opening like fire, a rope line swinging by the VIP stairs\nEmotion: warm nostalgia that sharpens into pride; no regret, only renewal.\nChorus: a soaring English hook about rising weightless under the spinning mirror light.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, hardstyle kicks, rock band arrangement, acoustic ballad, overtuned robotic vocal."
  },
  {
    "id": 21,
    "name": "きっと、またね",
    "src": {
      "at": "*-きっと、またね / 28 曲 / 実測 123 BPM / F minor",
      "note": "28 曲の中央値: 低域（250Hz 未満）66.0%・サブ（60Hz 未満）14.9%・2k-6kHz 6.2%・6kHz 以上 2.6%、ステレオ幅 0.281、H/P 比 2.44、オンセット 4.21/秒、長さ 1:25〜3:27。BPM は 96〜172（中央値 123）、キーは F minor 8・G minor 5・C minor 4 曲。終わり方はフェード 1 曲、他はぶつ切り。代表曲「夜更けのパレット」: 2:44 / 123 BPM / G minor、イントロ -17.5dB → 本体 -15.9dB、最大 -13.8dB（2:38）、谷なし。メタデータ（歌詞）: 「改札で飲みこんだ一言」/ wistful, tender, hesitant, quietly hopeful / 日本語 約 80%。"
    },
    "bpm": "BPM 123, F minor.",
    "main": "改札で飲みこんだ一言. Sophisticated dark urban J-pop with jazz-influenced harmony x soft trap anthem x anime opening, melodic girls rap over a restrained street dance groove. Mood: wistful, tender, hesitant, quietly hopeful.",
    "core": "Core sound: tight drum-machine kick, 808 and sustained sub bass, warm Rhodes chords with jazz extensions, cold filter-sweep synth, soft snare, minimal shimmer on top, 90s R&B swing in the hats, cinematic night atmosphere.",
    "extra": "Samples: ticket-gate beeps, a passing train hum, a single phone vibration and soft breaths between lines. Original, not copied.\n\nDrops: the groove is at full level from the first bar; no breakdown dip; the energy stays level between hooks; the final chorus is the loudest moment.\n\nMix: wide stereo image, punchy but lean low end, dark, rolled-off top; upfront vocal. About 2:37, hard cut.",
    "structure": "Structure:\nIntro: beat in from bar one, hook motif on the lead.\nVerse 1: rhythmic rap over kick and sub.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung title hook, full drop.\nVerse 2: same pattern, more drive.\nBridge: three short lines, groove stays on.\nBuild-up: snare rise, one beat of silence.\nFinal chorus: loudest, extra layer.\nOutro: title phrase once, hard cut.",
    "vocal": "ONE Japanese female vocalist only: smoky, husky alto with a worn texture, mature and intimate, subtle rasp.\nLow-register verses are melodic rap and spoken word; the chorus is controlled and catchy but restrained, never cute or youthful.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    "ratio": "Lyrics: Japanese 80%, natural English 20%; single English words and short phrases tucked at line ends, plus a short English tag line in the chorus.",
    "theme": "Theme: two friends part at a station gate, both pretending it is just a casual see-you-later. She waves until the back of his coat disappears and only then admits what she never said.\nScenes: a bench seat still warm from him, a folded train ticket in her pocket, the gate chime, a vending-machine can going cold in her hand, her blurred face in the station-building glass.\nEmotion: brave smile on the surface, an ache that keeps replaying; by the end a calm, small acceptance.\nChorus: a soft promise of meeting again that is really a goodbye, sung lightly so it does not break.",
    "avoid": "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, cute youthful vocals, idol pop sheen, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, long fade-out."
  }
];

// 21 アルバムの歌詞から起こした追加テーマ（各アルバム 2 件）
const THEMES = [
  "Theme: a sweet-faced girlfriend locks her lover inside her love, tracking every glance and tightening her hold the moment he looks away.\nScenes: a heart-shaped padlock, a key thrown into the dark, fingernails tracing his message history, a hallway echoing with heels, a deleted photo torn with one finger, a black lace umbrella.\nEmotion: adoring and frightening at once; tenderness curdles into control, and she smiles while doing it.\nChorus: a cute but chilling demand that he look only at her, sung like a lullaby with teeth.",
  "Theme: a crush hits her like a power surge; her body overloads, shorts out, and reboots every time he touches and pulls away.\nScenes: wired wide eyes, a cheap plastic cup, static on his tongue, a red warning light, a blown fuse box, a filtered thump in the dark.\nEmotion: thrilling and destructive, addicted to the jolt even as it fries her.\nChorus: a punchy English line about a heart that overloads, sparks out and reboots only to break again.",
  "Theme: a mass-produced-fashion gal treats her boyfriend's phone like her own diary, checking every like and every location.\nScenes: platform shoes clacking by the station meeting spot, a spare key in her bag, an ex's sticker photo she wants to destroy, a location map, a screenshot folder, cigarette smell on a coat.\nEmotion: giddy and obsessive, laughing at his attempts to escape; jealousy feels like proof of love to her.\nChorus: a bouncy lock-on chant that she will chase him across the spinning floor until he gives up.",
  "Theme: the bad-girl act starts to slip; behind the bravado she secretly hopes someone will see through it and save her.\nScenes: crocodile tears she calls acting, a hidden account where she tells the truth, makeup covering a bruise-like mark, a ring of keys she never uses, dawn light on smeared lipstick.\nEmotion: defiant and mocking on the outside, quietly pleading on the inside; one honest crack in the armor.\nChorus: a shout of her villain mode that wavers for one line into a small cry for help.",
  "Theme: she lures someone into a maze of her own making, where every exit he tries leads him deeper in.\nScenes: black lipstick, a tattoo-style choker, a door left half open, thorns hidden in chocolate, a shadow swaying against a wall, a mark pressed onto skin.\nEmotion: teasing and hypnotic, delighting in his hesitation; the danger is the whole appeal.\nChorus: a slow, seductive welcome into a maze that he will not want to leave.",
  "Theme: a lovesick girl counts the seconds of silence after every message and turns each delay into a reason to bind him closer.\nScenes: a phone screen glowing at night, a sticker reply arriving late, a call with an unknown sigh, a heart drawn over someone else's photo, a cage made of sweet words.\nEmotion: wild swings from bliss to panic; she calls her obsession love and believes it completely.\nChorus: a soft biting refrain that she will never let him go, half pleading and half threatening.",
  "Theme: a wanderer cuts through an old alley where the past and present overlap, and feels a presence walking beside him that should not be there.\nScenes: a fresh white shop curtain, a red paper umbrella in the rain, a stone stairway, a tiny roadside shrine, a faded shop sign with a crow on top, a cushion-paper sky.\nEmotion: hazy nostalgia for a time he never lived; quiet wonder rather than fear.\nChorus: a gentle line about a smile glimpsed through the mist, half memory and half daydream.",
  "Theme: a girl still in sweatpants at sunrise decides to turn her failures and small fears into fuel and step over her own starting line.\nScenes: a mirror with messy bangs, a crumpled notebook page with an old dream, a trash-can icon for her doubts, a pair of sneakers by the door, a staircase she walks like a runway.\nEmotion: shaky at first, then stubborn and funny, ending in loud self-belief.\nChorus: a fist-in-the-air vow that she will not stop until her spirits are all the way up.",
  "Theme: a girl's feelings glitch like broken software whenever her crush goes quiet, and she floods his feed to fix the error.\nScenes: bunny-ear hairpins, a peach cocktail in one hand, a beauty filter turned up too high, a stories viewer list checked all night, a frozen loading wheel, a forced save button.\nEmotion: hyper-cute surface with panic underneath; highs and lows that switch faster than the beat.\nChorus: a bouncy, buggy refrain that she cannot see anyone but him and will not stop tapping until he answers.",
  "Theme: hitting rock bottom after a long night, she wipes the fogged mirror and decides to climb back up louder than before.\nScenes: a hungover morning that still feels like night, a fogged mirror drawn on with one finger, scuffed lipstick, worn-down heels, a smudged message saying it is not over, a dark floor with only her feet lit.\nEmotion: bruised pride turning into a snarl; falling becomes the push to rise.\nChorus: a stomping declaration that she will drop and then come back higher, taking the doubters with her.",
  "Theme: a girl in a kimono-pattern choker blooms in the dark, offering a melting heart while warning what happens if he ever strays.\nScenes: an untied silk sash at night, a chipped stiletto, dull chipped nail polish, a fox-eyed wink, a single sticker reply that revives her, a screen she locks on his behalf.\nEmotion: fragile and clingy, flipping from pouty sweetness to quiet menace in one breath.\nChorus: a cute but dark plea to hold her tight and never let go, ending on a soft threat.",
  "Theme: after a night that burned everything down, two people run out into the morning wind hand in hand, leaving the ashes behind.\nScenes: city lights blinking out, a long road under a blue sky, breath running short, a map of the future sketched together, a flame that refuses to go out, sneakers hitting the pavement.\nEmotion: exhausted but exhilarated; the burn becomes energy, and nothing feels heavy anymore.\nChorus: a simple English call to keep running into the light together, hearts still burning.",
  "Theme: someone left a borrowed jacket and a half-finished goodbye; she pretends to have moved on while waiting for one small word in two languages that would undo everything.\nScenes: a jacket on a chair, a phone turned face down, a cold mug on the desk, a voice memo paused halfway, a ticket gate closing.\nEmotion: brave face outside, aching hope inside; a soft surrender at the end where she would forgive anything.\nChorus: mix a gentle English line with one tender word of the other language, promising to believe him if he just shows up.",
  "Theme: a woman sheds the week on an underground floor, kicking off her heels and refusing to leave until the sky turns pale.\nScenes: kicked-off heels, melted makeup, bass shaking the ribs, a stranger's high five, a blurry phone photo, the staircase up to the street.\nEmotion: reckless joy that burns off fear; exhaustion turns into laughter instead of regret.\nChorus: short shouted commands to jump again and turn the low end up, ending on a no-going-home declaration.",
  "Theme: at a party, a newcomer and a local flirt across a language gap, and the half-translated words become the real confession.\nScenes: a spilled drink, city skyline with no visible lights above, a shrug and a grin, two hands outside the station exit, a whispered phrase repeated twice.\nEmotion: curious, charmed, a little teased; certainty grows as each switched word lands.\nChorus: sing about falling in love in the space between two greetings, alternating English and the other language line by line.",
  "Theme: a woman knows the person beside her is trouble, a beautiful wreck in the making, and chooses the thrill anyway for one secret night.\nScenes: gunmetal lip gloss, a bathroom-stall mirror, cigarette haze in a dive bar, a key-scratched car door, black eyeliner smudged over a bruise.\nEmotion: thrilled and doomed at once; pleasure laced with the certainty it will end badly.\nChorus: a bold English hook about craving disaster, broken by a whispered warning in the other language.",
  "Theme: a doll-like girl trapped in the image of being cute and obedient cracks open on stage, smashing the role in a riot of sweetness and screams.\nScenes: a cracked porcelain smile, a teddy bear with one eye, puppet strings, a warped music box, wrapper scraps scattered on the floor.\nEmotion: eerie playfulness that builds into fury and finally a calm, unsettling freedom.\nChorus: chant about tearing off the good-girl collar, cute vocal chops colliding with a raw shout.",
  "Theme: after a stupid fight, someone rides a late bus across the city, rehearsing an apology and choosing the other person again.\nScenes: a night bus window streaked with rain, a vending-machine coffee too hot to hold, a sweater tied to a backpack, a hallway light left on, a quiet door.\nEmotion: anxious and stubborn at first, softening into a calm decision to come back.\nChorus: a steady English line about returning one stop at a time, warm and resolved rather than desperate.",
  "Theme: two roommates stuck in a dull routine dare each other to stop saying someday, pack the car and leave town on impulse.\nScenes: a cracked mug, rent due on the fridge, a crumpled road map, a half-packed bag by the door, a car trunk with everything they own.\nEmotion: nervous then exhilarated; fear turns into fuel for a jump.\nChorus: an upbeat call to mess up the plan, fold doubts and throw them away, ending on a liftoff image.",
  "Theme: on the last ride home, a couple pretends not to notice their stop approaching, wishing the journey would never end.\nScenes: a blue station sign sliding past, a map traced with a thumb, coffee spilled on a coat, a quiet two-person seat, a window fogged by breath.\nEmotion: hushed and sweet with a hidden fear of the morning taking it away.\nChorus: a simple plea to stay just like this, mixing English with a romanized phrase.",
  "Theme: an ex keeps resurfacing in a recommendation feed, and the algorithm seems to enjoy serving up the pain.\nScenes: short video clips of strangers, a username buried in a comment thread, airplane mode switched on, a hoodie left behind, a search bar with a typed name.\nEmotion: bitter humor over real heartbreak; wanting to block but always looking again.\nChorus: an English hook about a ghost looping in the feed that she cannot erase.",
  "Theme: two friends on a rooftop make half-finished plans for the future, scared of growing up and scared of staying the same.\nScenes: a photo booth flash, brand-new sneakers already scuffed, a rooftop ledge at dusk, a phone switched off, a still-developing photo in a pocket.\nEmotion: giddy recklessness under a thin layer of fear; deciding that being a little broken is fine.\nChorus: a running line about pinning their unfinished plans to the sky, ending with a promise to keep going together.",
  "Theme: a woman who plays it cool and thorny keeps hurting and testing her lover, while secretly wanting only an ordinary, steady love.\nScenes: a knocked-over can on the bed, a bitter name rolled on the tongue like a lozenge, a mirror where she acts tough, a block button she never presses, bare feet on a cold floor.\nEmotion: defiant and mocking, then cracking into honest vulnerability.\nChorus: demand to be chosen for real instead of half-heartedly, with a short English tag calling herself dangerous and broken.",
  "Theme: a jealous lover describes her own mind as crashing software whenever the other person smiles at someone else.\nScenes: a tagged photo zoomed in to the edge, an alarm set before dawn, a forced login screen, a status lamp that will not light, an overwritten save file.\nEmotion: frantic and comically extreme, a cute surface over real panic.\nChorus: rapid tech-error words stacked up, declaring the person is the only bug in her system.",
  "Theme: two people circle a confession through a whole night in the city, hiding behind jokes and sticker replies, until one demands straight words.\nScenes: a phone battery at three percent, a sudden rain under a clear umbrella, typing bubbles that appear and vanish, a vending machine glow on an empty street, a crowded transfer platform.\nEmotion: frustrated and tender; tired of guessing, ready to risk a plain answer.\nChorus: ask the other to say it clearly this time, mixing English pleading with a direct line in the other language.",
  "Theme: a group of girls rips up the magazine templates of who they should be and takes off, floating above every line drawn for them.\nScenes: a magazine rack by the register, a torn rule page, sneakers kicking away high heels, a wish hidden in a breast pocket, a mirror where she meets her own eyes.\nEmotion: buoyant, cheeky and self-loving; insecurity flips into a loud glow.\nChorus: a weightless, chant-like line about leaving gravity behind, with English slogans like take off and glow up.",
  "Theme: a late bloomer who wasted years hiding in the back row decides today is the restart. She stops waiting for a perfect version of herself and steps out shaking but laughing.\nScenes: a ceiling stared at before dawn, a bathroom mirror pep talk, an escalator taken two steps at a time, a crosswalk turning green, an open window with early light\nEmotion: from heavy self-doubt to breathless courage; fear stays, but it becomes fuel.\nChorus: a chant-like hook about pressing your own start and counting into the jump.",
  "Theme: a girl who looks sweet in class quietly loses her grip on a crush and starts guarding him like property. Her affection is cute on the surface and frightening underneath.\nScenes: a doodle on a school desk, a torn note pieced together on the floor, the third streetlight on his route home, red lipstick testing a surname, a dark club fading at close\nEmotion: giddy devotion curdling into possessive panic; she is smiling the whole time.\nChorus: whispered repetitions of love that turn into a soft promise she will never let go.",
  "Theme: a girl decides she is done behaving and storms the night on her own terms. Mockery and rules get stamped flat under her heels as she turns scars into rhythm.\nScenes: a cloudy mirror ball, a black hood pulled low, glittering nails in a dim room, a list of failures used as stepping stones, a floor shaking with bass\nEmotion: bottled anger flips into reckless joy; she feels most alive when she cannot stop.\nChorus: a punchy shout to crush the night underfoot and keep jumping higher.",
  "Theme: a seemingly cute girl wants someone so much it spills over, and her affection mutates into a toxic game. She dares him to wreck her, then threatens to wreck him first.\nScenes: a deleted sticker, a screenshot of an unsent message, a dim train window showing a stranger's face, a toppled drink can on the bed, a warped music box\nEmotion: aching want sliding into delicious danger; she laughs while falling apart.\nChorus: a sticky, chant-like hook about wanting someone until it overflows and breaks.",
  "Theme: a girl's love turns into full surveillance; she knows his passwords, his routes and every name in his phone. She calls it care and smiles while closing every exit.\nScenes: a hidden photo folder, a spare key glinting in a uniform pocket, a black lace parasol, a phone placed face-down on demand, a room filled with his belongings\nEmotion: sweet and calm on top, frantic underneath; adoration that slowly suffocates.\nChorus: a cooing, repetitive hook promising to break him gently so no one else can touch him.",
  "Theme: a woman refuses the labels people stick on her and decides her own happiness on the dance floor. Smudged eyeliner becomes war paint, not a sign she cried.\nScenes: mismatched sneakers, a cracked nail ignored, perfume mixed with sweat, a hand of cards shuffled in the palm, lights rising before the set\nEmotion: from muted frustration to fierce self-trust; she chooses herself out loud.\nChorus: a booming hook declaring she has decided and nothing will stop her move.",
  "Theme: someone stuck after a breakup keeps studying a lesson they cannot pass: forgetting. They pretend to work while filling every margin with one name.\nScenes: a desk lit by a single lamp, an untouched tea can, margins full of erased writing, a bus with dying headphones, an old sweater worn in summer\nEmotion: stubborn and lonely, with a faint smile at their own foolishness; acceptance arrives slowly.\nChorus: a soft line admitting they would rather fail the class than let the feeling go.",
  "Theme: a girl treats her crush like a system she has hacked; every like, tag and login is monitored. When he laughs with someone else her whole world crashes and reboots around him.\nScenes: a tagged photo zoomed in to the face, an alarm set before his first login, a heart-shaped earring, a fortune slip redrawn a hundred times, a platform corner at rush hour\nEmotion: hyper and sugary on the surface, panicked and controlling underneath.\nChorus: a glitchy chant about one person bugging her mind and refusing to let him log out.",
  "Theme: two people stuck in a smoky, no-promises affair keep meeting after hours and pretending it means nothing. They know it is poison and choose it anyway.\nScenes: an ashtray piling up, a muted television, sheets wrinkled like a fortune, heels fading down a stairwell, a plastic bag swinging at the door\nEmotion: jaded, sweet and bitter at once; elegant despair that refuses to leave.\nChorus: a hushed, sultry hook about being hooked on someone's night and not wanting rescue.",
  "Theme: a girl beats her own record on the dance floor, shrugging off worries one song at a time. Friends' laughter and a stubborn beat drag her past every limit.\nScenes: squeaking sneakers on the floor, a trash bin for small worries, a phone switched off in a pocket, a friend's grin across the room, sweat-soaked bangs at sunrise\nEmotion: from tired and tense to giddy and unstoppable; joy that carries into tomorrow.\nChorus: a call-and-response chant to keep going higher, one more song, one more jump.",
  "Theme: someone visiting the city falls for a person who keeps saying goodbye in half-learned words. The confession sits in their chest the whole time and never quite comes out.\nScenes: a worn backpack by a window seat, a denim jacket saving a seat, a vending machine light on a shy face, paper cups on a rooftop, wind at the station gate\nEmotion: shy hope, then the dull ache of words left unsaid; still wondering if it was real.\nChorus: a bilingual line asking whether it was love or just a passing phase.",
  "Theme: a doll-like girl decides the only safe love is total control, wiping every rival and old memory from his life. She overwrites his history and calls it protection.\nScenes: a folder of screenshots heavy with evidence, platform-soled shoes, a tracked secret account, a chain worn like jewelry, his part-time job's back door\nEmotion: bubbly devotion that turns cold and surgical; begging to be kept while holding the leash.\nChorus: a catchy chant about deleting everyone but him and saving only their world.",
  "Theme: she leaves an old flame's name behind on a late harbor-side ride and walks into the club alone. Each drop of the beat counts her fear down and turns it into tempo.\nScenes: a taxi cutting through harbor fog, a tollgate sign, a black silk jacket, a silver marker on a coatroom ticket, guardrails glowing in sea mist\nEmotion: cool determination with a thrill of freedom; nothing left to prove to anyone.\nChorus: a sleek English line about crossing the border of perfume and light without looking back.",
  "Theme: old friends close out the night together at dawn, folding up the fans and carrying the glow home. Nobody calls it goodbye; they plan the next gathering on the walk to the station.\nScenes: a locker number checked with a fingertip, heels carried in one hand, eyeliner streaks, a backyard light behind the club, a gull-wing sky over the quay\nEmotion: soft, tired and grateful; an ending that feels like a promise.\nChorus: a gentle anthem line about walking out slow but still burning, ready to meet again.",
  "Theme: alone in her room she types a long message to him, deletes it, and types it again, until she finally presses send with a shaking thumb.\nScenes: a draft folder full of half-sentences, a thumb hovering over the send key, a curtain gap with city light, an alarm set for no reason, a phone face-down on the pillow.\nEmotion: restless and self-mocking, then a held breath, then relief when a reply lights the screen.\nChorus: the one plain word she has been afraid to send, repeated as she gathers the nerve to let it go.",
  "Theme: a summer memory flashes back on an ordinary walk, and instead of sinking she runs out at first light to meet the person she still thinks of.\nScenes: melting ice cream on a hot afternoon, a school shirt flapping in the wind, two paper cups of hot coffee, an untied sneaker lace, a crosswalk signal turning green, the sky going pale over rooftops.\nEmotion: sweet nostalgia that tips into nervous excitement and a heartbeat that will not slow down.\nChorus: a countdown-like rush toward the other person, a short English hook about starting today together."
];

// 各曲の実測 BPM・キー（アルバムの行に無いもの）
const BPM_EXTRA = [
  "BPM 86, F minor.",
  "BPM 86, E minor.",
  "BPM 89, B♭ minor.",
  "BPM 96, B♭ minor.",
  "BPM 96, F minor.",
  "BPM 96, C# minor.",
  "BPM 96, G major.",
  "BPM 99, E minor.",
  "BPM 99, A minor.",
  "BPM 99, B minor.",
  "BPM 103, F# major.",
  "BPM 103, F minor.",
  "BPM 103, B minor.",
  "BPM 103, F major.",
  "BPM 103, A♭ minor.",
  "BPM 103, F# minor.",
  "BPM 103, E minor.",
  "BPM 103, A♭ major.",
  "BPM 103, B♭ minor.",
  "BPM 108, F major.",
  "BPM 108, G minor.",
  "BPM 108, C minor.",
  "BPM 108, F minor.",
  "BPM 108, E minor.",
  "BPM 108, A minor.",
  "BPM 108, E♭ major.",
  "BPM 108, F# minor.",
  "BPM 108, C# minor.",
  "BPM 112, C# major.",
  "BPM 112, E♭ major.",
  "BPM 112, E major.",
  "BPM 112, F major.",
  "BPM 112, A♭ minor.",
  "BPM 112, A♭ major.",
  "BPM 112, C minor.",
  "BPM 112, A minor.",
  "BPM 112, F# minor.",
  "BPM 112, E minor.",
  "BPM 112, G minor.",
  "BPM 112, B minor.",
  "BPM 112, C# minor.",
  "BPM 112, B♭ minor.",
  "BPM 118, C# minor.",
  "BPM 118, F# minor.",
  "BPM 118, E minor.",
  "BPM 118, C# major.",
  "BPM 118, E♭ major.",
  "BPM 118, E major.",
  "BPM 123, G minor.",
  "BPM 123, F# minor.",
  "BPM 123, C minor.",
  "BPM 123, F major.",
  "BPM 123, E major.",
  "BPM 123, E minor.",
  "BPM 123, B♭ minor.",
  "BPM 129, F# minor.",
  "BPM 129, F minor.",
  "BPM 129, E minor.",
  "BPM 129, B minor.",
  "BPM 129, F major.",
  "BPM 129, E♭ minor.",
  "BPM 129, G minor.",
  "BPM 129, E♭ major.",
  "BPM 129, C# minor.",
  "BPM 129, E major.",
  "BPM 129, D major.",
  "BPM 129, B♭ minor.",
  "BPM 136, F major.",
  "BPM 136, E major.",
  "BPM 136, B♭ minor.",
  "BPM 136, C# major.",
  "BPM 136, E minor.",
  "BPM 136, E♭ minor.",
  "BPM 136, A minor.",
  "BPM 136, A♭ major.",
  "BPM 136, C# minor.",
  "BPM 136, A♭ minor.",
  "BPM 136, A major.",
  "BPM 144, F minor.",
  "BPM 144, C# major.",
  "BPM 144, A minor.",
  "BPM 144, C minor.",
  "BPM 144, G minor.",
  "BPM 144, F# minor.",
  "BPM 144, E major.",
  "BPM 144, F major.",
  "BPM 144, A major.",
  "BPM 144, B♭ minor.",
  "BPM 144, E♭ minor.",
  "BPM 144, F# major.",
  "BPM 144, C major.",
  "BPM 144, D minor.",
  "BPM 144, D major.",
  "BPM 152 (76 half-time feel), F# minor.",
  "BPM 152 (76 half-time feel), C# major.",
  "BPM 152 (76 half-time feel), F minor.",
  "BPM 152 (76 half-time feel), E major.",
  "BPM 152 (76 half-time feel), A♭ minor.",
  "BPM 152 (76 half-time feel), A major.",
  "BPM 152 (76 half-time feel), D minor.",
  "BPM 152 (76 half-time feel), B♭ major.",
  "BPM 152 (76 half-time feel), B minor.",
  "BPM 152 (76 half-time feel), E♭ major.",
  "BPM 152 (76 half-time feel), G major.",
  "BPM 162 (81 half-time feel), C minor.",
  "BPM 162 (81 half-time feel), C major.",
  "BPM 162 (81 half-time feel), F# minor.",
  "BPM 162 (81 half-time feel), B♭ minor.",
  "BPM 162 (81 half-time feel), F minor.",
  "BPM 162 (81 half-time feel), E♭ minor.",
  "BPM 162 (81 half-time feel), G minor.",
  "BPM 162 (81 half-time feel), E♭ major.",
  "BPM 172 (86 half-time feel), C# major.",
  "BPM 172 (86 half-time feel), F minor."
];

const GENRE_SWAPS = [
  "footwork juke", "Baltimore club", "jersey club", "half-time phonk", "hyper techno",
  "breakbeat", "kawaii future bass", "denpa", "city pop", "full-on psytrance",
  "nightcore", "UK garage", "drum & bass", "makina", "turntablism",
  "para para eurobeat", "disco house", "glitchcore",
];

return {
  reference: REFERENCE,
  patterns: PATTERNS,
  bpmExtra: BPM_EXTRA,
  lyricsRatios: [],
  genreSwaps: GENRE_SWAPS,
  themes: THEMES,
  never: [],
  avoid: [...new Set(PATTERNS.map((p) => p.avoid))],
};
})();
