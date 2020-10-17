//parent class for Engineer, Intern, and Manager
class Employee {
    //3 parameters
    constructor(name, id, email) {
        //local input
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //functions
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
};

module.exports = Employee;