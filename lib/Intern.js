// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// inherit employee class for child intern
const Employee = require('./Employee');
//make intern, child of employee
class Intern extends Employee {
    constructor(int_name, int_email, int_id, int_school) {
        super(int_name, int_email, int_id);
        this.school = int_school;
    }
    //make getters for intern properties
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};
//export intern class
module.exports = Intern;