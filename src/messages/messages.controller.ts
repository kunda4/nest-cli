import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDtos } from './dtos/create-message.dtos';
import { MessagesServices } from './messages.services';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesServices) {}
  @Get()
  listMessage() {
    return this.messageService.findAll();
  }
  @Post()
  createMessage(@Body() body: createMessageDtos) {
    return this.messageService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param() id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found!');
    }
    return message;
  }
}
