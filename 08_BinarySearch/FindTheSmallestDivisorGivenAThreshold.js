
/**
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, 
divide all the array by it, and sum the division's result. 
Find the smallest divisor such that the result mentioned above is less than or equal to threshold.
Each result of the division is rounded to the nearest integer greater than or equal to that element. 
(For example: 7/3 = 3 and 10/2 = 5).
The test cases are generated so that there will be an answer.

Example 1:

Input: nums = [1,2,5,9], threshold = 6
Output: 5
Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).

Example 2:

Input: nums = [44,22,33,11,1], threshold = 5
Output: 44
*/
/**
 * 
 * @param {number[]} nums 
 * @param {number} threshold 
 * @returns {number}
 */
var smallestDivisor = function(nums, threshold) {
    let check = div => {
        let sum = 0;
        for ( const num of nums ) {
            sum += Math.ceil(num / div) //or Math.floor((num + div - 1) / div)
        }
    }

    let left = 0;
    let right = Math.max(...nums);
    while ( left <= right ) {
        let mid = Math.floor((left + right) / 2);
        if ( check(mid) <= threshold ) {
            left = mid - 1;
        } else {
            right = mid + 1;
        }
    }
    return left;
}
/** Time and Space Complexity
 * Time: O(n * logk) where n is for check, and logk for binary search
 * Space: O(1) no extra space used
 */