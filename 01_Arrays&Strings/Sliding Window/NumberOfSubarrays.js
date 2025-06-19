
/**
Given an array of positive integers nums and an integer k, 
return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. 
The subarrays with products less than k are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if ( k <= 1 ) {
        return 0;
    }

    let left = 0, curr = 1, ans = 0;

    for ( let right = 0; right < nums.length; right++ ) {
        curr *= nums[right];
        
        while ( curr > k ) {
            curr /= nums[left];
            left++;
        }

        ans += right - left + 1;
    }
    return ans;
}
/** Time and Space Coplexity
 * Time: O(n)
 * Space: O(1)
 */