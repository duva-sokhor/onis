import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteApplicationURI, ApplicationURIModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _ApplicationModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  type: z.string(),
  clientId: z.string(),
  clientSecret: z.string(),
  accessTokenValidity: z.number().int(),
  refreshTokenLifetime: z.number().int(),
  metadata: jsonSchema,
  deleted: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteApplication extends z.infer<typeof _ApplicationModel> {
  appUris: CompleteApplicationURI
}

/**
 * ApplicationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ApplicationModel: z.ZodSchema<CompleteApplication> = z.lazy(() => _ApplicationModel.extend({
  appUris: ApplicationURIModel,
}))
