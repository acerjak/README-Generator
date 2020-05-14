// const { prompt } = require( 'inquirer')
// const { writeFile, appendFile} = require('fs')
// const { promisify } = require('util')

// //bring over username for api call
// let firstQuestion = require('./index.js')
// console.log(firstQuestion)
// //bring in axios
// const axios = require ('axios')

// //prepare api calls
// const api = {
//   getUser(username) {
//     for(const key in data) {
//     axios.get(`https://api.github.com/search/repositories?q=user:${data[key]}`)
//     .then(({data}) => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))
//   }}}

// module.exports = api;
https://api.github.com/search/repositories?q=user:${responses.username}

Description
Brief quiz of 5 questions that is sorted randomly. The user is given 1 minute to complete the quiz and the remaining time becomes the user score. Scoreboard is locally stored and the user can log their initials and score.

Usage
Press Start to begin quiz and at the end, log your score on the score board.

Credit
Web Dev Simplified, Google-fu, and I contributed to this project. The user can submit additional questions to be added to the quiz, only web development for now please!