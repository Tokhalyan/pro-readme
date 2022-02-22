// Needed packages for the application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const fs = require('fs');


const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What packages have been installed for this project (Required)',
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What can be your project used for? (Required)',
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for the project? (Required)',
            choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"],
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Who are the contributors of this project?",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'input',
            name: 'test',
            message: "What command should be used to run tests",
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'username',
            message: "Provide your GitHub username",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'input',
            name: 'email',
            message: "Provide an email address for any questions about the repo",
            validate: value => value ? true : 'I need a value to continue'
        }
    ]
    

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing the app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Your README file has been successfully generated");
            writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
        })
}

init();

