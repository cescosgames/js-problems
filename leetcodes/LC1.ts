function twoSum(nums: number[], target: number): number[] {
    const dict: Object = {}; // initialize our storage

    // iterate through our nums array
    for (let i: number = 0; i < nums.length; i++) {
        const currentNum: number = nums[i]; // track our current number
        const missingNum: number = target - currentNum; // this is the value we need to solve the problem

        // first, check if we have a number stored at this value
        if (dict[currentNum] !== undefined) { // if a key equaling our current number already exists
            return [dict[currentNum].index, i]; // we have our answer, [previous stored index, current index]
        };

        // otherwise, store what we need for the next passthrough as key: missing value, value: index
        dict[missingNum] = { index: i };
    };

    // unncessary
    return [0,0]
};