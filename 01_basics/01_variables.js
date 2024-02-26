const accountId = 1444553;
let accountEmail = "sayalithengal316@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2

accountEmail = "hehe@gmail.com";
accountPassword = "323232";
accountCity = "Pune";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/



console.table([accountId, accountEmail, accountPassword, accountCity]);