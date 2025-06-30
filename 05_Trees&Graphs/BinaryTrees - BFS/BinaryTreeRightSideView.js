/**
Given the root of a binary tree, imagine yourself standing on the right side of it. 
Return the values of the nodes you can see ordered from top to bottom.
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    let ans = [];
    let queue = [root];

    while (queue.length) {
        let nodeInCurrentLevel = queue.length;
        let nextQueue = [];

        ans.push(queue[queue.length - 1].val);
        for ( let i = 0; i < nodeInCurrentLevel; i++ ) {
            let node = queue[i];
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
    return ans;
}