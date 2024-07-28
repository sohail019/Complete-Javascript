// Prototype Chain

// ek animal object create karte hai.
const animal = {
    // ek method define karte hai jo console karega
    speak(){
        console.log("Animal Speaks");
    }
};

// ek naya object create karte hai
const dog = Object.create(animal) // iska matlab hai ke ham dog object ko animal ka prototype bana rahe hai, it means ke dog object animal object ke methods aur properties ko inherit kar sakta hai.

// yahan dog object mein naya method add karte hai
dog.bark = function(){
    console.log("Dog Barks");
}

// dog ke paas speak method nahi h par wo animal object se inherit karke print karega
dog.speak() // Output: Animal Speaks (from prototype)
dog.bark() // Output: Dog Barks (from own property)