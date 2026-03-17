// LC 1552 - Build an Array With Stack Operations

// You are given an integer array target and an integer n.
// You have an empty stack with the two following operations:
// "Push": pushes an integer to the top of the stack.
// "Pop": removes the integer on the top of the stack.
// You also have a stream of the integers in the range [1, n].
// Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to target. You should follow the following rules:
// If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
// If the stack is not empty, pop the integer at the top of the stack.
// If, at any moment, the elements in the stack (from the bottom to the top) are equal to target, do not read new integers from the stream and do not do more operations on the stack.
// Return the stack operations needed to build target following the mentioned rules. If there are multiple valid answers, return any of them.

// intuition: wow this is worded in a crazy convoluted way... I think we basically have to from 1 to n, and push/pop to match our target? Insanity
var buildArray = function(target, n) {
    const stackOps = [];
    const stack = [];
    let currNum = 1; // start at 1

    for (let i = 0; i < n; i++) { // loop through our target arr
        while (currNum < target[i]) { // while our currNum is less than our target num
            stackOps.push("Push"); // push
            stackOps.push("Pop"); // then immediately pop because we don't want it in our answer
            currNum++; // check the next num
        };

        // if we break out, we hit a match so we can just push - no pop needed
        stackOps.push("Push");
        stack.push(currNum);

        currNum++; // check the next num until we iterated through our whole target array

        // if we have an array match, break out
        if (stack.length === target.length) break;
    }

    return stackOps;
};

// Example 1:
const target = [1,3]
const n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.

// Example 2:
const target_2 = [1,2,3]
const n_2 = 3
// Output: ["Push","Push","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.

// Example 3:
const target_3 = [1,2]
const n_3 = 4
// Output: ["Push","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.

console.log(buildArray(target, n))
console.log(buildArray(target_2, n_2))
console.log(buildArray(target_3, n_3))