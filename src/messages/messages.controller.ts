import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { createMessageDtos } from './dtos/create-message.dtos';
import { MessagesServices } from './messages.services';
import { readFile, writeFile } from 'fs/promises';

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
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found!');
    }
    return message;
  }
  @Delete('/:id')
  // async deleteMessage(@Param('id') id: string) {
  //   const message = await this.messageService.deleteOne(id);
  //   if (!message) {
  //     throw new NotFoundException('message not found!');
  //   }
  //   return { message: 'deleted successfuly' };
  // }
  async deleteMessage(@Param('id') id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const content = JSON.parse(contents);

    if (!content[id]) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }

    // Remove the entry associated with the specified ID
    delete content[id];

    // Write the modified content back to the file
    await writeFile('messages.json', JSON.stringify(content, null, 2));

    return { message: `Record with ID ${id} deleted successfully` };
  }
}
