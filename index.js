// Inplementing Node.js File System
const fs = require('fs');

// Inplementing npmjs Inquirer
const inquirer = require('inquirer');

// Declaring Createreadme constant
const CreateReadme = require("./src/Mark.js");

// Inplementing npmjs util
const util = require("util");


// Promtinq to user questions need to fill for creating readme
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
        message: 'Enter project title : ',
        default: '',
        validate: function (answer) {
            if (!answer) {
                return console.log("A valid enter is required");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Entree description to project : ',
        default: '',
        validate: function (answer) {
            if (!answer) {
                return console.log("A valid enter is required");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Enter instalation process description : ',
        default: '',
        validate: function (answer) {
            if (!answer) {
                return console.log("A valid enter is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter project usage description : ',
        default: '',
        validate: function (answer) {
            if (!answer) {
                return console.log("A valid enter is required");
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'License',
        message: 'Chose the license for project : ',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public 2.0',
            'Apache 2.0',
            'MIT',
            'Boost Software 1.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contributing info : '
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter test info : '
    },
    ]);
  };

// Using Util promisify method
const promisified = util.promisify(fs.writeFile);

const promptFeadback = async function() {
    try {

        // Prompt questions
        const responses = await promptUser;
        console.log('Responses : ', responses);
    
        //Create Readme file
        console.log("Creating README ...")
        const markdown = CreateReadme(responses);
        console.log(markdown);
    
        // Write markdown to file
        await promisified('New_README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

promptFeadback();


