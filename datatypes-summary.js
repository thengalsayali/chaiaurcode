// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23239483478339103323n



// Reference (Non primitve)

// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sayali",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
