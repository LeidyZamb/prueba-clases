module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['.ts', '.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        indent: ['error', 2],
        'no-undef': 'off',
        'react/self-closing-comp': 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
    'jsx-quotes': 0,
    'no-trailing-spaces': 0,
  },
};
