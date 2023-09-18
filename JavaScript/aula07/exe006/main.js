function promocao(){
    let saida = document.getElementById('saida')
    let produto = document.getElementById('iProduto').value
    let preco = document.getElementById('iValor').value
    let desconto = (preco * 2) + (preco * 0.5)


    saida.innerHTML = `<h1>${produto} - Promoção: Leve 3 por R$: ${desconto.toFixed(2)}</h1>`
    saida.innerHTML += `<h1>O 3º produto custa apenas R$: ${(preco*0.5).toFixed(2)}</h1>`
}