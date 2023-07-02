import prisma from "@/db"
import SchemaBuilder from "@pothos/core"
import PrismaPlugin from "@pothos/plugin-prisma"
import { DateTimeResolver } from "graphql-scalars"

import type PrismaTypes from "@onis/prisma/pothos"

import { IContext } from "./context"

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  Context: IContext
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
  }
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
})

builder.queryType({})
builder.mutationType({})

builder.addScalarType("DateTime", DateTimeResolver, {})
