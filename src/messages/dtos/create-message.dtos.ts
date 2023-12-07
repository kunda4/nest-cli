/* eslint-disable prettier/prettier */
import {IsString} from 'class-validator'
import { MessagesServices } from '../messages.services';
import { MessagesRepository } from '../messages.repostory';

export class createMessageDtos {
  @IsString()
  content: string;
  provider: [MessagesServices, MessagesRepository]
}
