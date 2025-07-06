
/**
Given a directed acyclic graph, with n vertices numbered from 0 to n-1, 
and an array edges where edges[i] = [x, y] represents a directed edge from node x to node y. 
Find the smallest set of vertices from which all nodes in the graph are reachable.
*/
/**
 * 
 * @param {number} n 
 * @param {number[][]} edges 
 * @returns {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let indegree = new Array(n).fill(0);
    for ( const [x,y] of edges ) {
        indegree[y]++;
    }

    let ans = [];
    for ( let i = 0; i < n; i++ ) {
        if ( indegree[i] == 0 ) {
            ans.push(i);
        }
    }
    return ans;
}