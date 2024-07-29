// Arrow Function with this

const obj = {
    name: 'Sohail',
    regularFunction: function(){
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
}

console.log(obj.name) // Sohail
obj.regularFunction() // Sohail
obj.arrowFunction() // undefined