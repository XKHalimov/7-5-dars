import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [LoggerModule],
  exports: [CatsService],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
