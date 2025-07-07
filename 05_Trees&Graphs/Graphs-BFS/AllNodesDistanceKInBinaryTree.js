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