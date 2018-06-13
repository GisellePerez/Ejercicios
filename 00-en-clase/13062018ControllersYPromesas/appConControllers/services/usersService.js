const githubService = require('./githubService')

const service = {}

const users = [
  { id: 1, name: 'aaa', githubUser: '' },
  { id: 2, name: 'bbb', githubUser: '' },
  { id: 3, name: 'ccc', githubUser: '' }
]

service.getUsers = function () {
  return users;
}

service.getUser = function (id) {
  let user = users.find((u) => u.id === id)

  return githubService
    .getRepositories(user.githubUser)
    .then(function(repositories) {
      user.repositories = repositories;
      return ures;
    })

  // let promise = githubService.getRepositories(user.githubUser)
  
  // promise.then(function(repositories){
  //     user.repositories = respositories; //le agrego la data de axios a la info de user
  //     return user; //devuelvo user
  // })

  // return promise; //hago la promesa
}

service.createUser = function (user) {
  // le agrego el ID al usuario, único... tomo el más alto que tengo actualmente, y lo incremento en 1
  user.id = Math.max(...users.map(u => u.id)) + 1
  users.push(user)
}

module.exports = service