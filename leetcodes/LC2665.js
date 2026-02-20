// my answer

function createCounter(init) {
    const initial = init;
    let mod = initial
    return {
        increment() {
            return mod += 1
        },

        reset() {
            return mod = initial
        },

        decrement() {
            return mod -= 1
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// answer I like more

function createCounterBetter(init) {
    const curr = init;
    return {
        increment:() => ++curr,
        reset:() => curr = init,
        decrement:() => --curr
    };
}

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4