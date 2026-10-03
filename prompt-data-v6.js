// V6 のプロンプト候補データ（sample フォルダのトラパラ 8 曲を 1 曲 1 ベースで実測から完全模倣）。
// 元は club complex CODE「TRAPARA BEST CHAPTER #1」（mixed by DJ YOSHINORI）の Chapter 2〜9 の MP4。
// 各章は 1 曲で、冒頭と終わりは DJ ミックスで前後の曲とつながっているため、曲の特徴は字幕が出ている中心部分から取った。
// 解析: librosa（BPM・区間ごとのキー・帯域比・ステレオ幅・2 秒ごとの音量）、demucs htdemucs_6s（ステムごとの区間音量・
// キック / ベース / ハイハットの 1 小節 16 分割パターン・リードの音域と減衰）、Whisper（歌の言語と内容）、映像の字幕（曲名）。
// プロンプトは実測した事実をそのまま書く「トラックシート」構文:
// BPM 行 → Genre（共通の様式 ＋ 曲ごとの Style）→ Groove (measured) → Lead / Mix (measured) → Arrangement (8-bar blocks, measured) → 声 → 言語 → テーマ。
// 曲名・アーティスト名・映像の固有名詞は SUNO が弾くので出力に入れず、音源解析メモ（REFERENCE / src）にだけ残す。カバー曲を含むため旋律は必ずオリジナルにさせる。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
// Never use は V5 の指定をそのまま使う（app.js の resolveData が V5 から借りる。データファイル同士は読み込み順が決まらないので直接参照しない）。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

const REFERENCE = {
  name: "SOURCE work4/sample（Codetrapara - Chapter 2〜9）",
  at: "MP4 8 本 / 合計 約 16 分 / DJ ミックス（全曲 143.0〜143.1 BPM に揃えてつないである）",
  note: "映像は club complex CODE「TRAPARA BEST CHAPTER #1 mixed by DJ YOSHINORI」のトラパラ振付映像で、各章 1 曲（字幕で曲名を確認）。終盤は白黒の別映像になるが音声は同じ曲の続き〜次の曲へのつなぎ。全曲共通: 実測 BPM 143.0〜143.1、4/4、2 秒ごとの音量は -11〜-14dB でほぼ平ら（音量差ではなく、リードの出入り・ベース抜き・1〜2 秒の止めで盛り上げる）。キックは全曲で毎拍、ベースは裏拍系（8 分の裏 / 拍間の 16 分 2 つ / 16 分 3 つのローリング）。低域（250Hz 未満）は 60〜74% と重い。ピアノのステムはほぼ 0（Chapter 6 のメインドロップだけ和音あり）。Whisper の歌詞書き起こしは崩れが大きいので言語と雰囲気の目安にのみ使用。",
};

const FREE = "Write every line in your own fresh words.";

const PATTERNS = [
  {
    id: 1, name: "Ch2 Dark Gated Trance",
    src: { at: "Chapter 2 / 3:03 / 143.0 BPM / G# minor", note: "元曲: DJ YOSHINORI / MONSTER (PROJECT Y's SM mix)。帯域: サブ 27% / 低域 39% / 中域 18% / 高域 15%（8 曲で最もサブが重い）。ステレオ幅 0.35、H/P 比 4.2。ステム比: ドラム 55% / ベース 28% / ボーカル 9% / その他 6%。1 小節パターン: キック毎拍、ベースは 8 分の裏、ハイハットは 16 分を刻み続け、リードも 16 分でゲートされて途切れない。リードは F3〜G4、順次進行 72%、幅広（0.78）で滑らかなノコギリ系。ボーカルは E4 前後の女性域の声ネタ（Whisper で言葉にならない＝刻み・加工）。展開: 0:00-0:12 キックとベースのみ → 0:12 声ネタ入り → 0:54-1:10 キックが軽くなる（-15.6dB）→ 1:42 シンセが 2 秒止まる → 1:44-1:54 ベースが抜けてリードが最大 → 1:54 以降フル → 2:41 以降は次曲へのつなぎ（A minor）。" },
    bpm: "BPM 143, G# minor, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: dark minor-key trance with a relentless gated lead and chopped vocal-chant hooks, original melody. Mood: dark, relentless, hypnotic.",
    core: "Groove (measured): kick on every beat, bass on every off-beat 8th, closed hats in constant 16ths, the lead also gated in constant 16ths so the groove never pauses. Sound: the heaviest sub kick and a round offbeat sub bass.",
    extra: "Lead: a wide, smooth saw lead gated in 16ths in a narrow low range, stepwise motion, sustained supersaw pads underneath.\n\nVocal processing: high female-range chant fragments, filtered and chopped, repeated as hooks.\n\nMix (measured): sub 27%, low 39%, mids 18%, top 15%; moderate stereo width; loud and flat around -13 dB from start to end.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Intro, 1 block: kick and offbeat bass only.\n0:12 Vocal chops and the gated lead enter, 3 blocks.\n0:54 Lighter block: kick thinner, bass and chops stay.\n1:10 Full groove, 2.5 blocks.\n1:42 Stop: all synths cut for 2 seconds, kick keeps going.\n1:44 Lead climax without bass, 1 block.\n1:54 Full drop to the end, 3.5 blocks.\n2:41 DJ outro: kick and bass only.",
    vocal: "One high female-range voice used only as chopped, filtered chant fragments repeated as hooks, not full verses.\nNo duet, no choir.",
    ratio: "Lyrics: English chant words only, few and repeated.",
    theme: "Theme: a creature of the night slowly taking over the dance floor.\n" + FREE,
  },
  {
    id: 2, name: "Ch3 Sub-Heavy Hoover Trance",
    src: { at: "Chapter 3 / 2:23 / 143.1 BPM / A minor", note: "元曲: BALD BULL / MR VAIN。帯域: サブ 35% / 低域 39% / 中域 15% / 高域 12%（サブが極端に重い）。ステレオ幅 0.41、H/P 比 4.1。ステム比: ドラム 55% / ベース 29% / その他 9% / ボーカル 7%。1 小節パターン: キック毎拍＋直後に弱い 16 分、ハイハットはキック以外の 16 分 3 つ（裏で開く）、ベースは 8 分の裏。リードは平坦度 0.08・重心 3.5kHz と明るくざらついたフーバー寄りの持続音、幅広（0.77）。ボーカルは C4〜E5（中央 A4）の女性域の短いフレーズで、全体の 69% で鳴る。展開（冒頭 7 秒は前曲の尻尾）: 0:07-0:18 ドラムもベースも無いブレイク（-21dB、声と明るい音色）→ 0:18-0:31 ドラムだけ戻る（ベース無し）→ 0:31-1:00 フル → 1:00-1:18 ベース無しのブレイク（-20dB）→ 1:18-2:23 フル。キーは全区間 A minor で転調なし。" },
    bpm: "BPM 143, A minor, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: hands-up eurodance-trance with a bright hoover-like lead and a short female vocal hook, original melody. Mood: cocky, bright, pumping.",
    core: "Groove (measured): kick on every beat with a soft 16th right after each kick, bass on every off-beat 8th, hats on the three 16ths between kicks with an open hat on the off-beat. Sound: extremely sub-heavy kick and bass.",
    extra: "Lead: a bright, slightly noisy hoover-like supersaw, wide and sustained, with bright pads in the breakdowns.\n\nMix (measured): sub 35%, low 39%, mids 15%, top 12%; wide synths; loud and flat except the breakdowns at about -20 dB.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Breakdown intro, 1 block: vocal phrases and the bright lead, no drums, no bass.\n0:11 Drums enter without bass, 1 block.\n0:24 Full drop, 2 blocks: kick, offbeat bass, hoover lead, vocal hook.\n0:53 Breakdown, 1.5 blocks: bass out, light kick, lead and vocal.\n1:11 Full drop, 3 blocks.\n1:51 Drop continues to the end, 2 blocks, no change of key.",
    vocal: "One high female-range voice in short repeated phrases, bright and clear, present through most of the track.\nNo duet, no choir.",
    ratio: "Lyrics: English, short repeated phrases.",
    theme: "Theme: calling out a self-obsessed charmer who thinks everyone is in love with him.\n" + FREE,
  },
  {
    id: 3, name: "Ch4 Stomping Chant Stabs",
    src: { at: "Chapter 4 / 2:32 / 143.1 BPM / A minor", note: "元曲: KHUBILAI KHAN / MOSKAU (DIGIMIND MIX)。帯域: サブ 24% / 低域 56% / 中域 11% / 高域 9%（低域が最も厚い）。ステレオ幅 0.34、H/P 比 4.6。ステム比: ドラム 69% / ベース 24% / ボーカル 5% / その他 2%（シンセは少なくドラム主導）。1 小節パターン: キック毎拍＋16 分の追い打ち、ハイハットは裏の 16 分、ベースは 8 分の裏。リードは音の半分が 300ms 以内に減衰する短いスタブで、2 音のリフ、幅広（0.81）。0:40-0:53 はリードが消える。ボーカルは G#3〜C#5（中央 E4）の掛け声（Hey!）と語り。展開: 0:00-0:34 声なしのグルーヴとスタブ → 0:34-1:13 掛け声と語り → 1:13-1:16 声のピーク → 1:16-1:42 グルーヴ → 1:42 に 0.5 秒の止め（ベースとシンセが抜ける）→ 1:43-2:09 声なし → 2:09-2:23 声が戻る → 2:23 以降ベースが抜けて次曲へ（F major）。" },
    bpm: "BPM 143, A minor, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: stomping hands-up dance with short plucky stabs, shouted group chants and an Eastern European folk-dance flavor, original melody. Mood: rowdy, festive, stomping.",
    core: "Groove (measured): kick on every beat with a 16th pickup kick, bass on every off-beat 8th, hats on the off-beat 16ths. Sound: thick low-mid punch, the drums carry the track, very few synths.",
    extra: "Lead: short plucky stabs that decay fast, a two-note riff, wide; the stabs disappear while the chant is busiest.\n\nMix (measured): sub 24%, low 56%, mids 11%, top 9%; drums about 70% of the energy; very punchy, loud and flat around -12 dB.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Groove intro, 2.5 blocks: kick, offbeat bass and plucky stabs, no vocal.\n0:34 Chant section, 3 blocks: shouted chants and spoken lines, stabs drop out for one block.\n1:13 Chant peak, a few bars.\n1:16 Groove with stabs, 2 blocks.\n1:42 Stop: bass and stabs cut for one beat.\n1:43 Groove without vocal, 2 blocks.\n2:09 Chants return, 1 block.\n2:23 DJ outro: bass out, kick and chants only.",
    vocal: "Shouted one-word group chants on the beat and short spoken lines, energetic and loud.\nNo sung verses, no choir.",
    ratio: "Lyrics: shouted chant words and a few spoken English lines.",
    theme: "Theme: a grand old capital city celebrating all night with dancing, shouting and raised glasses.\n" + FREE,
  },
  {
    id: 4, name: "Ch5 Chant-Hook Eurodance",
    src: { at: "Chapter 5 / 1:08 / 143.1 BPM / B minor", note: "元曲: DJ SATOMI / DRAGOSTEA DIN TEI (EVERYBODY BANZAI MIX)。章が 1:08 と短い抜粋。帯域: サブ 14% / 低域 52% / 中域 26% / 高域 8%（中域が厚い）。ステレオ幅 0.17（8 曲で最も狭い、中央寄り）。ステム比: ドラム 48% / ベース 26% / ボーカル 23%（歌が主役）。1 小節パターン: キックは厳密に毎拍、ハイハットは裏で開く、ベースは拍の間に 16 分 2 つ（ギャロップ）。リードは狭く、0:13-0:27 は消え、0:27-0:40 のフックで最大。ボーカルは B3〜G#4（中央 F4）の明るい高めの声で、東欧語の繰り返しフック（Whisper はポルトガル語と誤判定）。展開: 0:00-0:04 声とドラムのみ（ベース無し）→ 0:04-0:31 ヴァース（リードなしの区間あり）→ 0:31-0:44 フック（リードが重なる）→ 0:44-1:08 ギター系の音色を足して声が続く。冒頭 0:00-0:40 は F# major と出るが前曲からのつなぎを含み、本体は B minor。" },
    bpm: "BPM 143, B minor, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: eurodance-trance driven by a repetitive Eastern European style chant hook, original melody. Mood: silly, catchy, sunny.",
    core: "Groove (measured): kick on every beat in strict four-on-the-floor, open hat on every off-beat, bass galloping in two 16ths between the kicks. Sound: punchy, mid-heavy eurodance drums.",
    extra: "Lead: a narrow, centered synth lead that doubles the chant hook only in the chorus; a guitar-like synth layer after the hook.\n\nMix (measured): sub 14%, low 52%, mids 26%, top 8%; vocal-forward, a quarter of the energy; narrow, almost mono; loud and flat around -12 dB.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Intro, a few bars: vocal and drums, no bass.\n0:04 Verse, 2 blocks: galloping bass, the lead stays out for the second block.\n0:31 Chant hook, 1 block: the lead doubles the chant.\n0:44 Post-hook, 2 blocks: a guitar-like synth layer, the vocal continues.\n1:08 Short DJ-mix cut ends.",
    vocal: "One bright, high voice singing a repetitive Eastern European style chant hook, vocal-forward from start to end.\nNo duet, no choir.",
    ratio: "Lyrics: an Eastern European language style chant, mostly playful repeated syllables.",
    theme: "Theme: a lighthearted summer crush, sung as a playful chant everyone can join.\n" + FREE,
  },
  {
    id: 5, name: "Ch6 Female Eurodance Piano Drop",
    src: { at: "Chapter 6 / 1:57 / 143.1 BPM / B minor", note: "元曲: CASCADA / BAD BOY (CLUB MIX)。帯域: サブ 17% / 低域 55% / 中域 21% / 高域 8%。ステレオ幅 0.21（狭い）。ステム比: ドラム 69% / ベース 15% / ボーカル 8% / その他 6% / ギター系 2%。1 小節パターン: キック毎拍＋16 分のゴースト、ハイハットは 16 分、ベースは裏の 16 分 2 つ。リードは狭く中域 85%。ピアノのステムがメインドロップ（0:48-1:35）だけ -51dB まで上がる＝ピアノの和音。ボーカルは B3〜G4（中央 E4）の英語の女性ボーカル（Whisper: I don't need you again / Bad boy!）。展開: 0:00-0:07 声と軽いドラム → 0:07-0:11 ドラムが抜けて声だけ → 0:11-0:27 ドラムが戻る（ベースは軽い）→ 0:27-0:48 ベース無しで盛り上げ → 0:48-1:35 メインドロップ（8 曲で最大の -10dB）→ 1:35 以降は声とリードが抜けて次曲へ（G minor）。" },
    bpm: "BPM 143, B minor, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: eurodance hands-up with a strong female pop vocal and piano chords in the main drop, original melody. Mood: sassy, confident, pumping.",
    core: "Groove (measured): kick on every beat with a 16th ghost, hats in 16ths, bass in two 16ths on each off-beat. Sound: tight club drums, light bass until the main drop.",
    extra: "Lead: a narrow, centered synth lead; piano chords only in the main drop; a light guitar-like layer.\n\nMix (measured): sub 17%, low 55%, mids 21%, top 8%; narrow stereo; the main drop is the loudest part at about -10 dB.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Intro: vocal with light drums.\n0:07 Drums drop out: vocal alone for 4 seconds.\n0:11 Drums back, bass light, 1 block.\n0:27 Build without bass: kick, lead and vocal, 1.5 blocks.\n0:48 Main drop, 3.5 blocks: full bass, piano chords, lead and a shouted vocal hook.\n1:35 DJ outro: kick and light bass, vocal and lead out.",
    vocal: "One female vocalist, English pop-dance vocal, clear and strong, with a short shouted hook in the main drop.\nNo duet, no choir.",
    ratio: "Lyrics: English only.",
    theme: "Theme: telling a heartbreaker she does not need him anymore and dancing it off.\n" + FREE,
  },
  {
    id: 6, name: "Ch7 Rolling Arp Trance",
    src: { at: "Chapter 7 / 1:30 / 143.0 BPM / F major", note: "元曲: DJ ENZO.CH / INDEPENDENCE (MIKE NERO MIX)。帯域: サブ 20% / 低域 51% / 中域 17% / 高域 12%。ステレオ幅 0.28、H/P 比 2.7。ステム比: ドラム 74%（8 曲で最大）/ ベース 13% / その他 12% / ボーカル 1%。1 小節パターン: キック毎拍、ベースは裏、リードは 16 分を刻み続けるアルペジオ（D#3〜E5、持続 0.69、幅 0.69）。ボーカルは英語の声ネタ 1 フレーズ（Whisper: I feel independent）だけで、ほぼインスト。展開: 0:00-0:04 キックのみ → 0:04-0:07 ベースとキックが抜けて声ネタ（-21dB）→ 0:07-1:01 メイン → 1:01 に 1.6 秒の止め（ベースが抜ける）→ 1:03-1:30 ファイナル（-11.8dB とわずかに大きい）。キーは前半 A minor / C major、1:00 以降 F major が明確。" },
    bpm: "BPM 143, F major, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: driving uplifting trance with a rolling 16th arpeggio and a one-line vocal sample, original melody. Mood: free, uplifting, driving.",
    core: "Groove (measured): kick on every beat, bass on every off-beat, busy 16th hats, the arpeggio rolling in constant 16ths. Sound: drums carry three quarters of the energy.",
    extra: "Lead: a wide trance arpeggio running in constant 16ths across two octaves, sustained and stepwise.\n\nMix (measured): sub 20%, low 51%, mids 17%, top 12%; wide synths; loud and flat, the final drop slightly louder at about -11 dB.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Kick only, a few bars.\n0:04 Break: kick and bass cut, the vocal sample alone for 3 seconds.\n0:07 Main, 4 blocks: kick, offbeat bass, rolling arpeggio.\n1:01 Stop: bass and kick cut for 1.6 seconds.\n1:03 Final drop, 2 blocks, slightly louder, the vocal sample repeated.",
    vocal: "Mostly instrumental: one short English spoken-sung sample phrase, repeated at the start and in the final drop.",
    ratio: "Lyrics: none except one short English sample phrase.",
    theme: "Theme: feeling free and standing on her own for the first time.\n" + FREE,
  },
  {
    id: 7, name: "Ch8 Bright Riff Instrumental",
    src: { at: "Chapter 8 / 1:47 / 143.0 BPM / F major", note: "元曲: ALPHAZONE / FLASHBACK (ORIGINAL CLUB MIX)。帯域: サブ 17% / 低域 54% / 中域 17% / 高域 12%（高域が 8 曲で最も明るい）。ステレオ幅 0.32、オンセット 7.8/秒（最も細かい）。ステム比: ドラム 70% / ベース 12% / その他 10% / ギター系 7%。1 小節パターン: キックは厳密に毎拍、ベースは裏の 16 分 2 つ、クラップは 2・4 拍に 16 分の追加。リードは D3〜G#3 の狭い音域を跳ねるアルペジオ（順次進行 48%）、持続 0.74、平坦度 0.065 の明るいバズ系で、ギターのような歪んだ層がある。ボーカルは 1:14-1:21 の声ネタだけのインスト。展開: 0:00-0:26 グルーヴ → 0:26 に 1.6 秒の止め（ベースが抜けてリフだけ）→ 0:28-1:15 メイン → 1:15-1:22 声ネタ → 1:22-1:47 リフが最も明るくなるクライマックス。キーは F major（終盤は次曲へのつなぎで A minor）。" },
    bpm: "BPM 143, F major, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: instrumental hard-edged trance with a bright buzzing riff, original melody. Mood: energetic, nostalgic, bright.",
    core: "Groove (measured): kick on every beat in strict four-on-the-floor, bass in two 16ths on each off-beat, claps on 2 and 4 with extra 16th claps. Sound: crisp, busy drums with the brightest top end.",
    extra: "Lead: a bright, buzzing riff that jumps around a narrow range in constant 16ths, doubled by a guitar-like distorted layer, wide.\n\nMix (measured): sub 17%, low 54%, mids 17%, top 12%; the brightest top of the set; loud and flat around -11 dB.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Groove, 2 blocks: kick, offbeat bass, the riff.\n0:26 Stop: bass cut for 1.6 seconds, the riff alone.\n0:28 Main, 3.5 blocks.\n1:15 Vocal shot section, half a block.\n1:22 Climax, 2 blocks: the riff at its brightest.",
    vocal: "Mostly instrumental: one short vocal shot around the climax only.",
    ratio: "Lyrics: none, instrumental with one vocal shot.",
    theme: "Theme: memories flashing back on the dance floor, one bright moment after another.\n" + FREE,
  },
  {
    id: 8, name: "Ch9 J-pop Rolling Bass Trance",
    src: { at: "Chapter 9 / 1:44 / 143.1 BPM / G# minor", note: "元曲: PROJECT Y's feat. 田中みゆき / LOVE & JOY (LOVE S mix)。帯域: サブ 23% / 低域 46% / 中域 21% / 高域 10%。ステレオ幅 0.45（8 曲で最も広い、その他ステムは 1.2）。ステム比: ドラム 68% / ボーカル 16% / ベース 10%。1 小節パターン: キックは厳密に毎拍、ハイハットは 16 分、ベースは拍の間を 16 分 3 つで転がすローリングベース。リードはまばら。ボーカルは D#4〜C5（中央 G#4）の日本語の女性ボーカル＋英語のフック（Whisper: Love and joy... / Zoom の連呼）。展開: 0:00-1:24 最初から歌とグルーヴ（後半に英語フックと連呼）→ 1:24-1:38 声とリードが抜けてベースも軽いインスト → 1:38 から無音へフェード（DJ ミックスの終わり）。キーは G# minor（中盤に A minor と出る区間あり）。" },
    bpm: "BPM 143, G# minor, 4/4, steady DJ-mix tempo.",
    main: "Genre: trapara, mid-2000s Japanese hands-up trance for para para dancing, a DJ-mix club cut. Style: J-pop trance with a bright Japanese female vocal over a rolling bass, original melody. Mood: bright, hopeful, sweet.",
    core: "Groove (measured): kick on every beat in strict four-on-the-floor, hats in 16ths, a rolling bass of three 16ths between the kicks. Sound: classic trance rolling bass under a vocal-led track.",
    extra: "Lead: sparse, very wide synth fills between the vocal lines, the widest stereo of the set.\n\nMix (measured): sub 23%, low 46%, mids 21%, top 10%; vocal-forward; very wide; loud and flat around -12 dB, then a fade to silence at the very end.",
    structure: "Arrangement (8-bar blocks, measured):\n0:00 Vocal from the first bar over the full groove, Japanese lines, 4.5 blocks.\n1:03 English hook line, a few bars.\n1:07 A repeated one-word chant alternating with short Japanese lines, 1.3 blocks.\n1:24 Instrumental block: vocal and lead out, bass lighter.\n1:38 Fade to silence, the end of the DJ mix.",
    vocal: "One female vocalist singing in Japanese, bright J-pop trance style, with a short English hook line and a repeated one-word chant.\nNo duet, no choir.",
    ratio: "Lyrics: Japanese 80%, English 20% for the hook.",
    theme: "Theme: love and joy changing an ordinary life, bright and hopeful.\n" + FREE,
  },
];

// 完全模倣が目的なので置換は既定 OFF。崩したいときに Genre の trapara と入れ替える候補
const GENRE_SWAPS = [
"hands-up trance", "eurodance", "hard trance", "makina", "hyper techno", "UK hardcore",
];

const AVOID_FIXED = "Avoid: dubstep, trap hi-hats, half-time sections, future bass chords, modern EDM festival drops, slow intro, acoustic instruments, live drums, heavy auto-tune, muddy mix.";

return {
  reference: REFERENCE,
  patterns: PATTERNS,
  bpmExtra: [],
  lyricsRatios: [],
  genreSwaps: GENRE_SWAPS,
  themes: [],
  avoid: [AVOID_FIXED],
};
})();
