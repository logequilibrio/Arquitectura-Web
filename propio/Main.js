const calculo = require('../Calculo.js');
var http = require('http');
const os = require('os');
const fs = require('fs');
const colors = require('colors')

//console.log(calculo.Add(21, 22));
//console.log(calculo.SubStract(21, 22));
//console.log(calculo.Multiple(21, 22));
//console.log(calculo.Divide(21, 22));
//console.log(calculo);
//console.log(http);

//console.log(os.platform());
//console.log(os.release());
//console.log('Memoria libre = ', os.freemem(), ' bytes');
//console.log('Memoria total = ', os.totalmem(), ' bytes');

//fs.writeFile('./File.txt', 'Prueba NodeJs', function (errorPrueba) {
//    if (errorPrueba) {
//        console.log(errorPrueba);
//    }
//    console.log('Archivo creado.');// Codigo asincrono
//})

//const resultado = fs.writeFile('./File.txt', 'Prueba NodeJs');// codigo bloqueante

fs.readFile('./File.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('Ultima linea de ejecución.'.green);