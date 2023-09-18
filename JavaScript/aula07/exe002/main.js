function enviar(){
    let saida = document.getElementById('saida')
    let veiculo = document.getElementById('iNome').value
    let valor = document.getElementById('iNumero').value
    let entrada = valor/2
    let parcelas = entrada / 12

    saida.innerHTML += `<h2>Promoção: ${veiculo}</h2>`
    saida.innerHTML += `<h2>Entrada de R$: ${entrada.toFixed(2)}</h2>`
    saida.innerHTML += `<h2>+ 12x de R$: ${parcelas.toFixed(2)}</h2>`

}