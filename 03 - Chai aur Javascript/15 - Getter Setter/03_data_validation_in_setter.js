// Data Validation

class BankAccount{
    constructor(balance){
        this.balance = balance
    }

    // getter for balance
    get balance(){
        return this.balance
    }

    // Setter balance with validation

    set balance(amount){
        if(amount < 0){
            console.log('Amount cannot be negative');
        } else{
            this._balance = amount
        }
    }
}


const account = new BankAccount(1000);
console.log(account._balance); // 1000

account.balance = 500 // updates balance
console.log(account._balance); // 500

account.balance = -300 // Attempt to set invalid balance
// Output: // Amount cannot be negative