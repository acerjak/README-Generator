const { prompt, Separator } = require( 'inquirer')
const { writeFile } = require('fs')
const { promisify } = require('util')
//bring in axios
const axios = require ('axios')
const path = require('path')
//promisify 
const writeFilePromise = promisify(writeFile)
// const appendFilePromise = promisify(appendFile)

//define start of api requests
// let count = 0
//bring over code on APIs
// let api = require('./api.js')
//constant for username question
//prompt user for GitHub Username
prompt([
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email for user contact?'
},
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
},
{
    type: 'input',
    name: 'description',
    message: 'Please give a description of your project.'
},
{
    type: 'list',
    name: 'license',
    message: 'Did you use any licenses?',
    choices: [
        new Separator(),
        {
            name: 'Mozilla Public License V 2.0',
        },
        {
            name: 'GPL v3',
        },
        {
            name: 'Apache',
        },
        {
            name: 'None'
        }
    ]
},
{
    type: 'input',
    name: 'installation',
    message: 'What is the command to install dependencies?',
    default: 'npm i'
},
{
    type: 'input',
    name: 'test',
    message: 'What command is used to run tests?',
    default: 'npm test'
},
{
    type: 'input',
    name: 'usage',
    message: 'Please give a description of what the user should know when using the project.'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to the project or can the user contribute?'
}
])
//get data from GitHub API
    .then(responses=> {
        //creat object to collect responses
        console.log(responses)
        //using for in loop over object, take key=name from question
        // for(const key in responses) {
            //plug into API request
            axios.get(`https://api.github.com/search/repositories?q=user:${responses.username}`)
            //extract the data without having to call it data.data
            .then(({data}) => {
                console.log(responses, data)
                writeFilePromise('README.md', generateMarkdown({responses, data}), err => {
                    if (err) {
                        console.log(err)
                    }
                })
            })
    .catch(err => console.log(err))
  })
// push data from api into this markdown function (md for readme)
function generateMarkdown({responses, data}) {
    return `
# ${responses.title}
## Description
> ${responses.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
***
## Installation
#### Please follow this command to install npm dependencies:
##### ${responses.installation}
## Usage
#### ${responses.usage}
## Credits
> ${responses.contributing}
***
## License
#### ${responses.license}
***
## Tests
##### ${responses.test}
## Questions
> Please send any inquiries or concerns through ![${responses.username}]("https://api.github.com/users/${responses.username}") at ${responses.email}.
![profilepic](https://avatars1.githubusercontent.com/u/62491401?v=4 "acerjak")
***
> Created by Amanda Cerjak 2020
 `;
    }


//badge
/* <img src="https://camo.githubusercontent.com/4492c3551c9504188b8ac6d1abd370740efec903/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f636f756e742f636f6d6d6f6e616c6974792f67657474696e672d737461727465642d696e6e65722d736f757263652e7376673f7374796c653d666c61742d737175617265" alt="github-language-count" 
data-canonical-src="https://img.shields.io/github/languages/count/commonality/getting-started-inner-source.svg?style=flat-square"> */

// getUser(username);

// function writeToFile(fileName, data) {
// }

// function init() {

// }



