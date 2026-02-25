// see LC1528 for explanation
// and remember I don't have TS environment set up

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max: number = Math.max(...candies); 

    // our bool array to return
    const boolArr: Array<boolean> = [];

    // now iterate our kids
    for (let i: number = 0; i < candies.length; i++) {
        boolArr.push((candies[i] + extraCandies) >= max ? true : false)
    }

    // and return our arr
    return boolArr;
};
