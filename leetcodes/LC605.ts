function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // need to place flowers at location n and see if it's adjacent
    // initial thought is just place at every positoin so lets start there

    if (n <= 0 ) return true // kill it early if n = 0
    // loop through our bed
    for (let i: number = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue; // if we have a flower skip

        // check if there is a flower before and after (0 and undefined will return false)
        const fullBefore: boolean = flowerbed[i - 1] === 1
        const fullAfter: boolean = flowerbed[i + 1] === 1

        // check we don't have before or after
        if (!fullBefore && !fullAfter) {
            flowerbed[i] = 1; // plant
            n -= 1 // subtract
        };

        if (n <= 0) return true; // check if we hit 0
    };

    return false // if we get here, it's over
};