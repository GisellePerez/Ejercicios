class Checkout{

	constructor (usuario,subtotal,descuentos,cuotas,costoEnvio){

        this._usuario = usuario;
		this._nroCuotas; //traerlas desde el carrito
		this._costoEnvio;
    } 

    set usuario(value){

		this._usuario = value;		
	}

	get usuario(){

		return this._usuario;
    }
    
    set subtotal(value){

		this._subtotal = value;		
	}

	get subtotal(){

		return this._subtotal;
	}
    
    static calcularDescuento(subtotal,descuento){ 
    //palabra reservada static - generar librerias para no tener que generar objetos nuevos de esa clase

        let valor = this._subtotal*descuento/100;
        
        return valor; // esto - el subtotal deja el total
    }

    calcularRecargo(subtotal,nroCuotas){
        if(cuotas > 3){
           recargo = subtotal*0.1;
        }else if(cuotas > 6){
            recargo = subtotal*0.15;
        }else if(cuotas > 12){
            recargo = subtotal*0.2;
        }
        return recargo;

        /* version 2
        switch(nroCuotas){
            case 3: recargo = subtotal*0.15;
            break;

            case 6: recargo = subtotal*0.2
            break;

            default: ;
        }
        return recargo;
        */
    }

}
