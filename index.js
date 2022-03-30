// TODO: Include packages needed for this application
const util = require('util');
const inquirer = require('inquirer');
const fs = require('fs');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'TitleOfProject',
            message: 'What is the Title of your Project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the use of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install this Project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the correct license used in this project',
            choices: [
                'MIT',
                'GPLv2',
                'Apache',
                'GPLv3',
                'BSD 3-clause',
                'Unlicense',
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who is contributing to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'is there a test included in this Project?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'As a user what would i do if i encountered a problem?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your Github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email',
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        const generateinfo = generateMarkdown(answers);
        await writeFileAsync('./README.md', generateinfo);
        console.log('info established to README.md');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();
