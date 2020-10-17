//extend Employee
const Employee = require('./Employee.js')
//4 parameters
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //call parent constructor
        super(name, id, email);
        this.github = github;
    }
    //functions
    getRole() {
        return "engineer";
    };

    getGitHub() {
        return this.github;
    }; 
};

module.exports = Engineer;
