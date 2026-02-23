// LC 2625

// we have a multi-dimensional array (arr) and a depth (n) 
// we need to return a flattened version of that array.
// a multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
// a flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
// this flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
// solve without the built-in Array.flat method.

// retrying
var flat = function (arr, n = 0) {
    // need to return a flattened array, so set the array
    const flattenedArr = [];

    // for each element in the array, check if the element is an array 
    arr.forEach(element => {
        if (Array.isArray(element) && n > 0) { // if it's an array and we are at depth
            // console.log(`array element at depth ${n} -> ${element}`)
            flattenedArr.push(...flat(element, n - 1)) // spread the result into the top level flattenedArr
        } else {
            // console.log(`non-array element at depth ${n} -> ${element}`)
            flattenedArr.push(element) // otherwise push the element (not arr) to our top level array
        };
    });

    return flattenedArr // return the top level arr
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

// example 3
const exArr3 = [1, 2, 3, [4, 5, 6], 1, 2, 3]
const exDepth3 = 0

console.log(flat(exArr2, exDepth2))