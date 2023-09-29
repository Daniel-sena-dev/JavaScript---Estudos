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

    saida.innerHTML = `<h4>Carros até R$ ${maximo.toFixed(2)}</h4>`
    saida.innerHTML += `<p>------------------------------------</p>`
    for(i = 0; i < carro.length; i++){
        if(carro[i].preco <= maximo){
            saida.innerHTML += `<p>${carro[i].modelo} - R$: ${carro[i].preco.toFixed(2)}</p>`
        }
    }
}
//==============================================================================
let listaCrianca = []
function adicionarCrianca(){
    let saida = saidaTela()
    let iNome = document.getElementById('iNome')
    let iIdade = document.getElementById('iIdade')
    let nome = iNome.value
    let idade = Number(iIdade.value)

    //Limpar campo
    saida.innerHTML = ``

    listaCrianca.push({nome: nome, idade: idade})

    listarCrianca()
    
    //Limpar input
    iNome.value = ''
    iNome.focus()
    iIdade.value = ''
}

//Listar crianças
function listarCrianca(){
    let saida = saidaTela()

    //Limpar campo
    saida.innerHTML = ``

    //Listar Crianças
    for(i = 0; i < listaCrianca.length; i++){
        saida.innerHTML += `<p>${listaCrianca[i].nome} - ${listaCrianca[i].idade} anos</p>`
    }
}

//Resumir por idade
function resumirLista(){
    let saida = saidaTela()
    
    //Limpar campo
    saida.innerHTML = ``

    if(listaCrianca.length == 0)    {
        alert('Não há crianças na lista')
        return;
    }

    //Criando copia da lista
    let copia = listaCrianca.slice()

    //ordernar o vetor copia pela idade
    copia.sort(function(a,b){return a.idade - b.idade})

    let resumo = ''

    //Menor idade do vetor ordenado
    let aux = copia[0].idade
    //Vetor para inserir nomes de cada idade
    let nomes = []

    for(i = 0; i < copia.length; i++){
        if(copia[i].idade == aux){
            nomes.push(copia[i].nome)
        } else{
            resumo += `<p>${aux} anos(s) ${nomes.length} criança(s) - ${(nomes.length/copia.length * 100).toFixed(2)}%</p>`
            resumo += `<p>(${nomes.join(', ')})</p>`
            aux = copia[i].idade
            nomes = []
            nomes.push(copia[i].nome)
        }
    }

    resumo += `<p>${aux} anos(s) ${nomes.length} criança(s) - ${(nomes.length/copia.length * 100).toFixed(2)}%</p>`
    resumo += `<p>(${nomes.join})</p>`
    
    saida.innerHTML = `${resumo}`
}
//==============================================================================
//Adicionar um time
var listaTimes = []
function adicionarTime(){
    saida = saidaTela()
    let iNomeTime = document.getElementById('iTime')
    let nomeTime = iNomeTime.value

    //Limpar saida
    saida.innerHTML = ``

    if(nomeTime == ''){
        saida.innerHTML = `Valor invalido! Digite um valor valido`
        saida.style.color = 'red'
    } else{
        listaTimes.push(nomeTime)
    }

    listarTime()

    //Limpar inputs
    iNomeTime.value = ''
    iNomeTime.focus()
}

//Listar times
function listarTime(){
    saida = saidaTela()

    //Limpar saida
    saida.innerHTML = ``

    if(listaTimes.length == 0){
        saida.innerHTML = `<p>Sem times cadastrados</p>`
        saida.style.color = 'red'
    } else{
        for(i = 0; i < listaTimes.length; i++){
            saida.style.color = 'black'
            saida.innerHTML += `<p>${i+1} - ${listaTimes[i]}</p>`
        }
    }
}

//Montar tabela
function montarTabela(){
    saida = saidaTela()
    
    //Limpar saida
    saida.innerHTML = ``

    if(listaTimes.length % 2 == 1){
        saida.innerHTML = `<p>Não há time suficiente para criar tabela!</p>`
        saida.style.color = 'red'
    } else{
        let quantidadeTimes = listaTimes.length - 1
        for(i = 0; i < listaTimes.length / 2; i++){
            saida.innerHTML += `<p>${listaTimes[i]} X ${listaTimes[quantidadeTimes]}</p>`
            quantidadeTimes--
        }
    }
}

//Adicionar numero a um vetor
var listaNumero = []
function adicionarNumero(){
    let saida = saidaTela()
    let iNumero = document.getElementById('iNumero')
    let numero = Number(iNumero.value)
    let numeroNaLista = false
    let fraseSaida = 'Número: '

    //Limpar saida
    saida.innerHTML = ''

    //Verificando se o número está na lista
    for(i = 0; i < listaNumero.length; i++){
        if(numero == listaNumero[i]){
            numeroNaLista = true
            break
        }
    }

    //Adicionando o numero na lista se for true
    if(numeroNaLista == false){
        listaNumero.push(numero)
    }

    //Imprimindo a lista
    for(i = 0; i < listaNumero.length; i++){
        fraseSaida += ` ${listaNumero[i]} `
    }

    saida.innerHTML = `<h2>${fraseSaida}</h2>`

    //Limpar inputs
    iNumero.value = ''
    iNumero.focus()
}

function verificarOrdem(){
    let saida = saidaTela()
    let listaOrdem = listaNumero.slice()
    listaOrdem.sort()
    let ordem = false
    
    //Verificando se a lista esta na ordem crescente
    for(i = 0; i < listaNumero.length; i++){
        if(listaNumero[i] == listaOrdem[i]){
            ordem = true
        } else{
            ordem = false
            break
        }
    }

    if(ordem == false){
        saida.innerHTML += `<h3>Atenção... Números não estão em ordem crescente</h3>`
    } else{
        saida.innerHTML += `<h3>Números estão em ordem crescente</h3>`
    }
}
//==========================================================================================
//Programa do concurso
var candidatos = []
var acertos = []
function adicionarCandidato(){
    let saida = saidaTela()
    let iNomeCandidato = document.getElementById('iNomeCandidato')
    let nomeCandidato = iNomeCandidato.value
    let iQuantidadeAcerto = document.getElementById('iQuantidadeAcerto')
    let quantidadeAcerto = Number(iQuantidadeAcerto.value)

    //Limpar saida
    saida.innerHTML = ''

    //Adicionar os valores
    if(nomeCandidato == '' || quantidadeAcerto < 0){
        saida.innerHTML = `<p>Valor digitado invalido!</p>`
    } else{
        candidatos.push(nomeCandidato)
        acertos.push(quantidadeAcerto)
    }


    listarCandidatos()

    //Limpar inputs
    iNomeCandidato.value = ''
    iNomeCandidato.focus()
    iQuantidadeAcerto.value = ''
}

//Listar candidatos
function listarCandidatos(){
    let saida = saidaTela()

    //Limpar campos
    saida.innerHTML = ''

    for(i = 0; i < candidatos.length; i++){
        saida.innerHTML += `<p>${candidatos[i]} - ${acertos[i]} acertos</p>`
    }

}

//Listar aprovador
function listarAprovados(){
    let saida = saidaTela()
    let notaCorte = Number(prompt('Digite o valor da nota de corte'))
    //Limpar campos
    saida.innerHTML = ''

    if(candidatos.length <= 0){
        saida.innerHTML = `<p>Não há candidatos suficientes!</p>`
    } else{
        for(i = 0; i < candidatos.length; i++){
            if(acertos[i] >= notaCorte){
                saida.innerHTML += `<p>${candidatos[i]} - ${acertos[i]} acertos</p>`
            }
        }
    }
}

//==================================================================================
var listaNoticias = []
function adicionarNoticia(){
    let saida = saidaTela()
    let iNoticia = document.getElementById('iNoticia')
    let noticia = iNoticia.value

    //Limpar saida 
    saida.innerHTML = ``

    //Adicionando a noticia no vetor
    if(noticia == ''){
        saida.innerHTML += `Valor digitado invalido!`
        saida.style.color = 'red'
    } else{
        listaNoticias.push(noticia)
    }

    //Listar noticias
    for(i = 0; i < listaNoticias.length; i++){
        saida.innerHTML += `<p>${i + 1}º) ${listaNoticias[i]}</p>`
    }

    //Limpar input
    iNoticia.value = ''
    iNoticia.focus()
}

//Listar ultimas noticias
function listarNoticia(){
    let saida = saidaTela()
    let quantidadeNoticias = Number(prompt('Quantas noticias deseja ver?'))
    let inverterLista = listaNoticias.reverse()

    //Limpar saida
    saida.innerHTML = ''

    if(listaNoticias.length <= 0){
        saida.innerHTML = `<p>Não noticias suficiente</p>`
    } else{
        for(i = 0; i < quantidadeNoticias; i++){
            saida.innerHTML += `<p>${inverterLista.length - i}º) ${inverterLista[i]}</p>`
        }
    }

}