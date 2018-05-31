var express = require('express');
var router = express.Router();
var personas = 

router.get('/', function(req, res, next) {
  res.render('ficha', { title: 'Express' });
});

module.exports = router;
