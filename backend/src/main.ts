import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const SERVER_PORT = process.env.SERVER_PORT

  const app = await NestFactory.create(AppModule);

  const whitelist = [process.env.BACKEND_URL, process.env.FRONTEND_URL];

  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })

  await app.listen(SERVER_PORT);
}

bootstrap()
  .then(() => {
    console.log('This service is up and running')
  })
  .catch((error) => {
    console.error('This service failed to start')
    console.error(error)
  })