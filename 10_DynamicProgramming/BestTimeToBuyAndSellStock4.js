
/**
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
You can buy the stock and sell it, but you can only hold on to one unit of stock at any given time. 
Find the maximum profit you can achieve with at most k transactions.
*/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let dp = (i, holding, remain) => {
        if (i == prices.length || remain == 0) {
            return 0;
        }
        
        if (memo[i][holding][remain] != -1) {
            return memo[i][holding][remain];
        }
        
        let ans = dp(i + 1, holding, remain);
        if (holding) {
            ans = Math.max(ans, prices[i] + dp(i + 1, 0, remain - 1));
        } else {
            ans = Math.max(ans, -prices[i] + dp(i + 1, 1, remain));
        }
        
        memo[i][holding][remain] = ans;
        return ans;
    }
    
    let memo = [];
    for (let i = 0; i < prices.length; i++) {
        memo.push([]);
        for (let j = 0; j < 2; j++) {
            memo[i].push(new Array(k + 1).fill(-1));
        }
    }
    
    return dp(0, 0, k);
};
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push([]);
        for (let j = 0; j < 2; j++) {
            dp[i].push(new Array(k + 1).fill(0));
        }
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let remain = 1; remain <= k; remain++) {
            for (let holding = 0; holding < 2; holding++) {
                let ans = dp[i + 1][holding][remain];
                if (holding == 1) {
                    ans = Math.max(ans, prices[i] + dp[i + 1][0][remain - 1]);
                } else {
                    ans = Math.max(ans, -prices[i] + dp[i + 1][1][remain]);
                }
                
                dp[i][holding][remain] = ans;
            }
        }
    }
    
    return dp[0][0][k];
};