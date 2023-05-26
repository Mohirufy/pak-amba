const audioList = [
  new Audio("audio/ambatukam.mp3"),
  new Audio("audio/ambasing.mp3"),
  new Audio("audio/ambatublow.mp3")
];

for (const audio of audioList) {
  audio.preload = "auto";
}

let firstclick = true;

const counter = document.querySelector('#counter');
let count = parseInt(localStorage.getItem('count-amba')) || 0;

const counterButton = document.querySelector('#amba-button');

function update(e, resetCount=false) {
  localStorage.setItem('count-amba', count);
}

function playSound() {
    playAmba();
    count++;
    counter.innerHTML = count;
    localStorage.setItem('count-amba', count);
  }

  counterButton.addEventListener('click', playSound);

  counter.innerHTML = count;


function playAmba() {
  let audio;
  
  if (firstclick) {
    firstclick = false;
    audio = audioList[0].cloneNode();
  } else {
      const random = Math.floor(Math.random() * 3);
      audio = audioList[random].cloneNode();
  }
  
  audio.play();
  
  
}