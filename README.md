# techbook-template

技術同人誌のテンプレートリポジトリです。新しい同人誌を作成するときは、このリポジトリを利用してください。

## PDF の生成方法

```shell
make run
```

🔖 [グローバル環境を可能な限り汚染せずにMarkdownから組版のPDFを生成（ゆめみ大技林 '23）](https://zenn.dev/yumemi_inc/articles/afe7745cd62af2)

### ローカルビルド

ローカル環境の Node.js を利用するのは後述参照してください。

### GitHub Actions

- 記事追加などで PR を作成すると、自動で PDF が作成される
- タグ「`*版`」や「`*版*刷`」を push すると、電子版と印刷入稿の PDF を添付したリリースを作成する

## 書籍の設定

書籍のタイトルの設定などは、[book/vivliostyle.config.js](book/vivliostyle.config.js) ファイルで行います。

## 原稿の追加方法

- [book/manuscripts](book/manuscripts) ディレクトリの中に、拡張子 `.md` の Markdown ファイルを作成する
- [book/vivliostyle.config.js](book/vivliostyle.config.js) ファイル内の `entry` 配列に、その Markdown ファイル名を追加する

## 文章校正

校正ツール [textlint](https://textlint.github.io/) を利用して、文章校正ができます。なお、この lint ツールの使用は任意です。書き方で悩んだ・校正したい場合など、必要に応じて導入してください。

### ルール

次のルールを導入しています。

- preset-ja-spacing
  - 日本語周りにおけるスペースの有無を決定する
- preset-ja-technical-writing
  - 技術文書向けの textlint ルールプリセット
- textlint-rule-spellcheck-tech-word
  - WEB+DB 用語統一ルールベースの単語チェック
  - （deprecated になっているので置き換えたい）
- Rules for TechBooster
  - TechBooster の [ルール](https://github.com/TechBooster/ReVIEW-Template/tree/master/prh-rules) を利用している
  - iOS に関するルールはほとんどないので適宜追加してください。

その他、スペルチェックのルール `textlint-rule-spellchecker` がありますが、エディターのスペルチェックと競合しやすいので、今回は追加していません。checker` がありますが、エディターのスペルチェックと競合しやすいので、今回は追加していません。VS Code を利用している場合は、プラグイン [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) を追加すれば、スペルチェックが行われ

### ローカル環境で実行する

```shell
make lint
```

### VS Code + Node.js で実行する

ローカルに Node.js 環境がある場合は、VS Code のプラグイン `taichi.vscode-textlint` を導入することで、ファイル保存時に textlint が実行されます。

### VS Code + Docker で実行する

VS Code にプラグイン [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) を追加します。コマンドパレット（ショートカットキー Command + Shift + P）を開いて、`Remote-Containers: Reopen in Container` を実行します。コンテナーが立ち上がったら、執筆を始めてください。ファイル保存時に textlint が自動実行されます。

### 無効

あるファイルを textlint の対象から外したい場合は `.textlintignore` にそのファイルを追加してください。また、ファイル内の特定の文章に対してルールを無効にしたい場合は、次のように記述してください。

```text
<!-- textlint-disable -->

textlint を無効にしたい文章をここに書く

<!-- textlint-enable -->
```

## ローカル環境の Node.js でビルドする

ローカル環境に Node.js がインストールされている場合は、Docker を使わずにビルドできます。

### 準備

yarn v4 を利用するので corepack を有効化する。

```shell
corepack enable
```

または corepack からインストールする（そのときの最新バージョンを指定する）。Node.js のバージョンをあげた場合など、yarn がインストールされていないなどとトラブルになりやすい。nodenv を利用してる場合は、`nodenv rehash` やターミナルの再起動を試してください。

```shell
% corepack use yarn
または
% yarn set version stable
```

もし別の yarn が参照されたら、その yarn を削除する。

```shell
% yarn -v
nodenv: yarn: command not found
The `yarn' command exists in these Node versions:
% which yarn
/Users/user/.anyenv/envs/ndenv/shims/yarn
% rm -rf /Users/user/.anyenv/envs/ndenv/shims/yarn
```

次のコマンドで、ビルドに必要なツールをローカル環境にインストールする。

```shell
yarn install
```

プレス版の PDF をビルドに必要な Ghostscript は、次のコマンドでインストールする。

```shell
brew install ghostscript
brew install xpdf
```

表紙画像を本文 PDF `book/output/ebook.pdf` に挿入する。ただし、表紙画像は `book/cover/cover.png` に限ります。表紙画像を挿入した PDF は `book/output/ebook_covered.pdf` に保存されます。

```shell
yarn cover
```

## サポートするスクリプト

| コマンド | 内容 |
|:--|:--|
| `yarn start` | pdf を生成して開く（`make run` 相当）|
| `yarn lint` | textlint を実行（`make lint` 相当）|
| `yarn pdf` | pdf を生成（`make pdf` 相当）|
| `yarn press` | プレス版の pdf を生成（`make press` 相当）|
| `yarn open` | pdf を開く（`make open` 相当）|
| `yarn clean` | 生成ファイルをすべて削除（`make clean` 相当）|
| `yarn cover` | 表紙画像を本文 PDF に挿入する |
