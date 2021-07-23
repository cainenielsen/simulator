import index from "@/defs/index.js";

export default class Resource extends index {
  constructor(data) {
    super(data);
    this.tag = data.tag;
    this.name = data.name;
    this.cost = data.cost;
    this.purchased = data.purchased;
    this.type = data.type;
  }
}
