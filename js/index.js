/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//required packages
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TeamMember = require("./TeamMember");
const TeamManager = require("./TeamManager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//variables
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var allEmployees = [];
var primaryQuestions = [{
        type: "input",
        message: "input employee name: ",
        name: "name",
    },
    {
        type: "input",
        message: "input employee id: ",
        name: "id",
    },
    {
        type: "email",
        message: "input employee email: ",
        name: "email",
    },
    {
        type: "list",
        message: "What type of employee would you like to add: ",
        choices: ["Team Manager", "Engineer", "Intern"],
        name: "employee"
    }
];
var addNewEmployee = {
    type: 'list',
    message: 'would you like to add a new employee?',
    choices: ['yes', 'no'],
    name: 'new'
};
var internQuesiton = {
    type: "input",
    message: "Where do they go to school?",
    name: "school"
};
var engineerQuestion = {
    type: "input",
    message: "what is their gitHub link?",
    name: "gitHub"
};
var managerQuestion = {
    type: "input",
    message: "what is their office number?",
    name: "office"
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//inquirer 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function askAboutEmployees() {
    inquirer.prompt(primaryQuestions)
        .then(function(primaryResp) {

            var newEmail = primaryResp.email;
            var newName = primaryResp.name;
            var newId = primaryResp.id;

            if (primaryResp.employee === "Team Manager") {
                inquirer.prompt([managerQuestion, addNewEmployee]).then(response => {
                    var manager = new TeamManager(newName, newId, newEmail, response.office);
                    allEmployees.push(manager);
                    if (response.new === 'yes') {
                        askAboutEmployees();
                    } else if (response.new === 'no') {
                        stringThemAll();
                    }
                })
            } else if (primaryResp.employee === "Engineer") {
                inquirer.prompt([engineerQuestion, addNewEmployee]).then(response => {
                    var engineer = new Engineer(newName, newId, newEmail, response.gitHub);
                    allEmployees.push(engineer);
                    if (response.new === 'yes') {
                        askAboutEmployees();
                    } else if (response.new === 'no') {
                        stringThemAll();
                    }
                })
            } else if (primaryResp.employee === "Intern") {
                inquirer.prompt([internQuesiton, addNewEmployee]).then(response => {
                    var intern = new Intern(newName, newId, newEmail, response.school);
                    allEmployees.push(intern);
                    if (response.new === 'yes') {
                        askAboutEmployees();
                    } else if (response.new === 'no') {
                        stringThemAll();
                    }
                })
            }
        }).catch(err => {
            console.log("oops");
        })

}
askAboutEmployees();

function stringThemAll() {

    let result = "";
    allEmployees.forEach(employee => {
        var employeeString = employee.toString();
        result = result + employeeString;
    })
    fs.writeFile('format.html', result, (err) => {

        console.log(err);
    });
};