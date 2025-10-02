
/**
Given two integers n and k, return all combinations of k numbers out of the range [1, n] in any order.
For example, given n = 4, k = 2, return [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]].
*/
/**
 * 
 * @param {number} n 
 * @param {number} k
 * @returns {number[][]} 
 */
var combine = function(n, k) {
    let backtrack = (curr, i) => {
        if ( curr.length === k ) {
            ans.push([...curr]);
            return;
        }
        for ( num = i; num <= n; num++ ) {
            curr.push(num);
            backtrack(curr, i + 1);
            curr.pop();
        }
    }
    let ans = [];
    backtrack([], 1);
    return ans;
}
/** Time and Space Complexity
 * Time: O(k * n/k)
 * Space: O(k * n/k)
 */