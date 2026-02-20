// THIS DOES NOT WORK LOCALLY BECAUSE WE AREN'T USING OUR DELAYS
// THIS WORKS ON LEETCODE, IF WE WANT IT TO WORK LOCALLY WE NEED TO SETTIMEOUTS

var TimeLimitedCache = function() {
    
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    // check if it already exists
    const exists = this.hasOwnProperty(key)
    // if it already exists, clear out our old timeout
    if (exists) clearTimeout(this[key].timeout)

    // set our timeout so after time elapsed, we delete the key
    const timeout = setTimeout(() => {
        delete this[key]
    }, duration);

    // set our key, and timeout
    this[key] = { value, timeout}

    // return existing information
    return exists
};

TimeLimitedCache.prototype.get = function(key) {
    // if our key exists
    if (this.hasOwnProperty(key)) {
        // return the value of this key
        return this[key].value;
    } else {
        // otherwise return -1
        return -1;
    }
};

TimeLimitedCache.prototype.count = function() {
    // return amount of keys on this obj
    return Object.keys(this).length;
};

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, 
// the key should be DELETED inaccessible. The method should return true if the same un-expired key already exists and false otherwise. 
// Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.


// example 2
// our inputs
const actions = ["TimeLimitedCache", "set", "get", "count", "get"]
const values = [[], [1, 42, 100], [1], [], [1]]
const timeDelays = [0, 0, 50, 50, 150]
// execution
const timeLimitedCache = new TimeLimitedCache()
console.log(null)
console.log(timeLimitedCache.set(1, 42, 100))
console.log(timeLimitedCache.get(1) )
console.log(timeLimitedCache.count())
console.log(timeLimitedCache.get(1)) // returns 42 instead of -1

// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.



// example 1
// const timeLimitedCache = new TimeLimitedCache()
// console.log(timeLimitedCache.set(1, 42, 1000)) // false
// console.log(timeLimitedCache.get(1)) // 42
// console.log(timeLimitedCache.count()) // 1