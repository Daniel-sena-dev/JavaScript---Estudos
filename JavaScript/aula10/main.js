//Função para mudar imagem dependendo da página
function trocaImagem(){
    let pagina = document.referrer
    let imagem = document.getElementById('imagem')
    if(pagina == 'http://127.0.0.1:5500/JavaScript/aula10/consultorioOdonto.html'){
        imagem.style.backgroundImage = 'url("src/dentista.jpg")'
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
//==============================================================================
//Fila do consultorio
var fila = []
function listaConsultorio(){
    let saida = saidaTela()
    let iNome = document.getElementById('iNome')
    let nome = iNome.value
    
    //Limpando a saida
    saida.innerHTML = ''

    //Adicionando o nome a fila
    fila.push(nome)
    
    //Imprimindo a fila
    for(i = 0; i < fila.length; i++){
        saida.innerHTML += `<p>${i+1}. ${fila[i]}</p>`
    }

    //Limpa
    iNome.value = ''
    iNome.focus()
}

//Adiciona a primeira colocação
function urgencia(){
    let saida = saidaTela()
    let iNome = document.getElementById('iNome')
    let nome = iNome.value
    
    //Limpando a saida
    saida.innerHTML = ''

    //Adicionando o nome ao inicio da fila
    fila.unshift(nome)
  

    //Imprimindo a fila
    for(i = 0; i < fila.length; i++){
        saida.innerHTML += `<p>${i+1}. ${fila[i]}</p>`
    }

    //Limpa
    iNome.value = ''
    iNome.focus()
}

//Atendendo
function atender(){
    let saida = saidaTela()
    
    //Limpando saida
    saida.innerHTML = ''

    //Removendo o primeiro nome
    fila.shift()

    //Imprimindo a fila
    for(i = 0; i < fila.length; i++){
        saida.innerHTML += `<p>${i+1}. ${fila[i]}</p>`
    }
}
//==============================================================================
//Descubra o número
var erro = []

//Sorteando um numero
var sorteado = Math.floor(Math.random() * 100) + 1

function descubraNumero(){
    let saida = saidaTela()
    let iNumero = document.getElementById('iNumero')
    let numero = Number(iNumero.value)
    const CHANCES = 6
       
    //Limpar saida
    saida.innerHTML = ''

    if(numero < 1 || numero > 100){
        saida.innerHTML += 'Valor digitado invalido!'
    } else if(CHANCES - erro.length == 0){
        saida.innerHTML = `<h2>GAME OVER!</h2>`
        erro = []
        saida.style.color = 'red'
    } else{
        if(numero == sorteado){
            saida.innerHTML = `<h2>Parabéns você acertou!</h2>`
            saida.style.color = 'green'
        }else{
            erro.push(numero)
            saida.innerHTML += `<h2>Erros: ${erro.length}</h2>`
            saida.innerHTML += `<h2>CHANCES: ${CHANCES - erro.length}</h2>`
            saida.innerHTML += `<h2>Dica: É um número entre 1 e 100</h2>`
        }
    }

    //Limpar campo
    iNumero.value = ''
    iNumero.focus()
}
//==============================================================================
//Revenda Herbie
var carro = []
function adicionar(){
    let saida = saidaTela()
    let iModelo = document.getElementById('iModelo')
    let iPreco = document.getElementById('iPreco')
    let modelo = iModelo.value
    let preco = Number(iPreco.value)
    
    //Limpar saida
    saida.innerHTML = ``
    if(modelo == '' || preco == 0){
        saida.innerHTML = `<p>valores inválidos</p>`
        saida.style.color = 'red'
    } else{
        carro.push({modelo: modelo, preco: preco})
        saida.style.color = 'black'
    }

    //Limpar inputs
    iModelo.value = ''
    iModelo.focus()
    iPreco.value = ''    

    listarCarros()
}

function listarCarros(){
    let saida = saidaTela()
    
    //Limpar saida
    saida.innerHTML = ``
    
    //Imprimir carros
    if(carro.length == 0){
        saida.innerHTML = `<p>Não a carros para listar</p>`
        saida.style.color = 'red'
    } else{
        for(i = 0; i < carro.length; i ++){
            saida.innerHTML += `<p>${carro[i].modelo} - R$: ${carro[i].preco.toFixed(2)}</p>`
        }
    }
}

function filtrarCarro(){
    let saida = saidaTela()
    let maximo = Number(prompt('Qual valor máximo que o cliente deseja pagar?'))
    //Limpar saida
    saida.innerHTML = ``

    if(maximo == 0 || isNaN(maximo)){
        return;
    }

    for(i = 0; i < carro.length; i++){
        if(carro[i].preco <= maximo){
            saida.innerHTML = `<p>${carro[i].modelo} - R$: ${carro[i].preco.toFixed(2)}</p>`
        }
    }


}