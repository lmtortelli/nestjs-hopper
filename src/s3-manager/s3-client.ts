import { Injectable } from '@nestjs/common';
import { S3Options } from './interfaces/S3Options.interface'
import AWS = require('aws-sdk');
import { HopperFile } from './interfaces/HopperFile.interface' 
import { ManagedUpload, CreateBucketOutput, CreateBucketRequest, ListBucketsOutput } from 'aws-sdk/clients/s3';
import { Route53Resolver } from 'aws-sdk';
import { WsArgumentsHost } from '@nestjs/common/interfaces';

@Injectable()
export class S3Client {
    
    private connection : AWS.S3
    
    constructor(
        private readonly options : S3Options
    ) {
        this.connection = new AWS.S3({
            accessKeyId: options.awsAccessKeyId,
            secretAccessKey: options.awsSecretAccessKey,
            region: options.awsRegion
        })
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

    
    public async deleteBucket(bucketName: string): Promise<AWS.Request<{}, AWS.AWSError>> {
        const params = {
            Bucket : bucketName
        }

        return this.connection.deleteBucket(params, (err : Error, data) => {

        })
    }


    findSomeObject(prefix : String) : Promise<AWS.S3.Object> {
        throw new Error("Method not implemented.");
    }


    public async listBuckets(): Promise<AWS.S3.Bucket[] | undefined> {
        
        const { 
            Buckets
        } = await this.connection.listBuckets((err: Error, data: ListBucketsOutput) => {
            
        }).promise()
        

        return Buckets
    }
    
    public async createBucket(bucketName: string): Promise< string | undefined> {
        const params = {
            Bucket : bucketName,
            CreateBucketConfiguration : {
                LocationConstraint: this.options.awsRegion
            }
        }

        const { Location } = await this.connection.createBucket(params, (err: Error, data : CreateBucketOutput) => {
            console.log(err)
        }).promise()

        return Location

    }



}
