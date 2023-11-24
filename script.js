var listaJogadores = [];
var elementoTabela = document.getElementById("tabelaJogador");


function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
 var nomeNovoJogador = document.getElementById("campoJogador").value;
  listaJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoJogador").value = "";
  exibirNaTela();
}


function adicionarVitoria(index) {
  listaJogadores[index].vitoria++;
  listaJogadores[index].pontos = listaJogadores[index].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(index) {
  listaJogadores[index].empate++;
  exibirNaTela();
}

function adicionarDerrota(index) {
  listaJogadores[index].derrota++;
  listaJogadores[index].pontos--;
  exibirNaTela();
}



function limparPontuacao(index) {
  listaJogadores[index].vitoria = 0;
  listaJogadores[index].empate = 0;
  listaJogadores[index].derrota = 0;
  listaJogadores[index].pontos = 0;
  exibirNaTela();
}



function limparPontuacaoJogador(index) {
  listaJogadores[index].vitoria = 0;
  listaJogadores[index].empate = 0;
  listaJogadores[index].derrota = 0;
  listaJogadores[index].pontos = 0;
  exibirNaTela();
}

function removerJogador(index) {
  listaJogadores.splice(index, 1);
  exibirNaTela();
}


function apagarJogadores() {
  listaJogadores = [];
  exibirNaTela();
}
