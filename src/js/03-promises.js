let timerId = null;
let intervalId = null;
let position = null;



const refs = {
  form: document.querySelector('.form'),  
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();  

  const userDelay = Number(event.target.elements['delay'].value);
  const userInterval = Number(event.target.elements['step'].value);
  const userAmount = Number(event.target.elements['amount'].value);

  timerId = setTimeout(() => {
    position += 1;
    createPromise(position, userDelay)
    console.log(position);
    console.log(userDelay);
    intervalId = setInterval(() => {      
      position += 1;
      createPromise(position, userInterval)
      console.log(position);
      console.log(userInterval);
      if (position > userAmount - 1) {
        clearInterval(intervalId);
      }
    }, userInterval), userDelay
})    
}

function createPromise(position, delay) {
  
  const promises = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve ({position, delay})
    }
    else {
      reject ({position, delay})
    }
  })
  console.log(promises);
  return promises;
}

Promise.all(promises)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({position, delay}) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});

// function onFormSubmit(event) {
//   event.preventDefault();
//   delay = Number(event.target.elements['delay'].value);
//   interval = Number(event.target.elements['step'].value);
//   const userAmount = Number(event.target.elements['amount'].value);
//   timerId = setTimeout(() => {
//     position += 1;
//     console.log(position);
//     console.log(delay);
//     intervalId = setInterval(() => {      
//       position += 1;
//       console.log(position);
//       console.log(interval);
//       if (position > userAmount - 1) {
//         clearInterval(intervalId);
//       }
//     }, interval), delay
// })    
// }



// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }
