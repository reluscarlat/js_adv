// Curring
const fct = (a) => (b) => a*b;
console.log(fct(2)(3));
multiplyBy5 = fct(5);
console.log(multiplyBy5(10));