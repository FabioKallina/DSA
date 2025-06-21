
/**
Given an array of integers nums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
Return the minimum positive value of startValue such that the step by step sum is never less than 1.
 */

/**
 * @param {number[]}
 * @return {number}
 */
var minStartValue = function(nums) {
    //Initialize a varible to keep track of the lowest sum value
    let minVal = 0;
    //Initialize a total sum variable 
    let total = 0;
    //Iterate through nums
    for ( let i = 0; i < nums.length; i++ ) {
        //calculate the total step by step
        total += nums[i];
        //take the lowest possible sum (this will be your determinant)
        minVal = Math.min(minVal, total);
    }
    //once you have your lowest possible sum
    //all you need to is make that step be = 1
    //so for ex minVal = -4 => 1 = a - 4 => a = 5
    return -minVal + 1;
}   
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */