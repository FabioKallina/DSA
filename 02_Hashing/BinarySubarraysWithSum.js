
/**
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
A subarray is a contiguous part of the array.

Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:

Input: nums = [0,0,0,0,0], goal = 0
Output: 15
*/
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const count = new Map();
    count.set(0, 1);
    let sum = 0, total = 0;

    for ( let num of nums ) {
        sum += num;
        if ( count.has(sum - goal) ) {
            total += count.get(sum - goal);
        }
        count.set(sum, (count.get(sum) || 0) + 1);
    }
    return total;
};