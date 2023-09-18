function promocao(){
    let saida = document.getElementById('saida')
    let medicamento = document.getElementById('iMedicamento').value
    let preco = Number(document.getElementById('iPreco').value)
    let desconto = parseInt((preco * 2))


    saida.innerHTML = `<h1>Promoção de ${medicamento}</h1>`
    saida.innerHTML += `<h2>Leve 2 por apenas R$: ${desconto.toFixed(2)}</h2>`

}