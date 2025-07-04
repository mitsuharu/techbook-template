// local 環境向けの印刷入稿版の config ファイル
const config = require('./vivliostyle.config.js')
module.exports = {
  ...config,
  theme: [...config.theme, 'theme/theme-press'],
  output: {
    path: './output/press.pdf',
    preflight: 'press-ready-local',
    preflightOption: ['gray-scale'],
  },
}
