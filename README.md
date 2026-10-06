# JUG SCAN v1.3.0 — iPhone 17 / image embedded edition

## 重要
- 画面内で使う背景・ロゴ・ピエロ・機種バナー・主要ボタン画像は `index.html` に **data URIとして埋め込み済み**です。
- そのため GitHub Pages の `assets/` パス切れで画像が `?` になる問題を回避します。
- iPhone 17 の実スクリーンショット解像度 1206×2622（CSS幅402px相当）を基準に調整しています。
- 旧Service Workerのキャッシュ問題を避けるため `sw.js` は v1.3.0 で network-first に変更しました。

## GitHub Pagesへ配置
最低限、次をルートに置き換えてください。
- `index.html`
- `sw.js`
- `manifest.webmanifest`
- `icons/`

`styles.source.css` と `app.source.js` は確認用のソースで、公開には必須ではありません。

## 旧版が残る場合
最初の1回だけ `https://<あなたのURL>/?v=130` で開くと旧キャッシュを回避しやすくなります。
画面上部のバージョンが `v1.3.0` になっていることを確認してください。
