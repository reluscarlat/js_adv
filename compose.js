// Compose

const fct = (a) => (b) => a*b;
const composeFct = (fct1, fct2) => (k) => fct1(fct2(k));
let result1 = fct(2)(3);

const fct1 = (a) => 2*a;
const fct2 = (a) => 2*a;
let result2 = composeFct(fct1,fct2)(2);

console.log(result1);
console.log(result2);