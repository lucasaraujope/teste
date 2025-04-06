//Closure é a habilidade da função em acessar o escopo léxico do seu pai e acessar suas propiedades
function falaAlgumaCoisa(){
    const nome = 'Lucas'
    return function(){
        return nome
    }
}

const falando = falaAlgumaCoisa()

console.log(falando())