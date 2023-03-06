const interval = 1000;
let timerId = null;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', startColorSwitcher);
refs.stopBtn.addEventListener('click', stopColorSwitcher);

startBtnActiveHandler();

function startColorSwitcher() {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, interval);
  stopBtnActiveHandler();
}

function stopColorSwitcher() {
  clearInterval(timerId);
  startBtnActiveHandler();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopBtnActiveHandler() {
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
}

function startBtnActiveHandler() {
  refs.stopBtn.setAttribute('disabled', true);
  refs.startBtn.removeAttribute('disabled');
}
