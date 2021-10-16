const TeamMember = require("./TeamMember");
const inquirer = require('inquirer');

class Engineer extends TeamMember {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    toString() {
        return `${super.toString()}Team member github: ${this.gitHub}`
    }
};

module.exports = Engineer