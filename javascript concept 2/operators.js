// arthimetic operators + - * / %

// addition (+)
let x = 5 + 2 ;
console.log(x)

// subtraction (-)
let y = 5 - 2 ;
console.log(y)

// multiplication (*)
let a = 5 * 2 ;
console.log(a)

// division (%)
let b = 5 / 2 ;
console.log(b)

// modulus (%)
let c = 5 % 2 ;
console.log(c)


// comparison opertators

// == (equal to ) (checks only value) Represents boolean value true or false
let yy = 5 == '5' ; // true (loose comparison )

// === (equal to) (checks value + type)
let xx = 5 === '5'; // false (strict comparison) use (===) most

//  != (not eqauls to)
let xy = 5 != '5' ; // false (loose comparison)
// !== (not eqauls to) (checks value + type)
let xu = 5 !== '5' ; // true (strict comparison )

console.log('comparison operators : ', yy, xx, xy, xu )

// logical operators 

//  && (and operator)
let lop1 = true && false; // false - 1 * 0 = 0,1 * 1 = 1(true) otherwise always 0(false)

//  || (or operator)
let lop2 = true || false; // true - 1 + 0 = 1,0 + 0 = 0(false) otherwise always 1(true)

// ! (NOT) invert the value - true becomes false , & vice versa
let lop3 = !true // false 

console.log('logical operators : ', lop1, lop2, lop3);


// combining multiple conditions
 
// define a variable to check if a  person's age is between 18-64 0r not ?
let age = 35;
let isAdult = (age >= 18) && (age < 65); // true age is between 18-64

// increment operator  (++) & decrement operator (--)

// increment 

// pre-increment(++x)
// post-increment(x++)

let bd = 5

console.log(++bd) // 6 bd is incremented before being logged
console.log(bd) // 6

bd = 5  // reset 

console.log(bd++) // 5 bd is logged first, then is increment
console.log(bd) // 6 bd is now incremented
 
//  same as decriment the value (-) decreses 


// examlple real world

// managing counters
let cartItems = 0;
// add item
cartItems++;
console.log(cartItems); // 1
// remove item
cartItems--;
console.log(cartItems); // 0 

// array indexing 
let fruits = ['apple', 'banana','cherry'];
let index = 0;

console.log(fruits[index++]); // apple
console.log(fruits[index]); // banana
