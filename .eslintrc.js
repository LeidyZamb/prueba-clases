module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    'indent': ['error', 2],
    'react-native/no-inline-styles': 0,
    'jsx-quotes': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'react/self-closing-comp': 'off',
  },
};
