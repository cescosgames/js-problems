// BankAccount Class
// Build a BankAccount class that models a simple bank account.
//
// The class should have:
// - A constructor that takes an owner (string) and an optional starting balance (default 0)
// - A deposit(amount) method that adds to the balance
// - A withdraw(amount) method that subtracts from the balance
//   - If the withdrawal amount exceeds the balance, log "Insufficient funds" and don't change the balance
// - A getBalance() method that returns the current balance
// - A toString() method that returns a summary string like: "Account[Jane]: $250"
//
// Test cases:
// const acc = new BankAccount("Jane", 100)
// acc.deposit(200)       // balance → 300
// acc.withdraw(50)       // balance → 250
// acc.withdraw(500)      // "Insufficient funds", balance stays 250
// acc.getBalance()       // → 250
// acc.toString()         // → "Account[Jane]: $250"

class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    };

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("insufficent funds");
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance
    }

    toString() {
        console.log(`Account[${this.owner}]: $${this.balance}`)
    }
}

// --- Getters & Setters ---
// JS classes support special get/set keywords that let you access a property like a plain
// value (no parentheses) while still running logic behind the scenes.
//
// How they'd look here:
//
//   class BankAccount {
//     constructor(owner, balance = 0) {
//       this.owner = owner;
//       this._balance = balance;  // convention: prefix with _ to signal "don't touch directly"
//     }
//
//     get balance() {              // called when you READ  acc.balance
//       return this._balance;
//     }
//
//     set balance(amount) {        // called when you WRITE acc.balance = 500
//       if (amount < 0) throw new Error("Balance can't be negative");
//       this._balance = amount;
//     }
//   }
//
//   const acc = new BankAccount("Jane", 100);
//   console.log(acc.balance);   // → 100  (triggers getter, looks like a property not a method)
//   acc.balance = 300;          // triggers setter, runs the validation
//   acc.balance = -50;          // throws Error: "Balance can't be negative"
//
// vs. your current approach:
//   acc.getBalance()  — regular method, requires ()
//   acc.balance       — getter, no () needed, reads like a plain property
//
// Getters are great for computed/read-only values.
// Setters let you add validation whenever a property changes.
// The _ prefix is just a naming convention — it doesn't enforce privacy.
// For true privacy you'd use a private field:  #balance  (modern JS).

const acc = new BankAccount("Jane", 100);
acc.deposit(200);
acc.withdraw(50);
acc.withdraw(500);
console.log(acc.getBalance());  // → 250
console.log(acc.toString());    // → "Account[Jane]: $250"
