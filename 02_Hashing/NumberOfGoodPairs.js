
/**
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let freq = new Map();
    for ( let num of nums ) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let ans = 0;
    for ( let val of freq.values() ) {
        ans += (val * (val - 1) / 2);
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */