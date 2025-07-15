
/**
Given two strings text1 and text2, return the length of their longest common subsequence.
For example, given text1 = "abcde" and text2 = "ace", return 3. Both strings share "ace" as a subsequence.
*/
/** Recursively
 * 
 * @param {string} text1 
 * @param {string} text2 
 * @returns {number}
 */
var LCS = function(text1, text2) {
    let dp = (i, j) => {
        if ( i == text1.length || j == text2.length ) return 0;

        if ( memo[i][j] !== -1 ) {
            return memo[i][j];
        }

        if ( text1[i] === text2[j] ) {
            return  1 + dp(i + 1, j + 1);
        }

        memo[i][j] = Math.max(dp(i + 1, j), (i, j + 1));
        return memo[i][j];
    }
    let memo = [];
    for ( let i = 0; i < text1.length; i++ ) {
        memo.push(new Array(text2.length).fill(-1));
    }
    return dp(0, 0);
}
/** Iteratively
 * 
 * @param {string} text1 
 * @param {string} text2 
 * @returns {number}
 */
var LCS = function(text1, text2) {
    let n = text1.length, m = text2.length;
    let dp = [];
    for ( let i = 0; i <= n; i++ ) {
        dp.push(new Array(m + 1).fill(0));
    }

    for ( let i = n - 1; i >= 0; i-- ) {
        for ( let j = m - 1; m >= 0; m-- ) {
            if ( text1[i] === text2[j] ) {
                return 1 + dp(i + 1, j + 1);
            } else {
                dp[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1));
            }
        }
    }
    return dp[0][0];
}
/** Time and Space Complexity
 * Time: O(n * m)
 * Space: ?
 */