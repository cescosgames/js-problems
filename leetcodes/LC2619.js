// LC2619
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1

    // if (this.length > 0) { 
    //     return this[this.length - 1]
    // } else if (this[this.length - 1] === null) {
    //     return null
    // } else {
    //     return -1
    // };
};

// test case example
// const arr = [1, 2, 3];
// console.log(arr.last()); // 3

// // test case 1
const nums = [null, {}, 3];
console.log(nums.last()); // 3

// // test case 2
const nums2 = [];
console.log(nums2.last()); // -1

// test case 3
const nums3 = [null];
console.log(nums3.last()); // null

// test case 4
const nums4 = [100];
console.log(nums4.last()); // 100
