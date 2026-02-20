// Mess 3 - Reverse a String Recursively

// given a string (str),
// return the string reversed.
// do NOT use Array.reverse() or any built-in reverse method.
// use recursion.

// your function
var reverseStr = function (str) {
    // this has a clear base case, when the str length is 0
    if (str.length <= 0) {
        // if we have no letters left, return the empty string
        return "";
    } else {
        // otherwise, take the last letter which we now want to put in first position
        const lastLetter = str[str.length - 1]
        const newStr = str.slice(0,-1); // and take the new string that has all characters EXCEPT the last letter
        return lastLetter + reverseStr(newStr) // and return the last letter + the new string
        // so on first pass we get o + hell, str length is > 0 so...
        // then on second pass we get o + l + hel, str length is > 0 so...
        // then on third pass we get o + l + l + he, str length is > 0 so...
        // then on fourth pass we get o + l + l + e + h, str length is > 0 so...
        // then on fifth pass we get o + l + l + e + h + "", str length is <= 0 so we stop above
    }
};


// test cases
// example 1
const ex1 = "hello"
// should return "olleh"

// example 2
const ex2 = "a"
// should return "a"

// example 3
const ex3 = "racecar"
// should return "racecar"

// example 4
const ex4 = "recursion"
// should return "noisrucer"

console.log(reverseStr(ex1)) // "olleh"
console.log(reverseStr(ex2)) // "a"
console.log(reverseStr(ex3)) // "racecar"
console.log(reverseStr(ex4)) // "noisrucer"
