import type { ExpressContextFunctionArgument } from '@apollo/server/express4'
import type { PrismaClient } from '@prisma/client'
import type { Request, Response } from 'express'
import { prisma } from './db'

export interface IContext {
  req: Request
  res: Response
  prisma: PrismaClient
}

export async function createContext(
  ctx: ExpressContextFunctionArgument,
): Promise<IContext> {
  return {
    ...ctx,
    prisma: prisma,
  }
}
