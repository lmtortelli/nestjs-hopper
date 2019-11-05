import { Injectable } from '@nestjs/common';
import { S3Options } from './interfaces/S3Options.interfaces'
import AWS = require('aws-sdk');
import { HopperFile } from './entities/HopperFile.entity' 
import { ManagedUpload } from 'aws-sdk/clients/s3';

@Injectable()
export class S3Client {
    private connection : AWS.S3

    constructor(
        private readonly options : S3Options
    ) {
        this.connection = new AWS.S3({region: options.awsRegion})
        this.connection.config.accessKeyId = options.awsAccessKeyId
        this.connection.config.secretAccessKey = options.awsSecretAccessKey
    }

    public async upload (hfile : HopperFile) : Promise<string> {
        const params = {
            Bucket : this.options.awsBucketName,
            Key : hfile.filename+'.'+hfile.type,
            Body : hfile.file
        }

        const {
            Location
        } =  await this.connection.upload(params, {}, (err: Error, data: ManagedUpload.SendData) => {

        },).promise()

        return Location
    }

}
