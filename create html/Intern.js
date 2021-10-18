const TeamMember = require("./TeamMember");
const inquirer = require('inquirer');

class Intern extends TeamMember {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
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
    getSchool() {
        return this.school
    }
    toHtml() {
        return `<div class="styling" class="card" style="width: 18rem;">
     
        <div class="card-body">
          <h5 class="card-title">${this.getName()}</h5>
          <p class="card-text"> 
          Job Title: ${this.getRole()}<br>
          Id: ${this.getId()}<br>
          This: ${this.getEmail()}<br>
          School: ${this.getSchool()}<br>
          </p>

        </div>
      </div>`
    }
};

module.exports = Intern