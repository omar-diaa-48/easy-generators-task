import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const SERVER_PORT = process.env.SERVER_PORT

  const app = await NestFactory.create(AppModule);

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