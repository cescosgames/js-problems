// LC2627
var debounce = function (fn, t) {
    // set our initial timeout using settimeout
    // let ref = setTimeout(fn, t)
    // actually, just make our timeout reference here
    let ref

    return function (...args) {
        // clear timeout on call if we have one using cleartimeout
        clearTimeout(ref);

        // set our timeout again calling our fn with args with delay T
        ref = setTimeout(() => {
            fn(...args)
        }, t);
    }
};

// // example
// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms

// test 1
t = 50
calls = [
    { "t": 50, inputs: [1] },
    { "t": 75, inputs: [2] }
]
let start = Date.now();
function log(...inputs) {
    console.log([Date.now() - start, inputs])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);