const Employee = require("./employees");

class Manager extends Employee {
  constructor(name, id, email, office) {
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