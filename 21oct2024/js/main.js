// Data Types
let fullname = "M. Arham Murtaza"
let age = "21"
let isStudent = true

document.getElementById("fullname").textContent = `My name is ${fullname}.`
document.getElementById("age").textContent = `I am ${age} years old.`
document.getElementById("isStudent").textContent = `Am I a Student?  ${isStudent}`

// Primitive Datatypes
let number = 25;
let string = "Twenty-Five";
let boolean = true;
let empty = null;
let undefined_value;
let symbol = '😊';

console.log(number);
console.log(string);
console.log(boolean);
console.log(empty);
console.log(undefined_value);
console.log(symbol);

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(empty));
console.log(typeof(undefined_value));
console.log(typeof(symbol));

// Non-Primitive Datatypes

let person = {
    name : "M. Arham Murtaza",
    age : 25,
    isStudent : true
}

let array = [1,2,3,4,5];

console.log(person)
console.log(array)

// Conditional Structure

if(age >= 18){
    console.log("User is an Adult")
}
else{
    console.log("User is a Teenager")
}

switch (isStudent) {
    case true:
        console.log("User is a Student")
        break;
    default:
        console.log("User is not a Student")
}

// Loops

for(let i = 1; i <= 5; i++){
    console.log(i)
}

let i = 5;
while(i > 0){ 
    console.log(i)
    i--;
}

// Pyramid with Loops

for(let i = 1; i <= 7; i++){
    let line = '';
    for(let j = 7; j >= i; j--){
        line += ' ';
    }
    for(let k = 1; k <= i * 2 - 1; k++){
        line += '*'
    }
    console.log(line);
}