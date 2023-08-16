let a = 10;
let b = 20;
console.log("a = " + a);
console.log("b = " + b);
let temp = a;
a = b;
b = temp;

[a, b] = [b = a];
console.log("a = " + a);
console.log("b = " + b);

