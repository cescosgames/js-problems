// LC 150 - Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// intuition: RPN is crazy lol but I guess just stack the ints and notations 
var evalRPN = function(tokens) {
    let stack = []; // track our stack
    const operations = { // dictionary to store our operations 
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b
    };

    // iterate through all our tokens
    for (let i = 0; i < tokens.length; i++) {
        stack.push(tokens[i]);  // push the token

        if (tokens[i] in operations) { // if our token is an operation
            // console.log(stack)
            let op = stack.pop(); // pop the operation
            let secondOperand = Math.trunc(Number(stack.pop())); // pop the second operand (one right before operation)
            let firstOperand = Math.trunc(Number(stack.pop())); // pop the first operand (one right before second operand)
            // now we cleared out what we want to use from our stack and can replace with the result of this operation
            let res = operations[op](firstOperand, secondOperand); // this is the result
            stack.push(res) // push the result to our stack so we can continue working
        };
    };

    return Math.floor(stack[0]); // rounded final answer
};

// Example 1:
const tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
const tokens_2 = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
const tokens_3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

// console.log(evalRPN(tokens));
// console.log(evalRPN(tokens_2));
console.log(evalRPN(tokens_3));