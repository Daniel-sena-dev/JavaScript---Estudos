function calcular(){
    let saida = document.getElementById('saida')
    let valorQuilo = document.getElementById('iPreco').value
    let valorGrama = document.getElementById('iGrama').value
    let total = (valorGrama * valorQuilo) / 1000

    saida.innerHTML = `<h3>Valor a pagar R$: ${total.toFixed(2)}</h3>`
}