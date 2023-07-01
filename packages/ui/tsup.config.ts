import type { Options } from "tsup"
import { defineConfig } from "tsup"

const env = process.env.NODE_ENV

export default defineConfig((options: Options) => ({
  splitting: true,
  entry: ["src/**/*.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  minify: env === "production",
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client"',
    }
  },
  ...options,
}))
