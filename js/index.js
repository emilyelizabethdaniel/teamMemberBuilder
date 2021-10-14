const TeamMember = require("./TeamMember");
const TeamManager = require("./TeamManager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");

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
    if (response.employee === "Team Manager") {
        var newEmail = response.email;
        var newName = response.name;
        var newId = response.id;


        inquirer.prompt({
            type: "input",
            message: "what is their office number?",
            name: "office"
        })

        .then(response => {
            var office = response.office;
            console.log(newName);

            function createNewTeamManager(name, id, email, officeNumber) {
                const newTeamManager = new TeamManager(name, id, email, officeNumber);
            }
            let newTeamManager = createNewTeamManager(newName, newId, newEmail, office);
            console.log(newTeamManager);
        })
    } else if (response.employee === "Engineer") {
        inquirer.prompt({
            type: "input",
            message: "what is their gitHub link?",
            name: "gitHub"
        })
    } else if (response.employee === "Intern") {
        inquirer.prompt({
            type: "input",
            message: "Where do they go to school?",
            name: "school"
        })
    }

    // function createNewTeamMember(name, id, email) {
    //     const newTeamMember = new TeamMember(name, id, email);
    //     return newTeamMember;
    // };
    // var newTeamMember = createNewTeamMember(response.name, response.id, response.email);
    // console.log(newTeamMember);
    // allEmployees.push(newTeamMember);
    // console.log(allEmployees);
});



//////////////////////////////////////////////////////////////////////////////////////////////////
//add these in to correct if statements





// .then(response => {
//     //make office number input
//     function createNewTeamManager(name, id, email, officeNumber) {
//         const newTeamManager = new TeamMember(name, id, email);
//         //(response.name, response.id, response.email, email.officeNumber)
//     };

//     //make github input
//     function createNewEngineer(name, id, email, gitHub) {
//         const newEngineer = new Engineer();
//         //(response.name, response.id, response.email, response.gitHub)
//     };

//     //make school input
//     function createNewIntern(name, id, email, school) {
//         const newIntern = new Intern(name, id, email, school);
//         //(response.name, response.id, response.email, response.school)
//         return newIntern;
//     };
//     let newTeamManager = createNewTeamManager(response.name, response.id, response.email, response.officeNumber)
//     let newEngineer = createNewEngineer(response.name, response.id, response.email, response.gitHub)
//     let newIntern = createNewIntern(response.name, response.id, response.email, response.school)

//     console.log(newIntern);
//     console.log(newEngineer);
//     console.log(newTeamManager);
//     console.log(response.name)

// });



//start question cycle over
//if no more employees ->
//push info to html page