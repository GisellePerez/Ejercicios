var main = $('.main');

/* V1 */

$('#black').on('click',function(e){
    $(this).toggleClass('pink');
});

$('#greenLeft').on('click',function(e){
    $(this).siblings().toggleClass('yellow');
});

$('#greenRight').on('click',function(e){
    $(this).siblings().toggleClass('yellow');
});

$('#redMiddle').on('click',function(e){
    $(this).siblings().toggleClass('coral');
    console.log('red');
});


/* V2 todavia no funciona 

function changeColor(){
    $('#black').toggleClass('pink');
    $('#green').toggleClass('yellow');
    $('#red').toggleClass('coral');    
}

$('.change').on('click',function(){
   $('.box').changeColor(e);
    console.log('cambio de colores');
});


*/