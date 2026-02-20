const input = (a,b,c) => (a + b + c);
const calls = [[1,2,3],[2,3,6]];


var once = function(fn) {
    let funcCalls = 0;
    return function(...args) {
        if (funcCalls > 0) return undefined
        funcCalls += 1;
        return fn(...args);
    }
};


let onceFn = once(input)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn