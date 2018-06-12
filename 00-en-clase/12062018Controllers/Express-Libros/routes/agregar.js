var express = require('express');
var router = express.Router();

router.get('/agregar', function(req, res, next) {
    res.render('libros', { title: 'Libros de Harry Potter' });
  });