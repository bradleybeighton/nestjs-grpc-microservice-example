import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AuthService', 'GetUserById')
  getData() {
    return this.appService.getData();
  }
}
