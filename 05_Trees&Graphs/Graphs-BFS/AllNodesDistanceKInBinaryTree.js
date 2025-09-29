/**
Given the root of a binary tree, a target node target in the tree, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.
*/
var distanceK = function(root, target, k) {
    //convert tree into undirected graph
    let dfs = (node, parent) => {
        if (!node) return;
        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }
    dfs(root, null);

    let seen = new Set([target]);
    let q = [target];
    let dist = 0;

    while (q.length && dist < k) {
        let level = q.length;
        let nextQ = [];

        for ( let i = 0; i < level; i++ ) {
            let node = q[i];
            for ( const neighbor of [node.left, node.right, node.parent]) {
                if (neighbor && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQ.push(neighbor);
                }
            }
        }
        q = nextQ;
        dist++;
    }
    return q.map(node => node.val);
}

/**
Given the root of a binary tree, the value of a target node target, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.
You can return the answer in any order.

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

Example 2:

Input: root = [1], target = 1, k = 3
Output: []
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {

    //build undirected graph
    let graph = new Map();
    let dfs = ( node, parent ) => {
        if ( !node ) return;
        if ( !graph.has(node) ) graph.set(node, []);
        if ( parent ) {
            graph.get(node).push(parent);
            graph.get(parent).push(node);
        }
        dfs(node.left, node);
        dfs(node.right, node);
    }
    dfs(root, null);

    //start bfs from target
    let q = [target];
    let seen = new Set([target]);
    let dist = 0;

    while ( q.length ) {
        let level = q.length;

        if ( dist === k ) {
            return q.map(node => node.val);
        }

        for ( let i = 0; i < level; i++ ) {
            let node = q.shift();
            for ( let neighbor of graph.get(node) ) {
                if ( !seen.has(neighbor) ) {
                    seen.add(neighbor);
                    q.push(neighbor);
                }
            }
        }
        dist++;
    }
    return [];
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O (n)
 */