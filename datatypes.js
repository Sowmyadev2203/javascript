let a=10;
b='5';
console.log(a+b);
//o/p : 105

let x=10;
x+=5;//x=x+5
console.log(x);
//o/p: 15

let y=10;
z=null;
console.log(y-z);
//o/p: 10

let p = 10;
p *= 2;
console.log(p)
//o/p:20

let l = 10;
k ='2';
console.log(l/k);
//o/p:5

let j = 10;
h = 3;
console.log(j%h);
//o/p:1

let e = 10;
e = e**2;
console.log(e);
//o/p:100

let a1 = 10
let b1 = 5
console.log(a1>b1&&b1<a1);
//o/p:true

let g = 10;
d = '10';
console.log(g===d);
//o/p: false

console.log(null??'default');
//o/p: default

console.log(10||'default');
//o/p: 10

console.log(!true);
//o/p: false

console.log(10 & 5);
//o/p:0

console.log(10 | 5);
//o/p:15

console.log(10 ^ 5);
//o/p:15

let c = 10;
l = ++c;
console.log(c,l);
//o/p:11 11

let v = 10;
x = v++;
console.log(v,x);
//o/p:11 10

let u =10;
console.log(++u);
//o/p:11

let i = 10;
console.log(i++);
//o/p:10

let f = 10;
d = --f;
console.log(f,d);
//o/p:9 9

let ew=10;
re = ew--;
console.log(ew,re);
//o/P:9 10

let gh = 10;
ug = gh>5? 'yes':'no';
console.log(ug);
//o/p:yes

let rt = 10;
hj = rt > 5?'yes':rt > 3? 'maybe':'no';
console.log(hj);
//o/p:yes

const obj ={a:{b:'c'}};
console.log(obj?.a?.b);
//o/p:c

const obje = {a:{b:'c'}};
console.log(obj?.a?.c);
//o/p:undefined

const objec = {a:{b:'c'}};
console.log(obj?.b?.c);
//o/p:undefined

let fg = null;
hg = fg??"default";
console.log(hg);
//o/p:default

let cv = undefined;
hg = cv??"default";
console.log(hg);
//o/p:default

let r = 0;
uy = r??"default";
console.log(uy);
//o/p:0