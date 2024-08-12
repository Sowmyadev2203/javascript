//even numbers
function f_name() {
    let j = 0;
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            j = j + i;
        }
    }
    console.log(j);
}
console.log(f_name())


// function calculator() {
//     let num1 = +prompt("Enter the first value");
//     let num2 = +prompt("Enter the second value");
//     let operator = prompt("Enter the operator");
//     let result;
//     if (operator == "+") {
//         result = num1 + num2;
//     } else if (operator == "-") {
//         result = num1 - num2;
//         if (num2 > num1 && operator == "-") {
//             result = num2 - num1;
//         }
//     } else if (operator == "%") {
//         result = num1 % num2;
//     } else if (operator == "/") {
//         result = num1 / num2;
//     } else if (operator == "*") {
//         result = num1 * num2;
//     } else {
//         alert("Invalid operator");
//         result = "undefined";
//     }

//     alert("The result is: " + result);
// }
// console.log(calculator())