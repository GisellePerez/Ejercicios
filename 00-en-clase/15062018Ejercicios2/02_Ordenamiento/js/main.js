//Metodos de ordenamiento
function bubbleSort(arr) {
    let arrOrd = arr

    for(var i = 0; i<arrOrd.length ; i++){
        for( var j = 0; j < arrOrd.length-i ; j++){
            if(arrOrd[j] > arrOrd[j+1]){
                let aux;                
                aux = arrOrd[j];
                arrOrd[j] = arrOrd[j+1];
                arrOrd[j+1] = aux;
            }
        }
    }
    return arrOrd
}



var arr= Array(4,2,3,6,8,7,11);
console.log(bubbleSort(arr))

// arr.sort((a,b) => {
//     if (a<b) return -1
//     if (b<a) return 1
// })

// console.log(arr);