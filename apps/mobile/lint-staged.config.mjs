/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '**/*.{css,scss,vue}': ['stylelint --fix --cache --quiet'],
  '*': ['eslint --fix --cache --quiet'],
};
