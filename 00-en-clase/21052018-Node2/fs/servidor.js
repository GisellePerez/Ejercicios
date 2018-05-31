var http = require('http');
//agrego el modulo fileServer
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('perfil.html', function(err,data){
        console.log(err);
        //escribo el contenido del archivo en la respuesta
        res.write(data);
        res.end(); //cerrar la respuesta y hace que se despliegue
    })
}).listen('8080', function(){
    console.log('Escuchando el puerto 8080');
})

