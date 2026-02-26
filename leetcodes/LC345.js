// LC 345 - Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// this is a reverse string function with a twist?
var reverseVowels = function(s) {
    // making a vowels array to compare against including capital and not capital letters since this is case-sensitive
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];

    // lets split up the word into an array for easier navigation
    const sArr = s.split('');

    let i = 0; // setting our starting points, 0 (beginning of word/arr)
    let j = s.length - 1; // - 1 because we are traversing an array to 0 (end of word/arr)

    // Seriously what the fuck are the difficulty levels in leetcode (I was frustrated because I was using the wrong tools i.e. recursion & for loops)
    while (i < j) { // we need to independently control i and j, so we use a WHILE loop because WHILE lets us control both variables
        if (vowels.includes(s[i])) { // if we have a vowel at our string[i] position
            while (j > 0) { // start working through j to find it's match
                if (vowels.includes(s[j])) { // if we have a vowel at string[j] position
                    let char = sArr[i]; // save the i string
                    sArr[i] = sArr[j] // put the j string in the i string spot
                    sArr[j] = char // and put the saved string in the j string spot
                    j--; // then decrement j to keep working from where we left off
                    i++; // and increment i to keep working from where we left off
                    break;
                } else {
                    j--; // if we did not find a vowel, decrement j and try the next letter from the end until we find a vowel or hit our break point
                }
            }
        } else {
            i++ // similar to the j above case, increment and try the next letter from the start until we find a vowel or hit our break point
        }
        if (i === j) break; // if our left scan and right scan meet, it's over THIS IS UNNECESSARY BUT IT HELPS REAFFIRM OUR GOAL OF MEETING IN THE MIDDLE
    };

    return sArr.join('');
};

// Why I struggled on an easy problem: I tried to rediscover the two pointer pattern on my own having never seen it before.
// I need to study common pattern techniques and how to spot them. In this case, When we are talking about swapping (I hate that they use the word reverse instead of swap)
// we need to go from both sides to know what to swap i.e. first encounter on left vs first encounter on right etc.

// little refersher on recursive string reversal
// example: hello => s.subtring(1) = ello + s.charAt(0) = h
// but reverse calls before we add h so we do
// llo + e
// lo + l
// o + l
// "" return and unwind from here
// o + l + l + e + h

// Example 1:
const s = "IceCreAm"; 
// output: AceCreIm
// explanation:
// the vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes AceCreIm
console.log(reverseVowels(s))

// example 2:
const s2 = "leetcode";
// output: leotcede
// console.log(reverseVowels(s2))