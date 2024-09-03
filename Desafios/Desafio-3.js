/*
Para esse codigo rodar é nessesario utilizar o noje.js

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

const fs = require('fs');

// Função para ler o arquivo JSON
fs.readFile('dados/dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }

    try {
        const faturamentoMensal = JSON.parse(data);
        const estatisticas = calcularEstatisticas(faturamentoMensal);
        exibirResultados(estatisticas);
    } catch (err) {
        console.error('Erro ao processar o arquivo JSON:', err);
    }
});

function calcularEstatisticas(faturamento) {
    let menorValor = Number.POSITIVE_INFINITY;
    let maiorValor = Number.NEGATIVE_INFINITY;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamento.forEach(dia => {
        if (dia.valor > 0) { // Ignora dias com faturamento 0
            if (dia.valor < menorValor) {
                menorValor = dia.valor;
            }
            if (dia.valor > maiorValor) {
                maiorValor = dia.valor;
            }
            soma += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = soma / diasComFaturamento;

    let diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

function exibirResultados(estatisticas) {
    console.log(`Menor valor de faturamento: ${estatisticas.menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${estatisticas.maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${estatisticas.diasAcimaDaMedia}`);
}

/*
Menor valor de faturamento: 373.78
Maior valor de faturamento: 48924.24
Número de dias com faturamento acima da média: 10 */