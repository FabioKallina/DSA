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