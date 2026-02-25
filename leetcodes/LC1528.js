// LC 1528 - Kids With the Greatest Number of Candies

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, 
// and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
// they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.


var kidsWithCandies = function(candies, extraCandies) {
    // remember: kids are not keeping the extra candies, they are being compared to the original amount!
    // so first find the max amount
    const max = Math.max(...candies); 

    // our bool array to return
    const boolArr = [];

    // now iterate our kids
    for (let i = 0; i < candies.length; i++) {
        boolArr.push((candies[i] + extraCandies) >= max ? true : false)
    }

    // and return our arr
    return boolArr;
};



// Example 1:
const candies1 = [2,3,5,1,3]
const extraCandies1 = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

console.log(kidsWithCandies(candies1, extraCandies1));

// Example 2:
const candies2 = [4,2,1,1,2]
const extraCandies2 = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

console.log(kidsWithCandies(candies2, extraCandies2));

// Example 3:
const candies3 = [12,1,12]
const extraCandies3 = 10
// Output: [true,false,true]

console.log(kidsWithCandies(candies3, extraCandies3));
