// LC 448 - Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// intuition: store in a dict, reference the dict
var findDisappearedNumbers = function(nums) {
    const res = [];
    const dict = { 0: 1 };

    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]] += 1;
        }
    };

    for (let j = 0; j < nums.length + 1; j++) {
        if (!dict[j]) {
            res.push(j);
        }
    }

    return res;
};

// Example 1:
const nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
const nums_2 = [1,1]
// Output: [2]

console.log(findDisappearedNumbers(nums))
console.log(findDisappearedNumbers(nums_2))