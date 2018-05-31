var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
                        array: ['a','b','c']    
                      });
  //Estoy renderizando el archivo index con lo escrito en los jade
});

module.exports = router;
