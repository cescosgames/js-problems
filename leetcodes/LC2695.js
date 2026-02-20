// LC2695
var ArrayWrapper = function(nums) {
    // DON'T FORGET to store our array input
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    // reduce our arrays if they are added together 
    return this.nums.reduce((acc, val) => acc + val, 0);
}

ArrayWrapper.prototype.toString = function() {
    // conver to string if we are just calling one array
    return `[${this.nums.toString()}]`;
}


// // // example 1
// // //  nums = [[1,2],[3,4]]
// // // operation = "Add"
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// console.log(obj1 + obj2); // 10

// example 2
// nums = [[23,98,42,70]]
// operation = "String"
const obj = new ArrayWrapper([23,98,42,70]);
console.log(String(obj)); // "[23,98,42,70]"