//IIFE - Immediately invked function expression
//Para usar essa função ela precisa estar dentro de um parenteses e ela deve ser invocada logo em seguida

(function (){


    const sobrenome = 'Araujo'

    function criaNome(nome){
        return nome + " " + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Lucas'))
    }

    falaNome()
})()

