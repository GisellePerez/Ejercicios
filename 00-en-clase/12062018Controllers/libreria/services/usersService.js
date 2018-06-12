const service = {}

const users = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' }
];

service.getUser = function (id) {
    // users.find(function (u) { //find me busca 1 solo y cuando lo encuentra me lo devuelve. 
    //                           //si hay 10 objetos iguales, me devuelve el primero
    //     return u.id === id; 
    //     //si devuelve true, encontró el objeto. si devuelve false sigue iterando hasta llegar al final
    // })

    //lo mismo escrito en una sola linea
    return users.find((u) => u.id === id);
}

module.exports = service;