import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
