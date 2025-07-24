const accountId=1443 //unchangable
let accEmail="rish.gmail.com" //changeable but cant be reassigned in same scope
var accPass="1234" //changeable but doesnt understand scope (dont use)
accountCity="Delhi" //(dont use)
let accState;

console.log(accEmail,accPass,accState,accountId,accountCity)
console.table([accountId, accEmail, accPass, accountCity, accState])