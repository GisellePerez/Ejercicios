const userService = require('../services/usersService');

const self = {}

//self.index /*o como queramos llamarlo*/ = function(req,res,next) {
    //res.send('/get desde usersController');
    
//}

self.usersList =  function (req, res, next) {
    res.render('users', { title: 'Users' });
}

self.newUser = function (req, res, next) {
    console.log(
        req.body, 
        req.query, //query params 
        req.params); // params --> lo que asigno con los dos puntos
        res.status(500).send('todo ok');
    
}

self.getUser = function (req, res) {
    let data = usersService.getUser(parseInt(req.params.id));

    if (data){
        res.render('user', { userData: data } );
    }else{
        res.render('error', { message: 'El usuario no existe', error: {}})
    }   
}


module.exports = self;