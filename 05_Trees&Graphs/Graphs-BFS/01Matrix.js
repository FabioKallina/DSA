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
var updateMatrix = function (mat) {
  let valid = (row, col) => {
    return 0 <= row && row < n && 0 <= col && col < m && mat[row][col] == 1;
  };

  let m = mat.length;
  let n = mat[0].length;
  let q = [];
  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] == 0) {
        q.push([row, col]);
        seen[row][col] = true;
      }
    }
  }

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let steps = 0;

  while (q.length) {
    let nextQ = [];
    let level = q.length;
    steps++;

    for (let i = 0; i < level; i++) {
      const [row, col] = q[i];
      for (const [dx, dy] of directions) {
        let nextRow = row + dx,
          nextCol = col + dy;
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
};

/**
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two cells sharing a common edge is 1.

Example 1:

Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:

Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
*/
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const ROWS = mat.length;
  const COLS = mat[0].length;
  const q = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (mat[r][c] === 0) {
        q.push([r, c]);
      } else {
        mat[r][c] = Infinity;
      }
    }
  }

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while ( q.length ) {
    let level = q.length;

    for ( let i = 0; i < level; i++ ) {
        let [r, c] = q.shift();

        for ( const [dr, dc] of dirs ) {
            let nr = r + dr, nc = c + dc;
            if (
                nr >= 0 && 
                nc >= 0 &&
                nr < ROWS &&
                nc < COLS &&
                mat[nr][nc] === Infinity
            ) {
                mat[nr][nc] = mat[r][c] + 1;
                q.push([nr, nc]);
            }
        }   
    }
  }
  return mat;
};
/** Time and Space Complexity
 * Time: O(n * m)
 * Space: O(1)
 */
