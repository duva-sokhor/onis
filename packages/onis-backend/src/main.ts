import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import 'module-alias/register';
import { AppModule } from './oauth2/app.module';
import { schema } from './schema';

async function bootstrap() {
  const expressApp = express();
  const httpServer = http.createServer(expressApp);
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  const apolloServer = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();
  app.use(cors(), bodyParser.json());
  app.use('/graphql', expressMiddleware(apolloServer));

  await app.init();

  await httpServer.listen({ port: 4000 });
  console.log(`🚀 Nest Server ready at http://localhost:4000`);
  console.log(`🚀 Apollo Server ready at http://localhost:4000/graphql`);
}

bootstrap();
