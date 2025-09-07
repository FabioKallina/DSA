
/**
You are given a 0-indexed 2D integer array grid of size m x n which represents a field. Each cell has one of three values:
0 represents grass,
1 represents fire,
2 represents a wall that you and fire cannot pass through.
You are situated in the top-left cell, (0, 0), and you want to travel to the safehouse at the bottom-right cell, (m - 1, n - 1). 
Every minute, you may move to an adjacent grass cell. 
After your move, every fire cell will spread to all adjacent cells that are not walls.
Return the maximum number of minutes that you can stay in your initial position before moving while still safely 
reaching the safehouse. If this is impossible, return -1. 
If you can always reach the safehouse regardless of the minutes stayed, return 109.
Note that even if the fire spreads to the safehouse immediately after you have reached it, 
it will be counted as safely reaching the safehouse.
A cell is adjacent to another cell if the former is directly north, east, south, or west of the latter 
(i.e., their sides are touching).

Example 1:

Input: grid = [[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]]
Output: 3
Explanation: The figure above shows the scenario where you stay in the initial position for 3 minutes.
You will still be able to safely reach the safehouse.
Staying for more than 3 minutes will not allow you to safely reach the safehouse.

Example 2:

Input: grid = [[0,0,0,0],[0,1,2,0],[0,2,0,0]]
Output: -1
Explanation: The figure above shows the scenario where you immediately move towards the safehouse.
Fire will spread to any cell you move towards and it is impossible to safely reach the safehouse.
Thus, -1 is returned.

Example 3:

Input: grid = [[0,0,0],[2,2,0],[1,2,0]]
Output: 1000000000
Explanation: The figure above shows the initial grid.
Notice that the fire is contained by walls and you will always be able to safely reach the safehouse.
Thus, 109 is returned.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinutes = function (grid) {
    let n = grid.length, m = grid[0].length;
    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let isPossible = (mid) => {
        // Step 1: Fire BFS
        let fire = Array.from({ length: n }, () => Array(m).fill(Infinity));
        let q = [];

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 1) {
                    fire[r][c] = 0;
                    q.push([r, c]);
                }
            }
        }

        while (q.length > 0) {
            let [r, c] = q.shift();
            for (let [dr, dc] of dirs) {
                let nr = r + dr, nc = c + dc;
                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < m &&
                    grid[nr][nc] !== 2 &&
                    fire[nr][nc] === Infinity
                ) {
                    fire[nr][nc] = fire[r][c] + 1;
                    q.push([nr, nc]);
                }
            }
        }

        // Step 2: Person BFS
        let visited = Array.from({ length: n }, () => Array(m).fill(false));
        let q2 = [];

        if (mid < fire[0][0] && grid[0][0] !== 2) {
            q2.push([0, 0, mid]); // r, c, time
            visited[0][0] = true;
        }

        while (q2.length > 0) {
            let [r, c, t] = q2.shift();
            if (r === n - 1 && c === m - 1) return true;

            for (let [dr, dc] of dirs) {
                let nr = r + dr, nc = c + dc, nt = t + 1;
                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < m &&
                    grid[nr][nc] !== 2 &&
                    !visited[nr][nc] &&
                    (
                        nt < fire[nr][nc] || // normal case
                        (nr === n - 1 && nc === m - 1 && nt <= fire[nr][nc]) // special destination rule
                    )
                ) {
                    visited[nr][nc] = true;
                    q2.push([nr, nc, nt]);
                }

            }
        }
        return false;
    };

    // Step 3: Binary Search
    let l = 0, r = n * m, ans = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (isPossible(mid)) {
            ans = mid;
            l = mid + 1; // try to wait longer
        } else {
            r = mid - 1; // need to wait less
        }
    }
    return ans >= n * m ? 1000000000 : ans;
};
