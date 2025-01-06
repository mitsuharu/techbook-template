import js from '@eslint/js'

export default [
  {
    ...js.configs.recommended,
    ignores: [
      '.eslintrc.js',
      '.prettierrc.js',
      '**/*.config.js',
      'jest/*',
      '**/.vivliostyle/*',
      'prh-rules/*',
      '.yarn/*',
    ],
    files: ['scripts/*.{js,mjs,cjs,ts}'],
  },
]
