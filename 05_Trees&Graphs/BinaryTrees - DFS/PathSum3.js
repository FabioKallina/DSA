
/**
Given the root of a binary tree and an integer targetSum, 
return the number of paths where the sum of the values along the path equals targetSum.
The path does not need to start or end at the root or a leaf, but it must go downwards 
(i.e., traveling only from parent nodes to child nodes).

Example 1:

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const prefixSums = new Map();
    prefixSums.set(0, 1);

    const dfs = (node, currSum) => {
        if ( !node ) return 0;

        currSum += node.val;
        let count = prefixSums.get(currSum - targetSum) || 0;

        prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1);
        count += dfs(node.left, currSum);
        count += dfs(node.right, currSum);
        prefixSums.set(currSum, prefixSums.get(currSum) - 1);

        return count;
    }
    return dfs(root, 0);
};

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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    let prefixCount = { 0: 1 }
    let dfs = (node, curr) => {
        if ( !node ) return;
    curr += node.val;
    let diff = curr - targetSum;

    if ( diff in prefixCount ) count += prefixCount[diff];

    prefixCount[curr] = (prefixCount[curr] || 0) + 1;

    dfs(node.left, curr);
    dfs(node.right, curr);

    prefixCount[curr] = prefixCount[curr] - 1;
        
    }
    dfs(root, 0);
    return count;
};