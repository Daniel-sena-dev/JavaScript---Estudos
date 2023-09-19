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
    } else{
        saida.innerHTML = `<h2>O número ${verificar} não é primo</h2>`
    }

    //Limpar input
    document.getElementById('iNumeroPrimo').value = ''
    document.getElementById('iNumeroPrimo').focus()
}

function gerarEstrelas(){
    let saida = saidaTela()
    let iQuantidade = document.getElementById('iQuantidade')
    let quantidade = Number(iQuantidade.value)
    
    for(i = 1; i <= quantidade; i++){
        if(i % 2 == 0){
            saida.innerHTML += `_`
        } else{
            saida.innerHTML += `*`
        }
    }

    //Limpar input
    iQuantidade.value = ''
    iQuantidade.focus()
}

function repeteFruta(){
    let saida = saidaTela()
    let iFruta = document.getElementById('iFruta')
    let fruta = iFruta.value
    let iQuantidade = document.getElementById('iQuantidade')
    let quantidade = Number(iQuantidade.value)

    for(i=0; i < quantidade; i++){
        if(i != quantidade - 1){     
            saida.innerHTML += `${fruta} * `
        } else{
            saida.innerHTML += `${fruta}`
        }
    }

    //Limpar inputs
    iFruta.value = ''
    iQuantidade.value = ''
    iFruta.focus()
}

function criarChinchilas(){
    let saida = saidaTela()
    let iQuantidade = document.getElementById('iQuantidade')
    let quantidade = Number(iQuantidade.value)
    let iAnoQuantidade = document.getElementById('iAnoQuantidade')
    let anoQuantidade = Number(iAnoQuantidade.value)
    saida.innerHTML = ``

    if(quantidade < 2){
        saida.innerHTML = `<p>Quantidade de Chinchilas insuficiente! Digite ao menos 2</p>`
        saida.style.color = 'red'
    } else{
        saida.innerHTML += `<p>1º Ano: ${quantidade} Chinchilas</p>`
        for(i=1; i < anoQuantidade; i++){
            saida.innerHTML += `<p>${i + 1}º Ano: ${quantidade * 3} Chinchilas</p>`
            quantidade *= 3
        }
        
    }

    //Limpando inputs
    iQuantidade.value = ''
    iAnoQuantidade.value = ''
    iQuantidade.focus()


}   