const fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits[1]);

const nums = [1, 2, 3];
console.log(nums);

// push() - add a new element in array 

nums.push(4);
console.log(nums);

// pop() - remove the last element in array

nums.pop();
console.log(nums);

// map() - create a new array by applying a function to each element

const squared = nums.map((num) => num * num);
console.log(squared);

// filter() - filter a element based on a condition

const ages = [18, 21, 19, 14, 13, 35];
const adults = ages.filter(age => age >= 18);

console.log(adults);

// reduce() - reduce an array to a single value by applying a fucntion

const prices = [100, 200, 300];
const total = prices.reduce((sums, price) => sums + price ,0);

console.log(total);