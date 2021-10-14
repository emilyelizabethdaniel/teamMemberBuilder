const TeamMember = require("./TeamMember");
const TeamManager = require("./TeamManager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");

var primaryQuestions = [{
        type: "checkbox",
        message: "would you like to add a new employee?",
        choices: ['yes', 'no'],
        name: "add"
    },
    {
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
    }
]
inquirer.prompt(primaryQuestions)

.then(response => {
    console.log(response.name);
});