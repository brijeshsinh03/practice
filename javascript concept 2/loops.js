// for loop

for (let i = 1; i <= 5; i++) {
    console.log('for loop number ', i);
}

// while loop

let y=1;
while (y <= 5) {
    console.log('while loop number: ',y);
    y++;
}


// do...while loop 

let x = 1;
do {
    console.log('do while loop number: ',x);
    x++;
} while (x <= 5);

// for...in loop

const person1 = {
    name: 'om',
    age: 21,
    city: 'ahmd'
}
for(let key in person1){
    console.log(key ,':', person1[key]);
}

// for...of loop

const fruits = ['apple', 'banana', 'cherry'];

for(let [index ,fruit] of fruits.entries()) {
    console.log(`index: ${index}, value: ${fruit}`);
}

const word = 'hello';

for(let char of word) {
    console.log(char);
}

const user = new Map([
    ["Name", "om"],
    ["Age", 21],
    ["City", "Ahmd"]
]);

for(let [key, value] of user){
    console.log(`${key} : ${value}`);
}


// advance concept in loops

// break statement
console.log('break statement');

for(let q = 0; q <= 10; q++ ){
    if(q === 5) break;
    console.log(q);
}

// continue statement

console.log('continue statement')

for(let k = 0; k <= 10; k++){
    if(k === 5) continue;
    console.log(k)
}

// nested loop 

console.log('nested loop')

for(let a = 1; a <= 3; a++) {
    for(let b = 1; b <= 2; b++){
        console.log(`A: ${a}, B: ${b}`);
    }
}