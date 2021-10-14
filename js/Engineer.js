const TeamMember = require("./TeamMember");

class Engineer extends TeamMember {
    constructor(gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    //methods go here
};

module.exports = Engineer