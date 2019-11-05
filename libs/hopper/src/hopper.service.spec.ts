import { Test, TestingModule } from '@nestjs/testing';
import { HopperService } from './hopper.service';

describe('HopperService', () => {
  let service: HopperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopperService],
    }).compile();

    service = module.get<HopperService>(HopperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
