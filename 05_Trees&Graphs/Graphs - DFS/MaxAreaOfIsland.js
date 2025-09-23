/**
You are given an m x n binary matrix grid. An island is a group of 1's 
(representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/
/**
 * 
 * @param {number[][]} grid
 * @returns {number} 
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let seen = new Set();
    let maxIsland = 0;

    const area = ( row, col ) => {
        if (
            row < 0 || row >= rows || col < 0 || col >= cols || seen.has(`${row},${col}`) || grid[row][col] === 0
        ) {
            return 0;
        }

        seen.add(`${row},${col}`);
        return 1 + area(row + 1, col) + area(row - 1, col) + area(row, col + 1) + area(row, col - 1);
    }
    for ( let r = 0; r < rows; r++ ) {
        for ( let c = 0; c < cols; c++ ) {
            if ( grid[r][c] === 1 && !seen.has(`${r},${c}`)) {
                maxIsland = Math.max(maxIsland, area(r, c));
            }
        }
    }
    return maxIsland;
}

/**
 * 
 * @param {number[][]} grid
 * @returns {number} 
 */
var maxAreaOfIsland = function(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let maxArea = 0;

    let dfs = ( r, c ) => {
        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            grid[r][c] === 0
        ) return 0;

        grid[r][c] = 0;
        return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    }
    for ( let r = 0; r < ROWS; r++ ) {
        for ( let c = 0; c < COLS; c++ ) {
            if ( grid[r][c] === 1 ) {
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }
    return maxArea;
}
/** Time and Space Complexity
 * Time: O(n * m)
 * Space: O(n * m)
 */