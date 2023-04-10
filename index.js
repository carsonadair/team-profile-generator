const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const Engineer = require("./lib/engineers");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const Directory = path.resolve(__dirname, "dist");
const distPathway = path.join(Directory, "index.html");

const generatefile = require("./src/generatefile.js");

let teamArr = [];
let idArr = [];

function teamGen() {

  function managerGen() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name.";
          },
        },
        {
          type: "input",
          name: "managerID",
          message: "What is your manager's ID number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter a number greater than zero.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email.";
          },
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is your manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter a number greater than zero.";
          },
        },
      ])

      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOffice
        );
        teamArr.push(manager);
        idArr.push(answers.managerID);

        nextMember();
      });
  }
  function nextMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which team member would you like to add next?",
          choices: [
            "Engineer",
            "Intern",
            "I have no more team members to add.",
          ],
        },
      ])
      .then((userChoice) => {

        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            newTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please provide a name.";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {

              if (idArr.includes(answer)) {
                return "This ID is already taken. Please enter a different ID number.";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero.";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid Github username.";
          },
        },
      ])

      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );

        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        nextMember();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name.";
          },
        },
        {
          type: "input",
          name: "internID",
          message: "What is your intern's ID?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArr.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero.";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is your intern's school?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a school.";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        );
        teamArr.push(intern);
        idArr.push(answers.internID);
        nextMember();
      });
  }


  function newTeam() {
    if (!fs.existsSync(Directory)) {
      fs.mkdirSync(Directory);
    }

    fs.writeFileSync(distPathway, generatefile(teamArr), "utf-8");
  }

  managerGen();
}

teamGen();
