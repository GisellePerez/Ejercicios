var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nene', 
    { 
        title: 'Nombres de nene', 
        nenes : ['Bartolomeo','Segismundo','Oliverio','Aurelio'] 
    });
});

module.exports = router;