/**
Given an array of integers nums, find the maximum value of nums[i] + nums[j], 
where nums[i] and nums[j] have the same digit sum (the sum of their individual digits). 
Return -1 if there is no pair of numbers with the same digit sum.

In this problem, we can identify a group by its digit sum. We iterate through the array and group all the numbers with the same digit sum together in a hash map. 
Then we can iterate over that hash map and for each group with at least 2 elements, find the 2 max elements by sorting.
 */
/**
 * @param {number[]} nums
 * @returns {number}
 */
var maxSum = function(nums) {
    
}