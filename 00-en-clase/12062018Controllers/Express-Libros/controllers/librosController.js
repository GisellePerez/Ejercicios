const self = {};

var librosImg = [
{nombre: 'Piedra Filosofal', src: 'images/harry_potter.png', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '01'}, 
{nombre: 'Cámara Secreta', src: 'images/hp2.jpg', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '02'},
{nombre: 'Prisionero de Azkaban', src: 'images/hp3.jpg', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '03'},
{nombre: 'Caliz de Fuego', src: 'images/hp4.jpg', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '04'},
{nombre: 'Orden del Fenix', src: 'images/hp5.jpg', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '05'},
{nombre: 'Misterio del Principe', src: 'images/hp6.jpg', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '06'},
{nombre: 'Reliquias de la Muerte', src: 'images/hp7.jpg', info: 'Lorem ipsum dolor sit', precio: '$300', codigo: '07'}];

self.librosList = function (req, res, next) {
    console.log('funciona controller');
    res.render('libros', { title: 'Libros de Harry Potter', librosArray: librosImg });
}

self.libroDetalle = function (req, res, next) {
    console.log('funciona detalle');
    var isbn= req.params.isbn;
    for(i=0; i<librosImg.length; i++){
        if(librosImg[i].codigo == isbn){
            var posicion= i;
        };
    };
    res.render('descripcion', {libro: librosImg[posicion]});
} 

self.libroDelete = function (req, res, next) {
    console.log('funciona borrar');
    let isbn = req.params.isbn
    let libro = librosImg.find(function(libro){return libro.codigo==isbn}) // find devuelve un objeto, segun el criterio dado. 
    librosImg.splice(librosImg.indexOf(libro),1); // splice saca un elemento de un arreglo
    //res.render('libros', {title: 'Libros de Harry Potter', librosArray:librosImg})
    res.redirect('/libros');
}

self.libroAgregar = function (req, res, next) {
    let libro = {};
	console.log(req.body.title);
	libro.titulo = req.body.title;
	libro.isbn = req.body.isbn;
	librosImg.push(libro);
	res.redirect('/libros');
}


/*function search (isbn){
    let i;
    for (i=0;i<librosImg.lenght;i++){
    if(librosImg[i].codigo==isbn){
    return librosImg[i];}
    }
    return null
}*/

module.exports = self;