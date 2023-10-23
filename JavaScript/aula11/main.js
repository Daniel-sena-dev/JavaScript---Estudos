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
//data das parcelas
function dataParcelas(){
    saida = saidaTela()
    let iParcelas = document.getElementById('iParcelas')
    let parcelas = iParcelas.value

    //Criando a data de hoje
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    //Limpar saida
    saida.innerHTML = ``

    diaZero = dia < 10 ? "0" + dia : dia
    mesZero = mes < 10 ? "0" + mes : mes

    for(i = 0; i < parcelas; i++){ //CORRIGIR
        saida.innerHTML += `<p>${i + 1}ª Parcela: ${diaZero}/${mesZero + i}/${ano}</p>`
    }

    //Limpar inputs
    iParcelas.value = ''
    iParcelas.focus()
}
//=========================================================================
//Criptografia
var mensagem = null
function criptografia(){
    let saida = saidaTela()
    let iMensagem = document.getElementById('iMensagem')
    mensagem = iMensagem.value
   
    //Limpando saida
    saida.innerHTML = ``
    saida.style.color = 'black'

    //Imprimindo apenas as letras pares
    for(i = 0; i < mensagem.length; i++){
        if(i % 2 == 0){
            saida.innerHTML += `${mensagem[i + 1]}`
        }
    }
    //Imprimindo apenas as letras impares
    for(i = 0; i < mensagem.length; i++){
        if(i % 2 == 1){
            saida.innerHTML += `${mensagem[i - 1]}`
        }
    }

    //Limpar inputs
    iMensagem.value = ``
    iMensagem.focus()

}
//Descriptografia
function descriptografia(){
    let saida = saidaTela()
    
    //Verificando se tem mensagem para descriptografar
    if(mensagem == null){
        saida.innerHTML = `<p>Não mensagem para descriptografar</p>`
        saida.style.color = 'red'
    } else{
        saida.style.color = 'black'
        saida.innerHTML = `<p>${mensagem}</p>`
    }
}
//=========================================================================
//Fazer referencia bibliografica
function referenciar(){
    let saida = saidaTela()
    let iNome = document.getElementById('iNome')
    let nome = iNome.value

    //Limpar saida
    saida.style.color = 'black'
    saida.innerHTML = ``

    //Tratando nome
    if(nome == ''){
        saida.innerHTML = `<p>Digite o nome no campo!</p>`
        saida.style.color = 'red'
    } else{
        //Colocando o nome num vetor
        let partes = nome.split(' ')
        
        //Removendo conectivos
        for(i = 0; i < partes.length; i++){
            if(partes[i].length <= 2){
                partes.splice(i, 1)
            }
        }

        let nomeReferenciado = partes[partes.length - 1] + ', '
        
        //Imprimindo a letra inicial de cada nome
        for(i = 0; i < partes.length - 1; i++){
            nomeReferenciado += partes[i][0] + '. '
        }

        //Saida
        saida.innerHTML = `<p><b>Citação Bibliográfica: ${(nomeReferenciado).toUpperCase()}</b></p>`
    }
    

    //Limpar inputs
    iNome.value = ''
    iNome.focus()
}
//==============================================================================
//Frase palindromo
function frasePalindromo(){
    let saida = saidaTela()
    let iFrase = document.getElementById('iFrase')
    let frase = iFrase.value
    let palindromo = true

    //Tirando os espaços e juntando num  vetor so
    let juntandoFrase = frase.split(' ')
    juntandoFrase = juntandoFrase.join('').toLowerCase()
    
    //Limpar saida
    saida.innerHTML = ``
    
    //verificar se a frase é um palindromo
    for(i = 0; i < juntandoFrase.length; i++){
        if(juntandoFrase[i] != juntandoFrase[(juntandoFrase.length - 1) - i]){
            palindromo = false
        }
    }

    if(palindromo == true){
        saida.innerHTML = `<p>${frase.toUpperCase()} é um palíndromo</p>`
    } else{
        saida.innerHTML = `<p>Não é um palíndromo</p>`
    }

    //Limpar inputs
    iFrase.value = ''
    iFrase.focus()
}
//==============================================================================
//Multa de trânsito
function multaTransito(){
    let saida = saidaTela()
    let iData = document.getElementById('iData')
    let iMulta = document.getElementById('iMulta')
    let data = iData.value
    let multa = Number(iMulta.value)
    //Tratando data
    let dataCompleta = data.split('-')
    //Calcular o desconto da multa
    let multaDesconto = multa - (multa * 0.2)
    //Limpar saida
    saida.style.color = 'black'
    saida.innerHTML = ``

    //Adicionando a data limite do mês
    dataCompleta[1] = Number(dataCompleta[1]) + 3
    if(dataCompleta[1] > 12){
        dataCompleta[1] -= 12
    }

    //Multa
    let mes = dataCompleta[1] < 9 ? '0' + dataCompleta[1] : dataCompleta[1]
    if(data == '' || multa == ''){
        saida.innerHTML = `<p>Valor digitado inválido!</p>`
        saida.style.color = 'red'
    } else{
        saida.innerHTML = `<p>Data limite para pagamento com desconto ${dataCompleta[2]}/${mes}/${dataCompleta[0]}</p>`
        saida.innerHTML += `<p>Valor com desconto R$${multaDesconto.toFixed(2)}</p>`
    }

    //Limpar inputs
    iData.value = ''
    iData.focus()
    iMulta.value = ''
}