import SchemaBuilder from '@pothos/core';
import DirectivePlugin from '@pothos/plugin-directives';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import ValidationPlugin from '@pothos/plugin-validation';
import { GraphQLError } from 'graphql';
import type { Context } from './context';
import { db } from './db';
import ShieldPlugin from './shield/plugin';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Context: Context;
}>({
  plugins: [PrismaPlugin, ValidationPlugin, DirectivePlugin, ShieldPlugin],
  prisma: {
    client: db,
  },
  validationOptions: {
    // optionally customize how errors are formatted
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationError: (zodError, args, context, info) => {
      // the default behavior is to just throw the zod error directly
      // return zodError
      return new GraphQLError(zodError.errors[0]?.message ?? '', {
        extensions: {
          code: 'VALIDATION_ERROR',
          issues: zodError.issues,
        },
      });
    },
  },
});
