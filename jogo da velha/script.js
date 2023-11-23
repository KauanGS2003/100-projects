let jogo = true
let jogador = 'X';

function jogar(box) {
    if (jogo && document.getElementById(box).innerHTML) {
      document.getElementById(box).innerHTML = jogador;
      verificarVitoria();
      jogador = (jogador === 'X') ? 'O' : 'X';
    }
  }

  function Vitoria() {
    const boxs = document.getElementsByClassName('box');
    const combinacoesVitoria = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6]              // diagonais
    ];
  
    for (const combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (
        boxs[a].innerHTML &&
        boxs[a].innerHTML === boxs[b].innerHTML &&
        boxs[a].innerHTML === boxs[c].innerHTML
      ) {
        alert(`Jogador ${jogador} venceu!`);
        jogo = false;
        return;
      }
    }
  
    const empate = Array.from(boxs).every(box => box.innerHTML);
    if (empate) {
      alert('O jogo empatou!');
      jogo = false;
    }
  }
  