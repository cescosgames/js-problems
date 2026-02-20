// const functions = [x => x + 1, x => x * x, x => 2 * x], x = 4;
// const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
const functions3 = [], x = 42

var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i > -1; i--) {
            x = functions[i](x)
        };
        return x;
    };
};


const fn = compose(functions3)

console.log(fn(42))