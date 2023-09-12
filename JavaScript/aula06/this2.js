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
console.log('==========================')

//---------------
let vetor2 = [[1, 2, 3], [4, 5, 6]]

for(let lin = 0; lin < 3; lin++){
    for(let col = 0; col < 3; col++){
        console.log(vetor2[lin][col])
    }
}

