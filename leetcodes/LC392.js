// LC 392 - Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., &quot;ace&quot; is a subsequence of &quot;abcde&quot; while &quot;aec&quot; is not).

// this is a two pointer problem, so my initial idea is progress through both getting rid of non equal letters in order, once we reach end check equal
var isSubsequence = function(s, t) {
    // initialize our variables
    let i = 0;
    let j = 0;

    // while i is less than s (first pointer) and j is less than 2 (second pointer)
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) { // if the letters are equal, increment both
            i++;
            j++;
        } else { // otherwise only increment one side (j)
            j++;
        }
    };

    return i === s.length; // if i made it to the end, we are true, otherwise we are false
};


// Example 1:
const s = "abc";
const t = "ahbgdc";
// Output: true

// Example 2:
const s2 = "axc"
const t2 = "ahbgdc"
// Output: false

console.log(isSubsequence(s, t))
console.log(isSubsequence(s2, t2))

// Constraints:
// 	0 <= s.length <= 100
// 	0 <= t.length <= 104
// 	s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

// Examples:
// "abc"
// "ahbgdc"
// "axc"
// "ahbgdc"

