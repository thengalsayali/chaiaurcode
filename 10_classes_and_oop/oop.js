const user = {
    username: "sayali",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("sayali", 12, true)
const userTwo = new User("hitesh", 5, false)
console.log(userOne);
console.log(userTwo);

// new keyword : first object gets created,
// second everything gets passed on in it,
// third gets added in this, 
//fourth you get new instance