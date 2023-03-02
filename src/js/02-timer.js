import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      return alert('Please choose a date in the future');
    } else {
      refs.setDateBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

let intervalId = null;

const refs = {
  dateInput: document.querySelector('input'),
  setDateBtn: document.querySelector('button'),
  timer: {
    days: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]'),
  },
};

refs.setDateBtn.setAttribute('disabled', true);
refs.setDateBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  const finishTime = new Date(`${refs.dateInput.value}`);

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const timeLeft = finishTime - currentTime;

    if (timeLeft < 1000) {
      onStopTimer(intervalId);
    }
    convertMs(timeLeft);
  }, 1000);
}

function createMarkup(days, hours, minutes, seconds) {
  refs.timer.days.textContent = days;
  refs.timer.hours.textContent = hours;
  refs.timer.minutes.textContent = minutes;
  refs.timer.seconds.textContent = seconds;
}

function onStopTimer(intervalId) {
  clearInterval(intervalId);
}

function addLeadingZero({ ...value }) {
  const values = Object.values(value);
  const formattedValues = values.map(value =>
    String(value).length < 2 ? String(value).padStart(2, '0') : String(value)
  );

  createMarkup(...formattedValues);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  addLeadingZero({ days, hours, minutes, seconds });
}
