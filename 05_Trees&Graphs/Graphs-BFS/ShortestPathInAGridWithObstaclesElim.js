
/**
You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). 
You can move up, down, left, or right from and to an empty cell in one step.
Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) 
given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

Example 1:

Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. 
Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).

Example 2:

Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1
Explanation: We need to eliminate at least two obstacles to find such a walk.
*/
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    //Queue = [row, col, remainingK]
    let q = [[0, 0, k]];
    let seen = new Set(["0, 0" + k]);
    let steps = 0;

    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    while ( q.length ) {
        let level = q.length;

        for ( let i = 0; i < level; i++ ) {
            const [r, c, rK] = q.shift();

            if ( r === ROWS - 1 && c === COLS - 1 ) return steps;

            for ( const [dr, dc] of dirs ) {
                let nr = r + dr, nc = c + dc;

                if (
                    nr >= 0 && nc >= 0 &&
                    nr < ROWS && nc < COLS
                ) {
                    let nextK = rK;

                    if ( grid[nr][nc] === 1 ) {
                        if ( rK > 0 ) {
                            nextK = rK - 1;
                        } else {
                            continue;
                        }
                    }

                    let state = `${nr}, ${nc}, ${nextK}`;
                    if ( !seen.has(state) ) {
                        seen.add(state);
                        q.push([nr, nc, nextK]);
                    }
                }
            }
        }
        steps++;
    }
    return -1;
};
