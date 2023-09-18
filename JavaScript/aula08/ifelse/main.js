function media(){
    let saida = document.getElementById('saida')
    let nome = document.getElementById('iNome').value
    let nota1 = Number(document.getElementById('iNota1').value)
    let nota2 = Number(document.getElementById('iNota2').value)
    media = (nota1 + nota2)/2

    saida.innerHTML = `<h1>Média das Notas: ${media.toFixed(1)}</h1>`
    if (media >= 6){
        saida.innerHTML += `<h1>Parabéns ${nome}! Você foi aprovado(a)</h1>`
        saida.style.color = 'blue'
    } else{
        saida.innerHTML += `<h1>Estude mais ${nome}! Você foi reprovado(a)</h1>`
        saida.style.color = 'red'
    }

}