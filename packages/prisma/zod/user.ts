import * as z from "zod"
import * as imports from "../zod-utils"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _UserModel = z.object({
  id: z.string(),
  email: z.string(),
  status: z.string(),
  passwordHash: z.string().nullish(),
  emailVerifiedAt: z.date().nullish(),
  metadata: jsonSchema,
  lastActiveTime: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
