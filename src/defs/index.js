import { idGenerator } from "@/scripts/tools.js";

const generator = new idGenerator();

export default class index {
  constructor(data) {
    this.id = generator.generate();
    this.status = "default" || data.status;
    this.perminant = data.perminant || false;
  }
}

// We should give the index constructor a default status to bring to all objects
// "anything", archived, deleted, and locked would be good ones.
