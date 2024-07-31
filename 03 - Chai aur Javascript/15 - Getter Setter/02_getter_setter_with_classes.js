// Getters and Setters with Classes

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height; // rectangle ka area return karega
  }

  // Setter for area (assuming a fixed width)
  set area(newArea) {
    this.height = newArea / this.width; // height ko is tarah adjust karega ke given area maintain ho
  }
}

const rect = new Rectangle(10, 20)
console.log(`Area of Rectangle is ${rect.area}`);

rect.area = 300
console.log(`Width of Rectangle is ${rect.height}`); // height becomes 30
