const { endOfLine } = require('./.prettierrc');

module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-native/no-inline-styles': 'off',
  },
};
