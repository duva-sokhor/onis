module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  semi: true,
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
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: ["apps/website/lib/utils/wordlist/wordlist.ts"],
      options: {
        quoteProps: "consistent",
      },
    },
  ],
};
