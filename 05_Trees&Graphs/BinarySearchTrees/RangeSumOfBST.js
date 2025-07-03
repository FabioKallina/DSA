
/**
Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].
*/
/**
 * 
 * @param {TreeNode} root 
 * @param {number} low 
 * @param {number} high 
 */
var rangeSumBST = function(root, low, high) {
    if ( !root ) return 0;

    if ( root.val >= low && root.val <= high ) {
        ans += root.val;
    }
    if ( root.val > low ) {
        ans += rangeSumBST(root.left, low, high);
    }
    if ( root.val > high ) {
        ans += rangeSumBST(root.right, low, high);
    }
    return ans;
}