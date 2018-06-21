var express = require('express');
var router = express.Router();

var userList = [
    {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
    {name: 'uiui', lastName: 'suarez', tel: 123456, email: 'uiuisuarez@mail.com'},
    {name: 'susu', lastName: 'ramirez', tel: 123456, email: 'susuramirez@mail.com'}
];

router.get('/', function(req,res,next){ 
    res.send('estoy en /user');   
});

router.post('/', function(req, res, next) { 
    res.redirect('/user/form')
  //recibe la info que se pasa por el .post de user/form
  //redireccionar a user/list
});

router.get('/form', function(req,res,next){
    //rendeiza el formulario y el boton
    // $('#btn').on('click', function(){
    //     validateData();
    //     res.redirect('/user');
    // });   
    
    res.render('form', { title: 'Form'})
    
});

router.get('/list', function(req,res,next) {
    res.render('userList', { title: 'User List', users: userList })
});

module.exports = router;