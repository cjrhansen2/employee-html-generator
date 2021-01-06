// TODO: Write code to define and export the Employee class

//define employee, build constructor for the class

class  Employee {
    constructor (emp_name, emp_email, emp_id) {
        this.name = emp_name;
        this.email = emp_email;
        this.id = emp_id;
    }
    //create getters for the class
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    //then create a getter for the role, fits the test by returning "Employee"
    getRole() {
        return "Employee"
    }
};
//then allow employee class to be exported
module.exports = Employee;