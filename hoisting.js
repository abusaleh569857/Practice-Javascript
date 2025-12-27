console.log(a); // output : undefined
var a = 10;

console.log(b); // output : reference error (TDZ)
let b = 30;

console.log(c); // output : reference error (only declaration move on top not assigned)
const c = 2;
