// Mess 2 - Sum of Nested Array

// given an arbitrarily nested array of integers (arr),
// return the sum of all integers, where each integer is multiplied by its depth level.
// the top level of the array is depth 1.
// use recursion.

// main function
var nestedSum = function (arr, d = 1) {
    // so we need to traverse arrays again, but this time track depth
    let depth = d;

    // and sum
    let sum = 0;

    // then start travesing
    arr.forEach(element => {
        // check if we hit an array
        if (Array.isArray(element)) {
            sum += nestedSum(element, depth + 1);
        } else {
            // add to our sum
            sum += element * depth;
        }
    });

    // ultimately return sum
    return sum;
};


// test cases
// example 1
const ex1 = [1, [2, [3]]]
// depth: 1*1 + 2*2 + 3*3 = 1 + 4 + 9
// should return 14

// example 2
const ex2 = [1, 2, 3]
// depth: 1*1 + 2*1 + 3*1
// should return 6

// example 3
const ex3 = [[1, 1], [1, 1]]
// depth: 1*2 + 1*2 + 1*2 + 1*2
// should return 8

// example 4
const ex4 = [1, [1, [1, [1]]]]
// depth: 1*1 + 1*2 + 1*3 + 1*4
// should return 10

console.log(nestedSum(ex1)) // 14
console.log(nestedSum(ex2)) // 6
console.log(nestedSum(ex3)) // 8
console.log(nestedSum(ex4)) // 10