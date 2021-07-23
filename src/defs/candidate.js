import index from "@/defs/index.js";

export default class Candidate extends index {
  constructor(data) {
    super(data);
    this.gender = data.gender;
    this.age = data.age;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.compensation = data.compensation;
    this.skills = data.skills;
    this.listing = data.listing;
  }
  getFirstName() {
    return this.firstName[0].toUpperCase() + this.firstName.substring(1);
  }
  getLastName() {
    return this.lastName[0].toUpperCase() + this.lastName.substring(1);
  }
  getFullName() {
    return this.getFirstName() + " " + this.getLastName();
  }
}
