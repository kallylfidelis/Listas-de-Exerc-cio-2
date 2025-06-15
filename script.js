var inputNum1 = document.querySelector ("#inputNum1")
var btCalcular = document.querySelector ("#btCalcular")
var h3Resultado = document.querySelector ("#h3Resultado")

function calcularDolar() {
    var valor1 = Number (inputNum1.value)


    var dolar = valor1 * 5.57
    h3Resultado.textContent = "O valor do dolar atual, está: " + dolar.toFixed(2);
}

btCalcular.onclick = function() {
    calcularDolar()
}