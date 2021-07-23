import index from "@/defs/index.js";

export default class Facility extends index {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.cost = data.cost;
    this.capacity = data.capacity;
    this.status = data.status;
  }
}
