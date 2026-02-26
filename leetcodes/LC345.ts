function reverseVowels(s: string): string {
    const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // lets split up the word into an array for easier navigation
    const sArr: Array<string> = s.split('');

    let i: number = 0; // setting our starting points, 0 (beginning of word/arr)
    let j: number = s.length - 1; // - 1 because we are traversing an array to 0 (end of word/arr)

    // Seriously what the fuck are the difficulty levels in leetcode (I was frustrated because I was using the wrong tools i.e. recursion & for loops)
    while (i < j) { // we need to independently control i and j, so we use a WHILE loop because WHILE lets us control both variables
        if (vowels.includes(s[i])) { // if we have a vowel at our string[i] position
            while (j > 0) { // start working through j to find it's match
                if (vowels.includes(s[j])) { // if we have a vowel at string[j] position
                    let char: string = sArr[i]; // save the i string
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