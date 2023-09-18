function saque(){
    let saida = document.getElementById('saida')
    let valor = Number(document.getElementById('iValor').value)

    saida.innerHTML = ''

    let notasCem = parseInt(valor / 100)
    valor = valor - (notasCem * 100)
    let notasCinquenta = parseInt(valor / 50)
    valor = valor - (notasCinquenta * 50)
    let notasVinte = parseInt(valor / 20)
    valor = valor - (notasVinte * 20)
    let notasDez = parseInt(valor / 10)
    valor = valor - (notasDez * 10)
    let notasCinco = parseInt(valor / 5)
    valor = valor - (notasCinco * 5)
    
    if(notasCem > 0){
        saida.innerHTML += `<h2>Notas de R$ 100: ${notasCem}</h2>`
    }
    if(notasCinquenta > 0){
        saida.innerHTML += `<h2>Notas de R$ 50: ${notasCinquenta}</h2>`
    }
    if(notasVinte > 0){
        saida.innerHTML += `<h2>Notas de R$ 20: ${notasVinte}</h2>`
    }
    if(notasDez > 0){
        saida.innerHTML += `<h2>Notas de R$ 10: ${notasDez}</h2>`
    }
    if(notasCinco > 0){
        saida.innerHTML += `<h2>Notas de R$ 5: ${notasCinco}</h2>`
    }
    if(valor > 0){
        saida.innerHTML += `<h2>Notas de R$ 1: ${valor}</h2>`
    }

}