// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
      nome,
      sobrenome,
  
      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto) {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura,
      peso,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
  const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
  const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.fala('falando Oi'));
  console.log(p2.imc);
  console.log(p3.imc);
  
  


   
