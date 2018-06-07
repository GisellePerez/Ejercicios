var express = require('express');
var router = express.Router();
var personas = [
  { dni: '25402102', nombre : 'Jaime Suarez', edad: 25, gs: 'A+' , alergias: 'No posee'},
  { dni: '35402102', nombre : 'Aquiles Bailo', edad: 15, gs: '0+' , alergias: 'Polen'},
  { dni: '45402102', nombre : 'Lola Flores', edad: 35, gs: 'B+' , alergias: 'Lacteos'} ];


router.get('/', function(req, res, next) {
  res.render('ficha', { title: 'Ficha médica' });
});

router.get('/:dni',function(req,res,next){

  let numDni = req.params.dni;

  for(i=0;i<personas.length;i++){
    let persona = personas[i];
    console.log(persona);
  }

	res.render('ficha', { title: 'dni '+ numDni , persona: persona }); 
});








module.exports = router;
