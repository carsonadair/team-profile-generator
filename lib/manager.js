const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.office = office;
  }
  
  // Functions to retrieve intern info

    getOffice() {
        return this.office;
    }
  
    getRole() {
      return "Manager";
    }
  }
  
  module.exports = Manager;