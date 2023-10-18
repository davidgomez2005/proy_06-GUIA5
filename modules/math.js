//se define la variable math como constante y de tipo objeto
const math = {};

//definimos la funcion flecha invertirNumero como constante con parametro numero
const invertirNumero = numero =>{
    //definimos invertido como una variable y de tipo number
    let invertido = 0;
    //while que se repite mientras el numero sea diferente de 0
    while (numero !=0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    //vuelve el valor invertido 
    return invertido
};

//definir la funcion flecha invertinumerocomotexto como constante con parametro numero
const invertirNumeroComoTexto = numero => {
    //se define numeroinvertidocomotexto como una constante tipo texto
    const numeroinvertidocomotexto = numero.toString().split("").reverse().join("");
    //vuelve el valor numeroinvertidocomotexto
    return numeroinvertidocomotexto;
};

//se define la funcion flecha invertirtexto como una constante con parametro texto
const invertirTexto = texto => {
    //definimos splitText como constante y de tipo texto
    const splitText = texto.split('');
    //definimos reversedText como constante y de tipo texto
    const reversedText = splitText.reverse();
    //definimos joinedText como constante y de tipo texto
    const joinedText = reversedText.join('');
    //Me devuelve el valor joinedText
    return joinedText;
}

//Definimos la funcion flecha invertirArreglo como constante con parametro arreglo
const invertirArreglo = arreglo => {
    //Definimos reverseObject como constente y de tipo texto
    const reverseobject = arreglo.reverse();
    //Me devuelve el valor reverseObject 
    return reverseobject;
}
//definimos otra funcion flecha conversiondatos con una constante 
const conversionDatos = data =>{
    let datatype = typeof data;
    let datavar;

//llamamos a un if que hace posible invertir las palabras 
    if (data === '' || data === null || data === undefined || data.length === 0) {
        datavar = 'el valor ingresado esta vacio o incorrecto';
    }else {
        //un else para Para ejecutar múltiples sentencias
        console.log(`el valor ingresado es de tipo: ${datatype}, con un valor de: ${data}`);
        //comparando el valor de esa expresión con una instancia case
        switch (datatype) {
            case 'number':
                datavar = invertirNumero(data);
                break;
            case 'string':
                datavar = invertirTexto(data);
                break;
            case 'object':
                datavar = invertirArreglo(data);
                break;
            default:
                datavar = 'el valor imgresado no se puede invertir';          
        }
    }
    return datavar;
}

math.invertirNumero = invertirNumero;
math.invertirNumeroComoTexto = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;