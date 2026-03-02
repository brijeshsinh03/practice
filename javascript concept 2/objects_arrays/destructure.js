// object destructuring
 const user = {
    name1: 'om',
    age: 21
 };

//  destructuring an object
 const { name1 } = user;
 console.log(name1)


//  array destructuring 

const colors = ['red', 'green', 'blue'];
const [first, second] = colors
console.log(first, second);