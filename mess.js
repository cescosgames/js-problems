// LC 1570 - Final Prices With a Special Discount in a Shop

// You are given an integer array prices where prices[i] is the price of the ith item in a shop.
// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] 
// where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.
// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

// intuition: j is greater than i (the literal number) and the price of j is less than the price of i
var finalPrices = function(prices) {
    const intArr = [];

    // loop through each item
    for (let i = 0; i < prices.length; i++) {
        // for each item, loop through the next items
        let currPrice = prices[i];

        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= currPrice) {
                currPrice = currPrice - prices[j];
                break
            }
        };

        intArr.push(currPrice);
    };

    return intArr;
};

// Example 1:
const prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]

// Example 2:
const prices_2 = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.

// Example 3:
const prices_3 = [10,1,1,6]
// Output: [9,0,1,6]

console.log(finalPrices(prices));
console.log(finalPrices(prices_2));
console.log(finalPrices(prices_3));