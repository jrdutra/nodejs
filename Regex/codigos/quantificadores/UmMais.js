const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO'
const texto2 = 'There is a big fog in NYC'

//+ -> Zero ou um (opcional)

const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))