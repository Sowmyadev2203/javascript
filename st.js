function transformString(input) {
    let output = '';

    for (let char of input) {
        if (char >= 'a' && char <= 'z') {
            output += char.toUpperCase();
        } else {  
            output += char.toLowerCase();
        }
    }
    return output;
}
const inputString = "somEThinG";
const outputString = transformString(inputString);
console.log(outputString); 
//o/p: SOMetHINg



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
  //o/P:is a palindrom