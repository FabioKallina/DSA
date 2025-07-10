
/**
Given an integer array nums and an integer k, 
split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
Return the minimized largest sum of the split.
A subarray is a contiguous part of the array.

Example 1:

Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

Example 2:

Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
*/
/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0); //sum of nums

    const canSplit = maxSum => {
        let sum = 0;
        let pieces = 1;
        for ( let num of nums ) {
            if ( sum + num > maxSum ) {
                sum = num;
                pieces++;
            } else {
                sum += num;
            }
        }
        return pieces <= k;
    }

    while ( low < high ) {
        let mid = Math.floor((low + high) / 2);
        if ( canSplit(mid) ) {
            high = mid; //try smalled sum
        } else {
            low = mid + 1; //need larger max sum
        }
    } 
    return low;
}