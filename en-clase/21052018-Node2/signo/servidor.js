var http = require('http');
var miModulo = require('./modulos/proceso');
var puerto = 8080;
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});

    //exportar los parametros al objeto q
    var q = url.parse(req.url, true).query;

    let m = q.month;
    let d = q.day;

    let respuesta = miModulo.signo(m,d);

    res.end(respuesta);
}).listen(puerto, function(){
    console.log('Escuchando el puerto ' + puerto);
});