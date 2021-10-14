const TeamMember = require("./TeamMember");

class TeamManager extends TeamMember {
    constructor(name, id, email, officeNumber) {
            super(name, id, email);
            this.officeNumber = officeNumber;
        }
        //methods go here
}

module.exports = TeamManager;