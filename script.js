const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


function playAudio(){
  let x = document.getElementById("musicadefundo");
  x.play();
}

function pauseAudio(){
  let x = document.getElementById("musicadefundo");
  x.pause();
}

function audioPerdeu(){
  let x = document.getElementById("perdeu");
  x.play();
}

function audioPulou(){
  let x = document.getElementById("pulou");
  x.play();
}

const jump = () => { 
  audioPulou();
  playAudio();
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
} , 500);
}

const loop = setInterval(() => {
   
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pauseAudio();
    audioPerdeu();
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';    
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
    

    clearInterval(loop);
    
  }
}, 10)

document.addEventListener('keydown', jump);

