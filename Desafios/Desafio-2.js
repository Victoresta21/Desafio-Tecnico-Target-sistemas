// Utiliza word warp para ler o enunciado 2 (alt + z)
//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


const numero_exemplo1 = 21
const numero_exemplo2 = 22

function isFibonacci(num) {
    let a = 0;
    let b = 1;
    
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    let c = a + b;

    while (c <= num) {
        if (c === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = c;
        c = a + b;
    }

    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}


console.log(isFibonacci(numero_exemplo1));
console.log(isFibonacci(numero_exemplo2));

/*
Utilizando os numeiro 21 e 22 como exemplo, retorna:
O número 21 pertence à sequência de Fibonacci.
O número 22 NÃO pertence à sequência de Fibonacci.
*/