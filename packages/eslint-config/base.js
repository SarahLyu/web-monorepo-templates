import js from '@eslint/js';
import json from '@eslint/json';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import securityPlugin from 'eslint-plugin-security';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export const config = defineConfig([
  globalIgnores(['**/dist/**', '**/build/**', '**/node_modules/**', '**/*.d.ts']),
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}'],
    plugins: { js, prettier: prettierPlugin, import: importPlugin, security: securityPlugin },
    extends: ['js/recommended'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    rules: {
      ...securityPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          useTabs: false,
          tabWidth: 2,
          semi: true,
          printWidth: 120,
          endOfLine: 'auto',
          singleQuote: true,
          trailingComma: 'es5',
          arrowParens: 'avoid',
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'import/default': 'error',
      'import/export': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-deprecated': 'warn',
      'import/no-dynamic-require': 'error',
      'import/no-internal-modules': 'off',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-relative-parent-imports': 'off',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
            orderImportKind: 'ignore',
          },
          'newlines-between': 'always',
          distinctGroup: true,
          warnOnUnassignedImports: false,
        },
      ],
      'max-depth': ['warn', 4],
      'max-lines-per-function': [
        'warn',
        {
          max: 200,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: false }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-var': 'error',
      'require-await': 'error',
      semi: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
]);
