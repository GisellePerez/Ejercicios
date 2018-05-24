var express = require('express'); //llamo a express
var app = express(); // lo instanceo

//var customerModule = require('customer.js'); // esto no se usa más

app.get('/', function (req,res) {
    //esta funcion es lo que se va a ejecutar cuando el cliente me pide algo
    res.send('Hello world!');
});

app.use('/customer', require('./customer.js'))
// --> acá le estoy diciendo el nombre del módulo

app.listen(3000); //le digo donde escuchar

/*También puedo decirle

app.listen(3000, function () {
    console.log('Escuchando el puerto 3000');
})
*/