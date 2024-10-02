let fix = [12.345, 67.89, 34.567];
let out = [];
for (i of fix) {
  i = i.toFixed(2);
  output.push(Number(i));
}

console.log(out);
//output:   [ 12.35, 67.89, 34.57 ]

let x = ["123abc", "456def", "789ghi"];
let y = [];
for (i of inn) {
  i = parseInt(i);
  out.push(i);
}
console.log(y);
//output: [ 123, 456, 789 ]

let arr = [12, 34.56, 78, 90.12, -90];
for (i of arr) {
  console.log(`${i} is an integer ${Number.isInteger(i)}`);
}
// output:
// 12 is an integer true
// 34.56 is an integer false
// 78 is an integer true
// 90.12 is an integer false
// -90 is an integer true

let arr1 = ["abc", 123, "def", 456];
for (i of arr1) {
  console.log(`${i} is NAN ${Number.isNaN(i)}`);
}
// output:
// abc is NAN false
// 123 is NAN false
// def is NAN false
// 456 is NAN false

let inn = [123.456, 789.012, 345.678];
let ouput = [];
for (i of inn) {
  i = i.toPrecision(4);
  ouput.push(Number(i));
}
console.log(ouput);
// output:
// [ 123.5, 789, 345.7 ]

function getRandomNumber(val) {
  return Math.floor(Math.random() * val);
}
console.log(getRandomNumber(99999));
// output:
// 24251
// 89930
// 59046

let rows = +prompt("enter no.of rows:");
let cols = +prompt("enter no of cols:");
let MatrixA = [];
let Tmat = [];
for (i = 1; i <= rows; i++) {
  x = [];
  for (j = 1; j <= cols; j++) {
    console.log("Enter" + i + " " + j + "vales:");
    el = +prompt();
    x.push(el);
  }
  MatrixA.push(x);
}
for (i of MatrixA) {
  console.log(i.join(" "));
}
let sum = 0;
for (i = 0; i < rows; i++) {
  for (j = 0; j < cols; j++) {
    if (i == j || i + j == rows - 1) {
      // if i==j or if sum of i+j should be equal to rows length-1.

      sum = sum + MatrixA[i][j];
    }
  }
}
console.log("Sum of Diagonal Elements is:" + sum);
