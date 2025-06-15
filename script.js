var inputNum1 = document.querySelector ("#inputNum1")
var inputNum2 = document.querySelector ("#inputNum2")
var btCalcular = document.querySelector ("#btCalcular")
var h3Resultado = document.querySelector ("#h3Resultado")


function doisNumeros() {
    var primeiroNumero = Number (inputNum1.value)
    var segundoNumero = Number (inputNum2.value)


    var soma = primeiroNumero + segundoNumero
    var subtracao = primeiroNumero - segundoNumero
    var multiplicacao = primeiroNumero * segundoNumero
    var divisao = primeiroNumero / segundoNumero

    h3Resultado.innerHTML = `
        Soma: ${soma}<br>
        Subtração: ${subtracao}<br>
        Multiplicação: ${multiplicacao}<br>
        Divisão: ${divisao}
       ` 
}


btCalcular.onclick = function() {
    doisNumeros()
}