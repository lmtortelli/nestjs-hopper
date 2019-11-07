import { Module, DynamicModule, Provider } from '@nestjs/common';
import { HopperStorageService } from './hopper-storage.service';
import { LocalOptions } from './interfaces/LocalOptions.interface';
import { Export } from 'aws-sdk/clients/cloudformation';

@Module({})
export class HopperStorageModule {

  static register(options : LocalOptions) : DynamicModule {
    const exports : Array<any> = [
      HopperStorageService
    ]
    const providers : Provider[] = [
      {
        provide : HopperStorageService, 
        useValue: new HopperStorageService(options)
      }
    ]

    return {
      module: HopperStorageModule,
      providers,
      exports,
    }
  }
}
