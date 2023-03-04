const parentContainer = document.querySelector('.parent-container');
const playBoxes = document.getElementsByClassName('box');
const playerOneTurn = document.querySelector('.player-1');
const playerTwoTurn = document.querySelector('.player-2');
const startButton = document.querySelector('.start-game');
const resetButton = document.querySelector('.reset-button');
const winnerSpot = document.querySelector('.winner-spot');
const introMessage = document.querySelector('.intro');
const enterButton = document.querySelector('.enter-button');
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
let standard = false;

function loadGame() {
  introMessage.style.opacity = '1';
}

function enterMenu() {
  introMessage.style.opacity = '0';
  parentContainer.classList.add('enter');
  setTimeout(() => introMessage.style.display = 'none', 1000);
}

function gameLogic(e) {
  startButton.style.display = 'none'
  playerOneTurn.style.color = 'black';
  playerOneTurn.style.backgroundColor = 'white';
  playerTwoTurn.style.color = 'white';
  playerTwoTurn.style.backgroundColor = 'black';
  for (let i = 0; i < playBoxes.length; i++) {
    // eslint-disable-next-line no-loop-func
    playBoxes[i].addEventListener('click', () => {
      if (playBoxes[i].innerText.includes('X') || playBoxes[i].innerText.includes('O')) {
        return '';
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
      playerWinAnnounce();
    });
  }
}

function playerWinAnnounce() {
  if ((box1.innerText === 'X' && box2.innerText === 'X' && box3.innerText === 'X') || (box1.innerText === 'X' && box4.innerText === 'X' && box7.innerText === 'X') || (box3.innerText === 'X' && box6.innerText === 'X' && box9.innerText === 'X') || (box7.innerText === 'X' && box8.innerText === 'X' && box9.innerText === 'X') || (box3.innerText === 'X' && box5.innerText === 'X' && box7.innerText === 'X') || (box2.innerText === 'X' && box5.innerText === 'X' && box8.innerText === 'X') || (box4.innerText === 'X' && box5.innerText === 'X' && box6.innerText === 'X') || (box1.innerText === 'X' && box5.innerText === 'X' && box9.innerText === 'X')) {
    winnerSpot.innerText = 'Player 1 wins!';
    setTimeout(() => {
      resetGameLogic();
    }, 3000);
    standard = true;
  } else if ((box1.innerText === 'O' && box2.innerText === 'O' && box3.innerText === 'O') || (box1.innerText === 'O' && box4.innerText === 'O' && box7.innerText === 'O') || (box3.innerText === 'O' && box6.innerText === 'O' && box9.innerText === 'O') || (box7.innerText === 'O' && box8.innerText === 'O' && box9.innerText === 'O') || (box3.innerText === 'O' && box5.innerText === 'O' && box7.innerText === 'O') || (box2.innerText === 'O' && box5.innerText === 'O' && box8.innerText === 'O') || (box4.innerText === 'O' && box5.innerText === 'O' && box6.innerText === 'O') || (box1.innerText === 'O' && box5.innerText === 'O' && box9.innerText === 'O')) {
    winnerSpot.innerText = 'Player 2 wins!';
    setTimeout(() => {
      resetGameLogic();
    }, 3000);
    standard = true;
  }
  for (let i = 0; i < playBoxes.length; i++) {
    if (box1.innerText !== '' && box2.innerText !== '' && box3.innerText !== '' && box4.innerText !== '' && box5.innerText !== '' && box6.innerText !== '' && box7.innerText !== '' && box8.innerText !== '' && box9.innerText !== '' && standard === false) {
      winnerSpot.innerText = 'It\'s a draw!';
    }
  }
}

function resetGameLogic(e) {
  standard = false;
  winnerSpot.innerText = '';
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

window.addEventListener('load', loadGame);
enterButton.addEventListener('click', enterMenu);
resetButton.addEventListener('click', resetGameLogic);
startButton.addEventListener('click', gameLogic, {once:true});
