
/**
You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).
It starts raining, and water gradually rises over time. At time t, the water level is t, 
meaning any cell with elevation less than equal to t is submerged or reachable.
You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares 
individually are at most t. You can swim infinite distances in zero time. 
Of course, you must stay within the boundaries of the grid during your swim.
Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).


Example 1:

Input: grid = [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.

Example 2:

Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation: The final route is shown.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    //take the path of least resistance
    //the answer is the largest elevation in that path

    let l = grid[0][0]; //the min possible time since you can’t start swimming before the start square is submerged
    let r = Math.max(...grid.flat()); //max possible time because worst case you wait until the entire grid is submerged

    //helper: can we swim at time "mid"?
    let bestSquare = (mid) => {
    if (grid[0][0] > mid) return false;

    let n = grid.length;
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    let queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
        let [r, c] = queue.shift();
        if (r === n - 1 && c === n - 1) return true;

        let dirs = [[1,0], [-1,0], [0,1], [0,-1]];
        for (let [dr, dc] of dirs) {
            let nr = r + dr, nc = c + dc;
            if (
                nr >= 0 && nr < n &&
                nc >= 0 && nc < n &&
                !visited[nr][nc] &&
                grid[nr][nc] <= mid
            ) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }
    return false;
};

    while ( l <= r ) {
        let mid = Math.floor((l + r) / 2);

        if ( bestSquare(mid) ) {
            r = mid - 1; //try a lower time
        } else {
            l = mid + 1; //need higher time
        }
    }
    return l;
};