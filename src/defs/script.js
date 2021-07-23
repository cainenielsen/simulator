import index from "@/defs/index.js";

export default class Script extends index {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.name = data.cost;
    this.name = data.researched;
    this.name = data.type;
    this.count = data.count || 0;
  }
}
