// Create Vehichle Class

class Vehichle{
    constructor (make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year
    }
    // Add honk method
    honk() {
        return 'Beep.';
    }
    // Add vehichle description string
    toString() {
        return 'The vehichle is a ${this.make} ${this.model} from ${this.year}'
    }
}

// Add vehichles have four wheels

class Car extends Vehichle{
    constructor (make,model,year) {
        super(make,model,year)
        this.numWheels = 4
    }
}

// Add for motorcycle

class Motorcycle extends Vehichle{
    constructor(make,model,year) {
        super(make,model,year)
        this.numWheels = 2
    }
    // Add revENgine method for Motorcycle
    revEngine(){
        return 'VROOM!!!'
    }
}

// Add garage class
class Garage {
    constructor(capacity){
        this.vehichles = [];
        this.capacity = capacity;
    }
    // Create method for adding vehichles
    add(newVehicle){
        if(!(newVehicle instanceof Vehichle)) {
            return 'Only vehicles are allowed in here!'
        }
        if(this.vehichles.length >= this.capacity) {
            return 'Sorry, we are full'
        }
        this.vehichles.push(newVehicle);
        return 'Vehichle Added!';
    }
}