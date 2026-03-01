// LC 392 - Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., &quot;ace&quot; is a subsequence of &quot;abcde&quot; while &quot;aec&quot; is not).

// Example 1:
const s = "abc";
const t = "ahbgdc";
// Output: true

// Example 2:
const s2 = "axc"
const t2 = "ahbgdc"
// Output: false

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

