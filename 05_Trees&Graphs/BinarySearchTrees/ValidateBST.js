
/**
Given the root of a binary tree, determine if it is a valid BST.
 */
var validBST = function(root) {
    let dfs = (node, small, large) => {
        if ( !node ) return true;

        if ( small >= node.val || node.val >= large ) {
            return false;
        }

        let left = dfs(node.left, small, node.val);
        let right = dfs(node.right, node.val, large);

        return left && right;
    }   
    return dfs(root, -Infinity, Infinity);
}