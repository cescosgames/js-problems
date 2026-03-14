// LC 2058 - Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// intuition: just use concat? what if I solved another way
var getConcatenation = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i])
    };

    let ansLen = nums.length * 2;

    for (let j = ans.length; j < ansLen; j++) {
        ans.push(nums[j - nums.length]); 
    }

    return ans;
    // return nums.concat(nums);
};

// Example 1:
const nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:

// Example 2:
const nums_2 = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:

console.log(getConcatenation(nums));
console.log(getConcatenation(nums_2));