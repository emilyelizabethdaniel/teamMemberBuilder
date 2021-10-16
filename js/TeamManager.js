const TeamMember = require("./TeamMember");
const inquirer = require('inquirer');

class TeamManager extends TeamMember {
    constructor(name, id, email, office) {
            super(name, id, email);
            this.officeNumber = office;
        }
        //methods go here
}

module.exports = TeamManager;