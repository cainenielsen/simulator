import index from "@/defs/index.js";

export default class Position extends index {
  constructor(data) {
    super(data);
    this.compensation = data.compensation;
    this.type = data.type;
    this.level = data.level;
    this.location = data.location;
    this.status = data.status;
    this.holder = data.holder;
    this.listed = false;
    this.restricted = data.restricted || false;
    this.selectedTask = data.selectedTask || null;
    this.taskComplete = 0;
  }
}