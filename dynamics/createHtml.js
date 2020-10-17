// call fs
const { link } = require("fs");

//empty string variable for icon display
var icon = "";

//find selected role and customize as such

function selectRole(currentEmployee) {
     //engineer
     if (currentEmployee.getRole() === "engineer") {
        icon = `<i class="fas fa-glasses"></i>`
        return `GitHub: <a href="https://github.com/${currentEmployee.getGitHub()}">${currentEmployee.getGitHub()}</a>`;
        //intern
     } if (currentEmployee.getRole() === "intern") {
            icon = `<i class="fas fa-user-graduate"></i>`
            return `School: ${currentEmployee.getSchool()}`;
            //manager
        } if (currentEmployee.getRole() === "manager") {
        icon =`<i class="fas fa-coffee"></i>`
        return `Office Number: ${currentEmployee.getOfficeNumber()}`;
    }
};

const memberCard = employeeList => {
    //empty string for html - cannot be re-declared, only updated
    let employeeString = "";
    for (var i = 0; i < employeeList.length; i++) {
        var method = selectRole(employeeList[i]);
        employeeString = employeeString.concat(
            `<div class="card text-white bg-primary m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h3>${employeeList[i].getName()}</h3>
                <h4>${icon} ${employeeList[i].getRole()}</h4>
            </div>
            <div class="card-body bg-light text-dark">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employeeList[i].getId()}</li>
                    <li class="list-group-item">Email: <a class="d-inline" href="mailto:${employeeList[i].getEmail()}">${employeeList[i].getEmail()}</a></li>
                    <li class="list-group-item">${method}</li>
                </ul>
            </div>
        </div>`
        );
    };
    return employeeString;
};

const createHtml = employees => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=decive-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <div>
            <h1 class="text-center bg-danger p-5 m-3 custom-color">My Team</h1>
        </div>
    </header>
    <main>
        <div class="card-columns d-flex justify-content-center flex-wrap">
            ${memberCard(employees)}
        </div>
    </main>
  </body>
  </html> 
`;

}

module.exports = createHtml;

//end