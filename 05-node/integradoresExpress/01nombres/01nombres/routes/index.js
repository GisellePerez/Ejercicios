var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Holaaaaa', 
    nenas : ['Isabel','Eduviges','Solange','Fernanda'], 
    nenes : ['Bartolomeo','Segismundo','Oliverio','Aurelio'],
    todos : nenas.concat(nenes) 
  });
    
});

module.exports = router;
