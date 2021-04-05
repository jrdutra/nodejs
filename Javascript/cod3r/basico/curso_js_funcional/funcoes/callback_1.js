const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

console.log(caminho)

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

console.log('Inicio asyncrono...')
fs.readFile(caminho, {}, exibirConteudo)
console.log('Fim asyncrono...')

console.log('Inicio syncrono...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim syncrono...')