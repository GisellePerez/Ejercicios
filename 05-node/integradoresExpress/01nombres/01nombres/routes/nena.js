var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nena', { title: 'Nombres de nena', 
    nenas : ['Isabel','Eduviges','Solange','Fernanda'], 
    });
});

module.exports = router;