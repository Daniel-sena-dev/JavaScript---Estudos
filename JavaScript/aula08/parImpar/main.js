function parImpar(){
    let saida = document.getElementById('saida')
    let numero = Number(document.getElementById('iNumero').value)

    if(numero % 2 == 0){
        saida.innerHTML = `<h2>O número ${numero} é PAR</h2>`
    } else{
        saida.innerHTML = `<h2>O número ${numero} é ÍMPAR</h2>`
    }
}