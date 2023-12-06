/* eslint-disable prettier/prettier */
import {IsString} from 'class-validator'

export class createMessageDtos {
  @IsString()
  content: string;
}
