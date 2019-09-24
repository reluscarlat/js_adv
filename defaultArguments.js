// Default arguments

function greet(name = '', age = 30, pet = 'cat') {
    console.log(`Hello ${name}, you seem to be ${age - 10}. What a levely ${pet} you have!`)
} 

greet("Boby",35,"dog");
// greet();