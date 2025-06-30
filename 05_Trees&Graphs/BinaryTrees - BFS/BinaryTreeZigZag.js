/**
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if ( !root ) return [];
    let queue = [root]; // BFS queue
    let ans = []; //final ans
    let reverse = false; // flag to reverse order

    while ( queue.length ) {
        let level = [];
        let levelSize = queue.length; //do this because the queue length will change as you iterate, if you dont define before then the loop will be shorter

        for ( let i = 0; i < levelSize; i++ ) {
            if (!reverse) {
                let node = queue.shift(); //regular left to right
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            } else {
                let node = queue.pop(); //reverse order, right to left
                level.push(node.val);
                if (node.right) queue.unshift(node.right); //unshift adds it to the front
                if (node.left) queue.unshift(node.left);
            }
        }
        ans.push(level); //add this level to ans
        reverse = !reverse; //reverse order for the next level
    }
    return ans;
}