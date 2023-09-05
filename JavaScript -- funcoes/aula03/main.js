function iniciar(){
    saida = document.getElementById('saida');
    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    saida.innerHTML = `Valor do vetor: ${vetor}<br>`;
    saida.innerHTML += `Usando for: `
    for (i=0; i <= 10; i++){
        saida.innerHTML += `${i} `
    }
    saida.innerHTML += `<br>`

    obj = {
        nome: 'Daniel',
        idade: 24,
        curso: 'CeT',
    }

    for (let prop in obj){
        saida.innerHTML += `obj: ${prop} = ${obj[prop]} `;
    }

    /*Modificando estilos*/
    let cor = document.getElementById('cor');
    cor.style.width = 360;
    cor.style.height = 400;
    cor.style.display = 'inline';
    cor.style.color = 'white';
    cor.style.backgroundColor =  'blue';
    cor.innerHTML += `Alo`

    //////
    let saida2 = document.getElementById('saida2');
    function cumprimentar (nome){
        saida2.innerHTML = `Olá ${nome}<br>`;
    }

    cumprimentar('Daniel');

    function converterIdadeParaAnos(idade){
        idadeDias = idade * 365;
        saida2.innerHTML += `A sua é idade em dias é ${idadeDias}, sua idade em anos é ${idade}<br>`
    }

    converterIdadeParaAnos(25);

    function calcularTrabalho(valorHora, horas){
        salario = valorHora * horas
        saida2.innerHTML += `Você trabalhou ${horas} horas e recebe R$${valorHora.toFixed(2)} por hora, seu salário é R$${salario.toFixed(2)}.<br>`
    }

    calcularTrabalho(150, 40.5);

    function nomeMes(mes){
        if(mes == 1){
            saida2.innerHTML += `Janeiro <br>`;
        } else if(mes ==2){
            saida2.innerHTML += `Fevereiro <br>`;
        } else if(mes == 3){
            saida2.innerHTML += `Março <br>`;
        } else if(mes == 4){
            saida2.innerHTML += ` <br>`;
        } else if(mes == 5){
            saida2.innerHTML += `Maio <br>`;
        } else if(mes == 6){
            saida2.innerHTML += `Junho <br>`;
        } else if(mes == 7){
            saida2.innerHTML += `Julho <br>`;
        } else if(mes == 8){
            saida2.innerHTML += `Agosto <br>`;
        } else if(mes == 9){
            saida2.innerHTML += `Setembro <br>`;
        } else if(mes == 10){
            saida2.innerHTML += `Outubro <br>`;
        } else if(mes == 11){
            saida2.innerHTML+= `Novembro <br>`;
        } else if(mes == 12){
            saida2.innerHTML += `Dezembro <br>`;
        } else{
            saida2.innerHTML += `Valor inválido <br>`;
        }        
    }   
    nomeMes(10);

    function maiorIgual(numero1, numero2){
        let valor = null;
        if(numero1 > numero2){
            valor = numero1 > numero2;
            saida2.innerHTML += `O ${numero1} > ${numero2} = ${valor}<br>`
        } else if(numero2 > numero1){
            valor = numero2 > numero1;
            saida2.innerHTML += `O ${numero2} > ${numero1} = ${valor}<br>`
        } else{
            valor = numero1 === numero2;
            saida2.innerHTML += `O ${numero1} = ${numero2} = ${valor}<br>`
        }
    }
    maiorIgual(1, 3);

    function inverso(valor){
        tipo = typeof(valor);
        if(tipo == "number"){
            saida2.innerHTML += `${valor * -1}<br>`;
        } else if(tipo == "boolean"){
            saida2.innerHTML += `${!valor}<br>`;
        } else{
            saida2.innerHTML += `O valor digitado não é do tipo booleano e nem number<br>`;
        }
    }
    inverso(3.5);

    function estaEntre(numero, min, max, valor = false){
        if(valor === true){
            saida2.innerHTML += `O valor está entre o min e max<br>`;
        } else if (numero >= min && numero <= max){
            saida2.innerHTML += `O valor está entre o min e max<br>`;
        } else{
            saida2.innerHTML += `O valor não está entre o min e max<br>`;
        }
    }
    estaEntre(2, 1, 10, true);

    function multiplicar(numero1, numero2){
        let resultado = null;
        for (i = numero1; i > 0; i--){
            resultado += numero2;
        }
        saida2.innerHTML += `${numero1} * ${numero2} = ${resultado}.<br>`
    }
    multiplicar(10, 3);

    function criarArray(valor, repeticao){
        let vetor = []
        for (i = repeticao; i > 0; i--){
            vetor.push(valor);
        }
        saida2.innerHTML += `${vetor}<br>`
    }
    criarArray('Alo ', 6);

    function simboloMais(numero){
        let texto = null;
        for(i = numero; i > 0; i--){
            if(i == numero){
                texto = ('+');
            } else{
                texto += ('+');
            }            
        }
        saida2.innerHTML += `${texto}<br>`
    }
    simboloMais(5);
}