5//               *   else-if statements  *        //
// taxi ride:

let ride = 40;
if(ride<=5){
    console.log(`the charge of the ride is $5`)
}
else if(ride>=6 & ride<=10){
    console.log(`the charge of the ride is $10`)
}
else if(ride>=11 & ride<=20){
    console.log(`the charge of the ride is $20`)
}
else if(ride == 20) {
    console.log(`the charge of the ride $30`)
}
else {
    console.log(`the charge of the ride is $30+$5`)
}

// discount :

let discount = 15;
if(discount >=1 & discount <=5){
    console.log("no discount")
}
else if(discount >=6 & discount <=10){
    console.log("5% discount")
}
else if (discount >= 11 & discount <=20){
    console.log("10% discount")
}
else if(discount>20){
    console.log("15% discount")
}
else{
    console.log("invalid")
}
function Palindrome(str) {
    let a = str.length - 1
    for (let i = 0; i < str.length/2 ; i++) {
        if (str[i] != str[a]) {
            return false;
        }
        a--;
    }
    return true;
}
 
let str1 = "racecar";
let str2 = "121";
let str3 = "12321";
 
console.log(Palindrome(str1));
console.log(Palindrome(str2));
console.log(Palindrome(str3));
