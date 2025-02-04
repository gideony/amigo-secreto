//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de
//programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("nomeAmigo"); // Captura o valor do campo de entrada
  let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
    alert("Por favor, insira um nome."); // Exibe mensagem de erro se o campo estiver vazio
    return;
    }

  amigos.push(nome); // Adiciona o nome ao array
  console.log(amigos); // Exibe a lista atualizada no console (opcional)

  input.value = ""; // Limpa o campo de entrada
}

function exibirAmigos() {
  let lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
  lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li"); // Cria um novo elemento <li>
    li.textContent = amigos[i]; // Define o texto como o nome do amigo
    lista.appendChild(li); // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione amigos antes de sortear!");
    return;
    }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
  let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    document.getElementById(
    "resultadoSorteio"
  ).innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Exibe o resultado
}
