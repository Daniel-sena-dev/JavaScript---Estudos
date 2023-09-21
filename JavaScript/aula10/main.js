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