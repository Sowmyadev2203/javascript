//                            Task - 4                //


//        *                       loops          *         //
/// sum of all even numbers between 1 to 100

let x = 0;
for(i=0;i<=100;i++){
    if(i%2==0){
        x = x+i;
    
    if(x==650){
        console.log("The sum of even numbers from 1 to 50 is : ",x)
    }
}
}
console.log("The sum of even numbers from 1 to 100 is : ",x);

/// sum of all even numbers 1 to 50:

let x1 = 0;
for(i=0;i<=50;i++){
    if(i%2==0){
        x1 = x1+i;
    }
}
console.log(x1);

// factorial of a given number = 5:

let x2 = 1;
let num = 5;
for(i=1;i<=num;i++){
    x2 = x2*i
}
console.log(x2);

// factorial of a given number = 3:
let x3 = 1;
let num1 = 3;
for(i=1;i<=num1;i++){
    x3 = x3*i
}
console.log(x3);

// the number of digits in a given number for sample number:  123
arr=[1,2,3]
console.log(arr.length);

arr=[1,2,3];
result = 0;
for(i=0;i<=arr.length;i++){
    result=i;
}
console.log(result)

//the number of digits in a given number for sample number:  4567
arr=[4,5,6,7]
result = 0;
for(i=0;i<=arr.length;i++){
    result=i;
}
console.log(result)






