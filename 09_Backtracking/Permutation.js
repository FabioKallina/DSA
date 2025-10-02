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
            ans.push([...curr]);
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
 * Time: O(n^ 2 * n!)
 * Space: O(n * n!)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let backtrack = ( path ) => {
        if ( path.length === nums.length ) {
            ans.push([...path]);
            return;
        }
       for ( let i = 0; i < nums.length; i++ ) {
        if ( used[i] ) continue; //skip if "seen"
        
        used[i] = true;
        path.push(nums[i]);

        backtrack(path);

        used[i] = false;
        path.pop()
       }
    }
    const used = new Array(nums.length).fill(false);
    let ans = [];
    backtrack([]);
    return ans;
};
/** Time and Space Complexity
 * Time: O(n * n!) sligthly better because used checks at O(1) whereas .includes checks at O(n)
 * Space: O(n * n!)
 */