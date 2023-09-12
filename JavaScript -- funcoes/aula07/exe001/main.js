function enviar(){
    let nomeFilme = document.getElementById('iTexto').value
    let tempoDuracao = Number(document.getElementById('iNumero').value)
    let horas = Math.floor(tempoDuracao / 60)
    let minutos = tempoDuracao % 60
    let saida = document.getElementById('saida')

    saida.innerHTML = `<p>${nomeFilme}</p>`
    saida.innerHTML += `<p>${horas} hora(s) e ${minutos} minuto(s)</p>`
}