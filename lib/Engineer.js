// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// require the employee class definition
const Employee = require('./Employee');

// make engineer class, child of employee with github
class Engineer extends Employee {
    //same as employee constructor with added github property
    constructor(eng_name, eng_email, eng_id, eng_github) {
        super(eng_name, eng_email, eng_id);
        this.github = eng_github;
    }
    //make unique getters for engineers
    getGithub() {
        return this.github;
    }
    //getRole returns "engineer" rather than employee
    getRole() {
        return "Engineer";
    }
};
//export the engineer class
module.exports = Engineer;
