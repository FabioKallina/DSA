/**
Given the root of a binary tree, return an array of the largest value in each row of the tree.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if ( !root ) return [];

    let ans = [];
    let q = [root];
    
    while ( q.length ) {
        let level = q.length;
        let max = -Infinity;
        let nextQ = [];

        for ( let i = 0; i < level; i++ ) {
            let node = q[i];
            max = Math.max(max, node.val);

            if ( node.left ) {
                nextQ.push(node.left);
            }
            if ( node.right ) {
                nextQ.push(node.right);
            }
        }
        ans.push(max);
        q = nextQ;
    }
    return ans;
}