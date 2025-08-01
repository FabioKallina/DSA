/**
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:

Input: root = [1,2]
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
 * 
 * @param {TreeNode} root 
 * @returns {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    let diameter = 0;

    let findDiameter = (node) => {
        if (!node) return -1;

        let leftPath = findDiameter(node.left);
        let rightPath = findDiameter(node.right);

        diameter = Math.max(diameter, leftPath + rightPath + 2);

        return Math.max(leftPath, rightPath) + 1;
    }
    findDiameter(root);
    return diameter;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */