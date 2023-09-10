pessoa = {
    nome: 'Daniel',
    idade: '24',
    curso: 'CeT',
    //METODO DO OBJETO
    saudacao(){
        console.log(`Olá ${this.nome}`)
    }
}

//pessoa.nome()
const func = pessoa.saudacao.bind(pessoa)
func()
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.curso)

console.log('--------')
//Utilizando for in pra imprimir valores de um objeto
for(i in pessoa){
    console.log(pessoa[i])
}

//-------------
console.log('--------')
let vetor = []
for(i = 5; i > 0; i--){
    vetor[i] = i
}
console.log('Imprimir os valores do vetor criado pelo "for" com o "for in"')
for(i in vetor){
    console.log(vetor[i])
}
console.log('--------')

//---------------
/*let vetor2 = [[1, 2, 3, 4, 5], [5, 4, 3, 2 , 1]]
for (i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        console.log(vetor2[i][j])
    }
}*/
