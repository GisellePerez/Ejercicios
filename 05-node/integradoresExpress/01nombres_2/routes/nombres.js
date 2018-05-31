var express = require('express');
var router = express.Router();

var girls = ['Isabel','Eduviges','Solange','Fernanda']; 
var boys =['Bartolomeo','Segismundo','Oliverio','Aurelio'];
var all = girls.concat(boys);

/* GET nombres page */
router.get('/', function(req, res, next) {

  let allNames = shuffle(all);
  res.render('nombres', { title: 'Nombres', names: allNames, divColor:'div gray'});  
});

router.get ('/nena', function(req,res,next) {
    res.render('nombres', { title: 'Nenas', names: girls, divColor:'div pink'});
});

router.get ('/nene', function(req,res,next) {
    res.render('nombres', { title: 'Nenes', names: boys, divColor:'div blue'});
});

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

module.exports = router;
