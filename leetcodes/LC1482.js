// LC 1482 - How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// intuition: right away I'm just thinking nested loops
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        let lowerThan = 0;
        for (let j = 0; j < nums.length; j++) {
            if (currNum > nums[j]) lowerThan += 1;
        };
        result.push(lowerThan);
        lowerThan = 0;
    };

    return result
};

// Example 1:
const nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// Example 2:
const nums_2 = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:
const nums_3 = [7,7,7,7]
// Output: [0,0,0,0]

console.log(smallerNumbersThanCurrent(nums))
console.log(smallerNumbersThanCurrent(nums_2))
console.log(smallerNumbersThanCurrent(nums_3))