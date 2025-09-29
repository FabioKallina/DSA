/*
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. 
If there is no clear path, return -1. A clear path is a path from the top-left cell (0, 0) to the bottom-right cell (n - 1, n - 1) 
such that all visited cells are 0. You may move 8-directionally (up, down, left, right, or diagonally).
*/
var shortestPath = function(grid) {
    let valid = (row, col) => {
        return 0 <= row && row < n && 0 <= col && col < n && grid[row][col] == 0;
    }
    if (grid[0][0] == 1) return -1;

    let n = grid.length;
    let seen = [];
    for ( let i = 0; i < n; i++ ) {
        seen.push(new Array(n).fill(false));
    } 
    seen[0][0] = true;

    let q = [[0, 0]];
    let directions = [[0, 1], [1, 0], [1, 1], [-1, 1], [-1, -1], [1, -1], [0, -1], [-1, 0]];
    let steps = 0;

    while (q.length) {
        let level = q.length;
        let nextQ = [];
        steps++;

        for ( let i = 0; i < level; i++ ) {
            let [row, col] = q[i];
            if (row == n - 1 && col == n - 1) {
                return steps;
            }

        for ( const [dx, dy] of directions ) {
            let nextRow = row + dx, nextCol = col + dy;
            if (valid[nextRow, nextCol] && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                nextQ.push([nextRow, nextCol]);
            }
        }
    }
    q = nextQ;
}
    return -1;
}

/**
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. 
If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) 
to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 2

Example 2:

Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
 */
/**
 * 
 * @param {number[][]} grid 
 * @returns {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
    const ROWS = grid.length;
    const COLS = grid[0].length;

    if ( ROWS === 0 || COLS === 0 || grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] ) return -1;

    let ans = 1;
    let q = [[0, 0]];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1]];

    grid[0][0] = 1; //mark as visited

    while ( q.length ) {
        let level = q.length;

        for ( let i = 0; i < level; i++ ) {
            const [r, c] = q.shift();

            if ( r === ROWS - 1 && c === COLS - 1 ) return ans;

            for ( const [dr, dc] of dirs ) {
                let nr = r + dr, nc = c + dc;
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    grid[nr][nc] === 0
                ) {
                    grid[nr][nc] = 1;
                    q.push([nr, nc]);
                }
            }
        }
        ans++;
    }
    return -1;
};
/** Time and Space Complexity
 * Time: O(n^2)
 * Space: O(n^2)
 */