import { auth } from '@nestjs-grpc-microservice-example/protos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getData(): auth.User {
    return {
      id: '1',
      email: 'john.smith@johnsmith.com',
      firstName: 'John',
      lastName: 'Smith',
    };
  }
}
