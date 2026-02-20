const args = [5];
const args2 = [{}, null, "3"]

var argumentsLength = function(...args) {
    return args.length
};

console.log(argumentsLength(args2));