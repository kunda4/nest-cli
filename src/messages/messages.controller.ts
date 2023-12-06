import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDtos } from './dtos/create-message.dtos';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {}
  @Post()
  createMessage(@Body() body: createMessageDtos) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
