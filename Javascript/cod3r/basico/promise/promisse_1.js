let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then(function(valor){
    return valor[0]
}).then(function(valor){
    return valor[0]
}).then(function(valor){
    console.log(valor)
})

p.then(valor => valor[0])
.then(valor => valor[0])
.then(valor => console.log(valor))