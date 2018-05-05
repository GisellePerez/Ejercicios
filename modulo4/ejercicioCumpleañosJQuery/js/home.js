const rutaImg = 'imgs/PNG'; //para armar la ruta

var cumplesStorage = localStorage.getItem('cumples'); // me traigo el string de local Storage
//traer lo que esta guardado en la base de datos (localStorage)
var jSon = JSON.parse(cumplesStorage); //recupero el json -objeto js
//lo desestringifiamos. Vuelvo a tener un objet con dos atributos (nombre y longitud del arreglo)
var cumples = jSon.cumples; //aca me quedo solo con el arreglo de cumples, no todo el obj
//una variable para acceder al cumpleaños directo

/**
 * Recupero los cumpleaños
 **/

function proximosCumples(){

    $.each(cumples,function(index,elem){

     
        //genero dinamicamente los elementos de la lista
        //el data id tiene el mismo numero que el numero que tiene en el arreglo
        let li = `<li><p><span>${elem.name}</span>
                ${elem.birthday}</p>
                <button class="borrar"
                data-id="${index}">x</button></li>`; //necesito el indice del elem que quiero borrar
                                                //se lo paso por parametro al li por un data-
                                                //cuando lo quiera borrar me da ese id
                //le paso la poscion del elemento como data-id
                //el index que uso para el data-id es el parametro que pide la sintaxis de la funcion .each(index,elem)
        $('#cumples').append(li);
        //appendeo
    });
}

function cumpleDelDia(){
    /*
    if(cumples.length == 0) {
        return alert("No hay cumpleaños cargados")
    }else{
        
    }
    */
    //Excluye el límite superior (va de cero al anteultimo como el length -1)
    let indice = Math.floor(Math.random() * cumples.length); 
    //me excluye el 4 (valor maximo) porque trabaja por redondeo
    
    /*menos 1 porque empieza desde cero y length cuenta desde 1, entoncs cuenta desde cero a -1 
      porque para length esta contando del primer al anteultimo elemento contando desde cero 
      
    while(indice == cumples.length){ 
        //vamos de cero a length, pero si me sale length (que es un valor de indice inválido) volve a tirar otro numero
        //es inválido porque va de cero a -1 entonces nunca toma el valor 4
        //si el valor indice es igual al 4 (el numero mas alto de la longitud)
        indice = Math.floor(Math.random() * cumples.length);
    }
    */

    //estamos tomando la img del cumple de hoy
    let cumpleHoyImg = cumples[indice].img; 
    let cumpleHoyName = cumples[indice].name;

    let h1 = `<h1>"Hoy es el cumple de:"</h1>`;
    let h1Name = `<h1>${cumpleHoyName}</h1>`;
    //let image = `<img src="imgs/PNG/${cumpleHoyImg}.png">`;
    let image = `<img src="${rutaImg}/${cumpleHoyImg}.png">`;

    $('#cumple-dia').append(h1);
    $('#cumple-dia').append(h1Name);
    $('#cumple-dia').append(image);

}

//ahora lo tengo que remover del arreglo de cumples (que viene del localStorage)
/*
$('.borrar').on('click', e=> {
    
    e.preventDefault();
    let li = $(this);
    li.parent().remove(); //borro del HTML. Cuando recargo vuelve como json
    let indice = li.data('id'); //trae el data id del li que coincide con el elemento del array
    //ahora tenemos que hacer el opuesto a .push en cumples (paráetro indice, cant de elementos a remover:1)
    cumples.splice(indice,1);
    //ahora hay que volver a guardar cumples y pisar el anterior cumples en el local storage   
    jSon.cumples = cumples;
    jSon.total = cumples.length;
    //Guardar en el localStorage
    let datos = JSON.stringify(jSon);
    localStorage.setItem('cumples',datos); //con esto deberia quedar actualizado en el local storage
    
});
*/

$(document).on('click','ul button', function(e) {
    //escuchamos todos los clicks en el documento y luego reflitramos a los buttons del ul
    
    e.preventDefault();
    let li = $(this);
    li.parent().remove(); //borro del HTML. Cuando recargo vuelve como json
    let indice = li.data('id'); //trae el data id del li que coincide con el elemento del array
    //ahora tenemos que hacer el opuesto a .push en cumples (paráetro indice, cant de elementos a remover:1)
    cumples.splice(indice,1);
    //ahora hay que volver a guardar cumples y pisar el anterior cumples en el local storage   
    jSon.cumples = cumples;
    jSon.total = cumples.length;
    //Guardar en el localStorage
    let datos = JSON.stringify(jSon);
    localStorage.setItem('cumples',datos); //con esto deberia quedar actualizado en el local storage
    
});

//document ready no carga los eventos hasta que el documento esté completamente cargado
/*(document).ready(function(e){
    proximosCumples();
cumpleDelDia();
})*/

proximosCumples();
cumpleDelDia();


//ahora necesito una funcion que se llame 'cumple del dia'


// 'cadena' / "cadena" 
// `cadena`-> se procesa más rapido `cadena ${cumples}`