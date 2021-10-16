const TeamMember = require("./TeamMember");
const inquirer = require('inquirer');

class Intern extends TeamMember {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
};

module.exports = Intern