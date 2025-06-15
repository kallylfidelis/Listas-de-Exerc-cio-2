var numeroPessoas = document.querySelector ("#numeroPessoas")
var btCalcular = document.querySelector ("#btCalcular")
var h3Resultado = document.querySelector ("#h3Resultado")

function quantasPessoas() {
    var pessoas = Number (numeroPessoas.value)

    if (pessoas <= 0){
        h3Resultado.textContent = "Resultado inválido"
    }


    var numOvos = pessoas * 2
    var numQueijo = pessoas * 50
    h3Resultado.textContent = `para ${pessoas} pessoas, você precisará de ${numOvos} ovos e ${numQueijo} gramas de queijo.`
}

btCalcular.onclick = function() {
    quantasPessoas()
}