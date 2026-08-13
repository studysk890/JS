const accountID = 144553
let accountEmail = "sk@gmail.com"
var accountPassword = "5678"
accountCity = "Mumbai"
let accountState;
// accountId = 2345  not allowed to change the value of a constant variable

accountEmail = "sk1@gmail.com"
accountPassword = "8900"
accountCity = "Thane"

console.log(accountID)

/*
prefer not to use 
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])