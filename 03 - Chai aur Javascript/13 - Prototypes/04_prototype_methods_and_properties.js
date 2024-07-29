// Prototype Methods and Properties

function Car(brand, model){
    this.brand = brand
    this.model = model
}

// Create Prototype Method
Car.prototype.start = function(){
    console.log(`${this.brand} ${this.model} starts.`);
}

// Create Prototype Property
Car.prototype.year = 2024


// Object
const myCar = new Car("Mahindra", "Scorpio-N")

// Call method
myCar.start() // Output: Mahindra Scorpio-N starts

// Call property
console.log(myCar.year) // Output : 2024