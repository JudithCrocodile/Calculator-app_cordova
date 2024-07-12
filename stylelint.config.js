module.exports = {
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],

    'scss/at-import-partial-extension': 'always',
    'scss/at-import-partial-extension-blacklist': ['']
  },
  ignoreFiles: ['**/*.js', '**/*.md'],
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html',
    'stylelint-config-html/html',
    'stylelint-config-html/xml',
    'stylelint-config-html/vue',
    'stylelint-config-html/svelte',
    'stylelint-config-html/astro',
    'stylelint-config-html/php'
  ],
  ignore: ['custom-elements']
}
