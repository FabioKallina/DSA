
/**
You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. 
Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
You are given two arrays redEdges and blueEdges where:
redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
Return an array answer of length n, 
where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, 
or -1 if such a path does not exist.

Example 1:

Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]

Example 2:

Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]
*/
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {

    const redGraph = Array.from({ length: n }, () => []);
    const blueGraph = Array.from({ length: n }, () => []);
    for ( let [u, v] of redEdges ) redGraph[u].push(v);
    for ( let [u, v] of blueEdges ) blueGraph[u].push(v);

    let res = Array(n).fill(-1);

    let seen = Array.from({ length: n }, () => [false, false]);
    let q = [[0, 0, null]];

    while ( q.length ) {
        const [node, steps, lastColor] = q.shift();

        if ( res[node] === -1 ) res[node] = steps;

        if ( lastColor !== "red" ) {
            for ( const nei of redGraph[node] ) {
                if ( !seen[nei][0] ) {
                    seen[nei][0] = true;
                    q.push([nei, steps + 1, "red"]);
                }
            }
        }
        if ( lastColor !== "blue" ) {
            for ( const nei of blueGraph[node] ) {
                if ( !seen[nei][1] ) {
                    seen[nei][1] = true;
                    q.push([nei, steps + 1, "blue"]);
                }
            }
        }
    }
    return res;
};