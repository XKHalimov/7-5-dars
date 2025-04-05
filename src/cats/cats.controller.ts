import { Controller, Get, Inject, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { LoggerService } from 'src/logger/logger.service';

export interface Cats {
  id: number;
  name: string;
  category: string;
  age?: string;
}

@Controller()
export class CatsController {
  constructor(
    private readonly CatsService: CatsService,
    private readonly logger: LoggerService,
  ) {}

  @Get('/Cats')
  findAll() {
    this.logger.log('Barcha mushuklar olindi');
    return this.CatsService.findAll();
  }
  @Get('/Cats/:id')
  findOneId(@Param('id') id: string) {
    if (id === "0") {
      this.logger.error("Noto'g'ri Id!!!");
    } else {
      return this.CatsService.findOneId(+id);
    }
  }
}
