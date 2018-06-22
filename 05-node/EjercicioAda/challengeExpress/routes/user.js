var express = require('express');
var router = express.Router();

var fs = require('fs'); //es global

var userList = [
    // {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
    // {name: 'uiui', lastName: 'suarez', tel: 123456, email: 'uiuisuarez@mail.com'},
    // {name: 'susu', lastName: 'ramirez', tel: 123456, email: 'susuramirez@mail.com'}
];

router.get('/', function(req,res,next){ 
    //muestra la info que recibe y pushea el metodo post
    //let data = req.body;
    //console.log('data',data);  
    res.send('estoy en /user GET');   
});

router.post('/', function(req, res, next) {  
    //recibe la info que se pasa por el .post de /user/form
    
    
        //userList = []; //limpio la lista en cada vuelta en teoria
    
        let newUser = req.body;
        userList.push(newUser);
        console.log('user list:',userList);
        //let parsedList = JSON.stringify(userList);
        let parsedUser = JSON.stringify(newUser);
        fs.appendFile('./public/data/usersList.txt', parsedUser, 'utf8' , function (err) {
            //donde dice 'testing fs habria que pasarle strings de la lista de users 
            if (err) throw err;
            console.log('Saved!');
        });  
    
    //redireccionar a /user/list 
    res.redirect('/user/list');
});


router.get('/form', function(req,res,next){
    //renderiza el form y el boton    
    res.render('form', { title: 'Form'})
});

router.get('/list', function(req,res,next) {
    res.render('userList', { title: 'User List', users: userList })
});

module.exports = router;