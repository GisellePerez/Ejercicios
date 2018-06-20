const miControlador = {
  autos: [{
   modelo: 'X7',
   marca: 'BMW',
   img: 'bmw'
  },
  { 
    modelo: 'X3',
    marca: 'BMW',
   img: 'bmw'  
  }]
}

miControlador.buscarAutos = function (req, res) {
  var respuesta = {
    'autos': miControlador.autos,
    'total': miControlador.autos.length
  };

  res.json(respuesta);
}

miControlador.buscarMarcas = function (req, res) {     //controler!

        resultado = ['BMW',"Audi","Mercedes Benz","Bentley"];

        var respuesta = {            
              'marcas': resultado     //DATA
        };

        res.send(JSON.stringify(respuesta)); //envia JSOM
    
}

miControlador.informacionAuto = function (req, res) {      //a este le pego pero con el parametro id

    var id = req.params.id;               //son los parametros que paso por url
    var precio = "USD 45000";
    var detalle = "Tracción 4x4";

        var respuesta = {
              'detalle': detalle,
              'precio': precio
        };


    res.send(JSON.stringify(respuesta));
  
}

miControlador.nuevoAuto = function (req, res){
  var nuevoAuto = {
    marca: req.body.marca,
    modelo: req.body.modelo,
    img: req.body.img
  }

  if (nuevoAuto.marca.length>0 && nuevoAuto.modelo.length > 0 && nuevoAuto.img === 'bmw') {
    console.log("algo")
    console.log("algo 2")
  } else
    console.log ('otra cosa')

  for (var i = 0; i < 10; i++)
    console.log("hola " + i)

  miControlador.autos.push(nuevoAuto)

  res.send(nuevoAuto); // se manda el nuevo obj que creamos status 500, el obj con su id 
}


module.exports = miControlador
