// LC 14 - Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// 
// If there is no common prefix, return an empty string "".


var longestCommonPrefix = function(strs) {
    // first idea I'm having is just iterating each letter going forward until we hit a non-equal and then return?
    // shortest word determines length so find shortest word
    let shortestWord = strs[0]; // default to first
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < shortestWord.length) shortestWord = strs[i];
    };

    // console.log(shortestWord)

    let foundLCP = false;
    let LCP = "";

    for (let j = 0; j < shortestWord.length; j++) {
        let currLetter = shortestWord[j]
        strs.forEach(word => {
            if (word[j] !== currLetter) {
                foundLCP = true;
            } 
        });
        if (foundLCP) break;
        LCP += shortestWord[j]
        currLetter = shortestWord[j+1]
    };

    return LCP;
};


// Example 1:
const strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
const strs2 = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(strs2))