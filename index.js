// TODO: Include packages needed for this application

const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 or less characters: ',
        validate: text => {
            if (text) {
            return true;
            } else {
            console.log('You did not enter 3 or less characters');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword OR a hexadecimal number: ',
        validate: text => {
            if (text) {
            return true;
            } else {
            console.log('You did not enter a color keyword OR a hexadecimal numbe.');
            return false;
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'which shape wuould you like your logo to be? (Use arrow key to select)',
        choices:['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword OR a hexadecimal number: ',
        validate: text => {
            if (text) {
            return true;
            } else {
            console.log('You did not enter a color keyword OR a hexadecimal numbe.');
            return false;
            }
        }
    },
];



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((response) => {
      console.log('Generated logo.svg')
    })
    .catch((error) => {
      console.log(error)
    })
}

// Function call to initialize app
init();
