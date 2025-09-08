
/**
Given an integer array nums, 
return all the different possible non-decreasing subsequences of the given array with at least two elements. 
You may return the answer in any order.

Example 1:

Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

Example 2:

Input: nums = [4,4,3,2,1]
Output: [[4,4]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    
    let backtrack = ( path, start ) => {
        if ( path.length > 1 ) {
            ans.push([...path]);
        }

        let used = new Set();
        for ( let i = start; i < nums.length; i++ ) {
            if ( used.has(nums[i]) ) continue;
            used.add(nums[i]);

            if ( path.length === 0 || nums[i] > path[path.length - 1] ) {
                path.push(nums[i]);
                backtrack(path, i + 1);
                path.pop();
            }
        }
    }
    let ans = [];
    backtrack([], 0);
    return ans;
};