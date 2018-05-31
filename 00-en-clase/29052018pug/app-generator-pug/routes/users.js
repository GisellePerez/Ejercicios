var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('user', {message: 'Una petición a usuario'})
});

module.exports = router;
