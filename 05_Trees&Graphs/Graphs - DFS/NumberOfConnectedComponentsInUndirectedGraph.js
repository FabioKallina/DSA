
/**
You have a graph of n nodes. 
You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge 
between ai and bi in the graph.
Return the number of connected components in the graph.

Example 1:

Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let graph = new Map();
    for ( let [x, y] of edges ) {
        if ( !graph.has(x) ) graph.set(x, []);
        graph.get(x).push(y);
        if ( !graph.has(y) ) graph.set(y, []);
        graph.get(y).push(x);
    }
    let seen = new Set();
    let dfs = ( node ) => {
        seen.add(node);
        for ( let neighbor of graph.get(node) || [] ) { // the || [] is for a node with no edges because it doesnt have neighbors, so add the [] as a fall back
            if ( !seen.has(neighbor) ) {
                dfs(neighbor);
            }
        }
    }
    let ans = 0;
    for ( let i = 0; i < n; i++ ) {
        if ( !seen.has(i) ) {
            dfs(i);
            ans++;
        }
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n + e)
 * Space: O(n)
 */