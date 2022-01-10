// Inplementing Node.js File System
const fs = require('fs');

// Inplementing npmjs Inquirer
const inquirer = require('inquirer');

// Declaring Createreadme constant
const CreateReadme = require("./utils/Mark.js");


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'UserName',
        message: 'Enter your GitHub username : ',
        default: 'AM0726Github',
        validate: function (answer) {
            if (!answer) {
                return console.log("A valid enter is required.");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'Repo',
        message: 'Enter your GitHub repository name : ', 
        default: 'NodeCPRG',
        validate: function (answer) {
            if (!answer) {
                return console.log("A valid enter is required");
            }
            return true;
        }
      },

      
      {
        type: 'input',
        name: 'Title',
        message: "Enter project title : ",
      },
      {
        type: 'input',
        name: "Description",
        message: "Write a brief description of your project: "
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
  };