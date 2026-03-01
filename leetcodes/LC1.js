function twoSum(nums, target) {
    // initialize our storage
    const dict = {};

    // iterage through our nums array
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i] // track our current number
        const missingNum = target - currentNum; // our missing number, the difference between our target and our current number

        // now check if we stored our missing number already in our dictionary
        if(dict[currentNum] !== undefined) { // if a key equaling our current number exists 
            return [dict[currentNum].index, i] // we have our answer
        };

        // otherwise store what we need for the next passthrough as key: missing value, value: index
        dict[missingNum] = { index: i };
    };

    // unnecessary
    return [0,0]
};

const nums = [2,7,11,15]
const target = 9

console.log(twoSum(nums, target));