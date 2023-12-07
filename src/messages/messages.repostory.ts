/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile("messages.json", "utf8")
    const content = JSON.parse(contents)
    return content[id]

  }

  async findAll() {
    const contents = await readFile("messages.json", "utf8")
    const content = JSON.parse(contents)
    return content
  }

  async create(message: string){
    const contents = await readFile("messages.json", "utf8")
    const content = contents.trim()? JSON.parse(contents): {}
    const id = Math.floor(Math.random()*999)
    
    content[id] = {id, message}
    await writeFile('messages.json', JSON.stringify(content))
  };
}
