//g - global
//i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/))
console.log(texto.match(/ab|c/gi))