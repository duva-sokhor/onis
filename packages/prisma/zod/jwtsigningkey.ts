import * as z from "zod"
import * as imports from "../zod-utils"

export const _JwtSigningKeyModel = z.object({
  id: z.string(),
  key: z.string(),
  status: z.string(),
  algorithm: z.string(),
  createdAt: z.date(),
})
