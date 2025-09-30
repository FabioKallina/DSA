
/**
Given an array of non-negative integers arr, you are initially positioned at start index of the array. 
When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.
Notice that you can not jump outside of the array at any time.

Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 

Example 2:

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3

Example 3:

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.
*/
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let q = [start];
    let seen = new Set();

    while ( q.length ) {
        let level = q.length;

        for ( let i = 0; i < level; i++ ) {
            let node = q.shift();
            if ( arr[node] === 0 ) return true;

            if ( node + arr[node] < arr.length ) {
                let nextNode = node + arr[node];
                if ( !seen.has(nextNode) ) {
                    seen.add(nextNode);
                    q.push(nextNode);
                }
            }
            if ( node - arr[node] >= 0 ) {
                let nextNode = node - arr[node];
                if ( !seen.has(nextNode) ) {
                    seen.add(nextNode);
                    q.push(nextNode);
                }
            }
        }
    }
    return false;
};
/** Time and Space Complexity
 * Time: O(n) you will at most visit each index once
 * Space: O(n) you will at most hold each index once
 */