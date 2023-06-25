module.exports = {
  '(apps|packages)/**/*.{js,ts,jsx,tsx}': () => [
    `prettier --write`,
    `git add`,
    'eslint --fix'
  ],
  '*.json': () => ['prettier --write', 'git add'],
  'packages/prisma/schema.prisma': () => ['prisma format']
}
