let player = "X";
let player2 = "O";
let box = document.getElementsByClassName("box")
let turn = 0;
let game = true

function caixa(numeros) {
  if (game && !box.innerHTML) {
    player = box.innerHTML;

      player = (player === 'x') ? 'X' : 'O';
      }
  }
