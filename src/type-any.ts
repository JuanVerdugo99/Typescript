// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1' // string
console.log('iduser', idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('other id', otherId)

let surprise: any = 'Hello typescript';
//
surprise.substring(6);