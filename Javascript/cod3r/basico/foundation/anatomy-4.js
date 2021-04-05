//Anonymous function
(function (a, b, c) {
    let x = 3
    console.log(`Resultado ${a+b+c}`)
    console.log(x)
})(1, 2, 3);

(function () {
    let x = 300
    console.log('Execução...')
    console.log(x)
})();

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))()