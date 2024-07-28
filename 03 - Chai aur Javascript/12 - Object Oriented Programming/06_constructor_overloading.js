class Rectangle {
    constructor(width = 1, height = 1){
        this.width = width
        this.height = height
    }


    getArea(){
        return this.width * this.height
    }
}

const defaultRectangle = new Rectangle();
console.log(defaultRectangle.getArea()) // Output : 1


const customRectange = new Rectangle(5, 3);
console.log(customRectange.getArea()); // Output : 15


