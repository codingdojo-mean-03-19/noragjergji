function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    //Getters for Speed and Strength
    this.getSpeed = function () {
        return speed;
    }
    this.getStrength = function () {
        return strength;
    }

    Ninja.prototype.sayName = function () {
        console.log('My name is', this.name);
        return this;
    }

    Ninja.prototype.showStats = function () {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + this.getSpeed() + ', Strength: ' + this.getStrength());
        return this;
    }

    Ninja.prototype.drinkSake = function () {
        this.health += 10;
        return this;
    }

    Ninja.prototype.punch = function (ninja) {
        if (ninja instanceof Ninja){
            ninja.health -= 5
            console.log(ninja.name + ' was punched by ' + this.name + ' and lost 5 health!');
        }
        else {
            console.log('ERROR')
        }
        return this
    }

    this.kick = function (ninja) {
        const lost = strength * 5;
        ninja.health -= lost;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + lost + " health.");
        return this;
    }

}

var ninja1 = new Ninja("Me");
var ninja2 = new Ninja("Amy Schumer");
ninja1.punch(ninja2);
ninja2.showStats();
ninja1.kick(ninja2);
ninja2.showStats();