import type { ExpressContextFunctionArgument } from '@apollo/server/express4';
import type { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';
import { db } from './db';

export interface Context {
  req: Request;
  res: Response;
  db: PrismaClient;
}

export async function createContext(
  ctx: ExpressContextFunctionArgument,
): Promise<Context> {
  return {
    ...ctx,
    db: db,
  };
}
