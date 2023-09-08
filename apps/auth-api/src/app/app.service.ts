import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

import { auth } from '@nestjs-grpc-microservice-example/protos';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  authService: auth.AuthServiceClient;

  constructor(@Inject('AUTH_PACKAGE') private authClient: ClientGrpc) {}

  onModuleInit() {
    this.authService =
      this.authClient.getService<auth.AuthServiceClient>('AuthService');
  }

  getData(): Promise<auth.User> {
    return lastValueFrom(
      this.authService.getUserById({
        id: '1',
      })
    );
  }
}
