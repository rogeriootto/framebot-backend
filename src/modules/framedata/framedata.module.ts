import { Module } from '@nestjs/common';
import { FramedataService } from './framedata.service';
import { FramedataController } from './framedata.controller';

@Module({
  controllers: [FramedataController],
  providers: [FramedataService]
})
export class FramedataModule {}
