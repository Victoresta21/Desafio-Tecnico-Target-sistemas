/*Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

const INDICE = 13;
let Soma = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    Soma = Soma + K;
}

console.log(Soma);

// No fianl do processamento o valor de Soma é 91