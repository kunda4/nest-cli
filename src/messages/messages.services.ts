/* eslint-disable prettier/prettier */
import { MessagesRepository } from "./messages.repostory"
export class MessagesServices {
    messageRepo: MessagesRepository;
  constructor() {
    this.messageRepo = new MessagesRepository();
  }
  findOne(id:string){
    return this.messageRepo.findOne(id)
}
  findAll(){
    return this.messageRepo.findAll()
  }
  create(message:string){
    return this.messageRepo.create(message)
  }
}


