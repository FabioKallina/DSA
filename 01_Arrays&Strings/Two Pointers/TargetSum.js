
/**
Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. 
This problem is similar to Two Sum. (In Two Sum, the input is not sorted).
For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.
 */

/**
 * param {number[]} nums
 * param {number} target
 * return {boolean}
 */
var checkForTarget = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while ( l < r ) {
        let sum = nums[l] + nums[r]
        if ( sum === target ) {
            return true
        }

        if ( sum > target ) {
            r--;
        } else {
            l++;
        }
    }
    return false;
}
/** Time and Space Complexity:
 * Time: O(n)
 * Space: O(1)
 */