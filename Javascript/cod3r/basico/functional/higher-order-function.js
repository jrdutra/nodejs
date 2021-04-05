/*
É quando eu posso passar uma função
como argumento de outra função
ou quando eu posso retornar uma função 
em outra função
*/
//técnica de Curring
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
}

console.log(finalPrice(0.08)(25.1))

// OU
const nycFinalPrice = finalPrice(0.08)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(22.3))
console.log(nycFinalPrice(23.2))
