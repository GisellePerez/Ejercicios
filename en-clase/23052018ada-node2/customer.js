var express = require('express'); //llamo a express
var router = express.Router();

//endpoint
router.get('/',function (req,res) { 
    // '/' --> le estoy pasando la raiz de mi modulo, porque lo voy a especificar afuera
    res.send('listado de clientes');
});

router.post('/',function (req,res) {
    res.send('crear un nuevo cliente');
});

module.exports = router; //exporto lo que acabo de crear
//le estoy diciendo que me exporte esto, en este caso el router que creé con express
