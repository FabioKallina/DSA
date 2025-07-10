
/**
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
Integers in each row are sorted from left to right. 
The first integer of each row is greater than the last integer of the previous row.
*/
/**
 * 
 * @param {number[][]} matrix 
 * @param {number} target 
 * @returns {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1; //this is how you get the last element in the matrix

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); //get mid
        let row = Math.floor(mid / n); //which row is mid in
        let col = mid % n; //which column is mid in
        let num = matrix[row][col]; //what number is mid

        if ( num == target ) {
            return true;
        }
        if ( num < target ) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}