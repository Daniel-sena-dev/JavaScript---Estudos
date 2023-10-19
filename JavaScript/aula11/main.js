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

//====================================================================
//Array com as frutas e o numero sorteado
var frutas = ['', 'banana', 'uva', 'laranja', 'melancia']
var sorteado = Math.floor(Math.random() * (frutas.length - 1)) + 1

//Fruta escolhida
var frutaEscolhida = frutas[sorteado]
    
//Coloando o tamanho da fruta numa varivavel
var tamanhoFruta = []
for(i = 0; i < frutaEscolhida.length; i++){
    tamanhoFruta.push('_')
}

function adivinharFruta(){
    let saida = saidaTela()
    let iFruta = document.getElementById('iFruta')
    let frutaDigitada = iFruta.value
    let ganhou = false
    
    //Verificando se a fruta digitada 
    if(frutaDigitada == ''){
        saida.innerHTML = `<p>Valor digitado invalido</p>`
    } else{ //Verificando se a letra esta na fruta escolhida
        for(i = 0; i < frutaEscolhida.length; i++){
            if(frutaDigitada[0] == frutaEscolhida[i]){
                tamanhoFruta[i] = frutaDigitada[0]
            }
        }
        percorrerFruta()

        //Verificar se ganhou o jogo
        for(i = 0; i < frutaEscolhida.length; i++){
            if(tamanhoFruta[i] != frutaEscolhida[i]){
                ganhou = false
                break
            } else{
                ganhou = true
            }
        }

        //Ganhou
        if(ganhou){
            saida.innerHTML = `<h2>Parabéns você ganhou!</h2>`
        }
    }
    

    //Limpar input
    iFruta.value = ''
    iFruta.focus()
}

function percorrerFruta(){
    saida = saidaTela()

    //Limpar saida
    saida.innerHTML = ''

    for(i = 0; i < frutaEscolhida.length; i++){
        saida.innerHTML += `${tamanhoFruta[i]} `
    }
}

//====================================================================
//Programa nome no cracha
function nomeCracha(){
    let saida = saidaTela()
    let iNomeFuncionario = document.getElementById('iNomeCracha')
    let nomeFuncionario = iNomeFuncionario.value
    
    //Limpar saida
    saida.innerHTML = ``

    //Verificar input
    if(nomeFuncionario == ''){
        saida.innerHTML = `<p>Valor digitado invalido</p>`
    } else{
        let primeiroEspaco = nomeFuncionario.indexOf(" ")
        let segundoEspaco = nomeFuncionario.lastIndexOf(" ")
        let nomeEditado = nomeFuncionario.substr(0, primeiroEspaco) + nomeFuncionario.substr(segundoEspaco)
        saida.innerHTML = `<p>Crachá: ${nomeEditado}</p>`

    }

    //Limpar inputs
    iNomeFuncionario.value = ''
    iNomeFuncionario.focus()

}

//===========================================================================
//Gerando email institucional
function gerarEmail(){
    let saida = saidaTela()
    let iNomeFuncionario = document.getElementById('iNomeFuncionario')
    let nomeFuncionario = iNomeFuncionario.value

    //Limpando saida
    saida.innerHTML = ``

    if(nomeFuncionario == '' || nomeFuncionario == null){ 
        saida.innerHTML = `<p>Valor inválido!</p>`
    } else{
        nomeFuncionario = nomeFuncionario.toLowerCase()
        let partes = nomeFuncionario.split(" ")
        let email = ''

        //Removendo os conectivos
        for(i = 0; i < partes.length; i++){
            if(partes[i].length <= 2){
                partes.splice(i, 1) //Splice() remove o indice fornecido uma quantidade x de vezes
            }            
        }   

        //Colocando as iniciais dos nomes
        for(i = 0; i < partes.length - 1; i++){
            email += partes[i].charAt(0)
        }
        email += partes[partes.length - 1] + '@empresa.com'
        saida.innerHTML += `<p>${email}</p>`
    }




    //Limpar inputs
    iNomeFuncionario.value = ''
    iNomeFuncionario.focus()
}

//===========================================================================
//Verificando senha
function verificarSenha(){
    let saida = saidaTela()
    let iSenha = document.getElementById('iSenha')
    let senha = iSenha.value
    let erros = []
    //Limpar saida
    saida.innerHTML = ''

    //Verificando tamanho da senha
    if(senha.length < 8 || senha.length > 15){
        erros.push('Possuir entre 8 e 15 caracteres')
    }
    //Verificar se nao possui numero
    if(senha.match(/[0-9]/g) == null){
        erros.push('possuir numeros (no minimo, 1)')
    }
    //verficiar se nao possui letras minusculas
    if(!senha.match(/[a-z]/g)){
        erros.push('possuir letras minusculas (no minimo, 1)')
    }
    //Verifica se nao possui letras maiusculas ou se possui apenas 1
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push('possuir letras maiusculas (no minimo, 2)')
    }
    //verifica se nao possui simbolos ou "_"
    if(!senha.match(/[\W|_]/g)){
        erros.push('possuir simbolos (no minimo, 1)')
    }
    
    //Imprimindo erros
    if(erros.length > 0){
        for(i = 0; i < erros.length; i++){
            saida.innerHTML += `<p>${erros[i]}</p>`
        }
    } else{
        saida.innerHTML = `<p>Senha validada com sucesso! ${senha}</p>`
    }

    //Limpar input
    iSenha.value = ''
    iSenha.focus()
}
//===========================================================================
//Calcular multa e juros
function calcularMultaJuros(){
    //Multas e Juros
    const TAXA_MULTA = 2 / 100
    const TAXA_JUROS = 0.33 / 100
    //Variaveis
    let iData = document.getElementById('iData')
    let data = iData.value
    let iConta = document.getElementById('iConta')
    let conta = Number(iConta.value)
    let iMulta = document.getElementById('iMulta')
    let iJuros = document.getElementById('iJuros')
    let iTotal = document.getElementById('iTotal')

    //Verificando o preenchimento dos campos
    if(data == "" || conta == 0 || isNaN(conta)){
        alert("Informe corretamente os dados da conta...")
        iData.focus()
        return    
    }

    //Criar variaveis tipo data
    let hoje = new Date()
    let vencimento = new Date()

    //Formatando a data
    let partes = data.split('-')
    vencimento.setDate(Number(partes[2]))
    vencimento.setMonth(Number(partes[1]) - 1)
    vencimento.setFullYear(Number(partes[0]))
    
    //diferença entre as datas
    let atraso = hoje - vencimento

    //Inicializar multa e juros
    let multa = 0
    let juros = 0

    //Se a conta estiver em atraso
    if(atraso > 0){
        //Converter os milissegundos da diferença em dias
        // (1 dia = 24hrs x 60 min x 10000mseg: 8640000)
        // round(): necessario p/ periodos envolvendo horario de verao
        let dias = Math.round(atraso / 86400000)

        multa = conta * TAXA_MULTA
        juros = (conta * TAXA_JUROS) * dias
    }

    let total = conta + multa + juros

    //Exibindo variaveis
    iMulta.value = multa.toFixed(2)
    iJuros.value = juros.toFixed(2)
    iTotal.value = total.toFixed(2)

    //Limpando inputs
    iData.focus()
}

//Limpar campos
function limparCampos(){
    location.reload()
}

//=========================================================================
//Verificando as datas
function verificandoData(){
    saida = saidaTela()
    
    //Criando datas
    let dataHoje = new Date()
    let dataAmanha = new Date()

    //Pegando a data do dia seguinte
    let dia = dataAmanha.getDate()
    dataAmanha.setDate(dia + 1)

   saida.innerHTML = `<p><b>Data de hoje:</b> ${dataHoje}</p>`
   saida.innerHTML += `<p><b>Data de amanhã:</b> ${dataAmanha}</p>`
}
v
//Separando a data
function pegandoParteDatas(){
    saida = saidaTela()
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'
                ,'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    dataHoje = new Date()

    //Imprimindo o dia 
    saida.innerHTML = `<p><b>Dia:</b> ${dataHoje.getDate()}</p>`
    //Imprimindo o mês
    saida.innerHTML += `<p><b>Mês:</b> ${meses[dataHoje.getMonth()]}</p>`
    //Imprimindo o ano
    saida.innerHTML += `<p><b>Ano:</b> ${dataHoje.getFullYear()}</p>`
    //Imprimindo hora
    saida.innerHTML += `<p><b>Horas:</b> ${dataHoje.getHours()}:${dataHoje.getMinutes()}</p>`
}
//=========================================================================
