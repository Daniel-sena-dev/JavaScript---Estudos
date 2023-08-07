// Criar função de forma literal
function iniciar(){
    let escrever = document.getElementById('saida')
    function soma (numero1, numero2){
    return numero1 + numero2
    }

    let saida = soma(2, 10)
    escrever.innerHTML = `<p>O resultado da soma deu: ${saida}</p>`

    // Armazenar em uma variavel
    const fun1 = function () { escrever.innerHTML += `<p>função 1 foi chamada</p>` }
    fun1()

    // Armazenando em um array
    const array = [function(a, b) { return a + b}, fun1]


}


