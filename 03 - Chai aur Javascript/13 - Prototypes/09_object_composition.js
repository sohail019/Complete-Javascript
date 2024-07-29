// Object Composition

const vehicle = {
    start(){
        console.log("Vehicle started");
    }
}

// Object.assign({}, vehicle, {drive(){}})
// Pehla argument {} ek empty object hai, jis mein saari properties copy hogi.
// Dusra argument vehicle hai, jisse start method copy hoga
// Teesra argument ek naya object hai jisme drive method define kiya jaega.
const car = Object.assign({}, vehicle, {
    drive(){
        console.log("Car is Driving");
    }
})

car.start() // Output: Vehicle started
car.drive() // Output: Car is driving