// LC2677
const arr = [1,2,3,4,5]
const size = 1

const arr2 = [1,9,6,3,2]
const size2 = 3

const arr3 = [8,5,3,2,6]
const size3 = 6

const arr4 = []
const size4 = 1

// chunk original array into subarrays of size, visualize like this: for loop that increments by SIZE of chunks we need, get it?
// first example: 
// first loop starts at 0 (1) then we slice everything from 0 to 0+size (1) so our first loop returns 1
// our second loop starts at 1 (2) rthen we slice everything from 1 to 1+size (2) so our second loop returns 2
var chunk = function(arr, size) {
    // declare where we will hold our subarrays
    const subArrs = []

    // loop through our array with the inputted size as our loop amount
    for (let i = 0; i < arr.length; i+= size) {
        // use slice to get our active starting point (i) up to our size (i+size)
        subArrs.push(arr.slice(i, i + size))
        // then loop again 
    }
    
    return subArrs
};


console.log(chunk(arr2, size2))