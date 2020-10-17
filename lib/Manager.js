//extend Employee
const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //call parent constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //functions
    getRole() {
        return "manager";
    };

    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;