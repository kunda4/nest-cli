/* eslint-disable prettier/prettier */
import { MessagesRepository } from "./messages.repostory"
import { Injectable } from "@nestjs/common"
@Injectable()
export class MessagesServices {
  constructor(public messageRepo:MessagesRepository) {}
  findOne(id:string){
    return this.messageRepo.findOne(id)
}
  findAll(){
    return this.messageRepo.findAll()
  }
  create(message:string){
    return this.messageRepo.create(message)
  }
  deleteOne(id:string){
    return this.messageRepo.deleteOne(id)
  }
}


