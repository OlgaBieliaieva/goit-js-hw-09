const refs = {
  form: document.querySelector('.form'),
  formBtn: document.querySelector('form button'),
};
console.log(refs.form);
console.log(refs.formBtn);

refs.formBtn.addEventListener('submit', createPromise);

function createPromise(event, position, delay) {
  event.preventDefault();
  console.log(event);
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      console.log("it's OK");
    } else {
      console.log("it's bad");
    }
  });
}
