/**
Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); //sort to be able to check for duplicates

    let backtrack = ( path, curr, start ) => {
        if ( curr === target ) {
            ans.push([...path]);
            return;
        }
        if ( curr > target ) return; //early exit
        
        for ( let i = start; i < candidates.length; i++ ) {
            let num = candidates[i];
            if ( i > start && candidates[i] === candidates[i - 1]) continue; //skip duplicates unless they exist in the array

            if ( curr + num <= target ) {
                path.push(num);
                backtrack(path, curr + num, i + 1);
                path.pop();
            }
        }
    }

    let ans = [];
    backtrack([], 0, 0);
    return ans;
};