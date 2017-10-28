const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolved data');
    reject('Error');
  }, 2500);
});

console.log('------------------------------------');
console.log('before');
console.log('------------------------------------');

promise
  .then(data => {
    console.log('------------------------------------');
    console.log('1', data);
    console.log('------------------------------------');
  })
  .catch(e => {
    console.log('------------------------------------');
    console.log('ERROR: ', e);
    console.log('------------------------------------');
  });

console.log('------------------------------------');
console.log('after');
console.log('------------------------------------');
