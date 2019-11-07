import { 
  Module, 
  DynamicModule, 


} from '@nestjs/common';
import { HopperManagerOptions } from './interfaces/hopper-manager-options';
import { HopperS3ManagerModule } from './s3-manager/hopper-s3.module'
import { HopperStorageModule } from './local-storage/hopper-storage.module';

@Module({})
export class HopperModule {
  static register(options : HopperManagerOptions) : DynamicModule {
    let imports = []
    let exports = []
    
    if(options.s3) {
      imports.push(
        HopperS3ManagerModule.register(options.s3)
      )
      exports.push(
        HopperS3ManagerModule
      )
    }
    
    if(options.storage) {
      imports.push(
        HopperStorageModule
      )
      exports.push(
        HopperStorageModule
        )
      
    }

    return {
      module: HopperModule,
      imports,
      exports,
    }
  }
}
