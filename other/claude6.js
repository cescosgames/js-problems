// Mess 6 - Deep Get Total Price

// you have a shopping cart object.
// some items contain nested items (e.g. a bundle that contains sub-items).
// each item may or may not have a price, and may or may not have sub-items.
// return the total price of all items and sub-items combined.
// use recursion.

const cart = {
    apple: { price: 1.5 },
    bundle: {
        items: {
            banana: { price: 0.75 },
            snackPack: {
                items: {
                    chips: { price: 2.0 },
                    juice: { price: 1.25 },
                }
            }
        }
    },
    bread: { price: 3.0 },
}
// total should be 8.5

function getTotalPrice(obj) {
    // using an array to track prices, can either see them individually by spreading our push result or just pushing the reduced individual number
    const priceArr = [];

    // need to iterate over an object so lets get to the bottom of an object
    for (const key in obj) { // go through each key
        if (typeof obj[key] === "object") { // if the key is an object
            // console.log(`${obj[key]} <- obj[key] is object`)
            priceArr.push(getTotalPrice(obj[key])) // we repeat the process and push that result to our array
        } else { // if the key is not an object
            // console.log(`${obj[key]} <- obj[key] is not object`)
            // console.log(obj[key]); // otherwise tell me what we got
            priceArr.push(obj[key]); // push the result to our array
        }
    };

    return priceArr.reduce((acc, val) => acc + val, 0) // reduce the array to a single int
    // return priceArr // or return the whole array by spreading the keyisobject push
};


// test cases
console.log(getTotalPrice(cart))  // 8.5
