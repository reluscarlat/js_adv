// Instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}, I'm a ${this.type} and I'm awesome!`);    
    }
}

let player1 = new Player('Garen','Warrior');
player1.introduce();

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Weeee!!! I'm a ${this.type}`);
    }
}

let wizard1 = new Wizard('Kalipto', 'Dark Magic');
let wizard2 = new Wizard('Kelos', 'Healer');
wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();

// ES7
console.log(5**2); 
console.log([5,6,7,2**3,9,10].includes(8));

// ES8
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10) + '.');