let jogo = true
let jogador = 'X';

function jogar(box) {
    if (jogo && document.getElementById(box).innerHTML) {
      document.getElementById(box).innerHTML = jogador;
      verificarVitoria();
      jogador = (jogador === 'X') ? 'O' : 'X';
    }
  }
