const arr = [1, 2, 3]
const fn = function plusone(n) { return n + 1; }

// // lol it said solve without map
// var map = function(arr, fn) {
//     return arr.map((ele) => fn(ele));
// };

// my no map solution WHICH WORKED BUT LEETCODE SPECIFICALLY ASKED FOR INDEX IN THE fn() WHICH I FORGOT
// var map = function (arr, fn) {
//     const returnedArr = [];

//     arr.forEach((ele) => {
//         const result = fn(ele);
//         returnedArr.push(result);
//     });

//     return returnedArr;
// };

// this is the version they wanted, with index
var map = function (arr, fn) {
    const returnedArr = [];

    arr.forEach((ele, index) => {
        const result = fn(ele, index);
        returnedArr.push(result);
    });

    return returnedArr;
};

console.log(map(arr, fn))