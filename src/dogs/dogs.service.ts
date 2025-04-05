import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class DogsService {
  constructor(private readonly Catservice: CatsService) {}
  getDog(): any {
    return this.Catservice.getCats();
  }
}
