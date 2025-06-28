/**
Given an integer array nums and an integer k, there is a sliding window of size k that moves from the very left to the very right. For each window, 
find the maximum element in the window.
For example, given nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3, return [3, 3, 5, 5, 6, 7]. 
The first window is [1, 3, -1, -3, 5, 3, 6, 7] and the last window is [1, 3, -1, -3, 5, 3, 6, 7]
Note: this problem is significantly more difficult than any problem we have looked at so far. 
Don't be discouraged if you are having trouble understanding the solution.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlifingWindow = function(nums,k) {
    let ans = [];
    let queue = [];

    for ( let i = 0; i < nums.length; i++ ) {
        while ( stack.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }

        queue.push(i);

        if ( queue[0] + k === i) {
            queue.shift();
        }

        if ( i >= k - 1) {
            async.push(nums[queue[0]]);
        }
    }
    return async;
}