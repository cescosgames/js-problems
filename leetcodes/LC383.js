// LC 383 - Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function (ransomNote, magazine) {
    const noteLetters = {};
    const magazineLetters = {};
    let canMakeNote = true;

    // track how many letters we need
    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomNote[i] in noteLetters) {
            noteLetters[ransomNote[i]] += 1;
        } else {
            noteLetters[ransomNote[i]] = 1;
        };
    };

    // same as above
    for (let i = 0; i < magazine.length; i++) {
        if (magazine[i] in magazineLetters) {
            magazineLetters[magazine[i]] += 1;
        } else {
            magazineLetters[magazine[i]] = 1;
        };
    };

    console.log(noteLetters);
    console.log(magazineLetters);

    // then compare values
    for (const key of Object.keys(noteLetters)) { // idk why but I had this wrapped in brackets which was causing the issue lol
        if (key in magazineLetters) {
            if (noteLetters[key] > magazineLetters[key]) return false
        } else {
            return false
        }
    };

    return canMakeNote
};

// Example 1:
const ransomNote = "a"
const magazine = "b"
// Output: false

// Example 2:
const ransomNote2 = "aa"
const magazine2 = "ab"
// Output: false

// Example 3:
const ransomNote3 = "aa"
const magazine3 = "aab"
// Output: true

// TC1
const tcnote = "aab"
const tcmag = "baa"


console.log(canConstruct(ransomNote, magazine));
// console.log(canConstruct(ransomNote2, magazine2));
// console.log(canConstruct(ransomNote3, magazine3));
console.log(canConstruct(tcnote, tcmag));