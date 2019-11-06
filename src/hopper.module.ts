import { 
  Module, 
  DynamicModule, 


} from '@nestjs/common';
import { HopperService } from './hopper.service';
import { HopperManagerOptions } from './interfaces/hopper-manager-options';
import { HopperS3ManagerModule } from './s3-manager/hopper-s3.module'
import { HopperS3Service } from './s3-manager/hopper-s3.service';


@Module({})
export class HopperModule {
  static register(options : HopperManagerOptions) : DynamicModule {
    let modules = []
    let exportss = []
    
    if(options.s3) {
      modules.push(
        HopperS3ManagerModule.register(options.s3)
      )
      exportss.push(HopperS3ManagerModule)
    }
    
    return {
      module: HopperModule,
      imports: modules,
      providers : [HopperService],
      exports : exportss
    }
  }
}
