
/**
Given an m x n 2D binary grid which represents a map of 1 (land) and 0 (water), 
return the number of islands. An island is surrounded by water and is formed by connecting adjacent land cells horizontally or vertically.
 */
/**
 * 
 * @param {character[][]} grid 
 * @returns {number}
 */
var numIslands = function(grid) {

    let valid = (row, col) => {
        return 0 <= row && row <= m && 0 <= col && col <= n && grid[row][col] === "1";
    }

    let dfs = (row, col) => {
        for ( const [dx, dy] of directions ) {
            let nextRow = row + dy, nextCol = col + dx;
            if ( valid(nextRow, nextCol) && !seen[nextRow][nextCol] ) {
                seen[nextRow][nextCol] = true;
                dfs(nextRow, nextCol);
            }
        }
    }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = grid.length;
    let n = grid[0].length;
    let seen = [];
    for ( let i = 0; i < m; i++ ) {
        seen.push(new Array(n).fill(false));
    }

    let ans = 0;
    for ( let row = 0; row < m; row++ ) {
        for ( let col = 0; col < n; col++ ) {
            if (grid[row][col] == "1" && !seen[row][col]) {
                ans++;
                seen[row][col] = true;
                dfs(row, col);
            }
        }
    }
    return ans;
}

/**
 * 
 * @param {character[][]} grid 
 * @returns {number}
 */
var numIslands = function(grid) {

    const ROWS = grid.length;
    const COLS = grid[0].length;
    let ans = 0;

    let dfs = ( r, c ) => {
        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            grid[r][c] === "0"
        ) return;

        grid[r][c] = "0";
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    for ( let r = 0; r < ROWS; r++ ) {
        for ( let c = 0; c < COLS; c++ ) {
            if ( grid[r][c] === "1" ) {
                dfs(r, c);
                ans++;
            }
        }
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(m * n)
 * Space: O(m * n)
 */

/**
 * 
 * @param {character[][]} grid 
 * @returns {number}
 */
var numIslands = function(grid) {

    const ROWS = grid.length;
    const COLS = grid[0].length;
    let ans = 0;

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    let dfs = ( r, c ) => {
        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            grid[r][c] === "0"
        ) return;

        grid[r][c] = "0";
        for ( let [dr, dc] of dirs ) {
            dfs(r + dr, c + dc);
        }
    }
    for ( let r = 0; r < ROWS; r++ ) {
        for ( let c = 0; c < COLS; c++ ) {
            if ( grid[r][c] === "1" ) {
                dfs(r, c);
                ans++;
            }
        }
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(m * n)
 * Space: O(m * n)
 */