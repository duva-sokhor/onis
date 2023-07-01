module.exports = {
  "(apps|packages)/**/*.{js,ts,jsx,tsx}": [`pnpm prettier --write`, "pnpm eslint --fix"],
  "*.json": ["prettier --write"],
  "packages/prisma/schema.prisma": ["pnpm prisma format"],
}
