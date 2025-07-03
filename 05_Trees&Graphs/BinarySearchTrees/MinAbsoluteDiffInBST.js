/**
Given the root of a BST, return the minimum absolute difference between the values of any two different nodes in the tree.
*/
var minDiff = function (root) {
  let dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
  };
  let values = [];
  dfs(root);
  let ans = Infinity;
  for (let i = 1; i < values.length; i++) {
    ans = Math.min(ans, ans[i] - values[i - 1]);
  }
  return ans;
};
