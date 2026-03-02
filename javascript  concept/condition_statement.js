// if statement 

let age = 21;

if(age >= 18){
    console.log('you are eligible to vote');
}


// if....else statement 

if(age >= 18){
    console.log('you are eligible to vote');
} else {
    console.log('you are not eligible to vote');
}

// if...else if...else statement

let scoore = 50;
if(scoore >= 90) {
    console.log('GRADE A');
} else if(scoore >= 75) {
    console.log('GRADE B');
} else if(scoore >= 55) {
    console.log('GRADE C');
} else {
    console.log('FAIL')
}

// ternery operator (conditional operator)
// a shorthand for if....else
// condition ? expression 1 : expression 2; 
    
let age1 = 20;
let message = (age1 >= 18) ? 'you can vote' : 'you cannot vote'  
console.log(message);


// switch statement

let day = 3;
switch (day) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday'); 
        break;  
    default:
        console.log('invalid');
}