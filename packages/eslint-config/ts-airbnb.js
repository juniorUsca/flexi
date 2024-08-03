const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    commonjs: true,
    es2024: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'airbnb-typescript/base', 'turbo'],
  overrides: [
    // {
    //   files: ["*.js?(x)", "*.ts?(x)"],
    // },

    // {
    //   extends: ['plugin:@typescript-eslint/disable-type-checked'],
    //   files: ['./**/*.js'],
    // },
  ],
  ignorePatterns: [
    // ".*.js",
    "node_modules/",
    "dist/",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': ['error', { exceptMethods: ['connect'] }],
    '@typescript-eslint/class-methods-use-this': ['error', { exceptMethods: ['connect'] }],
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'max-len': ['error', { code: 120, ignoreTemplateLiterals: true }],
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
