/**
Given the root of a binary tree, return the sum of values of its deepest leaves.

Example 1:

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
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
var deepestLeavesSum = function(root) {
    let queue = [root];
    let ans = 0;

    while ( queue.length ) {
        ans = 0; //we set it to 0 here because we only want the sum of the last level, so all of the levels before get reset to 0, and the last one gets the answer
        for ( let i = 0; i < queue.length; i++ ) {
            let node = queue.shift();
            ans += node.val;

            if ( node.left )
                queue.push(node.left);
            if ( node.right )
                queue.push(node.right );

        }
    }
    return ans;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if ( !root ) return 0;

    let q = [root];
    let ans = 0;

    while ( q.length ) {
        let level = q.length;
        let nextQ = [];
        let ans = 0; //reset at each level

        for ( let i = 0; i < level; i++ ) {
            let node = q[i];
            ans += node.val;
            if ( node.left ) nextQ.push(node.left);
            if ( node.right ) nextQ.push(node.right);
        }
        q = nextQ;
    }
    //at the very end, since ans was reset at every level, when loop breaks (last level) the remaining sum will be ans
    return ans;
};