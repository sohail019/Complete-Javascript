// Lazy Evaluation with Getter

class ExpensiveCalculation{
    constructor(){
        this._result = null
    }

    // Getter for result with lazy evaluation
    get result(){
        if(this._result === null){
            console.log(`Calculating result......`);
            this._result = this.performExpensiveCalcualtion()
        }
        return this._result
    }

    performExpensiveCalcualtion(){
        // Simulating a time consuming calculation
        let sum = 0
        for(let i = 0; i <= 1e6; i++){
            sum += i
        }
        return sum
    }
}

const calc = new ExpensiveCalculation()
console.log(calc.result) // Output: Calculating result...... 500000500000

console.log((calc.result)); // 500000500000 (without recalculating)