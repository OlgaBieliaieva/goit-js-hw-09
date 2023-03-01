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
      console.log(selectedDates);
      return alert('Please choose a date in the future');
    } else {
      refs.setDateBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

const refs = {
  dateInput: document.querySelector('input'),
  setDateBtn: document.querySelector('button'),
  timer: document.querySelector('.timer'),
};

refs.setDateBtn.setAttribute('disabled', true);
refs.setDateBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(e) {
  const finishTime = new Date(`${refs.dateInput.value}`);
  const timeLeft = finishTime - Date.now();

  console.log(Date.now());
  console.log(timeLeft);
  convertMs(timeLeft);
  //   createMarkup({ days, hours, minutes, seconds });
}

function createMarkup({ days, hours, minutes, seconds }) {
  console.log(days, hours, minutes, seconds);
}

function addLeadingZero(value) {
  if (value.length < 2) {
    return value.padStart(2, '0');
  }
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

  createMarkup({ days, hours, minutes, seconds });
  //   console.log({ days, hours, minutes, seconds });
}
