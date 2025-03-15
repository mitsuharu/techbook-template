module.exports = {
  title: '技術同人誌テンプレート_title',
  author: '技術同人誌テンプレート_author',
  language: 'ja',
  size: 'A5',
  theme: [
    '@vivliostyle/theme-base@1.0.1', // テーマが 2.0.0 に対応したら削除してください。
    '@vivliostyle/theme-techbook@1.0.1', // テーマが 2.0.0 に対応したら削除してください。
    'vivliostyle-theme-macneko-techbook@0.2.0',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp@0.1.3',
    'theme/theme-custom',
  ],
  entry: [
    // 目次
    'index.md',
    // はじめに
    'preface.md',
    // 各章の原稿
    'sample_chapter.md',

    // 著者紹介
    'authors.md',
    // 奥付
    'colophon.md',
  ],
  entryContext: './manuscripts',
  output: ['output/ebook.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
}
