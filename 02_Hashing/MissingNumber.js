/**
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2

Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2

Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

//Sorting
/**
 * @param {number[]} nums
 * @returns {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    if ( nums[0] !== 0 ) {
        return 0;
    }
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i + 1] !== nums[i] + 1 ) {
            return nums[i] + 1;
        }
    }
    return 0;
}
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(1)
 */
//Set
/**
 * @param {number[]} nums
 * @returns {number}
 */
var missingNumber = function(nums) {
    let numSet = new Set(nums);
    let n = nums.length + 1;
    for ( let i = 0; i < n; i++ ) {
        if ( !numSet.has(i) ) {
            return i;
        }
    }
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */