
/**
You are given an integer array nums of length n, and an integer array queries of length m.
Return an array answer of length m where answer[i] is the maximum size of a subsequence 
that you can take from nums such that the sum of its elements is less than or equal to queries[i].
A subsequence is an array that can be derived from another array by deleting some or no elements without 
changing the order of the remaining elements.

Example 1:

Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, 
so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, 
so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, 
so answer[2] = 4.

Example 2:

Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.
*/
/** Binary Search
 * 
 * @param {number[]} nums 
 * @param {number[]} queries 
 * @returns {number[]}
 */
var answerQueries = function(nums, queries) {
    //Step 1: Sort //ex: [4, 5, 2, 1]
    nums.sort((a, b) => a - b); //[1, 2, 4, 5]
    let prefix = [0]; 
    //Step 2: build prefix sum
    for ( let num of nums ) {
        prefix.push(prefix[prefix.length - 1] + num); //0 + 1 => [0, 1], 1 + 2 => [0, 1, 3], 3 + 4 => [0, 1, 3, 7], 7 + 5 => [0, 1, 3, 7, 12]
    }
    let res = [];

    //Step 3: Binary Search for each query
    for ( let q of queries ) {
        let l = 0, r = prefix.length - 1;

        while ( l <= r ) {
            let mid = Math.floor((l + r) / 2);
            if (prefix[mid] <= q) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        res.push(r); //right is the largest index where sum <= q
    }
    return res;
}
/** Time and Space Complexity
 * Time: O(Nlogn + Mlogn)
 * Time: O(n)
 */
/** Other
 * 
 * @param {number[]} nums 
 * @param {number[]} queries 
 * @returns {number[]}
 */
var answerQueries = function(nums, queries) {
    const ans = [];
    let sum = 0;
    let check = 0;
    nums.sort((a, b) => a - b);
    for ( let i = 0; i < queries.length; i++ ) {
        sum = 0, check = 0;
        for ( let j = 0; j < nums.length; j++ ) {
            sum += nums[j];
            if ( sum <= queries[i] ) check++;
            else break;
        }
        ans.push(check);
    }
    return ans;
}