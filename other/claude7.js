// Two Sum
// Write a function twoSum(nums, target) that takes an array of integers and a target number.
// Return the indices of the two numbers that add up to the target.
// - Each input has exactly one solution
// - You may not use the same element twice

// Test cases:
// twoSum([2, 7, 11, 15], 9)  // → [0, 1]  (2 + 7 = 9)
// twoSum([3, 2, 4], 6)       // → [1, 2]  (2 + 4 = 6)
// twoSum([3, 3], 6)          // → [0, 1]

function twoSum(nums, target) {
    // double iteration since we are checking 2 values
    for (let i = 0; i < nums.length; i++) { // start with first, i
        for (let j = i + 1; j < nums.length; j++) { // then move to second, i + 1 so we don't compare same index on same array
            if (nums[i] + nums[j] === target) { // if the i array elemnt and j array element === target we've hit out match
                // console.log(`first num ${nums[i]}, second num ${nums[j]}`)
                return [i, j] // return i and j since these are our first and second indices
            };    
        };
    };
};

console.log(twoSum([2, 7, 11, 15], 9));  // → [0, 1]
console.log(twoSum([3, 2, 4], 6));       // → [1, 2]
console.log(twoSum([3, 3], 6));          // → [0, 1]