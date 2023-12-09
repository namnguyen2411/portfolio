module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        trailingComma: 'none',
        semi: false,
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto'
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
