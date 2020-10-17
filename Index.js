
// dist/               // rendered output (HTML) and CSS style sheet
// lib/                // classes
// src/                // template helper code
// Index.js            // runs the application

//globabl variables
// create objects from respective exported functions
const inquirer = require('inquirer');
const createHtml = require('./dynamics/createHtml.js');
const writeHTML = require('./dynamics/writeHtml.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
//empty array to store team member objects
var teamList = [];

// function to gather data
function promptUser() {
//Instructions
  console.log
  ("Instructions:\n" +
  "A series of prompts---\n" +
  "Please type an answer in the console for each question, and press enter.\n" +
  "If you do not have a response, just press Enter to skip" +
  "Find the results in your dist folder!");
//prompt the user
return inquirer.prompt([
{
type: 'input',
name: 'name',
message: 'What is the full legal name of your team member?'
},
{
type: 'input',
name: 'email',
message: 'If they have an email address, please enter it.'
},
{
type: 'list',
name: 'role',
message: 'Choose the role of this team member!',
choices: ['Engineer', 'Intern', 'Manager']
}
]);   
};


//function to handle question selection based on team member's role
function Role(employee) {
  //Engineer
  if (employee.role === 'Engineer') {
    return inquirer.prompt([
    {
    type: 'input',
    name: 'github',
    message: 'What is their Github username?'
    }]).then(github => {
        const engineer = new Engineer(employee.name, (teamList.length + 1), employee.email, github.github);
        //push new team member to end of global array
        teamList.push(engineer);
    });
  //Intern
  } else if (employee.role === 'Intern') {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'school',
      message: 'What school does this intern attend?'
    }]).then(school => {
        const intern = new Intern(employee.name, (teamList.length + 1), employee.email, school.school);
        //push new team member to end of global array
        teamList.push(intern);
    });
  //Manager
  } else if (employee.role === 'Manager') {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is their office number?'
        }]).then(officeNumber => {
            const manager = new Manager(employee.name, (teamList.length + 1), employee.email, officeNumber.officeNumber);
            //push new team member to end of global array
            teamList.push(manager);
        });
  }
};

//function to re-start if (y/n)
function runAgain() {
  inquirer.prompt([
  {
  type: 'confirm',
  name: 'add',
  message: 'Would you like to add another team member?',
  default: false
  }]).then(add => {
    if (add.add) {
        //run it back, BUT, do not re-display instructions
        return runApp();
    } else {
          return writeHTML(createHtml(teamList));
    }
  });
};

// prompt user to add more or stop
function runApp() {
promptUser()
.then(employeeInfo => {
return Role(employeeInfo);
}).then(newEmployee => {
return runAgain();
});
};

//let's do this
runApp();

//Future Improvements
// 1.) fix the re-display instructions to NOT display after selecting Yes option in runAgain()