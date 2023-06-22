import { Injectable } from '@nestjs/common';
import { CreateFramedatumDto } from './dto/create-framedatum.dto';
import { UpdateFramedatumDto } from './dto/update-framedatum.dto';

@Injectable()
export class FramedataService {
  create(createFramedatumDto: CreateFramedatumDto) {
    return 'This action adds a new framedatum';
  }

  findAll() {
    return `This action returns all framedata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} framedatum`;
  }

  update(id: number, updateFramedatumDto: UpdateFramedatumDto) {
    return `This action updates a #${id} framedatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} framedatum`;
  }
}
