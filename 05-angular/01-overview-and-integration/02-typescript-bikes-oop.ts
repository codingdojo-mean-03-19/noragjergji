class Bike{
    price: number;
    max_speed: number;
    miles: number;
    constructor(price:number, max_speed:number){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo(){
        console.log("Price:", this.price, 'Max speed:', this.max_speed, 'Miles:', this.miles);
    }
    //have it display "Riding" on the screen and increase the total miles ridden by 10
    ride() {
        console.log('Riding');
        this.miles += 10;
        return this;
    }
    //have it display "Reversing" on the screen and decrease the total miles ridden by 5
    reverse() {
        console.log('Reversing');
        if(this.miles >= 5) {this.miles -= 5;}
        return this;
    }

}

let bike1 = new Bike(200, 25),
    bike2 = new Bike(100, 30),
    bike3 = new Bike(140, 40);
    
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();