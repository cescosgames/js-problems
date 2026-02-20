// LC 2625

// =e have a multi-dimensional array (arr) and a depth (n) 
// we need to return a flattened version of that array.
// a multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
// a flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
// this flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
// solve without the built-in Array.flat method.

// our function
var flat = function (arr, n) {
    // return a flattened version of our original array
    // we can flatten an array using reduce
    const flattened = arr.reduce((acc, val) => acc.concat(val), [])
    return flattened
    // OH you know what this is a recursion problem. I'm really bad at recursion right now but I can improve
    // I need to study more before solving this on my own
};


// our test cases
// example 1
const exArr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const exDepth1 = 0
// should return [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// example 2
const exArr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const exDepth2 = 1
// should return [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

console.log(flat(exArr1, exDepth1))