import { Test, TestingModule } from '@nestjs/testing';
import { S3ManagerService } from './s3-manager.service';

describe('S3ManagerService', () => {
  let service: S3ManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3ManagerService],
    }).compile();

    service = module.get<S3ManagerService>(S3ManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
