
/**
Given an array of distinct positive integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.
*/
/**
 * 
 * @param {number[]} canditates 
 * @param {number} target 
 * @returns {number[][]}
 */
var combinationSum = function(canditates, target) {
    let backtrack = (path, start, curr) => {
        if (curr === target) {
            ans.push([...path]);
            return
        }
        for ( let i = start; i < canditates.length; i++ ) {
            let num = canditates[i];
            if ( curr + num <= target ) {
                path.push(num);
                backtrack(path, i, curr + num);
                path.pop();
            }
        }
    }
    let ans = [];
    backtrack([], 0, 0);
    return ans;
}