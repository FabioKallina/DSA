
/**
Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, zeroCount = 0, ans = 0;

    //Iterate through nums
    for ( let right = 0; right < nums.length; i++ ) {
        if ( nums[i] === 0 ) {
            zeroCount++;
        }
        while ( zeroCount > k ) {
            if ( nums[left] === 0 ) {
                zeroCount--;
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans;
}