import { prisma } from '@/db'
import type { ExpressContextFunctionArgument } from '@apollo/server/express4'
import type { PrismaClient } from '@onis/prisma/client'
import type { Request, Response } from 'express'

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
