module.exports = {
  extends: ["next", "turbo", "prettier"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
      react: {
        version: "detect",
      },
      "import/ignore": ["node_modules"],
    },
  },
}
