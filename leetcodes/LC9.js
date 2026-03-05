// LC 9 - Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    // first instinct is just convert to string, palindrome check string
    const reversedStr = x.toString().split('').reverse().join('')

    console.log(reversedStr);
    console.log(x.toString());

    if (reversedStr === x.toString()) return true;
    return false
};

// Example 1:
const x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
const x2 = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
const x3 = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up: Could you solve it without converting the integer to a string?

console.log(isPalindromeNoString(x))
console.log(isPalindromeNoString(x2))
console.log(isPalindromeNoString(x3))