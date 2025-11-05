// eslint.config.js
import pluginCypress from 'eslint-plugin-cypress'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  pluginCypress.configs.recommended,
  {
    rules: {
      ...stylistic.configs.recommended.rules,
      ...pluginCypress.configs.recommended.rules,
    },
  },
]
