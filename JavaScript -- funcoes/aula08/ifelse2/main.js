function fusoHorario(){
    let saida = document.getElementById('saida')
    let hora = Number(document.getElementById('iHora').value)
    let horaFranca = hora + 5

    if(horaFranca > 24){
        horaFranca = horaFranca - 24
    } 
    saida.innerHTML = `<h3>Hora na França: ${horaFranca.toFixed(2)}</h3>`
    
}