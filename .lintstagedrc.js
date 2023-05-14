module.exports = {
  // Type check TypeScript files
  '**/*.(js|jsx|ts|tsx)': () =>
    'nx affected --target tsc --noEmit --uncommitted',

  // Run test
  '**/*.spec.(ts|tsx)': () => 'nx affected:test --uncommitted',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': () => [
    `nx affected:lint --uncommitted --fix true`,
    `nx format:write --uncommitted`,
    `git add`
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': () => [`nx format:write --uncommitted`, `git add`]
}
