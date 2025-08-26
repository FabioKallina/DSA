
/**
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]

Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if ( !root ) return true;

    let leftDFS = (node, vals) => {
        if ( !node ) {
            vals.push(null);
            return;
        }

        leftDFS(node.left, vals);
        leftDFS(node.right, vals);
        vals.push(node.val);
    }

    let rightDFS = (node, vals) => {
        if ( !node ) {
            vals.push(null);
            return;
        }

        rightDFS(node.right, vals);
        rightDFS(node.left, vals);
        vals.push(node.val);
    }

    let leftVals = [];
    let rightVals = [];
    leftDFS(root.left, leftVals);
    rightDFS(root.right, rightVals);

    return JSON.stringify(leftVals) === JSON.stringify(rightVals);
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/** Better Solution
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if ( !root ) return true;
    let isMirror = (n1, n2) => {
        if ( !n1 && !n2 ) return true;
        if ( !n1 || !n2 ) return false;

        return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    }
    return isMirror(root.left, root.right);
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */