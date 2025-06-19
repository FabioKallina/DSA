
/**
Given an array of positive integers nums and an integer k, 
find the length of the longest subarray whose sum is less than or equal to k.
nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] and k = 8
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLength = function(nums, k) {
    let left = 0, sum = 0, ans = 0;

    for ( let right = 0; right < nums.length; right++ ) {
        sum += nums[right]
        while ( sum > k ) {
            sum -= nums[left]
            left++;
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */


/**
You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". 
What is the length of the longest substring achievable that contains only "1"?

For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.
 */
/**
 * @param {string} s 
 * @return {number}
 */
var findLength = function(s) {
    let left = 0, zeroCount = 0, ans = 0;

    for ( let right = 0; right < s.length; right++ ) {
        if ( s[right] === "0" ) {
            zeroCount++;
        }
        while ( zeroCount > 1 ) {
            if ( s[left] === "0" ) {
                zeroCount -= 1
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */