import { PartialType } from '@nestjs/mapped-types';
import { CreateFramedatumDto } from './create-framedatum.dto';

export class UpdateFramedatumDto extends PartialType(CreateFramedatumDto) {}
