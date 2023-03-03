const playBoxes = document.getElementsByClassName('box');
const playerOneTurn = document.querySelector('.player-1');
const playerTwoTurn = document.querySelector('.player-2');
const vsPlayerOption = document.querySelector('.vs-player');
const resetButton = document.querySelector('.reset-button');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
let count = 0;

function gameLogic(e) {
  playerOneTurn.style.color = 'black';
  playerOneTurn.style.backgroundColor = 'white';
  for (let i = 0; i < playBoxes.length; i++) {
    // eslint-disable-next-line no-loop-func
    playBoxes[i].addEventListener('click', () => {
      if (playBoxes[i].innerText.includes('X') || playBoxes[i].innerText.includes('O')) {
        return 'oza';
      }

      count += 1;
      if (count % 2 !== 0) {
        playBoxes[i].innerText = 'X';
        playerTwoTurn.style.color = 'black';
        playerTwoTurn.style.backgroundColor = 'white';
        playerOneTurn.style.color = 'white';
        playerOneTurn.style.backgroundColor = 'black';
      } else if (count % 2 === 0) {
        playBoxes[i].innerText = 'O';
        playerOneTurn.style.color = 'black';
        playerOneTurn.style.backgroundColor = 'white';
        playerTwoTurn.style.color = 'white';
        playerTwoTurn.style.backgroundColor = 'black';
      }
    });
  }
}

function resetGameLogic(e) {
  count = 0;
  for (let i = 0; i < playBoxes.length; i++) {
    playBoxes[i].innerText = '';
  }
  playerOneTurn.style.color = 'white';
  playerOneTurn.style.backgroundColor = 'black';
  playerTwoTurn.style.color = 'white';
  playerTwoTurn.style.backgroundColor = 'black';
  e.stopPropagation();
}

resetButton.addEventListener('click', resetGameLogic);
vsPlayerOption.addEventListener('click', gameLogic);
