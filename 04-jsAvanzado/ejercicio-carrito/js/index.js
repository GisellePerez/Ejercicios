// Creo un objeto producto vacio para guardar la información
var producto;
var carrito = [];
var carritoStorage = localStorage.getItem('carrito');

function existeCarrito(){

    if(carritoStorage == null){ //si s null no hay naada guardado
        //si es null creame la variable carrito, porque es la primera vez que entro a la pag
        carrito = [];
    }else{
        //ya tengo prod guardados en carrito(carrito es un array)
        carrito = JSON.parse(carritoStorage).productos; //cuando tengamos el json
        //parse toma una string json y lo vuelve al estado de objeto
    }  
}
/***
 * Verifico si ya existe el producto en el carrito
 * @params producto
 * return boolean
***/

function chequearExistencia(producto){ //le paso el prod como parametro
	let cod = producto.codigo;
	let enontrado=false;
	let i=0;

	for(i=0;i<carrito.length;i++){
		while(!encontrado && i<carrito.length){ //mientras no encuentre y mientras no llegue al final del array
			//en cuanto encuentro la coincidencia de productos corto el bucle
			if(carrito[i].producto.cod == cod){ //cod es el codigo del prod nuevo. El otro es el del anterior
				//encontrado = true; //return true;
				//ya comprobamos si existe, ahora tenemos que decirle qué hacer
				return i; // devuelve la posición donde lo encontre. Es porque encontrado es true.
				//no me sirve un encntrado true. Necesito saber el índice para poder hacer algo.
			}
			i++;								
		}
		return encontrado; //me decuelve encontrado false porque si llegó aca es porque no encontró
	}
}

$('.add').on('click',function(e){

	let hermanos = $(this).siblings();
	// Recupero la información del HTML
	 //hermanos[4].value es la cantidad ingresada por el usuario
	 producto = {
		src = hermanos[0].src, //accedemos por indice y no con for porque sabemos que el div producto tiene esos 4 elementos
		descripcion = hermanos[1].innerText,
		precio = hermanos[2].innerText,
		stock = hermanos[3].innerText,
		cod = hermanos[4].innerText
		//producto.cantidad = hermanos[4].innerText;
		};	

		
		
		if(parseInt(producto.stock) >= hermanos[5].value){
		
			/*
		var item ={
			cantidad : parseInt(hermanos[5].value),
			producto : producto
		}
			
		console.log(item);
		*/

		let pos = chequearExistencia(producto);

		if(!pos){

			// Creo un objeto item, para agregar luego al carrito solo si no existe previamente, sino suma
			var item ={
				cantidad : parseInt(hermanos[5].value),
				producto : producto
			}	

			console.log(item);

			carrito.push(item);
		}else{
			//si lo encuentra al prod, en esa pos de carrito que me sume los valores
			carrito[pos].cantidad += parseInt(hermanos[5].value);
		}

		

		let jsonCarrito = {'productos': carrito, // productos es el que llamamos en carrito.html para parsear
							'total': carrito.length }; //productos es lo que recuperamos con el json
		localStorage.setItem('carrito', JSON.stringify(jsonCarrito)); // llamado con getItem mas abajo

		//estoy pisando el localStorage cada vez que hago click
		console.log(localStorage.getItem('carrito')); //llamas al que seteas

	}else{
		alert('No hay stock suficiente del producto seleccionado.');
	}
});

/***
 * 
 ***/

function calcularSubtotal(){

	let subtotal = 0;

	//donde esta guardaado el valor de lo que tngo que sumer? En carrito
	for(var i=0;i<carrito.length;i++){
		subtotal += carrito[i].cantidad * parseFloat(carrito[i].producto.precio); //cantidad en el carrito * precio de prod 
	}
	return subtotal;
}



existeCarrito();

//localStorage.clear();
