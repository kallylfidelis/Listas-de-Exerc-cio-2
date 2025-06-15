var sabor1 = document.querySelector("#sabor1");
var sabor2 = document.querySelector("#sabor2");
var sabor3 = document.querySelector("#sabor3");
var sabor4 = document.querySelector("#sabor4");
var quantidadeRefrigerantes = document.querySelector("#quantidadeRefrigerantes");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularTotal() {
    var sabores = [
        sabor1.value,
        sabor2.value,
        sabor3.value,
        sabor4.value
    ];

    var totalPizzas = 12 * sabores 
    var totalRefrigerantes = 7 * Number(quantidadeRefrigerantes.value); 

    h3Resultado.innerHTML = `
        Sabores escolhidos: ${sabores.join(", ")}<br>
        Total a pagar: R$ ${total.toFixed(2)}
    `;
}

btCalcular.onclick = function() {
    calcularTotal();
}
