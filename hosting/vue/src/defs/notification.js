import Index from "@/defs/index.js";

export default class Notification extends Index {
  constructor(data) {
    super(data);
    this.link = data.link;
    this.color = data.color;
    this.icon = data.icon;
  }
}
