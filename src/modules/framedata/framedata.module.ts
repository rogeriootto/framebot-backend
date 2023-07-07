import { Module } from '@nestjs/common';
import { FramedataService } from './framedata.service';
import { FramedataController } from './framedata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Framedata } from './entities/framedatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Framedata])],
  controllers: [FramedataController],
  providers: [FramedataService]
})
export class FramedataModule {}
