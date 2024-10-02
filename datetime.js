let d = new Date();
console.log(d);
// output:2024-09-23T05:54:47.434Z

let dd = new Date();
console.log("Today's date is:");
console.log(dd);
let todayDate = dd.getDate();
dd.setDate(dd.getDate() + 4);
console.log("Adding 4 days to Today's date:");
console.log("then resultant date is:");
console.log(dd);

//output:2024-09-23T05:56:09.696Z
// Today's date is:
// 2024-09-23T05:56:09.712Z
// Adding 4 days to Today's date:
// then resultant date is:
// 2024-09-27T05:56:09.712Z

let dff = new Date("2024-08-28");
let currentFormat = dff.toLocaleDateString();
console.log(currentFormat);
//output:28/8/2024

let date = new Date();
let PrevDate = date.getDate();
let PreviousDate = PrevDate;
console.log(date);
date.setDate(date.getDate() + 4);
let Presdate = date.getDate();
let PresentDate = Presdate;
console.log(date);
console.log(`difference between the dates is: ${PresentDate - PreviousDate}`);
//output:2024-09-23T11:28:10.545Z
// 2024-09-27T11:28:10.545Z
// difference between the dates is: 4

// let VaFormat=dff.toLocaleDateString("hi-IN");
// console.log(VaFormat);


