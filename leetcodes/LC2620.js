// my answer
var createCounter = function(n) {
    let x = n
    return function() {
        return x++
    };
};

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())