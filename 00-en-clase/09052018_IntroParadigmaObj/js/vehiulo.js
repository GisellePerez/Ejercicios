class Vehiculo{

    constructor(){
        this._vehiculo = vehiculo;
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
    }

    set vehiculo(value){

		this._vehiculo = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get vehiculo(){
        return this._vehiculo;
    }

    set patente(value){

		this._patente = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get patente(){
        return this._patente;
    }  
    
    
    set marca(value){

		this._marca = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get marca(){
        return this._marca;
    }

    
    set modelo(value){

		this._modelo = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get modelo(){
        return this._modelo;
    }

    
    set color(value){

		this._color = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get color(){
        return this._color;
    }
}