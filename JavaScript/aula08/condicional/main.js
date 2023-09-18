function imc(){
    let saida = document.getElementById('saida')
    let nome = document.getElementById('iNome').value
    let altura = Number(document.getElementById('iAltura').value)
    let iMasculino = document.getElementById('iMasculino').checked
    let pesoIdeal = null
    
    if(iMasculino === true){
        pesoIdeal = 22 * Math.pow(altura, 2)
    } else{
        pesoIdeal = 21 * Math.pow(altura, 2)
    }

    saida.innerHTML = `<h3>${nome}: Seu peso ideal é ${pesoIdeal.toFixed(2)} Kg</h3>`
}

function limparCampos(){
    document.getElementById('iNome').value = ""
    document.getElementById('iAltura').value = ""
    document.getElementById('saida').value = ""
    //Posiciona o foco no primeiro campo
    document.getElementById('iNome').focus()
}