var num = 15;
var array = [];
var cont = 0;

for (var i = 0; i<num ; i++){
    cont++;
    array.push(cont);

    // if( (cont%3 == 0) || (cont%3 == 3) ) {
    //     array[i] = 'foo';
    // }

    // if( (cont%5 == 0) || (cont%5 == 5) ){
    //     array[i] = 'bar';
    // }

    // if( (cont%3 == 0 || cont%3 == 3) && (cont%5 == 0 ||  cont%5 == 5)) {
    //     array[i] = 'fooBar';
    //}

    //VERSION 2
    if( (cont%3 == 0 || cont%3 == 3) && (cont%5 == 0 ||  cont%5 == 5)) {
        array[i] = 'fooBar';
    }else if (cont%3 == 0 || cont%3 == 3) {
        array[i] = 'foo';
    }else if (cont%5 == 0 ||  cont%5 == 5) {
        array[i] = 'bar';
    }
}
console.log(array)

for (var i=1; 1<=num;i++){
    if(i%3 === 0){
        numeros[i] = 'Foo';
    }
    if(i%5===0){
        numeros[i] = (numeros[i] || '')+ 'Bar'
    }
    numeros[i] = !numeros[i] ? i : numeros[i]

    return numeros; //numeros es el array  vacio
}

