
//Normal traversal
let dfs = node => {
    if ( !node ) {
        return;
    }
    dfs(node.left);
    dfs(node.right);
    return;
}

//Preorder Traversal
let preorderDfs = node => {
    if (!node) {
        return;
    }

    console.log(node.val); //
    preorderDfs(node.left);
    preorderDfs(node.right);
    return;
}
/* Logic is done on the current node before moving on to its chidlren */

//Inorder Traversal
let inorderDfs = node => {
    if (!node) {
        return;
    }

    inorderDfs(node.left);
    console.log(node.val);
    inorderDfs(node.right);
    return;
}
/* Recursively calls the left child, then perform logic on the current node, and the call the right child */

//Postorder Traversal
let postorderDfs = node => {
    if (!node) {
        return;
    }

    postorderDfs(node.left);
    postorderDfs(node.right);
    console.log(node.val);
    return;
}
/* Call the children, then perform logic on the current node */

//Building a binary tree
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

(function main() {
    /*
    The following code builds a tree that looks like:
        0
      /   \
     1     2
    */
    let root = new TreeNode(0);
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    
    root.left = one;
    root.right = two;
    
    console.log(root.left.val);
    console.log(root.right.val);
}());