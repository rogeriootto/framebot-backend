import { Test, TestingModule } from '@nestjs/testing';
import { FramedataService } from './framedata.service';

describe('FramedataService', () => {
  let service: FramedataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FramedataService],
    }).compile();

    service = module.get<FramedataService>(FramedataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
