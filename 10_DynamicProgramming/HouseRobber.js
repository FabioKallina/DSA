
/**
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected 
and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/
/** Recursively
 * @param {number[]} nums
 * @returns {number}
 */
var rob = function(nums) {
    let dp = i => {
        //Base cases
        //If there's only one house
        if ( i == 0 ) return nums[0];
        //If there's only 2 houses, rob the one with most money
        if ( i == 1 ) {
        return Math.max(nums[0], nums[1]);
        }
        if ( memo[i] != -1 ) {
            return memo[i];
        }
        //Recurrence relation
        memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
        return memo[i];
    }
    let memo = new Array(nums.length).fill(-1);
    return dp(nums.length - 1);
}

/** Recursively 2
 * @param {number[]} nums
 * @returns {number}
 */
var rob = function(nums) {
    let dp = ( i ) => {
        if ( i === 0 ) return nums[0];
        if ( i === 1 ) return Math.max(nums[0], nums[1]);

        if ( memo.has(i) ) return memo.get(i);

        let maxVal = Math.max(dp(i - 1), dp(i - 1) + nums[i]);
        memo.set(i, maxVal);

        return memo.get(i);
    }
    let memo = new Map();
    return dp(nums.length - 1);
}

/** Iteratively
 * @param {number[]} nums
 * @returns {number}
 */
var rob = function(nums) {
    if ( nums.length == 1 ) {
        //to prevent out of bounds error
        return nums[0];
    }
    let n = nums.length;
    let dp = new Array(n).fill(0);
    //Base cases
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for ( let i = 2; i < n; i++ ) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[n - 1];
}