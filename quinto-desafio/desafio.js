function inverterString(string) {
    const arrayLetras = []
    for(let i = string.length - 1; i >= 0; i-- ) {
        arrayLetras.push(string[i])
    }
    console.log(arrayLetras.join(''))
}

inverterString("HIPOPOTAMO")