// LC2721

// Given an array of asynchronous functions "functions", return a new promise "promise". 
// Each function in the array accepts no arguments and returns a promise. 
// All the promises should be executed in parallel.
var promiseAll = function (functions) {
    // ok so problem asks us to return a new promise, lets start there
    return new Promise((resolve, reject) => {
        // we want to store our results somewhere so lets store them here
        const results = [];
        let resolvedPromises = 0; // need to track how many individual promises have resolved

        // then we want to execute all our functions in parallel, no awaiting!
        for (let i = 0; i < functions.length; i++) {
            // use .then to get results from resolved promises
            functions[i]().then(value => {
                results[i] = value; // store our result in our results array at correct position in correct order (i.e. faster resolution doesn't get stored first)
                resolvedPromises++; // track that we resolved one of our inputted promise functions
                // now we can check if ALL our inputs resolved
                if (resolvedPromises === functions.length) { // if we have equal resolutions to our amount of functions, we can resolve our results array
                    resolve(results);
                };
            }).catch(err => {
                reject(err); // catch and reject when we get an error, per the guidelines
            });
        }
    })
};

// // demo
// const promise = promiseAll([() => new Promise(res => res(42))])
// promise.then(console.log); // [42]

// // example 1
// functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// promiseAll(functions).then(console.log); // [5]

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
promiseAll(functions).then(console.log); // Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.