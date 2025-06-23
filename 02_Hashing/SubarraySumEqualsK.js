/**
Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.

Example:
Input: nums = [1, 2, 1, 2, 1], k = 3
Output: 4
Explanation: [1, 2], [2, 1], [1, 2], and [2, 1] all sum to 3
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
var subarrayEqualToK = function(nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;
    for ( const num of nums ) {
        curr += num;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1)
    }
    return ans;
}
/** Time and Space Complexity
 * Time: o(n)
 * Space:O(n)
 */