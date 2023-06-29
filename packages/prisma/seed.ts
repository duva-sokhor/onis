import prisma from "./src"

async function main() {
  console.log("Start seeding...")
}

main()

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
