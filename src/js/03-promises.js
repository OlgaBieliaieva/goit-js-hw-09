const refs = {
  form: document.querySelector(".form")
}
console.log(refs.form);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
// event.preventDefault();