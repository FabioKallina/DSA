
/**
Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let dp = ( i ) => {
        if ( i === 0 ) return 1;

        if ( memo.has(i) ) return memo.get(i);

        let ans = 1;
        for ( let j = 0; j < i; j++ ) {
            if ( nums[i] > nums[j] ) {
                ans = Math.max(ans, dp(j) + 1);
            }
        }
        memo.set(i, ans);
        return memo.get(i);
    }
    let memo = new Map();
    let ans = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        ans = Math.max(ans, dp(i));
    }
    return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let n = nums.length;
    let dp = new Array(n).fill(1); //base case is at worst the longest subsequence will be 1
    for ( let i = 0; i < n; i++ ) {
        for ( let j = 0; j < i; j++ ) {
            if ( nums[i] > nums[j] ) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};