var express = require('express');
var router = express.Router();
var librosController = require('../controllers/librosController');


/* GET libros page. */
router.get('/', librosController.librosList);
router.get('/:isbn', librosController.libroDetalle); 
router.get('/delete/:isbn', librosController.libroDelete);
//post es para agregar el put es para editar
router.post('/agregar', librosController.libroAgregar);

module.exports = router;