
/**
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for ( let i = 1; i < nums.length; i++ ) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */