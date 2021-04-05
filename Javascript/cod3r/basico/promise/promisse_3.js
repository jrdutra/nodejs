function gerarNumeroEntre(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(1, 60)
    .then(valor => valor * 10)
    .then(valor => `O número gerado foi ${valor}`)
    .then(console.log)