function verificar(){
    let saida = document.getElementById('saida')
    let velocidadePermitida = Number(document.getElementById('iVelocidadePermitida').value)
    let velocidadeCondutor = Number(document.getElementById('iVelocidadeCondutor').value)
    let velocidade20 = velocidadePermitida + (velocidadePermitida * 0.2)    


    if(velocidadeCondutor <= velocidadePermitida){
        saida.innerHTML = `<h2>Situação: sem multa</h2>`
    } else if(velocidadeCondutor < velocidade20){
        saida.innerHTML = `<h2>Situação: multa leve</h2>`
    } else{
        saida.innerHTML = `<h2>Situação: multa grave</h2>`
    }
}

function calcular(){
    let saida = document.getElementById('saida')
    let valor = Number(document.getElementById('iValor').value)

    if(valor < 1){
        saida.innerHTML = `<h2>Valor Insuficiente</h2>`
    } else if(valor < 1.75){
        saida.innerHTML = `<h2>Tempo: 30min</h2>`
        saida.innerHTML += `<h2>Troco: ${(valor - 1).toFixed(2)}</h2>`
    } else if(valor < 3){
        saida.innerHTML = `<h2>Tempo: 60min</h2>`
        saida.innerHTML += `<h2>Troco: ${(valor - 1.75).toFixed(2)}</h2>`
    } else{
        saida.innerHTML = `<h2>Tempo: 120min</h2>`
        saida.innerHTML += `<h2>Troco: ${(valor - 3).toFixed(2)}</h2>`
    }
}

function triangulo(){
    let saida = document.getElementById('saida')
    let ladoA = Number(document.getElementById('iValorA').value)
    let ladoB = Number(document.getElementById('iValorB').value)
    let ladoC = Number(document.getElementById('iValorC').value)


    if(ladoC > ladoA + ladoB | ladoA > ladoB + ladoC | ladoB > ladoA + ladoC){
        saida.innerHTML = `<h2>Lados não podem formar triângulo</h2>`
    } else{
        saida.innerHTML = `<h2>Lados podem formar um triângulo</h2>`
        if(ladoA == ladoB && ladoA == ladoC){
            saida.innerHTML += `<h4>Tipo: Equilátero</h4>`
        } else if(ladoA != ladoB && ladoA != ladoC){
            saida.innerHTML += `<h4>Tipo: Escaleno</h4>`
        } else{
            saida.innerHTML += `<h4>Tipo: Isósceles</h4>`
        }
    }
    


}