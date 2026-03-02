// define name age fav.color

let name1 = 'om';
let age = 21;
let favoritecolor = 'black';
// method 1
console.log('Name: ' + name1 + ',Age: ' + age + ',favorite color: ' + favoritecolor);
// method 2
console.log(`Name: ${name1}, Age: ${age}, Favorite color: ${favoritecolor}`);


// 1. write a program if a number is (positive , negative or zero)

let num = -2;
if(num > 0){
    console.log('postive number');
}else if(num < 0) {
    console.log('negative number');
}else {
    console.log('zero');
}


// 2. write a program to print numbers 1 to 10 using for loop

for(let i = 1; i <= 10; i++ ){
    console.log(i);
}



// 3. create a simple program thats handles  a division by zero error

try {
    let result = 10 / 0 ;
    console.log(result)
} catch (error) {
    console.log('error', error.message);
}

// 4. write a function that takes two nums and retrun their sums

function sums(a, b){
    return a + b;
}

console.log(sums(2,3));

// 5. write a function that accepts an array and function as an arguments, and applies the function to each element in the

function xyz(arr, callback){
    for(i = 0; i < arr.length;i++){
        callback(arr[i]);
    }
}

xyz([1, 2, 3], function(num){
    console.log(num * num);
}); 


// 6. filter studnet by grade

const studnets = [
    { name: 'ABC', grade:"A" },
    { name: 'DEF', grade:"C" },
    { name: 'KLM', grade:"A" },
];

const topStudnets = studnets.filter(studnet => studnet.grade === 'A');
console.log(topStudnets);

const avgStudnets = studnets.filter(studnet => studnet.grade === 'C');
console.log(avgStudnets);

// 7. destructure personal information 

const person2 ={ name2: 'Rajesh', age: '34', city:'Ahemdabad'};
const { name2,city } = person2;
console.log( name2, city);



