import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request... Method: ${req.method}, Path: ${req.path}`);  
    console.log('Global middlewere ishlamaoqda')
    next();
  }
}
