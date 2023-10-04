//Saida
function saidaTela(){
    return document.getElementById('saida')
}

//Limpar saida
function limpar(saida1, saida2){
    if(saida1 == true){
        let saida = saidaTela()
        saida.innerHTML = ``
    }

    if(saida2 == true){
        let saida = document.getElementById('saida2')
        saida.innerHTML = ``
    }
}

//====================================================================
var frutas = ['', 'banana', 'uva', 'laranja', 'melancia']
var sorteado = Math.floor(Math.random() * (frutas.length - 1)) + 1

function adivinharFruta(){
    let saida = saidaTela()
    let iFruta = document.getElementById('iFruta')
    let frutaDigitada = iFruta.value
    let frutaEscolhida = frutas[sorteado]

    alert(frutaEscolhida)


    //Limpar input
    iFruta.value = ''
    iFruta.focus()

}