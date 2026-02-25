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

## Other Notes

In practice problems, I can get in the habit of seeing and implementing recursion. 
In more complex problems, or real life I can not. I need to learn to see them better. One advice is
```
The clearest signal to know when to use recursion is asking: does solving this problem require the answer to a smaller version of itself?    
"Can I describe the answer to f(n) using f(smaller input)?" 
```