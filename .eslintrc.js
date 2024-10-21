module.exports = {
  parser: " @typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommend", "plugin:prettier/recommend"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        arrowParens: "avoid",
        useTabs: true,
        trailingComma: "none",
        tabWidth: 4,
      },
    ],
  },
};
