// solution to lc 2727
const input = {"x": 5, "y": 42};
const input2 = {}

var isEmpty = function(obj) {
    return !Object.keys(obj).length > 0
};

console.log(isEmpty(input))
console.log(isEmpty(input2))