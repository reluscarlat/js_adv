const prop1 = 'name';
const prop2 = 'age';
const prop3 = 'job';

const man = {
    [prop1] : 'John Smith',
    [prop2] : 29,
    [prop3] : 'Engineer'
}

console.log(man);


const a = 'Bill';
const b = true;
const c = {};

// This lines are equivalent:
// const obj = {
//     a : a,
//     b : b,
//     c : c,
// };
const obj = {a,b,c};
console.log(obj);
