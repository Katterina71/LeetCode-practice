// ## 122
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

//Should iterate through the prices array and sum up all the positive differences between consecutive days. This will effectively capture the maximum profit that can be achieved by buying and selling on each day.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // If the price has increased from the previous day, add the difference to maxProfit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));  // Output: 7

const prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices2)); // Output: 4

const prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3)); // Output: 0
