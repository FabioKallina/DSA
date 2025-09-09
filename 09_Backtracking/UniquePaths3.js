
/**
You are given an m x n integer array grid where grid[i][j] could be:
1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, 
that walk over every non-obstacle square exactly once.

Example 1:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:


Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    
    const rows = grid.length;
    const cols = grid[0].length;

    let walkable = 0;
    let sx = 0, sy = 0;

    //find start and count walkable cells (0, 1, 2);
    for ( let r = 0; r < rows; r++ ) {
        for ( let c = 0; c < cols; c++ ) {
            if ( grid[r][c] !== -1 ) walkable++;
            if ( grid[r][c] === 1 ) {
                sx = r;
                sy = c;
            }
        }
    }

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    //DFS with backtracking
    let dfs = ( x, y, remain ) => {
        //if we reach the end, its valid if we covered everything else
        if ( grid[x][y] === 2 ) return remain === 1 ? 1 : 0;

        const prev = grid[x][y];
        grid[x][y] = -1; //mark as visited

        let paths = 0;
        for ( const [dx, dy] of dirs ) {
            const nx = x + dx, ny = y + dy;

            if (
                nx >= 0 && nx < rows &&
                ny >= 0 && ny < cols &&
                grid[nx][ny] !== -1
            ) {
                paths += dfs(nx, ny, remain - 1);
            }
        }
        grid[x][y] = prev;
        return paths;
    }
    return dfs(sx, sy, walkable);
};