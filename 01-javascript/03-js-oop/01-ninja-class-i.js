function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.getSpeed = function(){
        return speed;
    }
    this.getStrength = function(){
        return strength;
    }

    Ninja.prototype.sayName = function () {
        console.log('My ninja name is', this.name);
        return this;
    }

    Ninja.prototype.showStats = function() {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + this.getSpeed() + ', Strength: ' + this.getStrength());
        return this;
    }

    Ninja.prototype.drinkSake = function() {
        this.health += 10;
        return this;
    }

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
// -> "Name: Hayabusa, Health: 120, Speed: 3, Strength: 3"