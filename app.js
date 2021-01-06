const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


//make the corresponding questions for all employees and then the corresponding children
//make the list to store all the employee info when ported over to HTML
const employeesList = [];

//must first make a manager before making a team
function inputManager() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter the manager's name: ",
        },
        {
            name: "email",
            type: "input",
            message: "Please enter the manager's email: ",
        },
        {
            name: "id",
            type: "input",
            message: "Please enter the manager's id: ",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Please enter the manager's office number: ",
        },
    ]).then(function(response) {
        const addMan = new Manager(response.name, response.email, response.id, response.officeNumber);
        //add new manager with prompted inputs to list
        employeesList.push(addMan);
        //then prompt users to input more employees
        inputEmployees();
    });
}

function inputIntern() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter the intern's name: "
        },
        {
            name: "email",
            type: "input",
            message: "Please enter the intern's email: "
        },
        {
            name: "id",
            type: "input",
            message: "Please enter the intern's ID: "
        },
        {
            name: "school",
            type: "input",
            message: "Please enter the intern's school: "
        },
    ]).then(function(response) {
        const addInt = new Intern(response.name, response.email, response.id, response.school);
        employeesList.push(addInt);
        inputEmployees();
    })
}

function inputEngineer() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter the engineer's name: "
        },
        {
            name: "email",
            type: "input",
            message: "Please enter the engineer's email: "
        },
        {
            name: "id",
            type: "input",
            message: "Please enter the engineer's ID: "
        },
        {
            name: "github",
            type: "input",
            message: "Please enter the engineer's github: "
        },
    ]).then(function(response) {
        const addEng = new Engineer(response.name, response.email, response.id, response.github);
        employeesList.push(addEng);
        inputEmployees();
    })
}

//make function to input additional employees if desired, as previously referenced in inputManager
function inputEmployees() {
    inquirer.prompt([
        {
            name: "inputEmployee",
            type: "list",
            message: "Do you want to input another employee?",
            choices: [
                "Add another manager",
                "Add an intern",
                "Add an engineer",
                "No additional employees to input"
            ],
        },
    ]).then(function(response) {
        //add different options for the different selected responses
        switch (response.inputEmployee) {
            case "Add another manager":
                inputManager();
                break;
            case "Add an intern":
                inputIntern();
                break;
            case "Add an engineer":
                inputEngineer();
                break;
            case "No additional employees to input":
                bringEmployeesToHTML();
                break;
        }
    });
}

//function that assimilates all inputs and brings it to the HTML template using render
function bringEmployeesToHTML() {
    //use writeFileSync to write to the output html file
    fs.writeFileSync(outputPath, render(employeesList), "utf8");
}

//then call the inputManager function to initiate the process and questions
inputManager();