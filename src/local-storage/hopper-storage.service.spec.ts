import { Test, TestingModule } from '@nestjs/testing';
import { HopperStorageService } from './hopper-storage.service';

describe('LocalStorageService', () => {
  let service: HopperStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopperStorageService],
    }).compile();

    service = module.get<HopperStorageService>(HopperStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
