function gerarNumeroEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

gerarNumeroEntre(1, 60, 2)
    .then(console.log)

function gerarVariosNumero(){
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 500),
        gerarNumeroEntre(1, 60, 3000),
        gerarNumeroEntre(1, 60, 100),
        gerarNumeroEntre(1, 60, 1500),
    ])
}

gerarVariosNumero().then(numeros => console.log(numeros))