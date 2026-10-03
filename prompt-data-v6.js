// V6 のプロンプト候補データ（刺さった自作曲 Byte by Byte の完全模倣）。
// 元曲: work4/mp3/EDM/#64/#62-Byte_by_Byte.mp3（SUNO v5.5 で生成し、いいねを付けた曲）。
// この曲はシンプルモードの説明欄に短いキーワードを 13 個並べただけで作られていた（MP3 と同名 .txt のメタデータで確認）。
// そこで長い説明文をやめ、作ったときと同じ「短いキーワードを 1 行ずつ、末尾カンマで並べる」形式に戻し、
// 元の 13 キーワードを元の順番のまま残したうえで、音源の実測で分かった音と展開を同じ書き方で足す。
// 元の入力に無い Never use / Avoid は書かない（元の歌詞は neon や pixel を使っており、V5 の Never use と矛盾するため）。
// メイン行と Core sound は 1 行 1 候補の欄なので使わず、複数行を 1 候補にできる補足の欄に
// 「気分 / 声・言語・ジャンル（元の順番どおり）/ 実測の音」の 3 段落で入れる。実測の展開は Structure、実測の歌い方はボーカルに置く。
// このファイルだけ編集すれば V6 の候補が更新されます。変更後はページを再読み込みしてください。
(window.PROMPT_DATA = window.PROMPT_DATA || {}).v6 = (() => {

const REFERENCE = {
  name: "SOURCE #62-Byte_by_Byte.mp3（SUNO v5.5 / いいね済み）",
  at: "2:36 / 実測 180.0 BPM / E 中心 / メタデータ: ID3（comment・lyrics）＋ 同名 .txt（SUNO API の応答）",
  note: "作成時の入力（シンプルモードの説明欄）: 中毒性のある曲, リズムがいい曲, ノリのいい曲, テンションが上がる曲, 低音が気持ちいい曲, 女性ボーカル, ハスキーボイス, English lyric, Korean HipHOP, Dark EDM, Hyper Techno, EuroBeat, 8-bit。SUNO が書いたスタイルタグ: Dark EDM, Hyper Techno, Eurobeat, 8-bit chiptune leads, heavy 808 sub-bass drops, energetic Korean Hip-Hop influence, fast tempo, raspy husky female vocals, driving bassline, explosive arcade synth hook, high energy dance beat。SUNO が書いた歌詞は英語で、区画ごとに [ ] の音の指示つき（Intro / Verse 1 / Pre-Chorus / Chorus / Verse 2 / Bridge / Chorus / Outro）。モデル v5.5（chirp-fenix）、表示タグ EDM, Hyper Techno, Eurobeat。",
};

const PATTERNS = [
  {
    id: 1, name: "Byte by Byte 完全模倣",
    src: { at: "実測（librosa / demucs htdemucs_6s / Whisper）", note: "180.0 BPM（キックは毎拍の 4 つ打ち）。キーは E 中心で、区間により E minor と E major を行き来し、ベースは E1 を踏み続ける（最高 A3）。帯域: サブ 37% / 低域 43% / 中域 14% / 高域 7%（低域が 8 割で暗く重い）。ステレオ幅 0.17（ほぼモノラル）、H/P 比 6.4。ステム比: ドラム 56% / ベース 31% / ボーカル 10% / その他 3%。1 小節パターン: キック毎拍、ベースは裏で跳ねる 16 分（808 のスライド）、ハイハットは 16 分、クラップ系は細かく刻む。リードは D3〜F#5 の短く切れるチップチューンのアルペジオ（持続 0.25）。展開: 0:00 8bit のイントロ（キックは弱く -25dB から上がる）→ 0:11 808 が入る → 0:32-0:43 リードの無いラップ → 0:43 盛り上げ → 0:53 サビ → 1:25 2 番のラップ（リード無し）→ 1:37 ドラムとベースが 1.2 秒止まり声だけ → 1:46 ブリッジでリード最大 → 2:08 ラスサビ → 2:16 に 1.4 秒の止め → 2:18 最大音量（-11dB）→ 2:32 808 だけ残って終わる。声は歌の区間の 59% で鳴り、終盤に Game over / Let's go の掛け声（Whisper）。" },
    bpm: "BPM 180,",
    main: "",
    core: "",
    extra: "中毒性のある曲,\nリズムがいい曲,\nノリのいい曲,\nテンションが上がる曲,\n低音が気持ちいい曲,\n\n女性ボーカル,\nハスキーボイス,\nEnglish lyric,\nKorean HipHOP,\nDark EDM,\nHyper Techno,\nEuroBeat,\n8-bit,\n\nキーはE,\n808サブベースが主役,\n4つ打ちキック,\n裏で跳ねる16分ベース,\nモノラル寄りで太く暗い音,\n短く切れる8bitアルペジオ,",
    structure: "8bitだけのイントロ,\n808が入って一気に重くなる,\nラップのヴァースはリード無し,\nサビ前にスネアロール,\n2番のあとドラムとベースが1秒止め,\nブリッジでリードが最大,\nラスサビ直前にもう一度止め,\n最後は808だけ残して終わる,",
    vocal: "ヴァースはラップでサビは歌,\nかすれた声で勢いよく,",
    ratio: "",
    theme: "",
  },
];

return {
  reference: REFERENCE,
  patterns: PATTERNS,
  bpmExtra: [],
  lyricsRatios: [],
  genreSwaps: ["Hyper Techno", "EuroBeat", "Dark EDM", "Korean HipHOP"],
  themes: [],
  never: [],
  avoid: [],
};
})();
