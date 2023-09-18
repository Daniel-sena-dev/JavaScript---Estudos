function calcular(){
    let saida = document.getElementById('saida')
    let numero = Number(document.getElementById('iNumero').value)
    let raiz = Math.sqrt(numero)

    if(raiz % 2 == 0){
        saida.innerHTML = `<h2>A raiz de ${numero} é ${raiz}</h2>`
    } else{
        saida.innerHTML = `<h2>Não tem raiz exata para ${numero}</h2>`
    }

}