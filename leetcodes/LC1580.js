// LC 1580 - Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// intuition: split the array, add first ele from each
var shuffle = function(nums, n) {
    const shuffleArr = [];
    const firstHalf = nums.splice(0, n); // splice mutates original array
    const secondHalf = nums;

    for (let i = 0; i < n; i++) {
        shuffleArr.push(firstHalf[i]);
        shuffleArr.push(secondHalf[i]);
    }

    return shuffleArr;
};

// Example 1:
const nums = [2,5,1,3,4,7]
const n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
const nums_2 = [1,2,3,4,4,3,2,1]
const n_2 = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
const nums_3 = [1,1,2,2]
const n_3 = 2
// Output: [1,2,1,2]

console.log(shuffle(nums, n))
// console.log(shuffle(nums_2, n_2))
// console.log(shuffle(nums_3, n_3))