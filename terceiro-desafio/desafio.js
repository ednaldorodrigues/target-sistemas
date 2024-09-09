 const converteParaReal = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'
    })


async function buscarDados() {
    const response = await fetch('../dados.json');
    const data = await response.json();
    

    const diasComFaturamento = data.filter((dia) => dia.valor > 0)

    console.log(calculoDeFaturamento(diasComFaturamento))
    
}

function calculoDeFaturamento(diasDeFaturamento) {
    const diaMenorFaturamento = diasDeFaturamento.sort((a, b) => a.valor - b.valor)[0]
    const diaMenorFaturamentoFormatado = {
        ...diaMenorFaturamento,
        valor: converteParaReal.format(diaMenorFaturamento.valor)
    }


    const diaMaiorFaturamento = diasDeFaturamento.sort((a, b) => b.valor - a.valor)[0]
    const diaMaiorFaturamentoFormatado = {
        ...diaMaiorFaturamento,
        valor: converteParaReal.format(diaMaiorFaturamento.valor)
    }

    const mediaMensal = diasDeFaturamento.reduce((acc, dia) => {
        return acc + dia.valor;
    }, 0) / diasDeFaturamento.length 

    const diasComFaturamentoAcimaDaMedia = diasDeFaturamento.filter((dia) => dia.valor > mediaMensal);
    const diasComFaturamentoAcimaDaMediaFormatado = diasComFaturamentoAcimaDaMedia.map((dia) => ({
        ...dia,
        valor: converteParaReal.format(dia.valor)
    }))

    return {
        diaMenorFaturamento: diaMenorFaturamentoFormatado,
        diaMaiorFaturamento: diaMaiorFaturamentoFormatado,
        diasComFaturamentoAcimaDaMedia: diasComFaturamentoAcimaDaMediaFormatado
    }
}

buscarDados();