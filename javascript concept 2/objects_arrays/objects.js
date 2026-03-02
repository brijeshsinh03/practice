// object - collection of key-values pairs 

const student = {
    name: "om",
    age: 21,
    grade: 'A'
}

console.log(student.age);

// object method & this keyword 

const person = {
    firstName: 'brijesh',
    lastName: 'Sinh',
    fullName(){
        return `${this.firstName} ${this.lastName} `
    }
}
console.log(person.fullName());

