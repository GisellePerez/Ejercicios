
var carritoStorage = localStorage.getItem('carrito');
var productos = JSON.parse(carritoStorage).productos;
console.log(productos);

//var producto = JSON.parse(carritoStorage).productos.producto;

var carritoUl = $('#carritoUl');


function mostrarProductos(){    

    //$.each(productos,function(index,elem){

        for(var i=0; i<productos.length; i++){
                var descripProducto = productos[i].producto.descripcion;
                var precioProducto = productos[i].producto.precio;
                var li = "<li>" + descripProducto + " " + precioProducto + "</li>";
                //console.log(productos[i].producto);
                //console.log(li);
                carritoUl.append(li);
            }
            
            
        }
        /*
        //let li = $("<i></i>");        
        //let pDesc = $('<p></p>').text(elem.descripcion);    
      
        let li = `<li><p>${elem.descripcion}</p>
                    <p>${elem.precio}</p>
                    <button class="borrar">x</button></li>`;

                     //${elem.src}       
         
        carritoUl.append(li);
        
        //console.log(pDesc);
        console.log(li);
        */
   // });  
     /*for(var i =0; i<productos.length; i++){}
            var descripProducto = productos[i].producto.descripcion
            var precioProduto =productos[i].producto.precio
            var li = "<li>" + descriProducto + " " + precioProducto + "</li>"
            caritoUl.append(li)
            }

    */
//}

mostrarProductos();
