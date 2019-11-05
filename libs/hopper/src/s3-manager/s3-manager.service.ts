import { Injectable, Inject } from '@nestjs/common';
import { S3Options } from './interfaces/S3Options.interfaces';
import AWS = require('aws-sdk');
import { S3Client } from './s3-client';
import { HopperFile } from './entities/HopperFile.entity';
import fs = require('fs')
import path = require('path')

@Injectable()
export class S3ManagerService {

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
