import { Test, TestingModule } from '@nestjs/testing';
import { FramedataController } from './framedata.controller';
import { FramedataService } from './framedata.service';

describe('FramedataController', () => {
  let controller: FramedataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FramedataController],
      providers: [FramedataService],
    }).compile();

    controller = module.get<FramedataController>(FramedataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
