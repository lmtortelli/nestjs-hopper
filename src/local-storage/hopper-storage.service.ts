import { Injectable } from '@nestjs/common';
import { LocalOptions } from './interfaces/LocalOptions.interface';
import { HopperFile } from '../s3-manager/interfaces/HopperFile.interface';

@Injectable()
export class HopperStorageService {
    constructor(private readonly options : LocalOptions) {
        
    }

    public save(hfile : HopperFile)  {
        throw new Error("Method not implemented.");
    }

    public createFile(hfile : HopperFile)  {
        throw new Error("Method not implemented.");
    }

    public removeFile(nameFile : string) {
        throw new Error("Method not implemented.");
    }

    public listFiles() {
        throw new Error("Method not implemented.");
    }

}
