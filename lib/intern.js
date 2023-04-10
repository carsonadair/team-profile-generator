const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  
  // Functions to retrieve intern info

    getSchool() {
        return this.school;
    }
  
    getRole() {
      return "Intern";
    }
  }
  
  module.exports = Intern;