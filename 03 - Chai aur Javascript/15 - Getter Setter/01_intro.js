const person = {
    firstName: 'Sohail',
    lastName: 'Shaikh',

    // Getter
    get fullName(){
        // return value
        return `${this.firstName} ${this.lastName}` // first name aur last name ko combine karke full name return karega
    },

    // Setter
    set fullName(name){
        // set value
        const parts = name.split(' ') // full name ko split karke first name aur last name properties ko update kar sakenge
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

console.log(person.fullName); // Sohail Shaikh

person.fullName = 'Salman Khan'
console.log(person.firstName); // Salman
console.log(person.lastName); // Khan