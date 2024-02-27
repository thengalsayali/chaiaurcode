// singleton 
// (literals not singleton, constructors singleton)
// Object.create


// object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "Sayali",
    "full name": "Sayali Thengal",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "sayali@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sayalithengal01@gmail"
// Object.freeze(JsUser)
JsUser.email = "sayalimicrosoft@gmail"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


