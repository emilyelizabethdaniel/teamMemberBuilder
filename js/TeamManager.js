const TeamMember = require("./TeamMember");


class TeamManager extends TeamMember {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }
    getRole() {
        return "Team Manager"
    }
    toString() {
        return `${super.toString()}Team member office number: ${this.officeNumber}`
    }
}

module.exports = TeamManager;