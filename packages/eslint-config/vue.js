import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { config as baseConfig } from './base.js';

/**
 * https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
 * @type {import("eslint").Linter.Config[]}
 */
export const config = defineConfig([
  ...baseConfig,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginVue.configs['flat/essential'].rules,
      'vue/multi-word-component-names': ['error', { ignores: ['index', 'App'] }],
      'vue/max-attributes-per-line': 'off',
    },
  },
]);
