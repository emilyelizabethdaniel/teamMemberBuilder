const TeamMember = require("./TeamMember");
const TeamManager = require("./TeamManager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");

function addNewEmployee() {

    var addNewEmployee = [{
        type: 'list',
        message: 'would you like to add a new employee?',
        choices: ['yes', 'no'],
        name: 'new'
    }]
    inquirer.prompt(addNewEmployee)
        .then(response => {

            if (response.new === 'yes') {
                inquirer.prompt(primaryQuestions);
            } else if (response.new === 'no') {
                var employeesToAdd = allEmployees;
                fs.writeFile('format.md', employeesToAdd);
            }
        })
}

var primaryQuestions = [{
        type: "list",
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
    },
    {
        type: "list",
        message: "What type of employee would you like to add: ",
        choices: ["Team Manager", "Engineer", "Intern"],
        name: "employee"
    }
]

var allEmployees = [];

inquirer.prompt(primaryQuestions)


.then(response => {
    if (response.add === 'no') {
        console.log('nope!');
        return;
    }
    var newEmail = response.email;
    var newName = response.name;
    var newId = response.id;
    if (response.employee === "Team Manager") {
        inquirer.prompt({
            type: "input",
            message: "what is their office number?",
            name: "office"
        })

        .then(response => {
            var newOffice = response.office;

            function createNewTeamManager(name, id, email, officeNumber) {
                const newTeamManager = new TeamManager(name, id, email, officeNumber);
                return newTeamManager;
            }
            let newTeamManager = createNewTeamManager(newName, newId, newEmail, newOffice);
            console.log(newTeamManager);
        })
    } else if (response.employee === "Engineer") {
        inquirer.prompt({
                type: "input",
                message: "what is their gitHub link?",
                name: "gitHub"
            })
            .then(response => {
                var newGitHub = response.gitHub;

                function createNewEngineer(name, id, email, gitHub) {
                    const newEngineer = new Engineer(name, id, email, gitHub);
                    return newEngineer;
                }
                let newEngineeer = createNewEngineer(newName, newId, newEmail, newGitHub);
                allEmployees.push(newEngineeer);
                console.log(allEmployees);

            })
    } else if (response.employee === "Intern") {
        inquirer.prompt({
                type: "input",
                message: "Where do they go to school?",
                name: "school"
            })
            .then(response => {
                var newSchool = response.school;

                function createNewIntern(name, id, email, school) {
                    const newIntern = new Intern(name, id, email, school);
                    return newIntern;
                }
                let newIntern = createNewIntern(newName, newId, newEmail, newSchool);
                console.log(newIntern);
            })
    }

});