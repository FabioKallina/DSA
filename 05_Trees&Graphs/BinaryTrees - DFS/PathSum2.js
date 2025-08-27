
/**
Given the root of a binary tree and an integer targetSum, 
return all root-to-leaf paths where the sum of the node values in the path equals targetSum. 
Each path should be returned as a list of the node values, not node references.
A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

Example 1:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

Example 2:

Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:

Input: root = [1,2], targetSum = 0
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
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ans = [];
    let dfs = (node, curr, arr) => {
        if ( !node ) return;

        curr += node.val;
        arr.push(node.val);

        if ( !node.left && !node.right ) {
            if ( curr === targetSum ) {
                ans.push([...arr]);
            }
        }

        dfs(node.left, curr, arr);
        dfs(node.right, curr, arr);

        arr.pop();
    }
    dfs(root, 0, []);
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(h)
 */