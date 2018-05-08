$(document).ready(function(e){

    $.ajax({
        method: "", //method por defecto get, no usa data
        url: "https://jsonplaceholder.typicode.com/posts/1/comments"
        //data: {name: "John" location: "Boston"}  // json
    })

    .done(function( response ){ 
        
        let lista=$('#lista');
        
        //console.log(response);

        $.each(response,function(index,elem){
            //console.log(elem);
            let li = `<li><h2>${elem.name}</h2>
                      <p>${elem.email}</p>
                      <p>${elem.body}</p></li>`;        
   
            lista.append(li);    
        })
        
        
        /* VERSION CON FOR
        for(var i=0;i<5;i++){
            console.log(response[i]); //para ver que me trae

            let h2 = `<h2>${response[i].name}</h2>`;
            let div = `<div><li><p>${response[i].email}</p>
                      <p>${response[i].body}</p></li></div>`;
        
        container.append(h2);
        container.append(div);           
            
        }
        */
                
    });

});