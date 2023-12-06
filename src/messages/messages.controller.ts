import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDtos } from './dtos/create-message.dtos';
import { MessagesServices } from './messages.services';

@Controller('messages')
export class MessagesController {
  messageServise: MessagesServices;
  constructor() {
    this.messageServise = new MessagesServices();
  }
  @Get()
  listMessage() {
    return this.messageServise.findAll();
  }
  @Post()
  createMessage(@Body() body: createMessageDtos) {
    return this.messageServise.create(body.content);
  }
  @Get('/:id')
  getMessage(@Param() id: string) {
    return this.messageServise.findOne(id);
  }
}
