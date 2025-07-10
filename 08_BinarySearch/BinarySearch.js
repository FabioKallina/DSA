
/**
You are given an array of integers nums which is sorted in ascending order, and an integer target. 
If target exists in nums, return its index. Otherwise, return -1.
*/
/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @returns {number} 
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while ( left <= right ) {
        let mid = Math.floor((left + right) / 2);
        if ( nums[mid] === target ) {
            return mid;
        }
        if ( nums[mid] > target ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
/** Time and Space Complexity
 * Time: O(logn) log n because the input will be halved at each iteration
 * Space: O(1)
 */