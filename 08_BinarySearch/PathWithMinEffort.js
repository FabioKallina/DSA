
/**
You are given heights, a positive 2D array of size m x n, where heights[row][col] represents the height of cell (row, col). 
You can move up, down, left, or right. A path's effort is the largest absolute difference you can have between any two 
consecutive cells traversed. Return the minimum effort required to get from the top left to the bottom right.
*/
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n;
    }
    
    let check = effort => {
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        let seen = [];
        for (let i = 0; i < m; i++) {
            seen.push(new Array(n).fill(false));
        }
        
        seen[0][0] = true;
        let stack = [[0, 0]];
        
        while (stack.length) {
            const [row, col] = stack.pop();
            if (row == m - 1 && col == n - 1) {
                return true;
            }
            
            for (const [dx, dy] of directions) {
                let nextRow = row + dy, nextCol = col + dx;
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    if (Math.abs(heights[nextRow][nextCol] - heights[row][col]) <= effort) {
                        seen[nextRow][nextCol] = true;
                        stack.push([nextRow, nextCol]);
                    }
                }
            }
        }
        
        return false;
    }
    
    let m = heights.length;
    let n = heights[0].length;
    
    let left = 0;
    let right = 0;
    for (const arr of heights) {
        right = Math.max(right, Math.max(...arr));
    }
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};