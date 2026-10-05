# SUNO_random

SUNO Simple Prompt Builder V1〜V8 の GitHub Pages 公開用リポジトリです。画面上部の `V1` 〜 `V8` ボタンで、使うプロンプト候補を切り替えます。初めて開いたときは V8 です。

## ファイルの役割

- `index.html`: 画面の外枠とスタイル。候補データの更新時は編集不要です。
- `prompt-data-v1.js` 〜 `prompt-data-v8.js`: 各版のプロンプト候補データ。通常はこれらのファイルだけを編集します。
- `app.js`: 版の切り替え、ランダム抽選、組み立て、保存などの処理。版ごとの説明文・ジャンル置換の既定値・自動トリムで削る順もここにあります。
- `tests/`: 版の切り替えと出力を確かめる E2E テスト（`npm install` のあと `npm test`）。`tests/fixtures/hypertechno-prompts.json` は V7 の元にした 28 曲の入力プロンプトです。

## 版ごとの違い

| 版 | ベースパターン | Never use / Avoid | 音源解析メモ |
|---|---|---|---|
| V1 | prompt.md の 10 パターン | Never use は V4 と共通、Avoid は専用の 1 行 | なし |
| V2 | V1 ＋ 追加パターン 1 件 | Never use は V4 と共通、Avoid は専用の 1 行 | なし |
| V3 | Glass Cherry Maze を土台に TRANCE × EDM BANGER Vol.31 の 10 曲 | V3 専用の 1 行 | あり |
| V4 | StreetDanceEDM #07 / #08 の 14 曲 | 共通の 1 行 | あり |
| V5 | Glitchcore hip-hop × sweet Lolita female vocals の 12 ベース | V5 専用の 1 行 | なし |
| V6 | V2 の 11 パターン（歌詞テーマ・補足・Structure・ボーカル・比率は V2 の 2 倍） | Never use は V4 と共通、Avoid は V2 と同じ 1 行 | なし |
| V7 | V6 の 11 パターン ＋ HyperTechno #06 / #07 の 22 曲（ほか 6 曲は候補欄へ） | 28 曲の入力に出てくる行をすべて候補に持つ | なし |
| V8 | V7 の 33 ベース（Core に V5 の音色を融合）＋ V5 の 12 ベース × メイン 1 行目 14 通り | V7 の候補 ＋ V5 の 1 行（V5 由来のベースは V5 の行） | なし |

歌詞テーマと古文フラグメントは `prompt-data-v4.js` を正本として V1〜V4・V6 で共通です（V6 はさらに追加テーマを持ちます）。V5 は歌詞テーマ・Never use・Avoid を `prompt-data-v5.js` に専用で持ち、古文フラグメントは使いません。古文フラグメントは常に出力へ入り、選ばれた歌詞テーマの `Chorus:` 行は古文指示の後ろへ回されます。

## V5 の書き方

- 全 12 ベースのメイン行は `Genre: Glitchcore hip-hop. Sweet Lolita female vocals, fast rap over a fast, driving beat, bright compressed synth layers with rising tension and sudden drops, distorted bass and shimmering synths.` で始まり、後ろにベースごとの味付けが付きます。メイン行は自動トリムで削られません。
- ジャンル置換は既定 ON で、メイン行先頭の `Glitchcore hip-hop` を `makina x Anime Opening x Addictive tracks x ○○ EDM MiX`（14 候補）のどれかに置き換えます。
- ボーカルは全ベースで sweet Lolita の女性 1 人の速いラップです（Avoid で男性ボーカルを禁止）。BPM は 145〜185 です。
- 言語比率は 11 候補、歌詞テーマは 58 件（12 ベース分 ＋ 追加 46）、Never use は V5 専用の 1 行です。
- Structure とサウンド補足は、V1〜V4 に出てくる区画と段落の種類をすべて持ちます。
- 転調は効きやすい書き方に絞り、最後のサビの直前で 1 回だけ上げます（up a step）。BPM 行に `key change up a step into the final chorus`、Structure は `Final chorus:` 行の中に転調と耳で分かる変化（energy rises / bigger voice）、補足の先頭の `Modulation:` 段落で歌詞の区画タグの中に書かせます（`[Final Chorus: key change up a step, energy rises, bigger voice]`）。独立した `[Key Change]` タグや relative major / half step などの理論用語は使いません。3000 文字を超えてもこの 3 か所は削られません。確実に転調させたいときは、最後のサビ直前の無音・ドロップで切って Suno Studio の Pitch で後半を上げてください。
- 古文フラグメントは使いません。
- 視点・語り手（`PERSPECTIVES` の 12 候補: 一人称の独白 / あなたへの語りかけ / 過去の自分と今の自分の対話 / 私たち など）をテーマとは別に抽選し、テーマの直後に `POV:` の 1 行で入れます。自動トリムでは削られません。

## V6 の書き方

- V2 の 11 パターン（BPM / メイン / Core sound / 補足 / Structure / ボーカル）をそのまま土台にし、ジャンル置換・自動トリム・Avoid も V2 と同じです。
- 歌詞テーマ・サウンド補足・Structure・ボーカル指定・Lyrics 比率は V2 の 2 倍です（テーマ 46 → 92、補足・Structure・ボーカル 11 → 22、比率 9 → 18）。追加分はパターンに紐づけず `prompt-data-v6.js` の `THEME_MORE` / `EXTRA_MORE` / `STRUCTURE_MORE` / `VOCAL_MORE` / `LYRICS_RATIOS` に持ち、ランダム生成で V2 の候補と混ざって抽選されます。
- 古文フラグメントは V4 と同じ文面で常に入ります。
- BPM は V2 の候補に、125 付近（`BPM 122-128.` など 5 行）と half-time（`BPM 62-64 half-time, double-time 124-128 energy.` 〜 `BPM 90-94 half-time, double-time 180-188 energy.` の 7 行）を足しています。

## V7 の書き方

- V6 に、`work4/mp3/HyperTechno/#06` と `#07` にある 28 曲の TXT から、**ユーザーが入力したプロンプト**（`metadata.gpt_description_prompt`）で V6 に無かった要素を足しています。SUNO が変換したタグ（`metadata.tags`）は使っていません。`#06/Remove` には TXT が無いので対象外です。
- 振り分けは入力プロンプトの形で決めています。
  - **ベース（22 曲）**: メイン行が `Genre:` / `Main genre:` で始まる、V6 に無い型。1 曲 1 パターン（No.12〜No.33）にして、BPM・キー / メイン / Core sound / 補足 / Structure / ボーカル / Lyrics 比率 / テーマ / Never use / Avoid（古文の文面を持つ曲は古文も）を入力どおりに持たせています。
  - **書き換え候補（6 曲）**: `Early-2000s Japanese club Hyper Techno …` で始まる V2 形式の書き換え。V6 に無い要素だけを各候補欄に足しています（メイン 5 件、補足 3 件、Structure 1 件、テーマ 5 件、Never use / Avoid の行、古文 1 件。`Future Bass` を差し替えた語 `North East Makina x Anime opening` / `DJ-style x Addictive tracks x glitch` はジャンル置換の候補へ）。
  - **Core sound**: 6 曲の Core sound はすべて V6 に既にあったので足していません。22 曲の Core sound はパターン経由で Core 欄の候補に入ります。
- 古文フラグメントは常に入ります。V7 は `---` 区切りで 4 つの文面を持ち、ランダム生成のたびに 1 つ選びます（パターンが文面を持つときはそれを使います）。
- ジャンル置換は大文字小文字を区別します（グリッチ系メイン行の小文字の `future bass EDM MiX` は置き換えません）。
- 入力の表記ゆれは直しています: 全角スペース → 半角、`Amine` → `Anime`、`suger` → `sugar`、Never use の区切りを `, ` にそろえて重複を除去。

## V8 の書き方

- **No.1〜No.33**: V7 の全ベースそのままで、Core sound だけ元の Core の後ろに `plus …` で V5 の Core sound の音色を足しています。V5 の Core をベース（808 / reese など）・リード（music-box / harpsichord / cowbell など）・質感（glass / static / error-beep など）に分け、元の Core に同じ音色（語）が無いものを 1 つずつ選びます。元の Core に 808 / reese / distorted bass がある曲はベースを足さず、質感を 2 つにします。Core sound の無かった No.5 / No.10 は V5 の音色だけで Core を作っています。
- **No.34〜No.201**: V5 の 12 ベースのメイン行の先頭 `Genre: Glitchcore hip-hop.` を `Genre: makina x Anime Opening x Addictive tracks x ○○ EDM MiX.` に置き換えた 14 通り（Glitchcore hip-hop / jersey club / hyperpop / breakcore / digicore / nightcore / drift phonk / drum & bass / trap / rage / jungle / happy hardcore / future bass / hyper techno）。ほかの欄と Never use / Avoid は V5 のままで、最後のサビ直前の転調（BPM 行・Final chorus 行・Modulation）も残ります。
- 古文フラグメントは V7 と同じく常に 1 つ入ります（V5 由来のベースにも入ります）。
- ベースボタンが 201 個あるので、ベースパターンの欄は高さ 320px でスクロールします。
- 視点・語り手は V5 と同じ 12 候補を `prompt-data-v8.js` の `PERSPECTIVES` に持ち、テーマの直後に `POV:` の 1 行で入れます（古文フラグメントより前）。V1〜V4 / V6 / V7 には視点の候補が無く、カードは表示されません。

## 候補データの更新

1. GitHub で更新したい版の `prompt-data-v*.js` を開き、鉛筆アイコンから編集します。
2. 既存ベースの内容は `PATTERNS` の各 `name` / `bpm` / `main` / `core` / `extra` / `structure` / `vocal` / `ratio` / `theme` を変更します。V3 / V4 の音源解析メモは `REFERENCE` と各パターンの `src` にあります。
3. 版ごとの追加候補は `BPM_EXTRA` / `GENRE_SWAPS` / `LYRICS_RATIOS` を編集します。
4. 全版共通の歌詞テーマ（V4 各パターンの `theme` ＋ `THEME_EXTRA`）、古文フラグメント（`CLASSICAL_FIXED`）、V1 / V2 / V4 共通の `NEVER_USE_FIXED` は `prompt-data-v4.js` で編集します。Avoid は各版のファイルの `AVOID_FIXED`（V1 / V2 は V4 から `hardstyle kicks` / `dubstep wobble` を外した内容）、V3 の Never use は `prompt-data-v3.js` の `NEVER_USE_FIXED` です。
5. 変更を別ブランチにコミットし、Pull Request をマージすると Pages が自動更新されます。公開ページを再読み込みしてください。

データ内容から版を自動判定するため、版番号の手動更新は不要です。候補データを変更すると、その版で端末内に保存された候補欄と選択状態は新しい初期値に切り替わります。履歴とプリセットは残ります。プリセットを呼び出すと、保存時点の古い候補が復元されます。

ブラウザ内でプロンプトを生成します。編集内容、履歴、プリセットは版ごとに端末の `localStorage` に保存され、端末間では同期されません。最後に使った版は次に開いたときも選ばれます。「SUNO AI を開く」の自動入力には、元HTMLの説明どおり別途 Tampermonkey スクリプトが必要です。

公開設定: GitHub Pages → Deploy from a branch → `main` / `(root)`。
