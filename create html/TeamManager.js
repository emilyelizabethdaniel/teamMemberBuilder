const TeamMember = require("./TeamMember");


class TeamManager extends TeamMember {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }
    getName() {
        return this.name
    }
    getRole() {
        return "Team Manager"
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };

    getOfficeNumber() {
        return this.officeNumber
    }

    toHtml() {
        return `<div class="styling" class="card" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">${this.getName()}</h5>
          <p class="card-text"> 
          Job Title: ${this.getRole()}<br>
          Id: ${this.getId()}<br>
          This: ${this.getEmail()}<br>
          OfficeNumber: ${this.getOfficeNumber()}<br>
          </p>

        </div>
      </div>`
    }
}

module.exports = TeamManager;