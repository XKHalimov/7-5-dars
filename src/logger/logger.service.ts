import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.error(message);
  }
}
