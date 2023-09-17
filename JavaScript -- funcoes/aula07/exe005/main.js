function valor(){
    let saida = document.getElementById('saida')
    let valorHora = Number(document.getElementById('iValorHora').value)
    let tempo = Number(document.getElementById('iTempo').value)
    let quantidadeHora = Math.ceil(tempo / 15)
    let total = valorHora * quantidadeHora

    saida.innerHTML = `<h1>Valor a pagar: R$${total.toFixed(2)}</h1>`
}