const dados = [
    { estado: 'SP', faturamento: 67836.43 },
    { estado: 'RJ', faturamento: 36678.66 },
    { estado: 'MG', faturamento: 29229.88 },
    { estado: 'ES', faturamento: 27165.48 },
    { estado: 'Outros', faturamento: 19849.53 }
];

function calculaPorcentagemMediaDoFaturamento(valorTotal, valorDeCalculo) {
    return (100 * valorDeCalculo) / valorTotal
}

function calculaPorcentagemDoFaturamento() {
   const totalFaturamento = dados.reduce((acc, dado) => {
        return dado.faturamento + acc
    }, 0)
    console.log(totalFaturamento)
    const porcentagemMedia = dados.map((estado) => ({
        ...estado,
        porcentagem: calculaPorcentagemMediaDoFaturamento(totalFaturamento, estado.faturamento)
    }))
    console.log(porcentagemMedia)
}

calculaPorcentagemDoFaturamento()