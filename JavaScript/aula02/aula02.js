function somar(){
    let inputNumero1 = document.getElementById('iNumero');
    let numero1 = Number(inputNumero1.value);
    let inputNumero2 = document.getElementById('iNumero2');
    let numero2 = Number(inputNumero2.value);
    let saida = document.getElementById('saida');
    let soma = numero1 + numero2;

    //soma = numero1.value + numero2.value;

    saida.innerHTML = `<h2>${soma}</h2>`;




}