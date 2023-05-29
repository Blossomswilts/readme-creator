const inquirer = require('inquirer');
const fs = require('fs');
//_______________________________Questions for input_______________________________________
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
];

//_______________________________Function to write README file_______________________________________
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

//_______________________________Function to initialize app_______________________________________
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            //This will create the README file layout with the user's input
            const readme = `
# ${response.title}
![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-yellow.svg)

## Description
${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)


## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Test
${response.test}

## License
[${response.license}](https://choosealicense.com/licenses/${response.license.toLowerCase()}/)

## Questions
If you have any questions, or inquiries, please contact me at the following:  

github: [${response.github}](https://github.com/${response.github.toLowerCase()})

Email: ${response.email}

`;
            //This function will write the README file with provided data in created folder
            writeToFile('./created/README.md', readme);
        });
}

//_______________________________Function call to initialize app_______________________________________
init();


//_______________________________Comments______________________________________________________________
//https://choosealicense.com/licenses/${response.license.toLowerCase()}/ this will link whatever license the user chooses to the license page on choosealicense.com
//https://img.shields.io/badge/License-${response.license}-yellow.svg this will create the badge for the license the user chooses with a gray and yellow color scheme