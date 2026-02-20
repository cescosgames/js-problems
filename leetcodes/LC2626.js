const nums = [1,2,3,4]
const fn = function sum(accum, curr) { return accum + curr; }
const init = 0

const nums2 = [1,2,3,4]
const fn2 = function sum(accum, curr) { return accum + curr * curr; }
const init2 = 100

const nums3 = []
const fn3 = function sum(accum, curr) { return 0; }
const init3 = 25

// my solution, reduce without using reduce
var reduce = function(nums, fn, init) {
    let runningTotal = init;
    nums.forEach(num => {
        runningTotal = fn(runningTotal, num);
    });

    return runningTotal;
};

console.log(reduce(nums, fn, init));
console.log(reduce(nums2, fn2, init2));
console.log(reduce(nums3, fn3, init3));