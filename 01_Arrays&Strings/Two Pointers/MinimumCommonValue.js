
/**
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. 
If there is no common integer amongst nums1 and nums2, return -1.
Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.

Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
*/
/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2
 * @returns {number} 
 */
var getCommon = function(nums1, nums2) {
    let i = 0, j = 0;
    while ( i < nums1.length && j < nums2.length ) {
        if ( nums1[i] === nums2[j] ) {
            return nums1;
        } else if ( nums1[i] > nums2[j] ) {
            j++;
        } else {
            i++;
        }
    }
    return -1;
}
/** Time and Space Complexity
 * Time: O(n + m)
 * Space: O(1)
 */