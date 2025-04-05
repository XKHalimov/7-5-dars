import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { LoggerModule } from './logger/logger.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [CatsModule, DogsModule,LoggerModule, UsersModule],
  controllers: [CatsController, DogsController],
  providers: [CatsService, DogsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // ✅ global middleware
  }
}
