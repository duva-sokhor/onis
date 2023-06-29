import { builder } from "@/builder"
import { writeFileSync } from "fs"
import { printSchema } from "graphql"
import { resolve } from "path"

export const schema = builder.toSchema({})

writeFileSync(resolve(__dirname, "../../schema.graphql"), printSchema(schema))
