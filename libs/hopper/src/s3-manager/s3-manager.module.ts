import { Module, DynamicModule, Provider } from '@nestjs/common';
import { S3Options } from './interfaces/S3Options.interfaces';
import { S3Client } from './s3-client'
import { S3ManagerService } from './s3-manager.service';

@Module({})
export class S3ManagerModule {
  static register(options : S3Options) : DynamicModule {
      
      const providers : Provider[] = [
        {
          provide: S3Client, useValue: new S3Client(options)
        },
        S3ManagerService
      ]
      
      return {
        
        module : S3ManagerModule,
        providers,
        exports : [S3ManagerService]
    }
  }
}
