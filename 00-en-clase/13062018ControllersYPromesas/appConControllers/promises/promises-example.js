// const axios = require('axios') // CommonJS
import axios from 'axios'; //forma de hacerlo en las versiones mas nuevas de JS en lugar del require

axios
    .get('http://localhost:3000/users/listJson')
    //res es un obj que me devuelve axios con toda a info que trae del server
    .then(function (res) {
        console.log(res.data) //data es n attr donde está lo que me contestó la api (puede ser un json, un string, etc)
        
        //si necesitara hacer otro get lo hago acá
        return axios.get('http://localhost:3000/users/listJson2')
        //el siguiente then se va a ejecutar cuando el 2do get se ejecute satisfactoriamente.
        //esa promesa la estoy retornando. 
    })
    .then(function (res) { //este res es la promesa del ultimo get porque l estoy returnando
        console.log('un then posterior')
    })
    .then(function () {
        console.log('un then posterior posterior')
    })
    .catch(function (res) {
        console.log('catch')
    })