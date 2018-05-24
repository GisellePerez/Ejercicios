class Plato{

    construct(nombre){
        this._nombre = nombre; // esto viene del value del select
        //this._tipo = tipo; // entrada o ppal o postre // HACERLO METODO
        this._vegetariano;
        this._vegano;
        this._celiaco;
    }

    set vegetariano(value){
        this._vegetariano = value; //traer el true o false del form
    }

    get vegetariano(){
        return this._vegetariano;
    }
    
    set vegano(value){
        this._vegano = value; //traer el true o false del form
    }

    get vegano(){
        return this._vegano;
    }

    set celiaco(value){
        this._celiaco = value; //traer el true o false del form
    }

    get celiaco(){
        return this._celiaco;
    }
}