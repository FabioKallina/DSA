
/**
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
The biker starts his trip on point 0 with altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 
for all (0 <= i < n). Return the highest altitude of a point.

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 */
/** Prefix Sum
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefix = [0, gain[0]];
    for ( let i = 1; i < gain.length; i++ ) {
        prefix.push(gain[i] + prefix[prefix.length - 1]);
    }
    let ans = -Infinity;
    for ( let i = 0; i < prefix.length; i++ ) {
        ans = Math.max(ans, prefix[i]);
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/** Prefix Sum
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let total = 0;
    for ( let i = 0; i < gain.length; i++ ) {
        total += gain[i];
        max = Math.max(ans, total);
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */