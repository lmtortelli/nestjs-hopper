import { 
  Module, 
  DynamicModule 
} from '@nestjs/common';
import { HopperService } from './hopper.service';
import { HopperManagerOptions } from './interfaces/hopper-manager-options';
import { S3ManagerModule } from './s3-manager/s3-manager.module'


@Module({
  providers: [HopperService],
  exports: [HopperService],
})
export class HopperModule {
  static register(options : HopperManagerOptions) : DynamicModule {
    let modules = []
    
    if(options.s3) {
      console.log('testing')
      modules.push(
        S3ManagerModule.register(options.s3)
      )
    }
    
    return {
      module: HopperModule,
      providers : [HopperService],
      imports: modules
    }
  }
}
