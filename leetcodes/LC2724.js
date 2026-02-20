// LC2724
const arr = [5, 4, 1, 2, 3]
const fn = (x) => x // we will sort by x

const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}]
const fn2 = (d) => d.x // we will sort by the value of the key d (d.x)

const arr3 = [[3, 4], [5, 2], [10, 1]]
const fn3 = (x) => x[1] // we will sort by the 2nd arr value of array x (x[1])

// sort by function output, ascending
// classic sort a-b but our input is result of a and result of b aka result of function
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => (fn(a)-fn(b)));
};

console.log(sortBy(arr3,fn3))