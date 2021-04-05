// . é um coringa, válido para um posiçlão

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
console.log(texto.match(/1...3/g))