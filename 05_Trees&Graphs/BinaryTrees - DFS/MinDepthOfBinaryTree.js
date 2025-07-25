/**
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/
/**
 * 
 * @param {TreeNode} root 
 * @returns {number}
 */
var minDepth = function(root) {
    if ( root == null ) return 0;

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    //check to see if a subtree might be empty
    //if you dont and it's null, then return min is gonna return 0 even though one path may be present
    if ( root.left == null || root.right == null ) {
        return left + right + 1;
    }

    return Math.min(left, right) + 1;
}