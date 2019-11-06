# Hopper
## A NestJS Storage Manegement Module


![Build Status](https://travis-ci.org/lmtortelli/nestjs-hopper.svg?branch=master)


The Hopper storage management module is designed to facilitate file maintenance across different storage services. It is currently under development, containing the AWS S3 and Local Storage services available today.

  - Local Storage
  - AWS S3 Bucket


This module was developed on top of the [NestJS framework](https://nestjs.com/).

# Quick Start

### Installation:

##### Yarn

```
yarn add @lmtortelli/hopper
```

##### NPM
```
npm i @lmtortelli/hopper --save
```

### First Use:

The use of this module is extremely simple, first the HopperModule module will be registered.

```
import { Module } from '@nestjs/common';
import { HopperModule } from '@lmtortelli/hopper'


@Module({
  imports: [
    HopperModule.register({
      s3 : {
        awsAccessKeyId : "****",
        awsSecretAccessKey : "****",
        awsBucketName  : "bucket-name",
        awsRegion : 'region-name'
      }
    })
  ],
})
export class AppModule { }

```

In this example, we are instantiating the storage module on AWS S3. This module is instantiated on demand, not using resources unnecessarily in the application.

The HopperModule contains its "HopperManagerOptions" interface for options to assist in creating the instances of each service. See below.

```
import { S3Options } from '../s3-manager/interfaces/S3Options.interface'

export interface HopperManagerOptions {
    s3? : S3Options
}

```

It currently only contains the "s3" property, which is an interface to the AWS S3 services instance options. The AWS S3 interface is known as "S3Options" and can be seen below.

```
export interface S3Options {
    awsBucketName: string;
    awsAccessKeyId: string;
    awsSecretAccessKey: string;
    awsRegion : string;
}
```

# New Features!

| Version | README |
| ------ | ------ |
| 0.1.0 | First build version |




### Todos

 - All CRUD methods for AWS S3
 - Full services for Local Storage


License
----

MIT

# Author:
#### @lmtortelli (lmtortelli@gmail.com)
