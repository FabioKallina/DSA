
/**
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/** Iteratively
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if ( n <= 2 ) return n;
    let dp = new Array(n + 1).fill(0); //n + 1 bc if n = 2, then dp = [0, 0] instead of [0, 0, 0]
    dp[1] = 1; //[0, 1, 0]
    dp[2] = 2; //[0, 1, 2]

    for ( let i = 3; i <= n; i++ ) {
        dp[i] = dp[i - 1] + dp[i - 2]; //ex dp[3] = dp[3 - 1] + dp[3 - 2] => dp[2] + dp[1] => 2 + 1 => dp[3] = 3
                                      //ex dp[4] = dp[4 - 1] + dp[4 - 2] => dp[3] + dp[2] => 2 + 1 => dp[4] = 5
    }
    return dp[n];
};

var climbStairs = function(n) {
    
    let dp = ( i ) => {
        if ( i <= 2 ) return i;
        if ( memo.has(i) ) return memo.get(i);

        memo.set(i, dp(i - 1) + dp(i - 2));
        return memo.get(i);
    }
    let memo = new Map();
    return dp(n);
};