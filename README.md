# SUNO_random

SUNO Simple Prompt Builder V1〜V6 の GitHub Pages 公開用リポジトリです。画面上部の `V1` / `V2` / `V3` / `V4` / `V5` / `V6` ボタンで、使うプロンプト候補を切り替えます。初めて開いたときは V6 です。

## ファイルの役割

- `index.html`: 画面の外枠とスタイル。候補データの更新時は編集不要です。
- `prompt-data-v1.js` 〜 `prompt-data-v6.js`: 各版のプロンプト候補データ。通常はこれらのファイルだけを編集します。
- `app.js`: 版の切り替え、ランダム抽選、組み立て、保存などの処理。版ごとの説明文・ジャンル置換の既定値・自動トリムで削る順もここにあります。
- `tests/`: 版の切り替えと出力を確かめる E2E テスト（`npm install` のあと `npm test`）。

## 版ごとの違い

| 版 | ベースパターン | Never use / Avoid | 音源解析メモ |
|---|---|---|---|
| V1 | prompt.md の 10 パターン | Never use は V4 と共通、Avoid は専用の 1 行 | なし |
| V2 | V1 ＋ 追加パターン 1 件 | Never use は V4 と共通、Avoid は専用の 1 行 | なし |
| V3 | Glass Cherry Maze を土台に TRANCE × EDM BANGER Vol.31 の 10 曲 | V3 専用の 1 行 | あり |
| V4 | StreetDanceEDM #07 / #08 の 14 曲 | 共通の 1 行 | あり |
| V5 | Glitchcore hip-hop × sweet Lolita female vocals の 12 ベース | V5 専用の 1 行 | なし |
| V6 | work4/sample のトラパラ 8 曲を実測から完全模倣（1 曲 1 ベース） | V5 と同じ Never use、Avoid は専用の 1 行 | あり |

歌詞テーマと古文フラグメントは `prompt-data-v4.js` を正本として V1〜V4 で共通です。V5 は歌詞テーマ・Never use・Avoid を `prompt-data-v5.js` に専用で持ち、古文フラグメントは使いません。古文フラグメントは常に出力へ入り、選ばれた歌詞テーマの `Chorus:` 行は古文指示の後ろへ回されます。

## V5 の書き方

- 全 12 ベースのメイン行は `Genre: Glitchcore hip-hop. Sweet Lolita female vocals, fast rap over a fast, driving beat, bright compressed synth layers with rising tension and sudden drops, distorted bass and shimmering synths.` で始まり、後ろにベースごとの味付けが付きます。メイン行は自動トリムで削られません。
- ジャンル置換は既定 ON で、メイン行先頭の `Glitchcore hip-hop` を `makina x Anime Opening x Addictive tracks x ○○ EDM MiX`（14 候補）のどれかに置き換えます。
- ボーカルは全ベースで sweet Lolita の女性 1 人の速いラップです（Avoid で男性ボーカルを禁止）。BPM は 145〜185 です。
- 言語比率は 11 候補、歌詞テーマは 58 件（12 ベース分 ＋ 追加 46）、Never use は V5 専用の 1 行です。
- Structure とサウンド補足は、V1〜V4 に出てくる区画と段落の種類をすべて持ちます。
- 転調は効きやすい書き方に絞り、最後のサビの直前で 1 回だけ上げます（up a step）。BPM 行に `key change up a step into the final chorus`、Structure は `Final chorus:` 行の中に転調と耳で分かる変化（energy rises / bigger voice）、補足の先頭の `Modulation:` 段落で歌詞の区画タグの中に書かせます（`[Final Chorus: key change up a step, energy rises, bigger voice]`）。独立した `[Key Change]` タグや relative major / half step などの理論用語は使いません。3000 文字を超えてもこの 3 か所は削られません。確実に転調させたいときは、最後のサビ直前の無音・ドロップで切って Suno Studio の Pitch で後半を上げてください。
- 古文フラグメントは使いません。

## V6 の書き方

- `work4/sample` の MP4 8 本（club complex CODE「TRAPARA BEST CHAPTER #1」の Chapter 2〜9、トラパラの DJ ミックス）を 1 曲 1 ベースにしています。
- librosa（BPM・区間ごとのキー・帯域比・ステレオ幅・2 秒ごとの音量）、demucs htdemucs_6s（ステムごとの区間音量・キック / ベース / ハイハットの 1 小節 16 分割パターン・リードの音域と減衰）、Whisper（歌の言語と内容）、映像の字幕（曲名）で 1 曲ずつ解析しました。実測値と元曲名は画面の音源解析メモに出ます。
- プロンプトは実測した事実をそのまま書く「トラックシート」構文です: `BPM 143, <キー>, 4/4` → `Genre: trapara, ... Style: ...` → `Groove (measured):` → `Lead:` / `Mix (measured):` → `Arrangement (8-bar blocks, measured):`（時刻付き）→ 声 → 言語 → テーマ。
- 曲名・アーティスト名は出力に入れず、カバー曲を含むため旋律は必ずオリジナルにさせます（`original melody`）。Never use は V5 の指定を借ります。ジャンル置換は Genre の `trapara` を入れ替えます（既定 OFF）。

## 候補データの更新

1. GitHub で更新したい版の `prompt-data-v*.js` を開き、鉛筆アイコンから編集します。
2. 既存ベースの内容は `PATTERNS` の各 `name` / `bpm` / `main` / `core` / `extra` / `structure` / `vocal` / `ratio` / `theme` を変更します。V3 / V4 の音源解析メモは `REFERENCE` と各パターンの `src` にあります。
3. 版ごとの追加候補は `BPM_EXTRA` / `GENRE_SWAPS` / `LYRICS_RATIOS` を編集します。
4. 全版共通の歌詞テーマ（V4 各パターンの `theme` ＋ `THEME_EXTRA`）、古文フラグメント（`CLASSICAL_FIXED`）、V1 / V2 / V4 共通の `NEVER_USE_FIXED` は `prompt-data-v4.js` で編集します。Avoid は各版のファイルの `AVOID_FIXED`（V1 / V2 は V4 から `hardstyle kicks` / `dubstep wobble` を外した内容）、V3 の Never use は `prompt-data-v3.js` の `NEVER_USE_FIXED` です。
5. 変更を別ブランチにコミットし、Pull Request をマージすると Pages が自動更新されます。公開ページを再読み込みしてください。

データ内容から版を自動判定するため、版番号の手動更新は不要です。候補データを変更すると、その版で端末内に保存された候補欄と選択状態は新しい初期値に切り替わります。履歴とプリセットは残ります。プリセットを呼び出すと、保存時点の古い候補が復元されます。

ブラウザ内でプロンプトを生成します。編集内容、履歴、プリセットは版ごとに端末の `localStorage` に保存され、端末間では同期されません。最後に使った版は次に開いたときも選ばれます。「SUNO AI を開く」の自動入力には、元HTMLの説明どおり別途 Tampermonkey スクリプトが必要です。

公開設定: GitHub Pages → Deploy from a branch → `main` / `(root)`。
