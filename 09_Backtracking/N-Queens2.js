
/**
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example 1:


Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

Example 2:

Input: n = 1
Output: 1
*/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let backtrack = ( row, cols, diags, antiDiags ) => {
        if ( row === n ) return 1;

        let solutions = 0;
        for ( let col = 0; col < n; col++ ) {
            let currDiag = row - col;
            let currAntiDiag = row + col;

            // if Q is not placeable
            if (
                cols.has(col) ||
                diags.has(currDiag) ||
                antiDiags.has(currAntiDiag)
            ) continue; //skip

            //Place Q
            cols.add(col);
            diags.add(currDiag);
            antiDiags.add(currAntiDiag);

            //move to the next row with updated states
            solutions += backtrack(row + 1, cols, diags, antiDiags);

            //remove Q
            cols.delete(col);
            diags.delete(currDiag);
            antiDiags.delete(currAntiDiag);
        }
        return solutions;
    }
    return backtrack(0, new Set(), new Set(), new Set());
};
/** Time and Space Complexity
 * Time: O(n!)
 * Space: O(n)
 */