/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '**/*.{css,scss}': ['stylelint --fix --cache --quiet'],
  '*': ['eslint --fix --cache --quiet'],
};
