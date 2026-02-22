// Mess 4 - Factorial

// given a non-negative integer n,
// return its factorial (n!).
// factorial of n is the product of all positive integers from 1 to n.
// factorial of 0 is defined as 1.
// use recursion.

// examples:
// factorial(5) --> 120  (5 * 4 * 3 * 2 * 1)
// factorial(3) --> 6    (3 * 2 * 1)
// factorial(0) --> 1

function factorial(n) {
    // if n is greater than 0, multiply n by n - 1 and repeat until we hit 0 at which case we return 1
    return n > 0 ?  n * factorial(n - 1) : 1
    // so in the example of 3
    // first call is 3 * this function(2) which calls...
    // second call 2 * this function(1) which calls...
    // third call is 1 * this function(0) !n = 0! RETURN 1! 
    // so now that the function has stopped calling we get...
    // (((1 * 1) * 2) * 3) = 6
    // by unwinding from the final call
}


// test cases
console.log(factorial(5))  // 120
console.log(factorial(3))  // 6
console.log(factorial(1))  // 1
console.log(factorial(0))  // 1
