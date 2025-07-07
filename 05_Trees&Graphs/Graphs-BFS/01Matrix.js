/**
Given an m x n binary (every element is 0 or 1) matrix mat, find the distance of the nearest 0 for each cell. 
The distance between adjacent cells (horizontally or vertically) is 1.
For example, given mat = [[0,0,0],[0,1,0],[1,1,1]], return [[0,0,0],[0,1,0],[1,2,1]].
*/
/**
 * 
 * @param {number[][]} mat 
 * @returns {number[][]}
 */
var updateMatrix = function(mat) {
    let valid = (row, col) => {
        return 0 <= row && row < n && 0 <= col && col < m && mat[row][col] == 1;
    }

    let m = mat.length;
    let n = mat[0].length;
    let q = [];
    let seen = [];
    for ( let i = 0; i < m; i++ ) {
        seen.push(new Array(n).fill(false));
    }

    for ( let row = 0; row < m; row++ ) {
        for ( let col = 0; col < n; col++ ) {
            if (mat[row][col] == 0) {
                q.push([row, col]);
                seen[row][col] = true;
            }
        }
    }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;

    while (q.length) {
        let nextQ = [];
        let level = q.length;
        steps++;

        for ( let i = 0; i < level; i++ ) {
            const [row, col] = q[i];
            for ( const [dx, dy] of directions ) {
                let nextRow = row + dx, nextCol = col + dy;
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQ.push(nextRow, nextCol);
                    mat[nextRow][nextCol] = steps;
                }
            }
        }
        q = nextQ;
    }
    return mat;
}