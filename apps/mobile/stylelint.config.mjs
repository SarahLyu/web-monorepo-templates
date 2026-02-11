export default {
  extends: ['@repo/stylelint-config/vue'],
  rules: {
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep'] }],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
};
