/**
Given an n x n matrix grid, return the number of pairs (R, C) where R is a row and C is a column, 
and R and C are equal if we consider them as 1D arrays.

Example:
Input: [3, 2, 1]
       [1, 7, 6]
       [2, 7, 7]
Output: 1 => [2, 7, 7] appears once as column and once as row
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let convertToKey = arr => {
        let key = "";
        for (const n of arr) {
            key += n + ","
        }
        return key;
    }
    let map1 = new Map();
    for ( const arr of grid ) {
        let key = convertToKey(arr);
        map1.set(key, (map1.get(key) || 0) + 1);
    }
    let map2 = new Map();
    for ( let col = 0; col < grid[0].length; col++ ) {
        let currCol = [];
        for ( let row = 0; row < grid.length; row++ ) {
            currCol.push(grid[row][col]);
        }
        let key = convertToKey(currCol);
        map2.set(key, (map2.get(key) || 0) + 1); 
    }
    let ans = 0;
    for ( const [key, val] of map1 ) {
        ans += val * map2.get(key) || 0;
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n^2)
 * Space: O(n^2)
 */