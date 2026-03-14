// LC 485 - Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// intuition: loop forward once, checking and comparing streaks
var findMaxConsecutiveOnes = function(nums) {
    let longestStreak = 0;
    let currStreak = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currStreak += 1;
        } else {
            currStreak = 0;
        };

        if (currStreak > longestStreak) longestStreak = currStreak;
    };

    return longestStreak;
};

// Example 1:
const nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
const nums_2 = [1,0,1,1,0,1]
// Output: 2

console.log(findMaxConsecutiveOnes(nums))
console.log(findMaxConsecutiveOnes(nums_2))