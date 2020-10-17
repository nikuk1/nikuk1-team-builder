//extend Employee
const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
        //call parent constructor
        super(name, id, email);
        this.school = school;
    }
    //functions
    getRole() {
        return "intern";
    };

    getSchool() {
        return this.school;
    };  
};

module.exports = Intern;