import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService {
 private logger = new Logger('HTTP');
  static createLogger: any;

 async createLogger(methodName:string):Promise<void> {
    this.logger.log(
        `logger enabled -${methodName}`,
      );
 }
}
