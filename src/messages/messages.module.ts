import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesServices } from './messages.services';
import { MessagesRepository } from './messages.repostory';

@Module({
  controllers: [MessagesController],
  providers: [MessagesServices, MessagesRepository],
})
export class MessagesModule {}
