// LC 605 - Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function(flowerbed, n) {
    // need to place flowers at location n and see if it's adjacent
    // initial thought is just place at every positoin so lets start there

    if (n <= 0 )return true // kill it early if n = 0
    // loop through our bed
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue; // if we have a flower skip

        // check if there is a flower before and after (0 and undefined will return false)
        const fullBefore = flowerbed[i - 1] === 1
        const fullAfter = flowerbed[i + 1] === 1

        // check we don't have before or after
        if (!fullBefore && !fullAfter) {
            flowerbed[i] = 1; // plant
            n -= 1 // subtract
        };

        if (n <= 0) return true; // check if we hit 0
    };

    return false // if we get here, it's over
};

// Example 1:
const flowerbed = [1,0,0,0,1];
const n = 1;
// Output: true
// console.log(canPlaceFlowers(flowerbed, n))

// Example 2:
const flowerbed2 = [1,0,0,0,1]
const n2 = 2
// Output: false
// console.log(canPlaceFlowers(flowerbed2, n2))

// test case:
const flowerbed3 = [1,0,1,0,1,0,1];
const n3 = 1
// console.log(canPlaceFlowers(flowerbed3, n3))

// test case 2:
const flowerbed4 = [0,0,1,0,1]
const n4 = 1
// console.log(canPlaceFlowers(flowerbed4, n4))

// test case 3:
const flowerbed5 = [1,0,0,0,1,0,0]
const n5 = 2
console.log(canPlaceFlowers(flowerbed5, n5))
