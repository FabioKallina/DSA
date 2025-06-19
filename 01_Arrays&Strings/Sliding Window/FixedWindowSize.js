
/**
Given an integer array nums and an integer k, 
find the sum of the subarray with the largest sum whose length is k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findBestSubarray = function(nums, k) {
    let curr = 0;
    for ( let i = 0; i < k; i++ ) { //Build First Window
        curr += nums[i] //Total sum of the first window
    }

    let ans = curr; //let answer at first be the total sum of the first window
    for ( let i = k; i < nums.length; i++ ) { //slide the window
        curr += nums[i] - nums[i - k] //add the diffence between i and i - k as you slide the window
        ans = Math.max(ans, curr);
    }

    return ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */