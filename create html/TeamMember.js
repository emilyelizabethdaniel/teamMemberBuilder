class TeamMember {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getRole() {
        return "Team Member"
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }

    toString() {
        return `${this.getRole()} Name : ${this.name}.
            Team member: ${this.id}.
            Team member email: ${this.email}.
`
    }
}

module.exports = TeamMember;