const accountID =123456
let email= "harsharya561@gmail.com"
var password ="12345"
account_city="Jaipur"
/*
do not prefer to use var as it cannot detect block scope which is {} so
while running loop it chanfe the value of global variable
*/
console.log(accountID)
console.table([accountID,email,password,account_city])