/**
There are n cities. A province is a group of directly or indirectly connected cities and no other cities outside of the group. 
You are given an n x n matrix isConnected where isConnected[i][j] = isConnected[j][i] = 1 if the
ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise. Return the total number of provinces.
*/
/**
 * 
 * @param {number[][]} isConnected 
 * @returns {number}
 */
var findCircleNum = function(isConnected) {

    // 2. Build dfs
    let dfs = node => {
        for ( const neighbor of graph.get(node) ) {
            //the next 2 lines are needed to prevent cycles
            if ( !seen[neighbor] ) {
                seen[neighbor] = true;
                dfs(neighbor);
            }   
        }
    }

    // 1. build the graph
    let n = isConnected.length; // this is the number of nodes in the graph
    let graph = new Map();
    for ( let i = 0; i < n; i++ ) {
        if ( !graph.has(i) ) {
            graph.set(i, []);
        }
    }

    for ( let i = 0; i < n; i++ ) {
        for ( let j = i + 1; j < n; j++ ) {
            if (isConnected[i][j]) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }

    let seen = new Array(n).fill(false);
    let ans = 0;

    for ( let i = 0; i < n; i++ ) {
        if (!seen[i]) {
            ans++;
            seen[i] = true;
            dfs(i);
        }
    }
    return ans;
}