/**
 * @type {import('prettier').Options}
 */
module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  semi: false,
  printWidth: 110,
  arrowParens: "always",
  importOrder: [
    "^@(onis|ee)/(.*)$",
    "^@lib/(.*)$",
    "^@components/(.*)$",
    "^@(server)/(.*)$",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  pluginSearchDirs: false,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
}
