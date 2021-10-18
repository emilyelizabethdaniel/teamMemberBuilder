const TeamMember = require("./TeamMember");
const inquirer = require('inquirer');

class Engineer extends TeamMember {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer"
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
    getGithub() {
        return this.gitHub
    }
    toHtml() {
        return `<div class="styling" class="card" style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title">${this.getName()}</h5>
      <p class="card-text"> 
      Job Title: ${this.getRole()}<br>
      Id: ${this.getId()}<br>
      This: ${this.getEmail()}<br>
      Github: ${this.getGithub()}<br>
      </p>
     
    </div>
  </div>`
    }
};

module.exports = Engineer