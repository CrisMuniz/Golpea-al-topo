'use strict';

const square = document.querySelectorAll('js_square');
//const mole = document.querySelectorAll('js_mole');
const timeleft = document.querySelector('#timeLeft');
const score = document.getElementById('score');


let result = 0;
let currentTime = timeleft.textContent;

function randomSquare(){
  square.forEach(className => {
    className.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  hitPosition = randomPosition.id;
}

square.forEach( id => {
  id.addEventListener('click', () => {
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole () {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;
  if(currentTime === 0) {
    clearInterval(timerId);
    clearInterval(hitPosition);
    alert('Game Over! tu puntuación final es: '+ result);
  }
}

let timerId = setInterval(countDown, 1000);