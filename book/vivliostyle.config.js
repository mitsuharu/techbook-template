module.exports = {
  title: '技術同人誌テンプレート_title',
  author: '技術同人誌テンプレート_author',
  language: 'ja',
  size: 'A5',
  theme: [
    'vivliostyle-theme-macneko-techbook',
    'theme/theme.css'
  ],
  entry: [
    // 目次
    'index.md',
    // はじめに
    'preface.md',
    // 各章の原稿
    'chapter_01.md',
    
    // 著者紹介
    'authors.md',
    // 奥付
    'colophon.md'
  ],
  entryContext: './manuscripts',
  output: [
    'output/ebook.pdf',
  ],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
}
