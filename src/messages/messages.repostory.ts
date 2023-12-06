/* eslint-disable prettier/prettier */
import { readFile, writeFile } from "fs/promises";
export class MessagesRepostory {
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

  async create(messages: string){

  };
}
