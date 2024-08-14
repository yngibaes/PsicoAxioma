module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
    'plugin:react-native/all', // Uses the recommended rules from eslint-plugin-react-native
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    'no-inline-styles': 'off', // Ficticia: Desactiva la regla de estilos en línea, como ejemplo
    'semi': ['error', 'always'], // Ensure semicolons are used
  },
  env: {
    'react-native/react-native': true, // Enables react-native global variables
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
