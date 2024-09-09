const numeroInformado = 55;

function sequenciaFibonacci(num) {
    let a = 0;
    let b = 1;

    let sequencia = []

    while(a <= num) {
        sequencia.push(a);
        const temporario = a;
        a = b;
        b = temporario + a;
    }

    return sequencia;
}

function verificaFibonacci(num) {

    const arraySequencia = sequenciaFibonacci(num);
    console.log(arraySequencia)

    if(arraySequencia.includes(num)) {
        return `O número ${num} pertence a sequência fibonacci.`
    }

    return `O número ${num} não pertence a sequência fibonacci.`

}

console.log(verificaFibonacci(numeroInformado));