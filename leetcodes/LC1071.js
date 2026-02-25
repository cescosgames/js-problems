// LC1071
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
// (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// fuck me this wording got me - this comment helped tho
// we are looking for the longest string that can be repeatedly used to EXACTLY construct both strings WITHOUT any leftovers.

var gcdOfStrings = function (str1, str2) {
    // how was I supposed to just know this
    if (str1 + str2 !== str2 + str1) return ""

    // I guess start with checking the first letter and expanding from there?
    let gcd = "";

    // check up until prefix no longer matches
    for (let i = 0; i <= Math.min(str1.length, str2.length); i++) {
        let prefix1 = str1.slice(0,i)
        let prefix2 = str2.slice(0,i)

        if (prefix1 === prefix2) {
            gcd = prefix1;
        };
    };

    // now that we have longest prefix, check divisible?
    if (str1.length % gcd.length === 0 && str2.length % gcd.length === 0) {
        // was checking here but that didn't make sense. hardest easy problem thanks leetcode I was feeling pretty shit about myself this really helped!
    } else {
        for (let i = gcd.length; i > 0; i--) {
            let newgcd = gcd.slice(0,i);
            if (str1.length % newgcd.length === 0 && str2.length % newgcd.length === 0) {
                gcd = newgcd;
                break
            }
        }
    }

    console.log(gcd)
    return gcd;
};



// inputs
const str1 = "ABCABC"
const str2 = "ABC" 
// gcdOfStrings(str1, str2) // output "ABC"

const str3 = "ABABAB"
const str4 = "ABAB"  
// gcdOfStrings(str3, str4) // output"AB"

const str5 = "LEET"
const str6 = "CODE"  
// gcdOfStrings(str5, str6) //output ""

const str7 = "AAAAAB"
const str8 = "AAA"
// gcdOfStrings(str7, str8) //output ""

// test case
const tc1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZQJXZKMPVYWTBAOHNRLIEGDSCUFABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
const tc2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZZYXWVUTSRQPONMLKJIHGFEDCBAABCDEFGHIJKLMNOPQRSTUVWXYZ"
// my incorrect output ABCDEFGHIJKLMNOPQRSTUVWXYZ
// gcdOfStrings(tc1, tc2) // expected output ""

const tc3 = "ABCABCABC"
const tc4 = "ABCAAA"
// my incorrect output ABC
gcdOfStrings(tc3, tc4) // expected output ""
