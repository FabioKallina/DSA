
/**
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map();
    for ( let num of nums ) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let total = 0;
    for ( let key of map.keys() ) {
        if ( map.get(key) === 1 ) {
            total += key;
        }
    }
    return key;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */