let arr = [1, 2, 3, 4, 5];
let double = [];
let square = [];
let even = [];
let result ;
let basket = {
    apple: 500,
    orange: 100,
    cherry: 1000
}


// forEach
arr.forEach((element) => {
    double.push(element * 2);
});
console.log(double);

// for of - only for arrays
for(val of arr) {
    console.log(val + 10);
}

// for in - only for enumerating object properties names
for(val in basket) {
    console.log(val);
}

// map
square = arr.map((element) => {
    return element * element ;
});
console.log(square);


// filter
even = arr.filter((element) => {
    if(element % 2 === 0) {
        return true;
    }
});
console.log(even);

// reduce 
result = arr.reduce((accumulator, current) => {
    return current + accumulator;
},0);
console.log(result);

result = arr.reduce((accumulator, current) => {
    return current * accumulator;
},1);
console.log(result);
