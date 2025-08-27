
/**
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:

Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if ( !root ) return [];

    let q = [root];
    let maxSum = -Infinity;
    let maxLevel= 1;
    let currLevel = 1;

    while ( q.length ) {
        let level = q.length;
        let curr = 0;

        for ( let i = 0; i < level; i++ ) {
            const node = q.shift();
            curr += node.val;

            if ( node.left ) q.push(node.left);
            if ( node.right ) q.push(node.right);
        }
        if ( curr > maxSum ) {
            maxSum = curr;
            maxLevel = currLevel;
        }
        currLevel++;
    }
    return maxLevel;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(w)
 */