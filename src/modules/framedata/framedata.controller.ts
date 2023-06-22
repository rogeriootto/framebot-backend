import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FramedataService } from './framedata.service';
import { CreateFramedatumDto } from './dto/create-framedatum.dto';
import { UpdateFramedatumDto } from './dto/update-framedatum.dto';

@Controller('framedata')
export class FramedataController {
  constructor(private readonly framedataService: FramedataService) {}

  @Post()
  create(@Body() createFramedatumDto: CreateFramedatumDto) {
    return this.framedataService.create(createFramedatumDto);
  }

  @Get()
  findAll() {
    return this.framedataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.framedataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFramedatumDto: UpdateFramedatumDto) {
    return this.framedataService.update(+id, updateFramedatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.framedataService.remove(+id);
  }
}
