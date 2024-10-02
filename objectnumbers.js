let obj1 = { a: 1, b: 2, c: 3, d: 4 };
let output={};
for(i in obj1){
if(obj1[i]>2){
console.log(`${i}:${obj1[i]}`);
}
}
// Output:
// c:3
// d:4



const obj11 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
Object.assign(obj11,obj2);
console.log(obj11);
// output: { a: 1, b: 2, c: 3, d: 4 }



const obj = { a: 1, b: 2, c: 3, d: 4 };

let valarr=Object.values(obj);
let sum=valarr.reduce((total,a)=>total+a,0);
console.log(sum);
//output : 10


let arr=[{name:"a",id:"133"},{name:"b",DOB:"sep 24"},{id:"667", role:"developer"}];
for(i of arr){
console.log(i.hasOwnProperty("name"));
}

//output:true
// true
// false


