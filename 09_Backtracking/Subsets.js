
/**
Given an integer array nums of unique elements, return all subsets in any order without duplicates.

For example, given nums = [1, 2, 3], return [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
/**
 * 
 * @param {number[]} nums
 * @returns {numbre[][]} 
 */
var subsets = function(nums) {
    let backtrack = (curr, i) => {
        if ( i > nums.length ) {
            return;
        }
        ans.push([...curr]);
        for ( let j = i; j < nums.length; j++ ) {
            curr.push([nums[j]]);
            backtrack(curr, j + 1);
            curr.pop();
        }
    }
    let ans = [];
    backtrack([], 0);
    return ans;
}
/** Time and Space Complexity
 * Time: O(n * 2^n) becuase for each element you have 2 choices: include it or skip it (2^n), and then O(n) to copy it into ans
 * Space: O(n * 2^n)
 */