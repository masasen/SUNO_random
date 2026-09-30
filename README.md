# SUNO_random

SUNO Simple Prompt Builder V4 の GitHub Pages 公開用リポジトリです。

## ファイルの役割

- `index.html`: 画面の外枠とスタイル。候補データの更新時は編集不要です。
- `prompt-data.js`: プロンプトの候補データ。通常はこのファイルだけを編集します。
- `app.js`: ランダム抽選、組み立て、保存などの処理。候補データの更新時は編集不要です。

## 候補データの更新

1. GitHub で `prompt-data.js` を開き、鉛筆アイコンから編集します。
2. 既存ベースの内容は `PATTERNS` の各 `name` / `bpm` / `main` / `core` / `extra` / `structure` / `vocal` / `ratio` / `theme` を変更します。音源解析メモは `REFERENCE` と各パターンの `src` にあります。
3. 共通の追加候補は `BPM_EXTRA` / `GENRE_SWAPS` / `LYRICS_RATIOS` / `THEME_EXTRA` を編集します。固定文は `NEVER_USE_FIXED` / `AVOID_FIXED` です。
4. 変更を別ブランチにコミットし、Pull Request をマージすると Pages が自動更新されます。公開ページを再読み込みしてください。

データ内容から版を自動判定するため、版番号の手動更新は不要です。候補データを変更すると、端末内に保存された候補欄と選択状態は新しい初期値に切り替わります。履歴とプリセットは残ります。プリセットを呼び出すと、保存時点の古い候補が復元されます。

ブラウザ内でプロンプトを生成します。編集内容、履歴、プリセットは端末ごとの `localStorage` に保存され、端末間では同期されません。「SUNO AI を開く」の自動入力には、元HTMLの説明どおり別途 Tampermonkey スクリプトが必要です。

公開設定: GitHub Pages → Deploy from a branch → `main` / `(root)`。
