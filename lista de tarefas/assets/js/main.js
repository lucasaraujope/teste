const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

//função que cria o elemento Li no HTML
function criaLi() {
  const li = document.createElement("li");
  return li;
}

//evento que escuta quando clicamos na tecla enter e criar uma tarefa
inputTarefa.addEventListener("keypress", function(e) {
  if (e.keycode === 13) {
    criaTarefa(inputTarefa.value);
  }
});


//função que exclui uma tarefa criada 
function limpaTarefa() {
  inputTarefa.value = "";
  inputTarefa.focus();
}


//função que cria o botão que apaga a tarefa
function criaBotaoApagarLi(li) {
  //olocando espaço entre o texto da tarefa e o botão
  li.innerText += " ";

  //criando o elemento button 
  const botaoApagar = document.createElement("button");

  //criando texto do botão
  botaoApagar.innerText = "Apagar";

  //setando uma class através do set atribute
  botaoApagar.setAttribute("class", "apagar");

  //setando um title para o botão através do setAtribute
  botaoApagar.setAttribute("title", "Apagar essa tarefa");

  //adicionando o botão dentro do elemento pai o LI
  li.appendChild(botaoApagar);
}


//funação que cria uma tarefa
function criaTarefa(textoInput) {
  //criando o elemento li a partir da função craLi()
  const li = criaLi();

  //alterando o conteúdo que será exebido no Li para o texto que será recebido no parametro da função criaTarefa
  li.innerText = textoInput;

  //adicionando o li no pai que está sendo referenciado como tarefas, e no HTML ele é o ul
  tarefas.appendChild(li);

  //usando o limpa tarefa para depois que tarefa for criada, o input fique limpo
  limpaTarefa();

  //chamando a função de criar botão para quando criar a tarefa o botão de apagar tarefa seja criado junto
  criaBotaoApagarLi(li)

  //salva a tarefa como string no local storage do navegador
  salvarTarefas()
}

//adicinei um escutador para capturar o conteúdo que é digitado no input, passando esse conteúdo par ao li na função criaTarefa. Também adicionei uma condição para não adicionar conteúdos vazios
btnTarefa.addEventListener("click", function () {
  //para não pegar valor vazio no input
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});


//criando o escutador que vai monitorar quando eu clico no botçao para apagar a tarefa
document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        //funçao adicionada para salvar no local storage quando um elemento for excluido
        salvarTarefas()
    }
})


//função criada para salvar a tarefa no local storage
function salvarTarefas(){

  //criando uma variável que receberpa todos os itens de li que estão na variável tarefas
    const liTarefas = tarefas.querySelectorAll('li')

    //criando um array
    const listaDeTarefas = []

    //fazendo iteração no litarefas que irá conter todos os li qu foram criados e adicionando eles no array para depois tranformá-los em String, para poder usar no JSON
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    console.log(listaDeTarefas)

    //criando uma string no JSON a partir do array
    const tarefasJSON = JSON.stringify(listaDeTarefas)

    //sanvando os dados convertidos para JSON no localStorage (mini base de dados) do navegador, o primeiro parâmetro é o nome que vamos utilizar para pegar esses dados quando precisarmos, o segundo é a variável que usamos para converter o Array em string de JSON
    localStorage.setItem('tarefas', tarefasJSON)
}

//função para pegar os itens que foram convertidos de array para sstring e recerte-los
function adiconaTarefasSalvas(){
    //pegado os itens salvos no local storage
    const tarefas = localStorage.getItem('tarefas')

    //convertendo os itens em array
    const listaDeTarefas = JSON.parse(tarefas)

    //iterando sobre essa lista de array e criando itens que ficaram salvos na tela mesmo quando fecharmos o navegador
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
