const interval = 1000;
let timerId = null;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}

refs.startBtn.addEventListener('click', startColorSwitcher);
refs.stopBtn.addEventListener('click', stopColorSwitcher);

function startColorSwitcher() {
    timerId = setInterval(() => {
     const color = getRandomHexColor();   
    refs.body.style.backgroundColor = color;
    }, interval);
    refs.startBtn.setAttribute("disabled", true);
    refs.stopBtn.removeAttribute("disabled");
}

function stopColorSwitcher() {
    clearInterval(timerId);
    refs.stopBtn.setAttribute("disabled", true);
    refs.startBtn.removeAttribute("disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}    
