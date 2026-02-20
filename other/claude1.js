// Mess 1 - Flatten Nested Array

// given an arbitrarily nested array of integers (arr),
// return a single flat array containing all the integers in order.
// solve without the built-in Array.flat method.
// use recursion.

// my approach
var flatten = function (arr) {
    // need to return a single flattened array each call to fill
    const flattenedArr = [];
    // our implicit base case should be when we have no arrays left to loop through i.e. no nested arrays left

    // so lets loop through our input array
    arr.forEach(element => {
        // if we encounter an array
        if (Array.isArray(element)) {
            // console.log(`${element} <-- isArray`)
            // create this function again, and push it's result to the first called top level flattenedArr
            flattenedArr.push(...flatten(element))
        } else {
            // otherwise, push the elements into our flattenedArr
            // console.log(`${element} <-- notArray`)
            flattenedArr.push(element);
        }
    });

    // return our flattenedArr
    return flattenedArr;
};


// test cases
// example 1
const ex1 = [1, [2, [3, 4], 5], 6]
// should return [1, 2, 3, 4, 5, 6]

// example 2
const ex2 = [1, [2, [3, [4]]], 5, [6, [7, 8]]]
// should return [1, 2, 3, 4, 5, 6, 7, 8]

// example 3
const ex3 = [1, 2, 3]
// should return [1, 2, 3]

// example 4
const ex4 = [[[[1]]]]
// should return [1]

console.log(flatten(ex1)) // [1, 2, 3, 4, 5, 6]
console.log(flatten(ex2)) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flatten(ex3)) // [1, 2, 3]
console.log(flatten(ex4)) // [1]
