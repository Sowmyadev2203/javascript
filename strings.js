let str1 = "hello";
let str2 = str1[0].toUpperCase() + str1.slice(1);
console.log("converting the strings hello to :" , str2);
// converting the strings hello to : Hello

let str11 = "world";
let str22 = str11[0].toLowerCase() + str11.slice(1);
console.log("converting the string World to : ",str22);
// converting the string World to :  world

let str111 = "hello";
let str222 = str111.replace("hello" , "hll");
console.log(str222);
//output: hll

let str10 = "world";
let str20 = str10.replace("world" , "wrld");
console.log(str20);
//output: wrld

let str12 = "welcome , to , madhira  khammam ,district";
// let str21 = str12.split("");
// let str23 = str12.split(" ");
let str24 = str12.split(",")
console.log(str24);
// [ 'welcome ', ' to ', ' madhira  khammam ', 'district' ]

function fname(a,b){
    result = a + b;
    console.log(result);
}
fname(4,5);
//op: 9



function fname1(){
    console.log(a + b);
}
fname(4,5);
//op: 9


function fname2(_x,_y){
    return _x + _y;

}

console.log(fname2(4,5));

// print a factorial of a given number
// Prompt the user for input and convert it to an array of numbers
arr = prompt("Enter a number:").split("").map(Number);
console.log(arr);

let emp = []; // To store unique numbers
let uni = ""; // To store unique numbers as a string
let dup = ""; // To store duplicate numbers as a string

// Find unique numbers
for (let i of arr) {
    if (!emp.includes(i)) {
        emp.push(i);
    }
}
console.log(emp);

// Check for unique and duplicate numbers
for (let i of emp) {
    let count = 0; // Count occurrences of the number
    for (let j of arr) {
        if (i === j) {
            count++;
        }
    }
    if (count === 1) {
        uni += i + " ";
    } else if (count > 1) {
        dup += i + " ";
    }
}

// Output the results
console.log("Unique numbers are: " + uni.trim());
console.log("Duplicate numbers are: " + dup.trim());

const y = d.getSeconds();
const date = new Date('08-30-2024');
console.log(date);

const d = new Date();
let x = d.getHours();
let x1 = d.getMinutes();
let x2 = d.getSeconds();
console.log(x, x1 ,x2);



