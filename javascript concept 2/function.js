// function declaration
// function is reusable block of code


function greet() {
    console.log('hello');
}
greet();

function greetings(message){
    console.log(message);
}
greetings('hi');

// function expression 

const goal = function() {
    console.log('yo');
}
const goal2 = function(username){
    console.log('hello',username);
}

// console.log(goal);
goal();
goal2('om');
goal2('rutu');
 
// array function

const add = (a, b) => a + b;

console.log(add(5, 4)); //9


// default parameters in function 

const goal3 = function(username = 'krishna'){
    console.log('hello',username);
}

goal3();


// higher-order & callback function

function greet6(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "brijesh";
  callback(name);   // calling the callback function
}

processUser(greet6);


// IIFE

(function(){
    console.log('hello');
})();

// currying

const addNums = a => b => a + b;
console.log(addNums(5)(3));