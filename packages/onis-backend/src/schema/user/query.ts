import { builder } from '@/builder';

builder.queryFields((t) => ({
  user: t.prismaField({
    type: 'User',
    nullable: true,
    resolve: async (query, parent, arg, ctx) => {
      return ctx.db.user.findFirst({
        ...query,
      });
    },
  }),
}));
