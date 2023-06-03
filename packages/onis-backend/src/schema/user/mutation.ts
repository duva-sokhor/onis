import { builder } from '@/builder';

builder.mutationFields((t) => ({
  updateExample: t.prismaField({
    type: 'User',
    args: {
      id: t.arg.int({
        required: true,
      }),
      name: t.arg.string({
        required: true,
      }),
    },
    resolve: async (query, parent, { id, name }, ctx) => {
      return ctx.db.user.update({
        ...query,
        data: {
          name,
        },
        where: {
          id,
        },
      });
    },
  }),
}));
