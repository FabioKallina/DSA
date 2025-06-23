
/**
Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for ( let i = 0; i < nums.length; i++ ) {
        let diff = target - nums[i];
        if ( map.has(diff) ) {
            return [i, map.get(diff)];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */