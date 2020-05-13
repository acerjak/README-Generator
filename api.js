const { prompt } = require( 'inquirer')
const { writeFile, appendFile} = require('fs')
const { promisify } = require('util')

//bring over username for api call
let firstQuestion = require('./index.js')
console.log(firstQuestion)
//bring in axios
const axios = require ('axios')

//prepare api calls
const api = {
  getUser(username) {
    for(const key in data) {
    axios.get(`https://api.github.com/search/repositories?q=user:${data[key]}`)
    .then(({data}) => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }}}

// module.exports = api;
