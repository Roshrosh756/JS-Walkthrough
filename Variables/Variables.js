let name = "Roshni";
const age = "18";
let city = "Kathmandu";

console.log(`My name is ${name}. I'm ${age} years old and I'm from ${city}.` );


// Data Types
let str = "hello";        // String
let num = 18;             // Number
let isAdult = false;       // Boolean
let n = null;             // Null (intentional absence of value)
let u;                    // Undefined
let sym = Symbol('1');   // Symbol (unique value)

console.log(str, num, isAdult, n, u, sym);


//Reference types
let arr = [1, 2, 3];                    //Array
let obj = {Location: "Narephate"};      //  object
let greet = function() {                //Function
    console.log("Hi! I'm just a Beginner");
};
greet();
console.log(arr, obj);

