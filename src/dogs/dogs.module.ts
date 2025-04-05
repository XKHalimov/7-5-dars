import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [CatsModule], // ✅ Kiritishni unutmang
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule {}
