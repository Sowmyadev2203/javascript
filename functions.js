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
console.log(f_name());
//o/p:2550

function Palindrome(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[str.length - i - 1]) {
      return "is a palindrome";
    } else {
      return "is not a palindrome";
    }
  }
}
let str = "racecar";
console.log(Palindrome(str));
//o/P:is a palindrome

first = function (a, b) {
  return a + b;
};
console.log(first(1, 2));
//output:3

let first1_to_10 = function (a) {
  for (i = 0; i <= a; i++) {
    console.log(i);
  }
};
first1_to_10(10);
//output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

let factorials = (a) => {
  for (i = 1; i <= a; i++) {
    fact = fact * i;
    console.log(fact);
  }
};
fact = 1;
input = 5;
factorials(5);
//output:120

