/**
Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

Example 1:

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

Example 2:

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
 */
/**
 * 
 * @param {number[]} nums 
 */
var largestUniqueNumber = function(nums) {
    let count = new Map();
    //Initialize ans to -1 for 2 reasons. 1. If nums is empty, return -1. 2. If there are only repeating numbers, return -1
    let ans = -1
    //frst pass to populate count
    for ( let num of nums ) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    //second pass for checking unique number
    for ( let num of nums ) {
        if ( count.get(num) === 1 ) {
            ans = Math.max(ans, num);
        }
    }
    return ans;
}
/** Time and Space Complexity:
 * Time: O(n)
 * Space: O(n)
 */