import type { PrismaClient } from "../client"

function softDeleteMiddleware(prisma: PrismaClient) {
  /***********************************/
  /* SOFT DELETE MIDDLEWARE */
  /***********************************/
  prisma.$extends({
    name: "soft-delete",
    query: {
      $allModels: {
        async findMany({ args, query }) {
          // inject read filter
          args.where = { deleted: null, ...args }
          return query(args)
        },

        // ... other query methods like findUnique, etc.

        async delete({ model, args }) {
          // translate "delete" to "update"
          // eslint-disable @typescript-eslint/no-explicit-any
          return (prisma as any)[model].update({
            ...args,
            data: { deleted: new Date() },
          })
        },

        // ... deleteMany
      },
    },
  })
}

export default softDeleteMiddleware
