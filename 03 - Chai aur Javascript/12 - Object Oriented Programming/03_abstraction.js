// Abstraction
class Car{
    constructor(make, model){
        this.make = make
        this.model = model
    }


    // Abstracted Method
    startEngine(){
        console.log("Engine started");
    }

    // Abstracted Method
    drive(){
        console.log("Car is Driving.");
    }
}

const myCar = new Car("Toyota", "Fortuner")

myCar.startEngine() 
myCar.drive()