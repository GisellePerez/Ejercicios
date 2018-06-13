const service = {}
const axios=require('axios')

service.getRepositories = function (githubUser) {

  //primer then (primer promesa de todas)
  return axios
    .get('https://api.github.com/users/ezeggonzalez/repos')
    .then (function (res) {
      return res.data
    })
  // let promise = axios
  //   .get('https://api.github.com/users/ezeggonzalez/repos');
  
  // return promise.then(function (res) {
  //     console.log(res.data)
  //     return res.data
  //   })
  //   .catch(function (err) {
  //     console.log('catch')
  //   })

}
module.exports = service;

