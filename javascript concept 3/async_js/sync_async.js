// sync & async

console.log('sync operation 1');
console.log('sync operation 2');
console.log('sync operation 3');

console.log('async operation 1');
setTimeout(() => {
    console.log('async operation 2');//delay by 2s
}, 2000);
console.log('async operation 3');