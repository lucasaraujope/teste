//forma padrão de declarar um função
function falaOi(){
    console.log("Oi")
}

falaOi()

//as funções são objetos de primeira classe, onde as funções podem ser tratados como um dado
//função anonima
const souUmDado = function (){
    console.log("Sou um dado")
}

//passando a função como uma expressão
function executaFuncao(funcao1, funcao2){
    funcao1()
    funcao2()

}

//Arrow function
const funcaoArrow = ( )=> {
    console.log("Sou uma arrow function")
}

executaFuncao(souUmDado, funcaoArrow)

//função dentro de um objeti

const pessoa = {
    falaOi(){
        console.log("Oi")
    }
}


