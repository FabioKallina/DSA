
/**
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]
]

Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let used = Array(nums.length).fill(false);

    let backtrack = ( path, used ) => {
        if ( path.length === nums.length ) {
            ans.push([...path]);
            return;
        }

        for ( let i = 0; i < nums.length; i++ ) {
            if ( used[i] ) continue;
            if ( i > 0 && nums[i] === nums[i - 1] && !used[i] ) continue;

            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    let ans = [];
    backtrack([], used);
    return ans;
};