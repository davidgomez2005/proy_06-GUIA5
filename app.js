//para cargar un módulo llamado colors 
require('colors');

//para importar un módulo llamado math.js
const math = require('./modules/math.js')

// definimos la funcion fecha main sin parametros 
const main = async () => {
//damos un hola sena 
    console.log('hola SENACBA\n'.red);
//hacemos una contante nuemro con unos parametros 
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    //conformamos un for 
    for (const numero of numeros) {
        const invertidocomonumero = math.invertirNumero(numero);
        const invertidocomocadena = math.invertirNumeroComoTexto(numero);
        //damos las diferentes invertir 
        console.log("el numero '%s' es '%s' invertido como numero, y '%s' como cadena",
                    numero, invertidocomonumero, invertidocomocadena)
    }
// una contante texto con paramestros 
const textos = ['hola sena', 'ficha 2798618', 'analisisi y desarrollo de software'.yellow]
for(const texto of textos) {
    //otra constante que llama invertir texto 
    const textoinvertido = math.invertirTexto(texto);
    console.log("el texto '%s' se invirte como '%s'".green, texto, textoinvertido.red);
   }

   //una constante con parametros 
const datos = [1234567, 'ADSO 2798618'.green, [2798618, 'ADSO'.green] ]
for(let dato of datos ){
    //una constante para inertir datos 
    const datoconvertido = math.conversionDatos(datos);
    console.log(`el resultado de conversion es : ${datoconvertido}`.yellow);
   }
}

main();