function criaCalculadora() {
  return {
    //selecionando o display da calculadora, onde aparece os valores
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
    },

    realizaConta(){
      
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      //O zero representa o tamanho da string que é de 1 caractere e o -1 é a quantidade que vai remover
      this.display.value = this.display.value.slice(0, -1);
    },

    //usando o .bind para mudar o escopo léxico do this
    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }
        }.bind(this)
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();
