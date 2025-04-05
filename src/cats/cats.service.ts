import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'node:fs';
import { Cats } from './cats.controller';

@Injectable()
export class CatsService {
  private filePath = join(process.cwd(), 'src', 'Cats.json');
  findAll(): Array<Cats> {
    const Catsfile = fs.readFileSync(this.filePath, 'utf8');
    const Cats = JSON.parse(Catsfile);
    return Cats;
  }
  findOneId(id: number): any {
    const Catsfile = fs.readFileSync(this.filePath, 'utf8');
    const Cats = JSON.parse(Catsfile);
    const cat = Cats.find((Cats) => Cats.id === id);
    if (cat) {
      return cat;
    } else {
      return 'Bunday id mavjut emas!';
    }
  }
  getCats(){
    return`Cats.Servisdan malumotlar olindi`  
  }
}
