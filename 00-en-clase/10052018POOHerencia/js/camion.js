class Camion{

    constructor(patente="",ejes=""){
        this._patente = patente;
        this._ejes = ejes;
        this._velocidad;
        //agregar marca, modelo,tara, color,.acelerar(),.frenar(),.doblar(),.acoplar()
    }

    set patente(value){
        this._patente = value;
    }

    get patente(){
        return this._patente;
    }

    set ejes(value){
        this._ejes = value;
    }

    get ejes(){
        return this._ejes;
    }

    acelerar(aceleracion){
        this._velocidad+=aceleracion; //para pasarle una taza de aceleracion
    }

    frenar(){
        this._velocidad = 0;
    }
}