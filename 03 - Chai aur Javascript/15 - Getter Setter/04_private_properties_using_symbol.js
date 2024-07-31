// Private Properties using Symbol

const _salary = Symbol('salary')

class Employee{
    constructor(name, salary){
        this.name = name
        this[_salary] = salary
    }

    // Getter for salary
    get salary(){
        return this[_salary]
    }

    // Setter for salary
    set salary(amount){
        if (amount > 0) {
            this[_salary] = amount
        } else{
            console.log(`Salary must be positive`);
        }
    }
}

const emp = new Employee('Sohail', 10000)
console.log(emp.salary); // Output: 10000

emp.salary = 6000
console.log(emp.salary); // Output: 6000

emp.salary = -1000; // Attempt to set invalid salary
// Output: Salary must be positive