
/**
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length, COLS = board[0].length;
    let backtrack = ( pointer, r, c ) => {
        if ( pointer === word.length ) return true;
        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            board[r][c] !== word[pointer]
        ) return false;

        const temp = board[r][c];
        board[r][c] = "#";
        let found = backtrack(pointer + 1, r + 1, c) || backtrack(pointer + 1, r - 1, c) || 
                    backtrack(pointer + 1, r, c + 1) || backtrack(pointer + 1, r, c - 1)
        board[r][c] = temp;
        return found;
    }
    for ( let r = 0; r < ROWS; r++ ) {
        for ( let c = 0; c < COLS; c++ ) {
            if (
                backtrack(0, r, c)
            ) return true;
        }
    }
    return false;
};
/** Time and Space Complexity
 * Time: O( ROWS * COLS * 4^L )
 * Space: O(L) where L is the length of the word
 */