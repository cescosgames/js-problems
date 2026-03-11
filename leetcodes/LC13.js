// LC 13 - Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// 	I can be placed before V (5) and X (10) to make 4 and 9. 
// 	X can be placed before L (50) and C (100) to make 40 and 90. 
// 	C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// idea, have a dictionary storing all values of all possible roman numerals
// then, track how many we encounter when iterating over our roman numeral
// the only trick is subtractive(?) roman numerals, but those only have 6 cases and all feature a big number preceded by a smaller number
// generally, romnums go right to left, biggest to smallest. if we have a smaller before a bigger it is because we are subtracting
// so lump those 2 together, store em in the dict, and continue iterating
var romanToInt = function(s) {
    // store the numbers as dictionary
    const store = {};
    const romanNums = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000, "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900};

    // iterate, remembering that roman numerals are written increasing forward, so if a smaller number is before a bigger, we are subtracting
    for (let i = 0; i < s.length; i++) {
        const currVal = romanNums[s[i]];
        const nextVal = romanNums[s[i+1]];

        if(currVal < nextVal) {
            const romNum = s[i] + s[i+1];
            if (store[romNum]) {
                store[romNum] += 1;
            } else {
                store[romNum] = 1;
            }
            i++;
        } else {
            if (store[s[i]]) {
                store[s[i]] += 1;
            } else {
                store[s[i]] = 1;
            }
        }
    };
    
    let total = 0;
    // at this point we have our dictionary with values, just need to translate to real nums
    Object.keys(store).forEach(key => {
        const val = romanNums[key] * store[key];
        total += val;
    });

    return total;
};

// after reviewing, this works, but I could have just calculated total while iterating instead of creating a store.


// Example 1:
const s = "III";
// Output: 3
// Explanation: III = 3.

// Example 2:
const s2 = "LVIII";
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


// Example 3:
const s3 = "MCMXCIV";
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// personal test
const pt = "IV"
// Output: 4

console.log(romanToInt(s));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
console.log(romanToInt(pt));

// Constraints:
// 
// 	1 <= s.length <= 15
// 	s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// 	It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// Examples:
// "III"
// "LVIII"
// "MCMXCIV"

