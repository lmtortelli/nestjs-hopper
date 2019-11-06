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

    /**
     * Create dynamic Bucket on AWS S3 in runtime
     * 
     * @param bucketName 
     */
    public createBucket(bucketName : string) : Promise<string | undefined> {
        return this.connection.createBucket(bucketName)
    } 

    /**
     * Retrieve a list of all buckets register on AWS Account and AWS Region
     */
    public listBuckets() : Promise<AWS.S3.Bucket[] | undefined > {
        return this.connection.listBuckets()
    } 

    /**
     * Delete a specific bucketName
     * @param bucketName 
     */
    public deleteBucket(bucketName : String) : Promise<boolean> {
        throw new Error("Method not implemented.");
    } 



}
