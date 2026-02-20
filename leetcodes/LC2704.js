// my answer

var expect = function(val) {
    return { 
        value: false,

        toBe(input) {
            if (input === val) {
                return true
            } else {
                throw new Error("Not Equal")
            }
        },

        notToBe(input) {
            if (input !== val) {
                return true
            } else {
                throw new Error("Equal")
            }
        },
    };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"