/**
Given an array of positive integers nums and an integer k. Find the number of subarrays with exactly k odd numbers in them.
For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2. The subarrays with 3 odd numbers in them are [1, 2, 1, 1] and [1, 1, 2, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} key
 * @returns {number}
 */
var numberOfSubarrays = function(nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;
    for (const num of nums) {
        curr += num % 2;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1)
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space:O(n)
 */