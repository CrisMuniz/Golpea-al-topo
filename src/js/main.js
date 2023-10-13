'use strict';

// Query Selector
const square = document.querySelectorAll('.js_square');
let timeleft = document.querySelector('#timeLeft');
let score = document.getElementById('score');
const btn = document.querySelector('.js_btn');
const reset = document.querySelector('.js_reset');

// Variables globales
let result = 0;
let currentTime = timeleft.textContent;
let hitPosition = null;
let timerId = null;
let timeMole = null;

// Creamos una función manejadora de evento donde una vez clicamos el botón comience a funcionar todas las funciones del juego.
function handleClick(event){
  event.preventDefault();
  randomSquare();
  time();
  moveMole();

}

// Evento de comenzar juego
btn.addEventListener('click',handleClick);


// Función para ir cambiando la imagen de topo aleatoriamente y también ir obteniendo la posición del recuadro que se clica.
function randomSquare(){
  square.forEach(className => {
    className.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  hitPosition = randomPosition.id;
}

// Recorremos cada recuadro con un evento click y con un condicional igualamos la opcion clicada con el id de ese recuadro y lo metemos en un acumulador para ir contando los topos golpeados.
square.forEach( id => {
  id.addEventListener('click', () => {
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

// Función donde vamos retipiendo de forma reiterada la función randomSquare.
function moveMole () {
  timeMole = setInterval(randomSquare, 700);
}

// Función de contador de tiempo donde evaluamos una condición en la que si el currentTime llega a 0 nos limpie 2 variables y nos salga un mensaje de alerta.
function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;
  if(currentTime === 0) {
    clearInterval(timerId);
    clearInterval(timeMole);
    alert('Game Over! tu puntuación final es: '+ result);
  }

}

// Función donde vamos repitiendo de forma reiterada la función countDown.
function time () {
  timerId = setInterval(countDown, 700);
}

// Creamos la función manejadora  de reestablecer el juego y así poder empezar a jugar de nuevo. 
function handleReset() {
  timeleft.textContent = 60;
  score.textContent = 0;
  result = 0;
  currentTime = 60;
}

// Evento de reestablecer el juego.
reset.addEventListener('click', handleReset);

