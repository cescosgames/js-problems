function canConstruct(ransomNote: string, magazine: string): boolean {
    const noteLetters: Record<string, number> = {};
    const magazineLetters: Record<string, number> = {};
    let canMakeNote: boolean = true;

    // track how many letters we need
    for (let i: number = 0; i < ransomNote.length; i++) {
        if (ransomNote[i] in noteLetters) {
            noteLetters[ransomNote[i]] += 1;
        } else {
            noteLetters[ransomNote[i]] = 1;
        };
    };

    // same as above
    for (let i: number = 0; i < magazine.length; i++) {
        if (magazine[i] in magazineLetters) {
            magazineLetters[magazine[i]] += 1;
        } else {
            magazineLetters[magazine[i]] = 1;
        };
    };

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