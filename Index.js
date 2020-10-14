
// dist/               // rendered output (HTML) and CSS style sheet
// lib/                // classes
// src/                // template helper code
// Index.js            // runs the application

// The application must have these classes: 

class Employee {

    name

    id
    
    email
    
    getName()
    
    getId()
    
    getEmail()
    
    getRole() // Returns 'Employee'

}

class Manager extends Employee {

    In addition to Employee's properties and methods, Manager will also have:

    officeNumber
    
    getRole() // Overridden to return 'Manager'

}

class Engineer extends Employee {

    In addition to Employee's properties and methods, Intern will also have:

    github // GitHub username

    getGithub()
    
    getRole() // Overridden to return 'Engineer'
    
    

}

class Intern extends Employee {

In addition to Employee's properties and methods, Intern will also have:

    school

    getSchool()
    
    getRole() // Overridden to return 'Intern'

}

Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.


//EXAMPLES:::

class Character {
    constructor(name = '') {
      this.name = name;
      this.health = Math.floor(Math.random() * 10 + 95);
      this.strength = Math.floor(Math.random() * 5 + 7);
      this.agility = Math.floor(Math.random() * 5 + 7);
    }
  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  }
//examples Continued:::

  const Potion = require('../lib/Potion');

  const Character = require('./Character');
  
  class Player extends Character {
    constructor(name = '') {
      // call parent constructor here:
      super(name);
  
      this.inventory = [new Potion('health'), new Potion()];
    }
  
    getStats() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
