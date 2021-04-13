const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elemntosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudos => todoConteudos.split('\n'))
    .then(console.log)