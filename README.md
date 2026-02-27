# JS Practice Problems

A collection of my approaches and solutions to various practice problems from leetcode and AI prompts

## LCgetter.js

I made a CLI tool that fetches a LeetCode problem and saves it as a commented JS file for quicker transferring from leetcode to vscode for practice

### Usage
make sure file structure is for proper file saving / generating
```
main/
├── leetcodes/
│   └── LC123.js
├── LCgetter.js
└── README.md
```
```
node LCgetter.js <leetcode-problem-url> 
```
### Example

node LCgetter.js https://leetcode.com/problems/two-sum/

This will create leetcodes/LC1.js with the problem description and examples formatted as comments.

### LCgetter Notes

- Only paste the URL up to the end of the problem name (no query params)! very important!
- The output file will not be overwritten if it already exists
- Requires Node.js with fetch support (v18+)

## Pattern Notes & Cheatsheet

In practice problems, I can get in the habit of seeing and implementing patterns if I see them frequently. 
In more complex problems, or real life I can not. I need to learn to see these patterns better. Here is a general pattern cheatsheet

```
The clearest signal to know when to use two pointers (fast/slow) is: do I need to track two positions in an array simultaneously, in-place, while preserving order?
"Can I solve this by having one pointer scout ahead while another tracks where to write or place?"
→ move zeroes, remove duplicates, remove element

The clearest signal to know when to use two pointers (left/right) is: is the array sorted, and am I looking for a pair or range that satisfies some condition?
"Can I eliminate possibilities by squeezing inward from both ends?"
→ two sum II, container with most water, valid palindrome

The clearest signal to know when to use a sliding window is: am I looking for a contiguous subarray or substring that satisfies some condition?
"Can I expand and shrink a window across the array instead of checking every subarray?"
→ longest substring without repeating characters, max sum subarray of size k, minimum window substring

The clearest signal to know when to use a hash map is: am I looking something up repeatedly, or do I need to remember what I've seen before?
"Can I trade space for time by storing values I've already visited?"
→ two sum, group anagrams, contains duplicate

The clearest signal to know when to use a stack is: do I need to process things in reverse order, or does each new element depend on the most recent unresolved element?
"Is there a 'last in, first out' relationship between elements?"
→ valid parentheses, daily temperatures, evaluate reverse polish notation

The clearest signal to know when to use binary search is: is the input sorted, or can I define a search space where I can eliminate half at each step?
"Can I check a midpoint and confidently throw away half the remaining possibilities?"
→ binary search, find minimum in rotated sorted array, search a 2d matrix

The clearest signal to know when to use BFS is: am I finding the shortest path, or do I need to process nodes level by level?
"Do I need the closest/fewest steps answer, or do I care about distance from a source?"
→ shortest path in a maze, level order traversal, word ladder

The clearest signal to know when to use DFS is: am I exploring all paths, or does the problem have a branching structure I need to exhaust?
"Do I need to try every possibility and backtrack if it doesn't work?"
→ number of islands, path sum, permutations, subsets

The clearest signal to know when to use dynamic programming is: does this problem have overlapping subproblems I'd solve repeatedly with recursion?
"Have I already solved f(smaller input) before, and can I store it instead of recomputing?"
→ fibonacci, climbing stairs, longest common subsequence, knapsack
```