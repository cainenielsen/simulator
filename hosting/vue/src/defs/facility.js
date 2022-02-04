import index from "@/defs/index.js";

export default class Facility extends index {
  constructor(data) {
    super(data);
    this.cost = data.cost;
    this.rent = data.rent;
    this.capacity = data.capacity;
    this.storage = data.storage;
    this.status = data.status;
    this.type = data.type;
    this.traffic = data.traffic;
  }
  getSellPrice() {
    return this.cost * 0.4;
  }
}
