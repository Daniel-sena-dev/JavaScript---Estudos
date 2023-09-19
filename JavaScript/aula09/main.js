//Função para mudar imagem dependendo da página
function trocaImagem(){
    let pagina = document.referrer
    let imagem = document.getElementById('imagem')
    if(pagina == 'http://127.0.0.1:5500/JavaScript/aula09/tabuada.html'){
        imagem.style.backgroundImage = 'url("src/tabuada.jpg")'
        imagem.style.backgroundSize = 'cover'
    } else if(pagina == 'http://127.0.0.1:5500/JavaScript/aula09/numeroDescrescentes.html'){
        imagem.style.backgroundImage = 'url("src/decrescer.png")'
        imagem.style.backgroundSize = 'cover'
    } 
    
}

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



//Função da tabuada
function tabuada(){
    let saida = document.getElementById('saida')
    let numero = Number(document.getElementById('iNumero').value)
    //Limpando saida
    saida.innerHTML = ``

    for(i = 1; i <= 10; i++){
        saida.innerHTML += `<h4>${numero} X ${i} = ${numero * i}</h4>`
    }
}

//Função decrescer
function decrescer(){
    let saida = document.getElementById('saida')
    let numero = Number(document.getElementById('iNumero').value)
    //Limpando saida
    saida.innerHTML = ``

    for(i = numero; i > 0; i--){
        saida.innerHTML += `${i} `
    }
}

//Função contas de casa
var contador = 0
var total = 0
function contas(){
    let saida = saidaTela()
    let saida2 = document.getElementById('saida2')
    let descricao = document.getElementById('iDescricao').value
    let conta = Number(document.getElementById('iNumero').value)
    contador++
    total = total + conta
    
    saida.innerHTML += `<p>${descricao} - R$: ${conta.toFixed()}</p>`
    saida2.innerHTML = `<p>${contador} Conta(s) - Total R$: ${total.toFixed(2)}</p>`
    
    //Limpar campos
    document.getElementById('iDescricao').value = ''
    document.getElementById('iNumero').value = ''
    //Colocando o foco no campo descrição
    document.getElementById('iDescricao').focus()
}

function verificarPrimo(){
    let saida = saidaTela()
    let verificar = Number(document.getElementById('iNumeroPrimo').value)
    let primo = 0
    for(i = verificar; i > 0; i--){
        if(verificar % i == 0){
            primo ++
        }
    }

    if(primo == 2){
        saida.innerHTML = `<h2>O número ${verificar} é primo</h2>`
    }

    //Limpar input
    document.getElementById('iNumeroPrimo').value = ''
    document.getElementById('iNumeroPrimo').focus()

}