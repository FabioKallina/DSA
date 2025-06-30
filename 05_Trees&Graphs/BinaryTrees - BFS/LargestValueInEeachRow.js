/**
Given the root of a binary tree, return an array of the largest value in each row of the tree.
 */
/**
 * 
 * @param {TreeNode} root
 * @returns {number[]} 
 */
var maxValInRow = function(root) {
    if (!root) return [];

    let queue = [root];
    let ans = [];

    while (queue.length) {
        let nodeInCurrentLevel = queue.length;
        let nextQueue = [];
        let currMax = -Infinity;

        for ( let i = 0; i < nodeInCurrentLevel; i++ ) {
            let node = queue[i];
            if ( node.left ) {
                nextQueue.push(node.left);
            }
            if ( node.right ) {
                nextQueue.push(node.right);
            }
        }
        ans.push(currMax);
        queue = nextQueue;
    }
    return ans;
}