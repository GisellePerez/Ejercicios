var array = [1,3,3];
var max = array[0];
var iterations=0;
var pos;


    //console.log(array.length)
function iterationsToEquality(array) {
  
    for(var i = 0; i < array.length ; i++){
        if(array[i] > max ){
            max = array[i];
            pos = i;
        }
    }
    iterations++
    console.log('max: '+max+'(pos:'+pos+ ') - iterations:'+iterations);  
    var result = array.splice(pos, 1);
    console.log('result: '+result);  
}

iterationsToEquality(array);