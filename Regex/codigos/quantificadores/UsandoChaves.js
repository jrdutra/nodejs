const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir um quantificador usar {}

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/\d{2}/g))
console.log(texto.match(/[0-9]{2}/g))