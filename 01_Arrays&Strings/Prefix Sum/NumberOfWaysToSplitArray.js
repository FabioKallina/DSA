
/**
Given an integer array nums, 
find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum 
of the second section. The second section should have at least one number.

Example 1:
Input: nums [10, 4, -8, 7]
Output: 2
Explanation:
The prefix sum of nums would be [10, 14, 6, 13]
Take the first subarray [10]: is 10 >= the sum of the [4, -8, 7]?
We do this by taking the prefix sum of [10] = 10, and the prefix sum of [4, -8, 7] = 3
We achieve this by doing 13 - 10 = and compare if 10 > 3
 */
/**
 * @param {number[]}
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = [nums[0]];
    for ( let i = 1; i < nums.length; i++ ) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    let ans = 0;
    for ( let i = 0; i < nums.length - 1; i++ ) {
        let leftSection = prefix[i];
        let rightSection = prefix[nums.length - 1] - prefix[i];
        if ( leftSection >= rightSection ) {
            ans++;
        }
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

//Another way of doing it
/**
 * @param {number[]}
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let leftSection = 0, ans = 0, total = 0;
    for ( const num of nums ) {
        total += num;
    }

    for ( let i = 0; i < nums.length - 1; i++ ) {
        leftSection += nums[i];
        let rightSection = total - leftSection;
        if ( leftSection >= rightSection ) {
            ans++;
        }
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */