import index from "@/defs/index.js";

export default class Component extends index {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.name = data.cost;
    this.name = data.researched || false;
    this.name = data.type;
    this.count = data.count || 0;
  }
}
