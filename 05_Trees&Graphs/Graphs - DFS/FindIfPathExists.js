
/**
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
The edges in the graph are represented as a 2D integer array edges, 
where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
You want to determine if there is a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, 
or false otherwise.

Example 1:

Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

Example 2:

Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.
*/
/**
 * 
 * @param {number} n 
 * @param {number[][]} edges 
 * @param {number} source 
 * @param {number} destination 
 * @returns {boolean}
 */
var findPath = function(n, edges, source, destination) {

    //we need to convert edges to a graph in order to explore its neighbors
    //we can achieve that with an adjacency list using a map
    let graph = new Map();
    //populate the map
    for ( const [x, y] of edges ) {
        if (!graph.has(x)) graph.set(x, []);
        if (!graph.has(y)) graph.set(y, []);
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    //now we need to traverse the graph to check if there's a path from
    //source to destination
    let seen = new Array(n).fill(false);
    //we can do that with a dfs helper function
    let dfs = (node) => {
        if (node === destination) return true;
        seen[node] = true;

        for ( const neighbor of graph.get(node) ) {
            if (!seen[neighbor]) {
                if (dfs(neighbor)) return true;
            }
        }
        return false;
    }
    return dfs(source);
}