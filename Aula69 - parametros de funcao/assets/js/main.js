//função normal + arguments
//quando eu mando rgumentos na hora de executar uma função e não passei parâmetros para essa função, esses argumentos ficam salvos no objetos arguments
function funcao (){
    console.log(arguments)
}

funcao('valor', 1, 2, 3, 4, 5)