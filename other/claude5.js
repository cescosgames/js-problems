// Mess 5 - Fibonacci

// given a non-negative integer n,
// return the nth number in the fibonacci sequence.
// the fibonacci sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// each number is the sum of the two before it.
// use recursion.

// examples:
// fib(0) --> 0
// fib(1) --> 1
// fib(6) --> 8   (0, 1, 1, 2, 3, 5, 8)
// fib(9) --> 34

function fib(n) {
    // console.log(`calling at depth ${n}`)
    if (n < 2) { //
        return n
    }

    return fib(n - 1) + fib(n - 2);
    // example stack using 3 as input
    // 3 is greataer than 2 ->
    // ----stacks-start----
    // return fib(2) + fib(1)
    // ----fib(2)stack----
    // follow fib(2)...
    // fib(2) is not less than 2 so we return fib(1) + fib(0)
    // follow fib(1)...
    // fib(1) is less than 2 so return 1
    // fib(0) is less than 2 so return 0
    // ----fib(1)stack----
    // fib(1) is less than 2 so return 1
    // 2 of our stacks returned 1 so the answer is 2
}


// test cases
console.log(fib(0))   // 0
console.log(fib(1))   // 1
console.log(fib(3))   // 2
console.log(fib(6))   // 8
console.log(fib(9))   // 34
