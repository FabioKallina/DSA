
let printAllNodes = root => {
    let queue = [root];
    while (queue.length) {
        let nodeInCurrentLevel = queue.length;
        let nextQueue = [];

        for ( let i = 0; i < nodeInCurrentLevel; i++ ) {
            let node = queue[i];

            //do some logic on the current node
            console.log(node.val);

            //put next level onto the queue
            if ( node.left ) {
                nextQueue.push(node.left);
            }
            if ( node.right ) {
                nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
}