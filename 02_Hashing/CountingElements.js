
/**
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

Example 2:

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.
 */
/**
 * 
 * @param {number[]} arr
 * @returns {number} 
 */
var countElements = function(arr) {
    let count = new Map();
    let ans = 0;
    //First pass to populate count
    for ( let num of arr ) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    //Second pass to check for num + 1
    for ( let num of arr ) {
        if ( count.has(num + 1) ) {
            ans++;
        }
    }
    return ans;
} 