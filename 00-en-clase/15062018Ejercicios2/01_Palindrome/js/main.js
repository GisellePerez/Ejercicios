/*1) Write a simple function (less than 160 characters) 
that returns a boolean indicating whether or not a string is a palindrome.*/

function palindrome(pal){
    pal = 'Anita Lava La Tina';
    let str = (pal.replace(/\s+/g, '')).toLowerCase();    
    let reversed = str.split('').reverse().join('');  
    
    // if (reversed == p){
    //     return true
    // }
    return reversed === str; 
}

palindrome();
console.log(palindrome('Neuquen'));


//recorrer el string
/*let pSplit = p.split('');
let pReverse = pSplit.reverse();
let pJoin = pReverse.join('');  */