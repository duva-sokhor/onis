import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import body from 'body-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import { createContext, type IContext } from './context'
import { schema } from './schema'

async function main() {
  // Required logic for integrating with Express
  const app = express()
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app)

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer<IContext>({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  await server.start()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    body.json(),
    expressMiddleware(server, {
      context: createContext,
    }),
  )

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  )

  console.log(`🚀 Server ready at http://localhost:4000/`)
}

main()
