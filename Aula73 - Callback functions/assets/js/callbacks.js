//aqui nós criamos um gerador de números altomático que vai gerar um número entre 1seg e 3seg 
function rand(min = 1000, max = 3000) {
  //variável que faz o calculo para gerar o número aleatório
  const num = Math.random() * (max - min) +
    min;
    //retornando o número redondo
  return Math.floor(num);
}

//primeira função que vai executar o timeoute com um callback como parâmetro
function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    //calidando se o callback é verdadeiro
    if (callback) callback();
  }, rand());
}


//as funções abaixo é igual a primeira
function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}



//O callback ocorre aqui quando uma função tem como parametro outra função
//aqui o fi chama a função f1Callback
f1(f1Callback);

//aqui écriada a cfunção f1Callback que retorna a funalão f2 com parametro de f2Callback 
function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
