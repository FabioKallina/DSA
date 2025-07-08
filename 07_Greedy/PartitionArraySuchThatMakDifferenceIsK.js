
/**
Given an integer array nums and an integer k, split nums into subsequences, where each subsequences' maximum and minimum element is within k of each other. 
What is the minimum number of subsequences needed?
For example, given nums = [3, 6, 1, 2, 5] and k = 2, the answer is 2. The subsequences are [3, 1, 2] and [6, 5].
*/
/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
var maxDiffK = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 1;
    let x = nums[0];
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] - x > k) {
            x = nums[i];
            ans++;
        }
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(logn)
 */