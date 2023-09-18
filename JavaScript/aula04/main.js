function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        return area;
    }
}

console.log(area(2, 3));
//-----------------------------------------------------------
let func = function soma(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
func(6, 2);
//------------------------------------------------------------
//Criando uma função que nao tem parametros, mas pode passar parametros
//Que vao ser captados pelo "arguments" (essa versao é antiga)
function soma(){
    let soma = 0;
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2, 3, 4, 5))
//------------------------------------------------------------
//Parametro padrao--
//Como definir um valor padrao a um parametro (versao antiga)
function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c
}
console.log(soma1())
//------------------------------------------------------------
function soma2(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //Melhor estrategia    
    return a + b + c
}

console.log(soma2(), soma2(3))
//Usando valor padrao ES2015-----------------------------------
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma3(), soma3(2), soma3(4, 5), soma3(1, 2, 3))

