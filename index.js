// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const svg = require('./lib/shapes');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 or less characters: ',
        validate: text => {
            if (text && text.length <= 3) {
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
        message: 'Please enter a color keyword OR a hexadecimal number for the text: ',
        validate: text => {
            if (text) {
                if(isColor(text) == true){
                    return true
                } else {
                    console.log('You did not enter a color keyword OR a hexadecimal number.');
                    return false;
                }
            } else {
            console.log('You did not enter a color keyword OR a hexadecimal number.');
            return false;
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'which shape would you like your logo to be? (Use arrow key to select)',
        choices:['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword OR a hexadecimal number for the shape: ',
        validate: text => {
            if (text) {
                if(isColor(text) == true){
                    return true
                } else {
                    console.log('You did not enter a color keyword OR a hexadecimal number.');
                    return false;
                }
            } else {
            console.log('You did not enter a color keyword OR a hexadecimal number.');
            return false;
            }
        }
    },
];

// TODO: Create a function to write SVG file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, error => {
      if (error) {
        console.log('Sorry there was an error : ' + error);
      } else {
        console.log('Success: Generated logo.svg');
      }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((response) => {
        var position = textLength(response.text.length, response.shape)
        var obj
        if(response.shape == "Triangle"){
            obj = new svg.Triangle(response.text.toUpperCase(), response.textColor, response.shapeColor, position);
        }else if(response.shape == "Circle"){
            obj = new svg.Circle(response.text.toUpperCase(), response.textColor, response.shapeColor, position);
        }else if(response.shape == "Square"){
            obj = new svg.Square(response.text.toUpperCase(), response.textColor, response.shapeColor, position);
        }

        // const obj = new shape(response.text, response.textColor, response.shapeColor);
        writeToFile("logo.svg", obj.render())
    })
    .catch((error) => {
      console.log(error)
    })
}

function textLength(input, shape){
    if(shape == 'Square'){
        if(input == 1){
            return "50%"
        }else if(input == 2){
            return "45%"
        }else if(input == 3){
            return "40%"
        }
    } else if(shape == 'Circle'){
        if(input == 1){
            return "30%"
        }else if(input == 2){
            return "23%"
        }else if(input == 3){
            return "20%"
        }
    }else if(shape == 'Triangle'){
        if(input == 1){
            return "40%"
        }else if(input == 2){
            return "35%"
        }else if(input == 3){
            return "31%"
        }
    }

}


// Function call to initialize app
init();

function isColor(input) {

    const ColorKeywords = [
        "black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", 
        "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "orange", "pink", "brown"
      ]
  
    if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(input)) { // check if input is a valid hexadecimal color code
        return true;
    } else if (ColorKeywords.includes(input.toLowerCase())) { 
        return true;
    } else {
      return false;
    }
  }
  