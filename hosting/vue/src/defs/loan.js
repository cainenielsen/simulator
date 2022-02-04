import index from "@/defs/index.js";

export default class Loan extends index {
  constructor(data) {
    super(data);
    this.amount = data.amount;
    this.cost = data.cost;
    this.interest = data.interest;
    this.payOffAmount = data.amount + data.amount * this.interest;
  }
}
