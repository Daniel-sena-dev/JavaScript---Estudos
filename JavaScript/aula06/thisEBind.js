//this = esse
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
console.log(typeof(pessoa))

const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e OO
//bind = vincular-----------------------------------
const falaDePessoa = pessoa.falar.bind(pessoa) 
falaDePessoa() 
//a função bind vincula a função ao objeto
