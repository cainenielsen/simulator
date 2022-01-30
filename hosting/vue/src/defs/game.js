import index from "@/defs/index.js";

export default class Game extends index {
  constructor(data) {
    super(data);
    this.businessName = data.businessName;
    this.difficulty = data.difficulty;
  }
}
