// Modifying Prototypes

function Vehicle(type){
    this.type = type
}

// Prototype method
Vehicle.prototype.describe = function(){
    console.log(`This is a ${this.type}`);
}

// Object
const bike = new Vehicle('bike')
bike.describe() // This is a bike


Vehicle.prototype.describe = function(){
    console.log(`The type of the Vehicle is ${this.type}`);
}

bike.describe() // The type of the Vehicle is bike