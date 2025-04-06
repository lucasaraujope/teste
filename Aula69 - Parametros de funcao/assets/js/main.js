//função normal + arguments
//quando eu mando rgumentos na hora de executar uma função e não passei parâmetros para essa função, esses argumentos ficam salvos no objetos arguments
function funcao (){
    console.log(arguments)
}

funcao('valor', 1, 2, 3, 4, 5)

//quando eu tenho mais parametros como abaixo que vai de "a" até "f" que são mais do que os argumentos que são só 3, e peço um retorno com o mesmo tanto de parametros, parãmetros que estão sem argumentos retornam como undefines
function numeros (a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}

numeros(3, 4, 5)

//passando o valor padrão para o parâmetro caso não seja passado nenhum argumento para assumir o parâmetro no caso abaixo eu passei um valor para o b, e como não foi enviado um argumento quando eu chamei a função a função usou o valor de 3 que foi setado no b
function soma(a, b = 3){
    console.log(a + b)
}

soma(5, 12)


//atribuição via desestruturação
function destru({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}

destru({nome: 'Lucas', sobrenome: 'Araujo', idade: 29})


function operadorRest(operador, incrementador, ...rest){
    console.log(operador, incrementador, rest)
}

operadorRest('+', '++', 1, 2, 3, 4, 5)