var express = require('express');
var router = express.Router();

var discosFav = [
{ src: 'images/principal3.png', titulo: 'GRUPO/ESTILO/GENERO', precio: '$500', descripcion: 'Artista recomendado'},
{ src: 'images/disco6.jpg', descripcion: 'THE STROKES', precio: '$500', descripcion: 'Description goes here'},
{ src: 'images/disco2.jpg', descripcion: 'NEARNDENTHALS', precio: '$500', descripcion: 'Description goes here'},
{ src: 'images/disco5.jpg', descripcion: 'FOO FIGHTERS', precio: '$500', descripcion: 'Description goes here'},
{ src: 'images/disco4.jpg', descripcion: 'OCEAN THE ALASKA', precio: '$500', descripcion: 'Description goes here'},]

/* GET home page. */
router.get('/', function(req, res, next) {

  let destacado = discosFav[random];

  res.render('index', { title: 'Al carajo', 
                      destacado: destacado,
                      favoritosArray: discosFav });
});

module.exports = router;
