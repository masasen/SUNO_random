# SUNO_random

SUNO Simple Prompt Builder V1〜V5 の GitHub Pages 公開用リポジトリです。画面上部の `V1` / `V2` / `V3` / `V4` / `V5` ボタンで、使うプロンプト候補を切り替えます。初めて開いたときは V5 です。

## ファイルの役割

- `index.html`: 画面の外枠とスタイル。候補データの更新時は編集不要です。
- `prompt-data-v1.js` 〜 `prompt-data-v5.js`: 各版のプロンプト候補データ。通常はこれらのファイルだけを編集します。
- `app.js`: 版の切り替え、ランダム抽選、組み立て、保存などの処理。版ごとの説明文・ジャンル置換の既定値・自動トリムで削る順もここにあります。
- `tests/`: 版の切り替えと出力を確かめる E2E テスト（`npm install` のあと `npm test`）。

## 版ごとの違い

| 版 | ベースパターン | Never use / Avoid | 音源解析メモ |
|---|---|---|---|
| V1 | prompt.md の 10 パターン | Never use は V4 と共通、Avoid は専用の 1 行 | なし |
| V2 | V1 ＋ 追加パターン 1 件 | Never use は V4 と共通、Avoid は専用の 1 行 | なし |
| V3 | Glass Cherry Maze を土台に TRANCE × EDM BANGER Vol.31 の 10 曲 | V3 専用の 1 行 | あり |
| V4 | StreetDanceEDM #07 / #08 の 14 曲 | 共通の 1 行 | あり |
| V5 | makina × JRPG 戦闘曲 / 音ゲーのブレイクビーツ / J-club ラップ×歌 / DJ スクラッチの 10 ベース | V5 専用の 1 行 | なし |

歌詞テーマと古文フラグメントは `prompt-data-v4.js` を正本として V1〜V4 で共通です。V5 は歌詞テーマ・古文フラグメント（日本語で書かせる文面）・Never use・Avoid をすべて `prompt-data-v5.js` に専用で持ちます。古文フラグメントは常に出力へ入り、選ばれた歌詞テーマの `Chorus:` 行は古文指示の後ろへ回されます。

## V5 の書き方

- どのベースもサビ（Chorus）を最初の Verse より前に置き、コール＆レスポンスを必ず入れます。
- ジャンル名は `main` 先頭の `Main genre: makina.` の 1 か所だけに書き、他の段落は `the main genre` で指します。ジャンル置換（V5 は既定で ON）の 1 語だけで曲全体が入れ替わります。
- SUNO が固有名詞を弾くため、作品名・アーティスト名は書かず音の特徴で指定します。
- Structure と歌詞テーマには具体的な歌詞の文言を書かず（引用符で語を指定しない）、言葉選びは SUNO 側に任せます。
- ボーカルは全ベース 40 代女性 1 人の whisper-to-scream で、男性パートはありません（Avoid で男性ボーカルを禁止）。
- 言語比率は「英語 70-80%＋残り日本語」「日本語 70-80%＋残り英語」「1 小節内で日英ミックス（2000 年代 J-club 風）」の 3 パターンです。古文フラグメントはどの比率でも日本語で入ります。

## 候補データの更新

1. GitHub で更新したい版の `prompt-data-v*.js` を開き、鉛筆アイコンから編集します。
2. 既存ベースの内容は `PATTERNS` の各 `name` / `bpm` / `main` / `core` / `extra` / `structure` / `vocal` / `ratio` / `theme` を変更します。V3 / V4 の音源解析メモは `REFERENCE` と各パターンの `src` にあります。
3. 版ごとの追加候補は `BPM_EXTRA` / `GENRE_SWAPS` / `LYRICS_RATIOS` を編集します。
4. 全版共通の歌詞テーマ（V4 各パターンの `theme` ＋ `THEME_EXTRA`）、古文フラグメント（`CLASSICAL_FIXED`）、V1 / V2 / V4 共通の `NEVER_USE_FIXED` は `prompt-data-v4.js` で編集します。Avoid は各版のファイルの `AVOID_FIXED`（V1 / V2 は V4 から `hardstyle kicks` / `dubstep wobble` を外した内容）、V3 の Never use は `prompt-data-v3.js` の `NEVER_USE_FIXED` です。
5. 変更を別ブランチにコミットし、Pull Request をマージすると Pages が自動更新されます。公開ページを再読み込みしてください。

データ内容から版を自動判定するため、版番号の手動更新は不要です。候補データを変更すると、その版で端末内に保存された候補欄と選択状態は新しい初期値に切り替わります。履歴とプリセットは残ります。プリセットを呼び出すと、保存時点の古い候補が復元されます。

ブラウザ内でプロンプトを生成します。編集内容、履歴、プリセットは版ごとに端末の `localStorage` に保存され、端末間では同期されません。最後に使った版は次に開いたときも選ばれます。「SUNO AI を開く」の自動入力には、元HTMLの説明どおり別途 Tampermonkey スクリプトが必要です。

公開設定: GitHub Pages → Deploy from a branch → `main` / `(root)`。
