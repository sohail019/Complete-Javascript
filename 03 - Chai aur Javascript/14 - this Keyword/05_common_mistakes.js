// Common mistakes with 'this'

// Loosing Context

const person = {
    name: 'Sohail',
    greet: function(){

        setTimeout(function() {
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
}

person.greet() // Hello undefined

// Solution

const person2 = {
    name: 'Sohail',
    greet: function(){

        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
}

person2.greet()


// Using this in Event listeners

class Button{
    constructor(element){
        this.element = element
        this.element.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(){
        console.log("Button Clicked: ", this.element.id)
    }
}

const button = new Button(document.getElementById("myButton")); 
// Is example mein, handleClick method ko this ke correct context ke saath bind kiya gaya hai using bind method, taaki this.element event ke waqt correct button element ko refer kare.


// Using this in Nested functions

const obj = {
    value: 42,
    showValue: function(){
        function innerFunction(){
            console.log(this.value);
        }
        innerFunction.call(this) // 42
    }
}

obj.showValue()

// Yahan innerFunction.call(this) ka use context ko explicitly set karne ke liye kiya gaya hai, taaki this obj ko refer kare.