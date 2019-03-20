class Ninja{
    constructor(name, health, speed, strengh){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strengh = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strengh}`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
constructor(name, health, speed, strengh, wisdom){
    super(name, health, speed, strengh);
    this.health = 200;
    this.speed = 10;
    this.strengh = 10;
    this.wisdom = 10;
}

speakWidsom(){
    super.drinkSake();
    console.log('Words of wisdom: Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.')
}
}

// Ninja actions
var ninja = new Ninja('Nora')
ninja.sayName();
ninja.drinkSake();
ninja.showStats();

// Sensei actions
var sensei = new Sensei('Master Splinter');
sensei.sayName()
sensei.speakWidsom()