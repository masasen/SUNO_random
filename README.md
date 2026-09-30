# SUNO_random

SUNO Simple Prompt Builder V1〜V4 の GitHub Pages 公開用リポジトリです。画面上部の `V1` / `V2` / `V3` / `V4` ボタンで、使うプロンプト候補を切り替えます。

## ファイルの役割

- `index.html`: 画面の外枠とスタイル。候補データの更新時は編集不要です。
- `prompt-data-v1.js` 〜 `prompt-data-v4.js`: 各版のプロンプト候補データ。通常はこれらのファイルだけを編集します。
- `app.js`: 版の切り替え、ランダム抽選、組み立て、保存などの処理。版ごとの説明文・ジャンル置換の既定値・自動トリムで削る順もここにあります。
- `tests/`: 版の切り替えと出力を確かめる E2E テスト（`npm install` のあと `npm test`）。

## 版ごとの違い

| 版 | 内容 | Never use / Avoid | 古文フラグメント | 音源解析メモ |
|---|---|---|---|---|
| V1 | prompt.md の 10 パターン ＋ Thema.md の 14 テーマ | 候補からランダム抽選 | 常に入る | なし |
| V2 | V1 ＋ 追加パターン 1 件 | 候補からランダム抽選 | 常に入る | なし |
| V3 | Glass Cherry Maze を土台に TRANCE × EDM BANGER Vol.31 の 10 曲 | 共通の 1 行 | なし | あり |
| V4 | StreetDanceEDM #07 / #08 の 14 曲 | 共通の 1 行 | 常に入る | あり |

古文フラグメントが入る版では、選ばれた歌詞テーマの `Chorus:` 行が古文指示の後ろへ回されます。

## 候補データの更新

1. GitHub で更新したい版の `prompt-data-v*.js` を開き、鉛筆アイコンから編集します。
2. 既存ベースの内容は `PATTERNS` の各 `name` / `bpm` / `main` / `core` / `extra` / `structure` / `vocal` / `ratio` / `theme` を変更します。V3 / V4 の音源解析メモは `REFERENCE` と各パターンの `src` にあります。
3. 共通の追加候補は `BPM_EXTRA` / `GENRE_SWAPS` / `LYRICS_RATIOS` と、歌詞テーマの `THEME_BLOCKS`（V1 / V2）または `THEME_EXTRA`（V3 / V4）を編集します。禁止語と Avoid は `NEVER_USE_SETS` / `AVOID_SETS`（V1 / V2）または `NEVER_USE_FIXED` / `AVOID_FIXED`（V3 / V4）、古文フラグメントは `CLASSICAL_FIXED` です。
4. 変更を別ブランチにコミットし、Pull Request をマージすると Pages が自動更新されます。公開ページを再読み込みしてください。

データ内容から版を自動判定するため、版番号の手動更新は不要です。候補データを変更すると、その版で端末内に保存された候補欄と選択状態は新しい初期値に切り替わります。履歴とプリセットは残ります。プリセットを呼び出すと、保存時点の古い候補が復元されます。

ブラウザ内でプロンプトを生成します。編集内容、履歴、プリセットは版ごとに端末の `localStorage` に保存され、端末間では同期されません。最後に使った版は次に開いたときも選ばれます。「SUNO AI を開く」の自動入力には、元HTMLの説明どおり別途 Tampermonkey スクリプトが必要です。

公開設定: GitHub Pages → Deploy from a branch → `main` / `(root)`。
