// LC 283 - Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// this is categorized as 2 pointers, so use a 2 pointers solution! That's a huge hint!
// my original solution was a mess of while loops (but it worked)
// then my second solution I completely forgot I had to modify in place (and it worked great and clean quick but shallow copy not like the problem stated)
// then this solution, I got help with (clean 2 pointer, fast/slow, tracking 2 different positions at once)
var moveZeroes = function(nums) {
    // ok 2 point solution, start from the front and track 2 indices; the array, and the non-zeros
    let insertIndex = 0; // start at insert index 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) { // if we hit a non-zero
            nums[insertIndex] = nums[i]; // set our insert index equal to the non-zero we hit
            insertIndex++; // and increment our insert index
        };
    };

    // then once we hit our final insert index, that means we have moved every non-zero up so we can insert only 0 from that point until end
    for (let j = insertIndex; j < nums.length; j++) {
        nums[j] = 0
    };

    console.log(nums)
    return nums
};


// Example 1:
const nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
moveZeroes(nums)

// Example 2:
const nums2 = [0]
// Output: [0]
moveZeroes(nums2)

// Follow up: Could you minimize the total number of operations done?

// Examples:
// [0,1,0,3,12]
// [0]

// test case
const tc = [0,0,1]
// Output: [1,0,0]
moveZeroes(tc)

const tc2 = [1,0,0,1]
moveZeroes(tc2)