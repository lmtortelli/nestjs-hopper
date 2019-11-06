import { Injectable, Inject } from '@nestjs/common';
import { S3Options } from './interfaces/S3Options.interface';
import AWS = require('aws-sdk');
import { S3Client } from './s3-client';
import { HopperFile } from './interfaces/HopperFile.interface';

@Injectable()
export class HopperS3Service {

    constructor (
        private connection : S3Client)
    {}

    /**
     * 
     * @param hfile 
     * @returns string
     */
    public async upload(hfile : HopperFile) : Promise<string> {

        return this.connection.upload(hfile)
    }

}
