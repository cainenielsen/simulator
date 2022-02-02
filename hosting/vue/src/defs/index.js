import { idGenerator } from "@/scripts/tools.js";

const generator = new idGenerator();

export default class index {
  constructor(data) {
    this.id = generator.generate();
    this.name = data.name || "no name";
    this.tag = data.tag || null;
    this.dateCreated = new Date();
    this.status = "default" || data.status;
    this.permanent = data.permanent || false;
  }
}

// We should give the index constructor a default status to bring to all objects
// "anything", archived, deleted, and locked would be good ones.
