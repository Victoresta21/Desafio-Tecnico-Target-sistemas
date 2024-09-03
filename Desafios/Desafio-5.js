/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/


const stringOriginal = 'String normal';

function Stringinverter(str) {

    let arr = str.split('');

    let resultado;
 
    for (let i = arr.length - 1; i >= 0; i--) {
        resultado += arr[i];
    }
    return resultado;
}

const stringInvertida = Stringinverter(stringOriginal);

console.log('String Original:', stringOriginal);
console.log('String Invertida:', stringInvertida);

/*
Utilizando String normal como a string de exemplo, o codigo retorna:
String Original: String normal
String Invertida: undefinedlamron gnirtS
*/
