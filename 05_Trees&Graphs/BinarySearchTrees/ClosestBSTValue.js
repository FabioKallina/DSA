
/**
Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. 
If there are multiple answers, print the smallest.

Example 1:

Input: root = [4,2,5,1,3], target = 3.714286
Output: 4

Example 2:

Input: root = [1], target = 4.428571
Output: 1
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = root.val;

    while ( root ) {
        if ( Math.abs(root.val - target) < Math.abs(closest - target) || (Math.abs(root.val - target) === Math.abs(closest - target) && root.val < closest)) {
            closest = root.val;
        }
        if ( target < root.val ) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return closest;
};