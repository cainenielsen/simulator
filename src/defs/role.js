import index from "@/defs/index.js";

export default class Role extends index {
  constructor(data) {
    super(data);
    this.name = data.name;
    if (typeof data.selectable != "undefined") {
      this.selectable = data.selectable;
    } else {
      this.selectable = true;
    }
    this.researched = data.researched || false;
    this.researchCost = data.researchCost;
    if (typeof data.researchable != "undefined") {
      this.selectable = data.researchable;
    } else {
      this.researchable = true;
    }
    this.tasks = data.tasks;
  }
}
