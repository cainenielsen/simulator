import index from "@/defs/index.js";

export default class Component extends index {
  constructor(data) {
    super(data);
    this.cost = data.cost;
    this.researched = data.researched || false;
    this.type = data.type;
    this.count = data.count || 0;
  }
}
