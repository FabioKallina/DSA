/**
Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.
If a valid number x appears multiple times, you only need to include it in the answer once.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findNumbers = function(nums) {
    let ans = [];
    let numSet = new Set(nums);

    for ( const num of numSet ) {
        if ( !numSet.has(num + 1) && !numSet.has(num - 1) ) {
            ans.push(num);
        }
    }

    return ans;
}