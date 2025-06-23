/**
Given a 2D array nums that contains n arrays of distinct integers, return a sorted array containing all the numbers that appear in all n arrays.
For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4]. 3 and 4 are the only numbers that are in all arrays.
*/

/**
 * @param {number[][]} nums
 * @returns {number[]}
 */
var intersection = function(nums) {
    let counts = new Map();
    for ( const arr of nums ) {
        for ( const x of arr ) {
            counts.set(x, (counts.get(x) || 0) + 1)
        } 
    }

    let n = nums.length
    let ans = [];
    for ( const [key, val] of counts ) {
        if ( val === n ) {
            ans.push(key);
        }
    }
    return ans.sort((a, b) => a - b);
}
/** Time and Space Complexity
 * Time: O(m * (n + logn))
 * Space:O(m * n)
 */