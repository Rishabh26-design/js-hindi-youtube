const accountId = 144553
let accountEmail = "Rishabh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "rs@gmail.com"
accountPassword = "12345"
accountCity = "Bhopal"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional Scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])