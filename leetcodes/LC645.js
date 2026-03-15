// LC 645 - Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// intuition: scan forward until we find duplicate, break and return array of [dupl, dupl+1]
var findErrorNums = function(nums) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            dict[nums[i]] += 1;
        } else {
            dict[nums[i]] = 1;
        }
    };
    
    let j = 1;
    let missingNum = 0;
    let duplNum = 0;

    while (j < nums.length + 1) {
        if (!dict[j]) {
            // console.log(`missing -> ${j}`)
            missingNum = j;
        } else {
            // console.log(`exists -> ${j}`)
            if (dict[j] === 2) duplNum = j;
        }
        j++;
    }

    return [duplNum, missingNum];
};

// Example 1:
const nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
const nums_2 = [1,1]
// Output: [1,2]

// TC:
const nums_3 = [2,2]
// Output: [2,1]

console.log(findErrorNums(nums))
console.log(findErrorNums(nums_2))
console.log(findErrorNums(nums_3))