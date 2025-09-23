/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    //convert restricted array to a set for O(1) look up time
    restricted = new Set(restricted);

    //create an adjacency list/graph
    const graph = new Map();
    for ( let [x, y] of edges ) {
        if (!graph.has(x)) graph.set(x, []);
        if (!graph.has(y)) graph.set(y, []);
        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    //create a Set to keep track of visited nodes
    const seen = new Set();
    //create a dfs helper function to visit all nodes
    const dfs = (node) => {
        //base case
        if (seen.has(node) || restricted.has(node)) {
            return;
        }
        //add node to seen
        seen.add(node);
        //iterate through the node's children
        let children = graph.get(node);
        for (const child of children) {
            dfs(child);
        }
    }
    dfs(0);
    return seen.size;
};
/** Time and Space Complexity
 * Time: O(n + e) where n is the number of nodes and e the number of edges
 * Space: O(n + e)
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    let graph = new Map();
    for ( let [x, y] of edges ) {
        if ( !graph.has(x) ) graph.set(x, []);
        if ( !graph.has(y) ) graph.set(y, []);
        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    let restrictedSet = new Set(restricted);
    let seen = new Set();

    let dfs = ( node ) => {
        if ( restrictedSet.has(node) ) return;
        seen.add(node);
        let steps = 1;
        for ( let neighbor of graph.get(node) ) {
            if ( !seen.has(neighbor) ) {
                steps += dfs(neighbor);
            }
        }
        return steps;
    }
    return dfs(0);
};
/** Time and Space Complexity
 * Time: O(n + e) where n is the number of nodes and e the number of edges
 * Space: O(n + e)
 */