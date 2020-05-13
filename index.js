const { prompt } = require( 'inquirer')
const { writeFile, appendFile} = require('fs')
const { promisify } = require('util')
//bring in axios
const axios = require ('axios')
//promisify 
const writeFilePromise = promisify(writeFile)
const appendFilePromise = promisify(appendFile)

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
}
])
//get data from GitHub API
    .then(data=> {
        //creat object to collect responses
        let responses = {}
        //using for in loop over object, take key=name from question
        for(const key in data) {
            //plug into API request
            axios.get(`https://api.github.com/search/repositories?q=user:${data[key]}`)
            //extract the data without having to call it data.data
            .then(({data}) => {
                // count++
                // responses[key] = data
                console.log(data)
            })
    .catch(err => console.log(err))
  }})

// getUser(username);

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

