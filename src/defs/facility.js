import index from "@/defs/index.js";

export default class Facility extends index {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.cost = data.cost;
    this.capacity = data.capacity;
    this.storage = data.storage;
    this.status = data.status;
    this.type = data.type;
  }
  getSellPrice() {
    return this.cost * 0.4;
  }
}
