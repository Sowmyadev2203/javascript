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

//                                             for loop:  ( date: 09 - 08 - 2024 )

// squares of each number from 1 to 10:
let s = 1;
for(i=1;i<=10;i++){
    s=i**2;
    console.log(s);
}

// sum of all numbers and divisible by 3
let s1 = 0;
for(i=1;i<=20;i++){
    if(i%3==0){ 
        console.log(i); 
        s1 =s1 +i;
        console.log(`sum of nums from 1-20:${i}`);
        
    }  
}

// cubes of each number:
let s3 = 1;
for(i=1;i<=15;i++){
    s3=i**3;
    console.log(s3);
}


//                                     do while loop:

// print numbers in reverse order:
let s4 = 10;
do{
    console.log(s4);
    s4--;
}while(s4>=1);


//to find product of of all numbers from 1 to 12
let s5 = 1;
let product = 1;
do{
    product *= s5
    s5++;
}while(s5<=12);
console.log(product)

// to print reverse order from 20 to 1
let s6 = 20;
do{
    console.log(s6);
    s6 = s6-2;   
}
while(s6>=1);

//                                            while loop :

// print 1 to 20 and skips divisible by 5
let s7 = 1;
while(s7<=20){
    if((s7%5 != 0)){
        console.log(s7);
    }
    s7++;
}
// printing the sum of numbers from 1 to 30 divisible by 4
let s8 = 0;
let sum = 0;
while(s8<=30){
    if(s8%4 == 0){
       sum += s8;   
    }
    s8++; 
}
console.log(sum);
// printing numbers from 50 to 1
let s9 = 50;
while(s9>=1){
    if(s9%3 == 0){
        console.log(s9)
    }
    s9--;
    
}

    












