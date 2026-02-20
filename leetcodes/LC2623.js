const fnName = "sum"
const actions = ["call", "call", "getCallCount", "call", "getCallCount"]
const values = [[2, 2], [2, 2], [], [1, 2], []]
// output [4,4,1,3,2]

// memoizing takes in our function we want to memo as a parameter
function memoize(fn) {
    // then we need a cache, object for key value pairs
    const cache = {};
    // now we return our function with unspecified args
    return function (...args) {
        // need to have a key of some sort to look up cache
        let key = args.join(',') // make our key by joining our arguments
        // check if we didn't already cache this
        if (!(key in cache)) { // CHECK USING __ in ___ BECAUSE !cache[key] just checks truthiness and 0,0 would be false!
            cache[key] = fn(...args); // store the key value to our function result
        };
        return cache[key];
    };
};

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})

console.log(memoizedFn(0, 0))
// memoizedFn(0, 0)
console.log(memoizedFn(0, 0))
// memoizedFn(0, 0)
console.log(callCount) 