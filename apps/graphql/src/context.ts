import db from "@/db"
import type { ExpressContextFunctionArgument } from "@apollo/server/express4"
import type { Request, Response } from "express"

export interface IContext {
  req: Request
  res: Response
  db: typeof db
}

export async function createContext(ctx: ExpressContextFunctionArgument): Promise<IContext> {
  return {
    ...ctx,
    db: db,
  }
}
