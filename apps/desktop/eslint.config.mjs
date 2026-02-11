import { config as reactJsConfig } from '@repo/eslint-config/react-js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...reactJsConfig,
  {
    files: ['src/main.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
];
