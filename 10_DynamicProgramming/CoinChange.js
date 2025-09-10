
/**
You are given an integer array coins representing coins of different 
denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for ( let i = 1; i <= amount; i++ ) {
        for ( let coin of coins ) {
            if ( i - coin >= 0 ) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1: dp[amount];
};
/** Time and Space Complexity
 * Time: O(n * m) where n is copins.length and m is the amount
 * Space: O(m)
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = ( i ) => {
        if ( i === 0 ) return 0;
        if ( i < 0 ) return Infinity;

        if ( memo.has(i) ) return memo.get(i);

        let min = Infinity;
        for ( let c of coins ) {
            min = Math.min(min, dp(i - c) + 1);
        }
        memo.set(i, min);
        return min;
    }
    let memo = new Map();
    let ans = dp(amount);
    return ans === Infinity ? -1 : ans;
};