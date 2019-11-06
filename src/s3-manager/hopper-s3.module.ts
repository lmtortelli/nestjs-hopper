import { Module, DynamicModule, Provider } from '@nestjs/common';
import { S3Options } from './interfaces/S3Options.interface';
import { S3Client } from './s3-client'
import { HopperS3Service } from './hopper-s3.service';

@Module({})
export class HopperS3ManagerModule {
  static register(options : S3Options) : DynamicModule {
      
      const providers : Provider[] = [
        {
          provide: S3Client, useValue: new S3Client(options)
        },
        HopperS3Service
      ]
      
      return {
        
        module : HopperS3ManagerModule,
        providers,
        exports : [HopperS3Service]
    }
  }
}
