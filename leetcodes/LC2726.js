// LC2726

class Calculator {
    constructor(value) {
        // set value equal to this.value
        this.value = value
    }

    add(value) {
        // add our value to this.value
        this.value += value
        // return this (the calculator object) to continue chaining methods
        return this
    }

    subtract(value) {
        this.value -= value
        return this
    }

    multiply(value) {
        this.value *= value
        return this
    }

    divide(value) {
        value !== 0 ? this.value /= value : this.value = 'Division by zero is not allowed'
        return this
    }
    
    power(value) {
        this.value **= value
        return this
    }

    getResult() {
        return this.value
    }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()) // 10 + 5 - 7 = 8
console.log(new Calculator(2).multiply(5).power(2).getResult()) // (2 * 5) ^ 2 = 100
console.log(new Calculator(20).divide(0).getResult()) // 20 / 0 