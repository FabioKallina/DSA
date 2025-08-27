
/**
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** My Solution
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if ( !root ) return [];

    let q = [root];
    let ans = [];

    while ( q.length ) {
        let level = q.length;
        let nextQ = [];
        let order = [];

        for ( let i = 0; i < level; i++ ) {
            let node = q[i];

            if ( !node ) return;

            order.push(node.val);

            if ( node.left ) nextQ.push(node.left);
            if ( node.right ) nextQ.push(node.right);

        }
        ans.push(order);
        q = nextQ;
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** My Solution (Better)
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if ( !root ) return [];

    let q = [root];
    let ans = [];

    while ( q.length ) {
        let level = q.length;
        let order = [];

        for ( let i = 0; i < level; i++ ) {
            const node = q.shift();

            if ( !node ) return;

            order.push(node.val);

            if ( node.left ) q.push(node.left);
            if ( node.right ) q.push(node.right);

        }
        ans.push(order);
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */
/** Shift would be worse but since tree branches grow logarithmically, so shift() doesnt denominate runtime */