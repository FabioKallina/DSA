
/**
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //initialize variable to track window
    let average = 0;
    //find the average value for the first window
    for ( let i = 0; i < k; i++ ) {
        average += nums[i] / k;
    }

    //Initialize ans first as the average value of the first window
    let ans = average;
    //Slide the window, but do it by finding the difference between i and i - k
    for ( let i = k; i < nums.length; i++ ) {
        average += (nums[i] - nums[i - k]) / k;
        ans = Math.max(ans, average); //Compare ans and average and take the higher value
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */