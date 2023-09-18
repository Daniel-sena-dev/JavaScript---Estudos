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
