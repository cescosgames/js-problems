// lc1768 

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// typescript also below, NOTE: I DON'T HAVE TS ENVIRONMENT SET UP! test in leetcode
function mergeAlternately(word1: string, word2: string): string {
    let mergedString: string = "";

    const word1isShorter: boolean = word1.length < word2.length;

    if (word1isShorter) {
        for (let i: number = 0; i < word1.length; i++) {
            mergedString += word1[i];
            mergedString += word2[i];
        };
        mergedString += word2.slice(word1.length);
    } else {
        for (let i: number = 0; i < word2.length; i++) {
            mergedString += word1[i];
            mergedString += word2[i];
        };
        mergedString += word1.slice(word2.length);
    }

    return mergedString;
};

const word1 = "abc"
const word2 = "pqr"

const word3 = "ab"
const word4 = "pqrs"

const word5 = "abcd"
const word6 = "pq"

console.log(mergeAlternately(word1, word2))
console.log(mergeAlternately(word3, word4))
console.log(mergeAlternately(word5, word6))