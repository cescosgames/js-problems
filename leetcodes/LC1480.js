const numsArr = [1,2,3,4]
const numsArr2 = [1,1,1,1,1]
const numsArr3 = [3,1,2,10,1]

// my answer
function runningSum(nums) {
    const sumArr = [];

    nums.forEach((num, index) => {
        let val = 0;
        for (let i = index; i > -1; i--) {
            val += nums[i];
        };
        sumArr.push(val);
    });

    return sumArr;
};

// console.log(runningSum(numsArr2));


// official answer
function runningSumsAnswer(nums) {
    // init our results array
    const results = [];

    // manually push the first element to get started
    results.push(nums[0]);

    // loop by adding current number to last number of results array (start at let=1 skip first!)
    for (let i = 1 ; i < nums.length; i++) {
        results[i] = nums[i] + results[i-1];
    };

    return results;
};

console.log(runningSumsAnswer(numsArr3));
