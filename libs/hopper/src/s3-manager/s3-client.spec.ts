import { Test, TestingModule } from '@nestjs/testing';
import { S3Client } from './s3-client';

describe('S3Client', () => {
  let provider: S3Client;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3Client],
    }).compile();

    provider = module.get<S3Client>(S3Client);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
