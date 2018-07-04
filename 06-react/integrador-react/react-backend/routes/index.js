var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{ 
    name: 'Giselle Perez', 
    occupation: 'Graphic Designer and Fronted Developer in training',
    age: '27',
    address: 'Street Name 0123, Buenos Aires',
    email: 'mail@domain.com',
    phone: '1245-5368',
    website: 'http://myweb.com'
  }]);
});

module.exports = router;
