// プロンプト候補データ。ここだけ編集して公開すると候補が更新されます。
// PATTERNS はベースパターンごとの候補、末尾の *_EXTRA 等は共通の追加候補です。
// 変更後はページを再読み込みしてください。版番号の手動更新は不要です。

// StreetDanceEDM #07 / #08 の Remove フォルダ 14 曲を 1 曲 1 ベースにしたもの。
// BPM・キー・帯域バランス・音量推移・構成の山谷は librosa の実測値を優先し、
// 実測で取れない声質・楽器の具体・ムード・歌詞テーマは MP3 の ID3 メタデータ（comment / lyrics）から補っている。
// さらに Megalomania（LIVE A LIVE）と MEGALOVANIA を demucs で 6 ステムに分離・区間解析し、実測できた要素（16 分のベースライン・♭II の暗い和声・持続する倍音の厚いリード・歪んだパワーコード・単独で始まるシンセリフ等）を全ベースに融合している。旋律はコピーしない。
const REFERENCE = {
  name: "SOURCE StreetDanceEDM #07 / #08",
  at: "Remove フォルダ 14 曲 / librosa 実測 ＋ ID3 メタデータ（comment・lyrics）",
  note: "解析が主、メタデータが補完。BPM はビート間隔とキック帯域の自己相関で詰め、倍・半テンポはメタデータ表記と照合して決定。キーは Krumhansl 推定で、メタデータ表記と食い違う曲（No Extra Noise / 幽霊船 / パンクの自転車 / 氷の会計 / 雨列車）は実測を採用。14 曲の実測レンジ: 107〜192 BPM、低域（250Hz 未満）45〜75%、サブ（60Hz 未満）5〜35%、ステレオ幅 0.15〜0.33、H/P 比 2.4〜6.0。終わり方は白線にラストコールだけが短いフェード、他 13 曲はぶつ切り。【融合元 2 曲】librosa ＋ demucs（htdemucs_6s）でステム分離し、区間ごとに音量・ステム比・コード・音列・音色・ドラムの 16 分グリッドを実測。Megalomania – Live A Live (Remastered OST): 4:50 / 136 BPM / D minor。ステム比はドラム 48%・ベース 36%・その他（リード）15%・ギター 1〜3%。構成は約 25〜57 秒の A と 14 秒の B（0:57 / 2:09 / 3:20 / 4:31）の繰り返しで、全編 -13dB 前後の途切れないループ、4:31 以降だけ落としてフェード。B は重心が 3.0k→2.5kHz と暗く、オンセット 8.4/秒・ハットが 8 分で埋まる。ドラムはキック帯域が 8 割のキック主導。ベースは E1-G2 を 4.5 音/秒・音長 93ms の 16 分で動き続け、G→F#→F→E→D# の半音下降が繰り返し出る。コードは Dm / Gm / E♭ / G5 / F5 などパワーコード（5 度）が多く、D↔E♭ の ♭II 進行で暗い緊張、ときどき D メジャーに明るむ。リード（other ステム）は倍音が 8kHz まで密に並び減衰しない持続音（持続率 0.92・3kHz 以上 44%）でオルガン的な壁、ギターは低域の歪んだパワーコードの持続で音量は小さい。MEGALOVANIA: 2:36 / 実測 117.5（約 120）BPM / D minor。ステム比はベース 38%・ドラム 25%・リード 21%・ギター 7%。0:00-0:15 は -25dB でリードシンセ単独（同音の短いスタブを連打→オクターブ跳躍→半音ずつ下降する動機、倍音が明るい）。0:15 でバンドが一気に入り -15dB、ベースの根音が D→C→B→B♭ と 1 音ずつ下がる進行、ドラムはスネア帯域 47% のスネア主導。0:52-1:19 が最大（-13dB）でリードが半音経過を含む上昇フレーズ、キックが増える。1:19-1:47 はベースが B↔C の半音往復、ビブラートの無いクリーンな持続シンセ（vocals ステムに分離されたが声ではない）。1:47-2:23 は -16.7dB に下げてベースと歪んだパワーコードのギター（9%）が主役。2:23 以降は冒頭のリード単独に戻って -25dB で終わる。",
};

const PATTERNS = [
  {
    id: 1, name: "#08 Velvet Exit Sign",
    src: { at: "#08 / 2:14 / 実測 166 BPM（83 ハーフタイム）/ G minor", note: "ステレオ幅 0.146 と 14 曲で最も狭いモノ寄りの音像、低域 65.7%・6kHz 以上 4.3%。H/P 比 4.67、オンセット 4.46/秒。0:00-0:24 は -18dB 前後のイントロ、0:32 に一度沈んだ後は -15〜-16dB で一定、2:08 が最大（-12dB）でぶつ切り。メタデータ: kawaii / husky alto / R&B × hyper techno × 8-bit、Upbeat × Emotional Girls Rap、表記 161 BPM。歌詞は英語主体の夜明けの退店（英 85 / 日 15）、[Silence] 挿入あり。" },
    bpm: "BPM 166 (83 half-time feel), G minor.",
    main: "出口の灯りできらめく. Upbeat emotional girls rap x hyper techno street dance with R&B chords and an 8-bit sparkle layer over a boss-battle bassline. Mood: cool, glittering, unbothered, quietly bittersweet.",
    core: "Core sound: tight punchy kick, round mono-centered sub bass, glossy R&B electric-piano chords, bright 8-bit square arpeggio, crisp heel-click percussion, fast hyper-techno hats, a relentless 16th-note bassline sliding down chromatically, a buzzy synth riff of staccato repeated-root stabs that leaps an octave, narrow focused stereo image.",
    extra: "Samples: heel clicks count in the intro under the buzzy riff played alone; door-chime blips, glitter-shaker sweeps and short 8-bit coin stabs fill the gaps. Original, not copied.\n\nDrops: each chorus lands on the full hyper-techno groove after a one-beat silence, then stays level at full energy without a breakdown dip.\n\nMix: compact centered mix, heavy low end, clean top; the final chorus is the loudest moment. About 2:15, hard cut.",
    structure: "Structure:\nIntro: heel clicks, \"one-two\", filtered groove.\nVerse 1: husky English rap over kick and sub.\nSilence: one beat of dead air before the last verse line.\nPre-chorus: short rhymed couplets, groove thins.\nChorus: sung English title hook with one Japanese line.\nVerse 2: same pattern, one beat of silence.\nBridge: three short lines, half-time feel.\nFinal chorus: loudest, extra 8-bit layer.\nOutro: title phrase once, hard cut.",
    vocal: "ONE Japanese female vocalist only: kawaii yet husky alto, slightly smoky tone, relaxed confident flow.\nVerses are rhythmic English rap; the chorus is a light sung hook, never belted.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: English 85%, Japanese 15% as short lines inside the chorus and verses.",
    theme: "Theme: leaving the club at dawn on her own terms. No drama, no crash, just walking out in glitter before the room can pull her back.\nScenes: velvet on the shoulder, the last booth, the exit-sign light on her lashes, a train-line fence, her reflection in a train window, one spark left in her hair.\nEmotion: light, cool and self-possessed; a small goodbye hidden in a grin.\nChorus: a short English phrase about leaving in glitter, not a crash but a silver blur.",
  },
  {
    id: 2, name: "#08 余計な音は要らない",
    src: { at: "#08 / 1:49 / 実測 132 BPM / C# major", note: "キー推定は C# major（相関 0.89、メタデータ表記は C# minor）。250Hz-2kHz 帯 31.3% と中域が厚く、6kHz 以上 7.3% で 14 曲中いちばん高域が明るい。H/P 比 3.31 と打楽器寄り。0:00-0:08 は -22dB の静かなイントロ、0:28 に一度落ちて（[Silence]）0:40 以降 -16dB 前後、1:26 が最大、ぶつ切り。メタデータ: high energy girls rap / chantable hook / bright plucky synth / hands-up anthem / candy-bright / mature、表記 130 BPM。歌詞は雑音を削いで自分の輪郭で輝く（日 75 / 英 25）。" },
    bpm: "BPM 132, C# major.",
    main: "余計な音は外す. High-energy J-pop girls rap x hands-up street dance anthem with a chantable hook and a descending-root battle progression. Mood: candy-bright, focused, mature, feel-good.",
    core: "Core sound: punchy kick, bouncy uplifting bassline, bright plucky synth riff, candy-bright lead stabs, crisp claps, shimmering top-end hats, a bass root stepping down one tone each bar (i-VII-flat VI style), snare-heavy driving backbeat, clean modern production.",
    extra: "Samples: short crowd \"hey\" responses, finger snaps and a clean tape-stop before each silence. Original, not copied.\n\nDrops: a full bar of silence resets the pulse after the descending-root run, then the chorus hits with the chant hook on the first beat.\n\nMix: bright, airy top end with a thick mid-range; upfront dry vocal, wide chorus. About 1:50, hard cut.",
    structure: "Structure:\nIntro: beat only, quiet filtered start, no vocal pickup.\nVerse 1: tight Japanese rap.\nPre-chorus: two lines, rising.\nSilence: one bar, a single whispered line.\nChorus: chantable hook, full drop.\nVerse 2: rap, more drive.\nBridge: calm, heartbeat pulse.\nBuild-up: counting breaths, snare rise.\nSilence: one bar, a whispered line.\nFinal chorus: loudest, hands-up chant.\nOutro: one line, hard cut.",
    vocal: "ONE Japanese female vocalist only: mature, bright mid-range girls-rap voice, crisp diction, confident and warm.\nVerses are tight rhythmic rap; the chorus is a chantable sung hook with self-stacked call-and-response.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 75%, natural English 25%, with a short repeated English phrase opening each chorus line.",
    theme: "Theme: cutting away the extra noise to find her own outline. She stops comparing herself and trusts the small fire she has.\nScenes: city noise switched off one by one, decorative words pushed deep into a pocket, a thin pen tracing an outline, a clouded screen, a quiet heartbeat as the signal.\nEmotion: calm focus turning into bright confidence. Minimal, not aggressive.\nChorus: short English style-and-shine phrases, shutting the noise out and moving on as herself.",
  },
  {
    id: 3, name: "#08 依存の残像",
    src: { at: "#08 / 1:40 / 実測 164 BPM（82 ハーフタイム）/ F minor", note: "ステレオ幅 0.325 と広く、6kHz 以上 2.7% と高域は暗い。低域 63.4%。ビートトラッカーは 82 を拾うハーフタイム主体の揺れ。0:08 付近に一度沈み、0:24 以降 -16dB 前後、1:12 に短い谷（シンセソロのブリッジ）、最後まで音量を保ってぶつ切り。メタデータ: yamikawaii / denpa / kawaii future bass / chillwave、表記 160 BPM、雨音 SE のイントロ。歌詞は日本語のみで、去った人の残像への依存。" },
    bpm: "BPM 164 (82 half-time feel), F minor.",
    main: "美しい亡霊を抱く. Yamikawaii denpa x kawaii future bass with a chillwave haze and a half-time street dance groove under a sustained organ-like wall. Mood: dreamy, dependent, sweetly haunted.",
    core: "Core sound: soft-punch half-time kick, deep rolling sub, wide detuned future-bass chords, wobbly chillwave pads, glassy bell arps, rain-drop texture, a sustained harmonically dense organ-like pad that never decays, flat-II (Phrygian) chord shifts, dark rounded top end.",
    extra: "Samples: rain-drop SE in the intro, reversed breaths, tiny music-box and glitch blips. Original, not copied.\n\nDrops: the hook opens into wide future-bass chord swells in half-time; the bridge becomes a slow synth solo over a semitone-rocking bass before the hook returns.\n\nMix: wide dreamy stereo, dark soft highs, warm heavy sub; short and concise. About 1:40, hard cut.",
    structure: "Structure:\nIntro: rain-drop SE, ambient synth.\nVerse 1: soft sung Japanese, sparse beat.\nHook: future-bass chords open wide.\nBridge: slow synth solo, one whispered line.\nHook: repeat, fuller.\nVerse 2: close and intimate.\nOutro: soft exhale into chill bass, cut.",
    vocal: "ONE Japanese female vocalist only: sweet, airy yami-kawaii voice with a fragile edge, close to the mic.\nVerses are soft and breathy; the hook is sung with a dreamy doubled layer; the bridge line is almost whispered.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese only.",
    theme: "Theme: dependence on someone who is already gone. His scent and warmth remain only as a beautiful ghost she keeps holding.\nScenes: a lingering scent in the corner of the room, fingertips tracing the shape of empty air, a bed too wide for one, a private world nobody interrupts.\nEmotion: sweet and hollow at once. Clinging without drama, lovely and a little eerie.\nChorus: the beautiful ghost called dependence slipping away the tighter she holds it.",
  },
  {
    id: 4, name: "#08 幽霊船の航海",
    src: { at: "#08 / 1:29 / 実測 159 BPM（80 ハーフタイム）/ B major", note: "キー推定は B major（メタデータ表記は C# minor）。サイドチェイン指標 0.57 と 2 番目に強いうねり、2k-6kHz 帯 4.1% で最も中高域が控えめ、低域 68.4%。0:00-0:08 は -21dB、0:24-0:32 に -22dB まで沈むブリッジ、1:12-1:24 にも谷（語り）があり、最後の 4 秒で戻してぶつ切り（メタデータの「超スローフェード」とは違い実測は切断）。メタデータ: whispered female vocal / denpa / kawaii future bass / chillwave、表記 158 BPM。歌詞は英語のみで漂流する幽霊船。" },
    bpm: "BPM 159 (80 half-time feel), B major.",
    main: "羅針盤の壊れた船. Whispered denpa x kawaii future bass drifting into chillwave, with a half-time street dance sway and a dark Phrygian organ-like drone. Mood: lonely, foggy, adrift, softly sorrowful.",
    core: "Core sound: heavy sidechain pump on wide future-bass chords, deep swelling sub, muted kick, foggy chillwave pads, a drone synth holding one note, a buzzing organ-like sustained lead moving from the root to the flat-II, rolled-off upper mids.",
    extra: "Samples: creaking hull, distant foghorn, water lapping and wind. Original, not copied.\n\nDrops: the hook swells on a pumping chord wave; the bridge drops almost to silence with a slow chillwave beat and a bass rocking between two notes a semitone apart before one spoken line.\n\nMix: dark and misty, pumping low end, soft mids; the last bars swell back up, then cut. About 1:30.",
    structure: "Structure:\nVerse 1: whispered English lines over pumping chords.\nHook: future-bass swell, sung softly.\nBridge: near silence, slow chillwave beat, one line.\nSpoken word: a single lost sentence.\nVerse 2: sinking imagery, fuller pump.\nOutro: drone synth holding a note, a final swell, hard cut.",
    vocal: "ONE Japanese female vocalist only, singing in English: whispered, breathy and close, almost weightless.\nThe hook is softly sung; one bridge line is spoken, never belted.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: English only, simple rhymed couplets.",
    theme: "Theme: a ghost ship drifting after the captain abandoned it. She is the ship, searching for a port that may not exist.\nScenes: an empty sea, fog hiding the stars, a broken compass, rotting wood under each step, the turning tide.\nEmotion: lonely drift and quiet sorrow, never acted out loud.\nChorus: drifting away on a phantom ride with no destination, a ghost looking for a port.",
  },
  {
    id: 5, name: "#08 最後の一歩が眩しい",
    src: { at: "#08 / 2:09 / 実測 136 BPM / B major", note: "H/P 比 6.01 で 14 曲中いちばん和声寄り、2k-6kHz 帯 13.1% と明るい。音量は -17〜-18dB でほぼ一定のまま、1:32 以降じわじわ上がって 2:00 が最大、最後は急に落として切る。メタデータ: girls rap / J-pop rap / high energy anthem / call and response chant / sidechain synth / crowd hype / alto / retro-futuristic / euphoric、表記 134 BPM・B major。歌詞は最後の一歩を踏み出す舞台前夜（日 80 / 英 20）。" },
    bpm: "BPM 136, B major.",
    main: "最後の一歩が光る. High-energy J-pop girls rap anthem x retro-futuristic street dance with call-and-response chants and a final-boss power-chord climb. Mood: euphoric, determined, late-night bounce.",
    core: "Core sound: punchy kick, bouncy bass, lush sidechained retro-futuristic synth chords, bright arpeggiated lead, crowd-chant stacks, snappy claps, glowing major-key pads, distorted power-chord guitar tucked under the mix, a relentless 16th-note bassline in the build-up.",
    extra: "Samples: crowd hype roars, call-and-response \"hey!\" and stadium claps answering the hook. Original, not copied.\n\nDrops: each silence holds one breath before the chorus lands; the energy climbs steadily, distorted power chords push forward in the last third, and the final chorus is the peak.\n\nMix: harmonic and bright, full chorus width, steady loudness that keeps rising to the end. About 2:10, sudden cut.",
    structure: "Structure:\nIntro: instrumental, 2 bars, two sung lines.\nVerse 1: Japanese rap.\nPre-chorus: stops to look around, rising.\nSilence: one breath, a single line.\nChorus: short English call, crowd response.\nVerse 2: steadier, more confident.\nBridge: calm, the shadow no longer scary.\nSilence: one line.\nBuild-up: \"up, up\" chant, snare rise.\nFinal chorus: loudest, crowd chant.\nOutro: two short lines, cut.",
    vocal: "ONE Japanese female vocalist only: warm alto with a bright edge, confident girls-rap flow.\nVerses are rhythmic rap; the chorus is a euphoric sung hook with self-stacked call-and-response chants.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 80%, natural English 20% as short calls in the chorus and build-up.",
    theme: "Theme: the night before the last step onto a big stage. She kept climbing without looking down, and now the final step glows.\nScenes: stair marks on her soles, nights she was laughed at, distant cheers that feel close, her own stride from here on.\nEmotion: quiet confidence turning into euphoria. No regrets, no hesitation.\nChorus: the last step shining tonight, grabbing the stage she has not seen yet.",
  },
  {
    id: 6, name: "#08 濡らさない一枚",
    src: { at: "#08 / 3:26 / 実測 130 BPM / F minor", note: "オンセット 6.66/秒で 14 曲中最も細かい刻み、2k-6kHz 帯 12.3%、3:26 と最長。前半は -18dB 前後で抑え、0:32-0:44 に谷、1:40 から段階的に上がり、2:08 付近で一度落として（1 小節の無音）2:44-3:00 が最大（-14dB）、ぶつ切り。メタデータ: uptempo footwork juke × turntablism、スクラッチとリードの掛け合い、ヒューマンビートボックスのブレイク、アニメ OP 風ブラス、表記 129 BPM・F minor。歌詞は雨の深夜にミックス盤を濡らさず局まで運ぶ物語（日 60 / 英 40）。" },
    bpm: "BPM 130, F minor.",
    main: "刻みを擦る、DJ的な間. Uptempo footwork juke x turntablism street dance with an anime-opening brass layer and a boss-battle synth riff. Mood: soaked, weightless, quietly euphoric.",
    core: "Core sound: rapid footwork kick-and-snare chops, vinyl scratch stabs answering a soaring lead synth melody, ceremonial horn stabs stacked under the hook, rolling sub, busy 16th percussion, a bright buzzy synth riff of repeated-root stabs and an octave leap trading bars with the scratches.",
    extra: "Samples: vinyl scratches on every cue, rain on a shutter, a needle drop, human beatbox fills between drops. Original, not copied.\n\nDrops: a human beatbox breakdown sits between drops; one bar of total silence resets the pulse, then the buzzy riff plays alone for two bars before the last chorus.\n\nMix: dense scratch-chopped percussive mix, upfront dry vocal, wide stacked chorus; the last minute is the loudest. About 3:25, clean cut.",
    structure: "Structure:\nVerse 1: controlled Japanese rap, short bursts with no space between them.\nChorus: bright English hook, brass stabs.\nVerse 2: cracked rap, the pace doubles.\nChorus: exposed English hook.\nRap bridge: the facade drops, human beatbox break.\nSilence: one full bar.\nFinal chorus: rebuilt hook, self-stacked chant, loudest.\nOutro: quiet reset, first scratch, clean cut.",
    vocal: "ONE Japanese female vocalist only: bright aggressive top-end voice, fast diction, cutting consonants.\nVerses are rapid rap riding just ahead of the beat; the chorus explodes into a self-stacked English chant. Raised lines stay chanted and pitched, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 60% for rap verses, English 40% for hooks and short cracked lines.",
    theme: "Theme: carrying the last mix through the rain at midnight. The record shop closes tomorrow, and the disc must reach the radio station dry.\nScenes: a shutter half down, a waterproof bag doubled, the last train stopped, taped shoes on a flooded road, overpass numbers counted one by one, a red station sign.\nEmotion: \"everything is fine\" cracking into honest fear, then pride. The beat still arrives.\nChorus: the needle keeps moving, the disc stays dry, one clean cut survives.",
  },
  {
    id: 7, name: "#08 白線にラストコール",
    src: { at: "#08 / 2:35 / 実測 164 BPM（82 ハーフタイム）/ F# minor", note: "2k-6kHz 帯 13.6% と明るく、H/P 比 5.04。0:00-0:24 は -19dB 台で抑え、ボーカルの立ち上がりは 0:15 と遅め。1:40 に -20dB の谷（ブリッジ）、2:12-2:28 に -13dB まで上がって最大、そこから 4 秒ほどで落ちて無音（14 曲で唯一のフェード終わり）。メタデータ: whispered female vocal / husky alto / smoky / Upbeat × Emotional Girls Rap / breakbeats / punk / EDM / euphoric drive / 8-bit、表記 164 BPM。歌詞は夜遊び明け、熱を連れて帰る朝（日 80 / 英 20）。" },
    bpm: "BPM 164 (82 half-time feel), F# minor.",
    main: "消えないまま帰る. Upbeat emotional girls rap x breakbeat punk-EDM street dance with an 8-bit shimmer and a boss-battle riff. Mood: euphoric drive, dawn afterglow, cool and warm at once.",
    core: "Core sound: chopped breakbeats at full speed, punky driving bass, bright 8-bit square leads, low booming sub hits, crisp snare fills, distorted power-chord guitar doubling the bass roots as they step down, glitter-bright top end.",
    extra: "Samples: a \"hey, heels up\" call, shoe squeaks, shutter rattle and a distant mirror-ball shimmer. Original, not copied.\n\nDrops: each chorus bursts out of a one-beat silence; the final chorus is the loudest point; the solo synth riff returns quietly, then a short fade.\n\nMix: bright and driving, strong low end, whispered vocal kept intimate over a full beat. About 2:35, short fade to silence.",
    structure: "Structure:\nIntro: \"hey, heels up\", breakbeat, the vocal enters late.\nVerse 1: whispered Japanese rap.\nSilence: one beat, one line.\nPre-chorus: rising, the beat stays in the body.\nChorus: sung hook, full breakbeat drop.\nVerse 2: rap, afterglow images.\nSilence: one line.\nPre-chorus: short English rhymes.\nChorus: repeat.\nBridge: quieter, the mirror ball far away.\nFinal chorus: loudest, a bare-faced smile.\nOutro: one line, short fade.",
    vocal: "ONE Japanese female vocalist only: whispered husky alto with a slightly smoky tone, intimate and cool.\nVerses are whispered rhythmic rap; the chorus is sung with a warm lift, never shouted.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 80%, natural English 20% as single words and short tags.",
    theme: "Theme: going home at dawn after a long night out, carrying the heat instead of letting it fade.\nScenes: walking the white line like a last ribbon, friends' quiet profiles, the east sky turning pale, glitter dust on her chest, closing shutters, a car window holding the last fire.\nEmotion: tired but glowing; calm face, warm core.\nChorus: going home without disappearing, glitter tucked away, smiling as if empty-handed.",
  },
  {
    id: 8, name: "#07 Glass Cherry Maze",
    src: { at: "#07 / 2:10 / 実測 188 BPM（94 ハーフタイム）/ G minor", note: "60Hz 未満のサブ帯域 35.1% で 14 曲中ダントツ、6kHz 以上 1.8%・重心 3631Hz と最も暗く重い。-21dB のイントロ（0:00-0:08）から 0:24・0:48・1:12 に谷が繰り返し来るハーフタイムのコントラスト構成、2:00 が最大（-13dB）。メタデータ: half-time phonk × street dance、makina、ピッチベンドのリード、歪んだサブのグライド、毎拍の DJ スクラッチ、チョップしたスネアのスタッター始まり、語りラップ。歌詞は甘い糸でつながれた迷路（日 70 / 英 30）。" },
    bpm: "BPM 188 (94 half-time feel), G minor.",
    main: "半分の速度で息をのむ. Uptempo half-time phonk breakdown x street dance with a makina layer and a relentless final-boss loop. Mood: pleading, sugary, quietly frightening.",
    core: "Core sound: pounding kick, massive distorted sub bass glides, makina layer with a screeching pitch-bent lead riff, dark memorable lead melody, sparse stab hits in half-time sections, phonk cowbell accents, a sustained buzzing organ-like lead wall, a 16th-note bassline descending chromatically, flat-II Phrygian power chords.",
    extra: "Samples: DJ scratch stabs punctuate every arm-motion beat; chopped snare stutters and rewinds fill the gaps. Original, not copied.\n\nDrops: hooks fall into a half-time feel with sparse stab hits and a distorted sub glide, then a sudden snap back to full tempo on a kick-driven loop that never breaks down.\n\nMix: contrast-heavy dynamic mix, the darkest top end, chest-hitting sub; upfront saturated vocal, wide chorus. About 2:10, hard cut.",
    structure: "Structure:\nIntro: chopped snare stutter before the groove and lead lock in.\nVerse 1: spoken flat-pitch Japanese talk-rap, short phrases.\nChorus: two-word English hook repeated, half-time drop.\nVerse 2: sudden snap back to full tempo, talk-rap.\nChorus: repeat, stab hits.\nBridge: one spoken English line.\nFinal chorus: loudest, belted peak that may crack.\nOutro: sung \"ah\", hard cut.",
    vocal: "ONE Japanese female vocalist only: sharp punchy mid-range voice, tight breath control, percussive attack, never soft or ballad-like.\nSome verse sections are spoken, not sung: flat-pitch Japanese talk-rap. Only the hook and chorus are sung. Peaks are belted and may crack, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 70%, English 30%, with a two-word English chorus hook.",
    theme: "Theme: a sweet glass thread she cannot cut. She says she is fine, but her fingertips shake, and every corner of the maze stabs her with one name.\nScenes: a red thorn left in her chest, roses dropped at a corner of the maze, a door she closes, opens and closes again, a thread still tying them together.\nEmotion: pleading and sugary on the surface, quietly frightening underneath. So close, yet far. Never explained, never violent.\nChorus: a two-word English phrase repeated, begging to be held in shape.",
  },
  {
    id: 9, name: "#07 パンクの自転車",
    src: { at: "#07 / 2:36 / 実測 113 BPM / B♭ minor", note: "H/P 比 2.41 で 14 曲中いちばん打楽器寄り、サイドチェイン指標 0.65 も最大。低域 71.8%・サブ 23.9%。0:04-0:20 は -20dB 前後のクラップだけのイントロ、0:40 で一気に -14dB（最大）へ、その後ほぼ平らに押し続け、1:40・1:56 に短い谷（R&B スイッチ）、終盤は少しずつ下がって終わる。キー推定は B♭ minor（メタデータ表記は A minor）。メタデータ: Baltimore club bounce、三連キックとボーカルチョップ、オフビートのクラップ、韓国ソフト R&B のスイッチ、語りラップ。歌詞は日本語のみ、眠れない人に寄り添う。" },
    bpm: "BPM 113, B♭ minor.",
    main: "揺れる腰、止まる息. Uptempo Baltimore club bounce x street dance with a Korean soft R&B switch and a playful boss-battle riff. Mood: gentle, attentive, steady, deeply kind.",
    core: "Core sound: triplet kick bed, a chopped vocal stab on every triplet, off-beat hand-clap accents, heavy pumping sub, catchy pluck lead melody, mellow electric piano in the R&B switch, a cheeky buzzy synth riff stuttering on one note before leaping an octave.",
    extra: "Samples: off-beat claps, a deflating tire hiss, a bicycle bell and chopped breath stabs. Original, not copied.\n\nDrops: after the clap-only intro the kick and lead hit together and the bounce stays flat-out; short R&B switches soften the middle over a bass rocking between two notes a semitone apart.\n\nMix: percussive and pumping, heavy low end, intimate close vocal in the verses, wide saturated chorus. About 2:35.",
    structure: "Structure:\nIntro: off-beat claps alone for four bars, spoken narration.\nVerse 1: flat-pitch Japanese talk-rap.\nPre-chorus: soft pleading questions, R&B switch.\nChorus: singable repeated hook, full bounce.\nVerse 2: talk-rap, closer.\nChorus: repeat.\nBridge: Korean soft R&B switch, swung groove.\nFinal chorus: the same singer trading lines with her own double.\nOutro: one spoken line, the beat thins out.",
    vocal: "ONE Japanese female vocalist only: breathy in the low register and fully belted at the top, audible breath between phrases.\nVerses are spoken flat-pitch talk-rap; only the hook is sung. Raised delivery stays melodic, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, duet or choir.",
    ratio: "Lyrics: Japanese only.",
    theme: "Theme: staying beside someone who cannot say what hurts. Like a bicycle with a flat tire, they cannot move forward, and she does not push.\nScenes: a flat front tire sinking, a strained smile, an empty reply, a basket carrying the weight they cannot say, a sleepless night shared.\nEmotion: steady, gentle presence. Asking first, carrying without being asked.\nChorus: a simple repeated promise of being right here, even before being called.",
  },
  {
    id: 10, name: "#07 六等分の朝",
    src: { at: "#07 / 3:24 / 実測 107 BPM / F minor", note: "オンセット 6.59/秒と刻みが細かく、6kHz 以上 6.2%。ビート候補に 143 BPM（4:3 のフットワーク感）も強く出る。-21dB のイントロからゆっくり上げ、0:44-0:52 と 1:12 に谷、2:32 から -14〜-15dB に上がって最後（-13dB）が最大、ぶつ切り。メタデータ: uptempo footwork juke × turntablism、ヒューマンビートボックス、ブレイクで拍を完全停止、8-bit チップチューンのカウンター、明るく攻撃的な声、表記 108 BPM・F minor。歌詞は来られない妹の誕生ケーキを街の人に配る朝（日 95、サビは無意味音節のチョップ）。" },
    bpm: "BPM 107, F minor.",
    main: "刻みを擦る、祝いを配る. Uptempo footwork juke x turntablism street dance with an 8-bit chiptune layer and a boss-battle bassline. Mood: festive, lonely, hauntingly sweet.",
    core: "Core sound: footwork kick patterns with a 3-against-4 feel, vinyl scratch stabs answering a soaring lead melody, a square-wave counter-melody doubling the hook an octave up, rolling sub, crisp rim shots, a relentless 16th-note bassline with chromatic descents, flat-II Phrygian chord shifts.",
    extra: "Samples: a match strike, an answering-machine beep, newspaper bundles, a bus door hiss, scratch-chopped wordless syllables. Original, not copied.\n\nDrops: the break suspends the pulse entirely, then the beat re-enters at full speed on a descending-root run; a scratch-chopped breakdown trades stabs with the vocal for eight bars.\n\nMix: dense percussive mix, upfront dry vocal, wide stacked chorus; the last minute is the loudest. About 3:20, hard cut.",
    structure: "Structure:\nVerse 1: indoors, close and small, fast crowded rap.\nPre: toward the window, single words.\nChorus 1: open wordless chop, chiptune double.\nRap verse 2: outdoors among strangers, riding ahead of the beat.\nChorus 2: chop with the street, shouted tags.\nRap bridge: between places, the pulse suspended.\nFinal chorus: fragmented chop, loudest.\nOutro: indoors alone, one line, cut.",
    vocal: "ONE Japanese female vocalist only: bright aggressive top-end voice, fast diction, cutting consonants.\nVerses are fast and crowded with words; the chorus is a full-throat singalong of wordless chopped syllables with shouted tags. Shouted tags stay chant-like, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, duet or choir.",
    ratio: "Lyrics: Japanese 95%, with wordless chopped syllables as the chorus hook.",
    theme: "Theme: a birthday cake cut into six pieces for a sister who cannot come. At dawn she hands the slices to strangers in the waking city.\nScenes: six candles, strawberries lined up, an answering machine blinking, snow closing the highway, a delivery rider, a taxi attendant, a baker, a cleaner, a guard, one slice kept under a clear lid.\nEmotion: festive and lonely at once; nobody replaces her sister, yet the tin grows lighter.\nChorus: wordless chopped syllables around the image of morning reaching the empty seat too.",
  },
  {
    id: 11, name: "#07 氷の会計",
    src: { at: "#07 / 2:43 / 実測 143 BPM / E♭ minor", note: "250Hz-2kHz 帯 31.6% で中域が厚く、ステレオ幅 0.318。0:00-0:08 は -20dB、0:12 に一度上がった後 1:12 まで -18dB 前後の静かなヴァース、1:12 以降サビで持ち上がり、1:56 から -16dB、2:36 が最大、ぶつ切り。キー推定は E♭ minor（メタデータ表記は D# major）。メタデータ: Japanese chill ballad pop、アルペジオ鍵盤、遅れて入る疎なドラム、サイトランスのギャロップベースとアシッドリード、語りのプリコーラスとブリッジ、クールで澄んだ声。歌詞は日本語のみ、「大丈夫、まだ」と言い聞かせる別れの朝。" },
    bpm: "BPM 143, E♭ minor.",
    main: "氷がカランと鳴る. Japanese chill ballad pop fused with a full-on psytrance layer at street dance tempo, climaxing in a boss-battle organ wall. Mood: proud, unsteady, honest.",
    core: "Core sound: arpeggiated keys, drums entering late and sparse, deep soft bass that turns into a rolling triplet gallop, a squelchy acid lead spiraling under a brass riff, warm pad chords in the chorus, a sustained harmonically dense organ-like lead and low distorted power chords under the final chorus.",
    extra: "Samples: ice clinking in a glass, a distant school bell, a register key press, a whispered countdown. Original, not copied.\n\nDrops: quiet verses open into a warm chorus; the psytrance gallop takes over after the first minute; 14-second darker interludes with busier hats return between choruses and grow toward the final chorus.\n\nMix: thick warm mid-range, intimate close vocal in the verses, wide saturated chorus; the ending is the loudest. About 2:45, hard cut.",
    structure: "Structure:\nIntro: hummed preview of the chorus melody, two lines.\nVerse 1: short image phrases over keys.\nPre-chorus: \"3, 2, 1\" count, breath held.\nChorus: repeated short phrase, warm and open.\nVerse 2: the psytrance gallop enters.\nPre-chorus: spoken, not sung.\nChorus: repeat, fuller.\nBridge: spoken, not sung.\nFinal chorus: loudest, acid lead.\nOutro: two sung lines, cut.",
    vocal: "ONE Japanese female vocalist only: cool, clear tone, restrained and precise.\nSome sections are spoken, not sung: flat-pitch Japanese with natural speech rhythm. Only the hook and chorus are sung. Raised delivery stays melodic, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese only, short two-to-four-word phrases.",
    theme: "Theme: the morning after deciding to end it. She pays the bill in silence and keeps telling herself she is fine, not yet ready to leave.\nScenes: a school ground white with morning, a single ice cube clinking, a coat sleeve she grabbed, the cold corner of a desk, a crumpled receipt in her pocket, untied shoelaces.\nEmotion: composure with a slight delay in her eyes. Proud, unsteady, honest.\nChorus: \"I'm fine, not yet\" repeated like a countdown until she can finally mean it.",
  },
  {
    id: 12, name: "#07 終電前スイッチ",
    src: { at: "#07 / 3:05 / 実測 131 BPM / F minor", note: "サブ帯域 11.7% と控えめで、H/P 比 3.37・オンセット 5.81/秒の打楽器主導。-19〜-20dB のイントロ、ボーカルの立ち上がりは 0:10。0:48 に谷、1:04 から -16dB、2:04 に -21dB まで落ちるブレイク（倍速スネアロールの前）、以降 -15dB で押し切ってぶつ切り。メタデータ: footwork juke × turntablism、スクラッチとリード、ビートボックスのブレイク、アニメ OP ブラスの締め、ピークはベルト。歌詞は日英が 1 行ずつ対になる朝の起動スイッチ（日 50 / 英 50）。" },
    bpm: "BPM 131, F minor.",
    main: "刻みを擦る、スイッチを入れる. Uptempo footwork juke x turntablism street dance with an anime-opening brass finish and a boss-battle synth riff. Mood: electric, generous, punchy, irresistibly uplifting.",
    core: "Core sound: footwork kick chops, vinyl scratch stabs answering a soaring lead synth melody, a lighter sub, crisp snares, brass stabs, a soaring guitar-synth riff in the final chorus, a buzzy synth riff of staccato repeated-root stabs and an octave leap answering the brass.",
    extra: "Samples: alarm beeps, a train door chime, platform announcements chopped into scratches, human beatbox fills. Original, not copied.\n\nDrops: the quiet buzzy synth riff plays alone before the band crashes in; a human beatbox breakdown between drops; a double-time snare roll builds into the hardest stab hit after the break.\n\nMix: punchy percussive mix, upfront saturated vocal, wide chorus; the anthemic hook repeats one last time over brass, then a clean cut. About 3:05.",
    structure: "Structure:\nIntro: two spoken bilingual pairs over scratches.\nVerse 1: fast Japanese/English line pairs.\nPre-chorus: count \"five, six, seven\".\nChorus: short Japanese call answered in English.\nVerse 2: confident, faster.\nChorus: repeat.\nBridge: the beat drops out, beatbox, double-time snare roll.\nFinal chorus: brass and guitar-synth, belted peak.\nOutro: bilingual pairs, clean cut.",
    vocal: "ONE Japanese female vocalist only: bright aggressive top-end voice, fast diction, cutting consonants.\nSome verse sections are spoken, not sung: flat-pitch talk-rap. Only the hook and chorus are sung. Peaks are belted and may crack, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 50%, English 50%, each Japanese line answered by its English echo.",
    theme: "Theme: flipping the switch on an ordinary morning. The third alarm is where today starts to win.\nScenes: a gray room at 6 AM, a thumb silencing alarms, a train window reflection, shoulders dropping two centimeters, a playlist lit by a finger, a midday platform with a new stride.\nEmotion: groggy to fully charged. Taking back the day, paying back what she owes herself.\nChorus: \"switch on\" calls, carrying the day and taking her turn.",
  },
  {
    id: 13, name: "#07 銀の靴音",
    src: { at: "#07 / 2:49 / 実測 120 BPM / B♭ minor", note: "低域 75.2% で 14 曲中いちばん低音寄り、2k-6kHz 帯 4.6% と高域は控えめ。0:36-0:40 に -19dB の谷（語りからサビへの切り替え）、0:48 以降 -15〜-16dB で安定、2:28 が最大（-13dB）、最後まで音量を保って切る。メタデータ: city pop × trap fusion、lo-fi テープの暖かさ、ファンク・トラップの切り替え（スラップベースと 808、ワウギター、ホーン）、倍速ラップへのビートスイッチ、低くスモーキーな大人の声、語りのヴァースとアウトロ。歌詞は日本語のみ、きれいに終わらせて去る夜。" },
    bpm: "BPM 120, B♭ minor.",
    main: "低音がまろやかに沈む. City pop x trap fusion street dance with lo-fi tape warmth and a funk-trap switch, with a boss-battle descending-root progression. Mood: dignified, aching, cinematic, self-possessed.",
    core: "Core sound: deep round 808 sub bass, glossy city-pop synth chords, crisp trap hats, a slap-bass gallop doubling the 808 in the switch, wah guitar answering horn stabs, a bass root stepping down one tone each bar (i-VII-flat VI style), a clean vibrato-free synth lead over a semitone-rocking bass in the switch, soft tape saturation.",
    extra: "Samples: heel steps on tile, an elevator ding, tape hiss, a distant crossing signal. Original, not copied.\n\nDrops: a beat switch into a double-time rap verse; the funk-trap crossover takes over the second half, and distorted power chords push forward in the last third.\n\nMix: warm low-heavy mix with a soft top, upfront saturated vocal, wide chorus; loudness builds to the last chorus. About 2:50, hard cut.",
    structure: "Structure:\nIntro: two sung lines over city-pop chords.\nVerse 1: spoken word, not sung.\nPre-chorus: short broken phrases.\nChorus: smooth sung hook.\nPost: \"ah\", a sigh.\nVerse 2: beat switch, double-time rap.\nChorus: repeat.\nBridge: one long flowing line, funk-trap switch.\nFinal chorus: belted peak.\nOutro: spoken word, not sung.",
    vocal: "ONE Japanese female vocalist only: sultry mature voice, low smoky tone.\nSome verse sections are spoken, not sung: flat-pitch Japanese with natural speech rhythm. Only the hook and chorus are sung. Peaks are belted and may crack, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese only, with one wordless \"ah\" in the post-chorus.",
    theme: "Theme: ending it beautifully and walking out with dignity after the last train. Tears may fall forward, never behind her.\nScenes: a profile left on the glass, slightly higher heels she chose herself, hands hidden in the elevator mirror, white shop signs, a crowd she slips through, a ticket gate where her name is no longer called.\nEmotion: aching yet composed; she does not look back, only keeps her stride.\nChorus: ending it cleanly, without hurting anyone, staying herself.",
  },
  {
    id: 14, name: "#07 雨列車の輪郭",
    src: { at: "#07 / 2:43 / 実測 192 BPM（96 ハーフタイム）/ B minor", note: "60Hz 未満 5.0% と 14 曲で最もサブが薄く、2k-6kHz 帯 14.2%・ステレオ幅 0.332 で最も明るく広い。キック帯域の周期は 96/192 BPM（4:3 の 128 候補も出る）。0:00-0:28 は -19〜-20dB で長めに抑え、1:08 と 1:44-1:48 に谷（ブリッジ）、最後の 12 秒が最大、ぶつ切り。キー推定は B minor（メタデータ表記は平行調の D major）。メタデータ: anime opening × EDM hybrid、4 つ打ち、ギターシンセのリフ、nightcore のピッチアップしたボーカルチョップ、スクラッチのスタッター。歌詞は雨の終電で形を保てない想い（日 90 / 英 10）。" },
    bpm: "BPM 192 (96 half-time feel), B minor.",
    main: "アニメ主題歌感、高鳴る予兆. Uptempo anime opening x EDM hybrid street dance with a nightcore layer and a relentless final-boss climax. Mood: sweet, unstable, devoted.",
    core: "Core sound: driving four-on-the-floor kick, soaring anthemic lead synth melody, a guitar-synth hybrid riff answering every stab, pitched-up vocal chop hook, driving rolling bassline, thin sub, a sustained buzzing organ-like lead wall and distorted power chords in the final chorus, a relentless 16th-note bassline, bright wide top.",
    extra: "Samples: rain on a train window, rail clacks, a door chime, DJ scratch stutter fills. Original, not copied.\n\nDrops: a lone buzzy synth riff of repeated-root stabs and an octave leap opens the song; wave isolation ripples in from silence before a robotic stab announces the drop.\n\nMix: bright, wide and airy with a light low end, upfront saturated vocal, wide chorus; the ending is the loudest. About 2:45, hard cut.",
    structure: "Structure:\nVerse 1: fast crowded rap over a filtered beat, riding ahead of the beat.\nPre-chorus: single words repeated.\nChorus: big singalong anime hook with one English line.\nVerse 2: rap, fuller band.\nPre-chorus: single words.\nChorus: doubled, with shouted tags.\nBridge: sparse short lines, a silence ripple.\nFinal chorus: loudest, belted peak.\nBreak: one word, hard cut.",
    vocal: "ONE Japanese female vocalist only: confident rap delivery in the verses and a full sung tone in the hooks, husky edge on sustained notes.\nThe pre-chorus strips to single words; the chorus is a full-throat singalong with shouted tags. Peaks are belted and may crack, NOT screamed or growled.\nSame singer for every layer, harmony and ad-lib; no male vocal, feature or choir.",
    ratio: "Lyrics: Japanese 90%, one short English line in each chorus.",
    theme: "Theme: a rain-soaked last train and a feeling that cannot hold its shape alone. She is waiting, not yet looking, wanting to look.\nScenes: the last-train window watching her, rain turning into lines, fingertips at the edge of the seat, strangers folding umbrellas, an unknown name called too gently, the moon like his shadow.\nEmotion: sweet, unstable devotion. The ring of her feelings keeps loosening but will not let go.\nChorus: a loosening ring, rain on her skin, still not letting go.",
  },
];

// 14 曲の歌詞メタデータに繰り返し出てくるモチーフ（終電・夜明け・きれいに去る・雨）を束ねた追加テーマ
const THEME_EXTRA = [
`Theme: the hour between the last train and the first. The night is over, but she is not ready to disappear into the morning yet.
Scenes: a closing shutter, a ticket gate, a train window reflection, glitter or rain still on her coat, the sky turning pale over the tracks.
Emotion: tired, composed and quietly glowing. Leaving with dignity instead of drama.
Chorus: a short repeated phrase about walking out without fading.`,

`Theme: holding her shape in the rain. Everything around her is soaked and unsteady, but the one thing she carries stays dry.
Scenes: a flooded street, taped shoes, a bag pressed to her chest, overpass lights, a destination sign glowing red ahead.
Emotion: "I'm fine" cracking into honest fear, then turning into pride.
Chorus: the beat keeps moving, and so does she.`,

`Theme: the final duel with the version of herself that learned to hate. The floor is the last stage, and she answers every attack with a step instead of a scream.
Scenes: a long corridor of pipes and shadows, the same bassline circling like a guard, sparks on the floor, a grin that refuses to break, a mirror splitting into two dancers.
Emotion: cool menace turning into mercy. She wins by not becoming the villain.
Chorus: a short battle cry about keeping her shape until the loop breaks.`,

`Theme: a boss battle that never ends until she changes the rhythm. The same pattern keeps coming back, and she finally dodges it on the off-beat.
Scenes: a flashing hit counter, a riff that starts alone in the dark, heels sliding on a chessboard floor, power chords shaking the lights, one last breath before the save point.
Emotion: playful, stubborn and a little dangerous; laughing at the pressure.
Chorus: a repeated phrase about stepping out of the loop.`,
];

const LYRICS_RATIOS = [
"Lyrics: Japanese 70%, natural English 30%.",
"Lyrics: Japanese 60%, natural English 40%.",
"Lyrics: Japanese 80%, short natural English 20%.",
"Lyrics: English-main 80%, Japanese 20%.",
];

// メイン 1 行目のジャンル語を差し替えて曲の空気だけを強制的に変える（14 曲に出てくるジャンル寄り）
const GENRE_SWAPS = [
"footwork juke", "Baltimore club", "jersey club", "half-time phonk", "hyper techno",
"breakbeat", "kawaii future bass", "denpa", "city pop", "full-on psytrance",
"nightcore", "UK garage", "drum & bass", "makina", "turntablism",
"boss-battle synth rock", "dark progressive synth", "power-chord breakcore",
];

// 全ベース共通・各 1 項目のみ
const NEVER_USE_FIXED = "ネオン, 午前二時, 既読, 運命, 永遠, 奇跡, 桜, 星空, 翼, 涙が止まらない, 抱きしめて, 世界で一番, 未来へ, stay with me, forever, baby, neon, ignite, fly away.";
const AVOID_FIXED = "Avoid: male vocal, duet, choir, metal screams or growls, thin weak low end, muddy mix, generic big-room festival drops, dubstep wobble, hardstyle kicks, rock band arrangement, orchestral cinematic scoring, acoustic ballad, overtuned robotic vocal, long fade-out.";

// メタデータに書かれていて実測と食い違った BPM 表記（崩したいとき用の予備候補）
const BPM_EXTRA = [
"BPM 161 (80 half-time feel), G minor.", "BPM 160 (80 half-time feel), F minor.", "BPM 158 (79 half-time feel), C# minor.", "BPM 130, C# minor.", "BPM 134, B major.",
"BPM 136, D minor.", "BPM 120, D minor.",
];
