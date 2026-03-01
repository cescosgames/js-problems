// LC 20 - Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 	Open brackets must be closed by the same type of brackets.
// 	Open brackets must be closed in the correct order.
// 	Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    // check if we have enough to close
    if (s.length < 2) {
        return false;
    };

    // tracking elements (like a stack, imagine vertical array)
    // last in first out (LIFO)
    const stack = [];

    // array of opening & closing elements
    const openingsArr = ["(", "{", "["];
    const closingsArr = [")", "}", "]"]

    for (let i = 0; i < s.length; i++) {
        // if closer doens't match opener
        if (openingsArr.includes(s[i])) {
            stack.push(s[i]);
        } else {
            let idx = closingsArr.indexOf(s[i]);
            if (idx !== openingsArr.indexOf(stack[stack.length - 1])) {
                return false;
            } else {
                stack.pop()
            }
        };
    };

    // return foundACloser ? true : false;
    return stack.length === 0;
};

// Example 1:
const s = "()";
// Output: true

// Example 2:
const s2 = "()[]{}";
// Output: true

// Example 3:
const s3 = "(]";
// Output: false

// Example 4:
const s4 = "([])";
// Output: true

// Example 5:
const s5 = "([)]";
// Output: false

// TC1: 
const t = "([]){";

// TC2:
const t2 = "([]";

// console.log(isValid(s));
// console.log(isValid(s2));
// console.log(isValid(s3));
// console.log(isValid(s4));
// console.log(isValid(s5));
// console.log(isValid(t));
console.log(isValid(t2));