module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  // vue" required to lint *.vue files
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
