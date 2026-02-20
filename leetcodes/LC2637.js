// my solution to 2637
var timeLimit = function(fn, t) {
    // return a new time limited versoin of our input function
    return async function(...args) {
        // here is our main function that we will pass through Promise.race which 'races' 2 promises to see who resolves first
        let fnPromise = fn(...args);

        // here is our time limit, a promise that will reject after t seconds
        let timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // built in function to "race" 2 promises and resolve which one is first
        return Promise.race([fnPromise, timeoutPromise]); 
    }
};


// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
