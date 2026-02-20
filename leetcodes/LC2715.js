// my answer
var cancellable = function (fn, args, t) {
    // first we want a function that will be called after delay
    let timeoutId = setTimeout(() => fn(...args), t);

    // then we want to return a function that will cancel our previous call after x seconds if it didn't already call
    return function cancelFn(cancelTimeMs) {
        setTimeout(() => {
            clearTimeout(timeoutId);
        }, cancelTimeMs);
    }   
};

// demo
const result = [];

const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
}

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)