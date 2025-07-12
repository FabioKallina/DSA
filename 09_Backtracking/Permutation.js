/**
Given an array nums of distinct integers, return all the possible permutations in any order.
For example, given nums = [1, 2, 3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].
*/
/**
 * 
 * @param {number[]} nums
 * @returns {number[][]} 
 */
var permute = function(nums) {

    let backtrack = curr => {
        if ( curr.length == nums.length ) {
            async.push([...curr]);
            return;
        }
        for ( const num of nums ) {
            if ( !curr.includes(num) ) {
                curr.push(num);
                backtrack(curr);
                curr.pop();
            }
        }
    }
    let ans = [];
    backtrack([]);
    return ans;
}
/** Time and Space Complexity
 * Time: O(n^2 * n!)
 */