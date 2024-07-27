// Encapsulation

class BankAccount{

    // #balance ek private field hai jo directly class ke bahar se accessible nahi hai.
    #balance

    constructor(initialBalance){
        this.#balance = initialBalance // initialize private field
    }

    // Public Methods: deposit, withdraw, aur getBalance public methods hain jo object ke internal state ko access aur modify karne ki permission dete hain.

    // Public method banate hai money deposit karne ke liye
    deposit(amount){
        if(amount > 0){
            this.#balance += amount
        }
    }

    // Public method banate hai money withdraw karne ke liye
    withdraw(amount){
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
        }
    }

    // Public method banate hai balance dekhne ke liye
    getBalance(){
        return `Balance is ${this.#balance}`
    }
}

const account1 = new BankAccount(1000);
account1.deposit(1000) // 1000 deposit hua to balance hua 2000
console.log(account1.getBalance()) // 2000

account1.withdraw(1200) // 1200 withdraw karne pe 800 balance hona chahiye
console.log(account1.getBalance())
// Upar ka methods ke through private property access horahi hai par agar private property ko direct access karne ki koshish karenge to dekhte hai kya hota hai

// console.log(account1.#balance) // // SyntaxError: Private field '#balance' must be declared in an enclosing class
