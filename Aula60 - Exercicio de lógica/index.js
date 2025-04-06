//escreva uma função que recebe 2 números e retorne o maior deles

function retornaMaior(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(retornaMaior(10, 20));

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 500));

//fizzbuzz
function fizzBuzz(num) {
  if (typeof num !== "number") return num;

  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }

  if (num % 3 === 0) {
    return "Fizz";
  }

  if (num % 5 === 0) {
    return "Buzz";
  }

  return num;
}

for (let i = 0; i < 100; i++) {
  console.log(i, fizzBuzz('a'));
}

console.log(fizzBuzz(3));
