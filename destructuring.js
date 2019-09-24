// Destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// These lines are equivalent:
// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = obj.wizardLevel;
let {player, experience} = obj;

let {wizardLevel} = obj;
console.log([player,experience,wizardLevel]);