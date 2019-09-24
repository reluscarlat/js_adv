// Closure <=> encapsulation in java;
const fct = () => {
    const flag = true;
    const childFct = () => {
        if(flag) {
            return "hello from child class";
        }
    }
    return childFct;
}

const innerFct = fct();
const result = innerFct();

console.log(result);
console.log(innerFct());