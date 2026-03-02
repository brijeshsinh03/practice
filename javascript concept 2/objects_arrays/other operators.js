// spread operator
// expands element of an array or object


//in array

const arr1 = [ 1, 2];
const arr2 = [...arr1,3, 4]; // copy value & holds position 
console.log(arr2);


// in object

const obj = { a : 1, b : 2};
const obj1 = { b : 2, c : 3};
const obj2 = { ...obj, ...obj1, d : 4 };

console.log(obj2)

// rest operator : its collect's remaining element into an array or objects

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0 );
}
console.log(sum(1, 2, 3, 4, 5));


const fruits = ['apple', 'banana', 'cherry', 'mango'];
const [first, second, ...remainingfruits] = fruits;

console.log(first);
console.log(second);
console.log(remainingfruits);