import { S3Options } from '../s3-manager/interfaces/S3Options.interface'
import { LocalOptions } from '../local-storage/interfaces/LocalOptions.interface';

export interface HopperManagerOptions {
    s3? : S3Options,
    storage? : LocalOptions
}
