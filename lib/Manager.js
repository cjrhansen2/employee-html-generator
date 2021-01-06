// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//manager is a child of employee, bring in employee class
const Employee = require('./Employee');
//create manager class, child of employee
class Manager extends Employee {
    constructor(man_name, man_email, man_id, man_officeNumber) {
        super(man_name, man_email, man_id);
        this.officeNumber = man_officeNumber;
    }
    //getters for office number and different role
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
//make Manager class available for export
module.exports = Manager;